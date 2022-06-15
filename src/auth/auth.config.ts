import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthConfig {
  public userPoolId = '';
  public clientId = '';
  public region = '';
  public authority = ``;
}
