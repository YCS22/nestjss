import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthConfig {
  public userPoolId = 'us-east-2_XvQOwiZRd';
  public clientId = '2a9emmpae10jough4vnochotft';
  public region = 'us-east-2';
  public authority = `https://cognito-idp.us-east-2.amazonaws.com/us-east-2_XvQOwiZRd`;
}
