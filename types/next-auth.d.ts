import NextAuth from 'next-auth';
import { IUser } from '@/interfaces';

declare module 'next-auth' {
  interface Session {
    user: IUser;
  }
}
