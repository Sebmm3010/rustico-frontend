import NextAuth from 'next-auth';
import { IUser } from '@/interfaces';

declare module 'next-auth' {
  interface DefaultSession {
    accessToken?: any;
  }
  interface Session {
    user: IUser;
  }
}
