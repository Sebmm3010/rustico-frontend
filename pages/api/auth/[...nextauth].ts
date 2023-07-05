import rusticoApi from '@/apis/rusitcoApi';
import { IUser } from '@/interfaces';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        userName: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const { userName, password } = credentials as any;

        const { data: user } = await rusticoApi.post<IUser>('/auth/login', {
          userName,
          password
        });

        if (user) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  // Paginas
  pages: {
    signIn: '/auth/login'
  },
  session: {
    strategy: 'jwt'
  }
};

export default NextAuth(authOptions);
