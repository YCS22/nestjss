export enum Role {
  User = 'user',
  Admin = 'admin',
}

export class Article {
  id: number;
  isPublished: boolean;
  authorId: number;
}

export class User {
  id: number;
  isAdmin: boolean;
  roles?: Role[];
  sub?: string;
}

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}
