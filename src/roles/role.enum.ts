export enum Role {
  User = 'user',
  Admin = 'admin',
}

export class User {
  roles: Role[];
}
