import rusticoApi from '@/apis/rusitcoApi';
import { IUser } from '@/interfaces';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Credencials from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    Credencials({
      name: 'Custom login',
      credentials: {
        userName: {
          label: 'userName',
          type: 'text',
          placeholder: 'Nombre de usuario'
        },
        password: {
          label: 'Constraseña',
          type: 'password',
          placeholder: 'Contraseña'
        }
      },
      async authorize(credentials) {
        const { userName, password } = credentials as any;
        const { data: user } = await rusticoApi.post<IUser>('/auth/login', {
          userName,
          password
        });
        return user;
      }
    })
  ],
  // Pages
  pages: {
    signIn: '/auth/login'
  },

  // Callbacks

  jwt: {},
  session: {
    maxAge: 86400, // 1d
    strategy: 'jwt' as const
  },

  callbacks: {
    async jwt({ account, token, user }) {
      if (account) {
        token.accessToken = account.access_token;
        switch (account.type) {
          case 'credentials':
            token.user = user;
            break;
        }
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken as any;
      session.user = token.user as any;
      return session;
    }
  }
};

export default NextAuth(authOptions);
