import { AuthConfig } from './auth.config';
import { Injectable } from '@nestjs/common';

import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';
import { UserService } from 'src/user/user.service';
import { UserDto } from 'src/user/user.dto';

@Injectable()
export class AuthService {
  private userPool: CognitoUserPool;

  // eslint-disable-next-line @typescript-eslint/ban-types
  private sessionUserAttributes: {};
  constructor(
    private readonly authConfig: AuthConfig,
    private readonly userService: UserService,
  ) {
    this.userPool = new CognitoUserPool({
      UserPoolId: this.authConfig.userPoolId,
      ClientId: this.authConfig.clientId,
    });
  }
  registerUser(registerRequest: {
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
  }) {
    const { name, surname, username, email, password } = registerRequest;
    return new Promise((resolve, reject) => {
      return this.userPool.signUp(
        username,
        password,
        [new CognitoUserAttribute({ Name: 'email', Value: email })],
        null,
        (err, result) => {
          if (!result) {
            reject(err);
          } else {
            console.log(result.userSub);
            this.userService.insertUser(
              result.userSub,
              username,
              email,
              name,
              surname,
              password,
            );
            resolve(result);
          }
        },
      );
    });
  }

  deleteUser(username: string, body: UserDto) {
    console.log(username, body.password, 'sadsad');
    const password = body.password;
    const userData = {
      Username: username,
      Pool: this.userPool,
    };
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const cognitoUser = new CognitoUser(userData);

    const newUser = new CognitoUser(userData);
    return new Promise((resolve, reject) => {
      return newUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          this.userPool.getCurrentUser().deleteUser(function (err, result) {
            if (err) {
              console.log(err);
              return err;
            }
            console.log('call result: ' + result);
          });
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }

  authenticateUser(user: { name: string; password: string }) {
    const { name, password } = user;
    const authenticationDetails = new AuthenticationDetails({
      Username: name,
      Password: password,
    });
    const userData = {
      Username: name,
      Pool: this.userPool,
    };

    const newUser = new CognitoUser(userData);
    return new Promise((resolve, reject) => {
      return newUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          resolve(result);
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }
}
