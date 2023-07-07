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
        return {
          id: '1',
          name: 'J Smith',
          email: 'jsmith@example.com',
          role: 'client'
        };
      }
    })
  ],
  // Pages
  pages: {
    signIn: '/auth/login'
  },

  // Callbacks

  jwt: {}
  //   session: {
  //     maxAge: 86400, // 1d
  //     strategy: 'jwt' as const
  //   }
};

export default NextAuth(authOptions);
