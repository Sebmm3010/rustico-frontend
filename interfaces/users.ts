// Generated by https://quicktype.io

export interface IUser {
  id: string;
  userName: string;
  fullName: string;
  isActive: boolean;
  roles: Roles[];
  token: string;
}

export type Roles = 'admin' | 'super-user' | 'usuario';

export enum ValidRoles {
  admin = 'admin',
  superUser = 'super-user',
  user = 'usesr'
}

export interface IAdminUsers {
  id: string;
  userName: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
}
