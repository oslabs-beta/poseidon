import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',

      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        //perform your login logic
        console.log('made this far', email, password);
        const res = await fetch(`http://localhost:3500/api/user/login`, {
          method: 'POST',
          headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email, password: password }),
        });

        const { user } = await res.json();

        if (!res.ok) {
          throw new Error(user.message);
        }
        if (!user) {
          return null;
        }
        return user;
      },
    }),
  ],
  secret: serverRuntimeConfig.NEXTAUTH_SECRET!,

  pages: {
    signIn: '/auth/signin',
  },

  callbacks: {
    // https://cloudcoders.xyz/blog/nextauth-credentials-provider-with-external-api-and-login-page/
    // https://stackoverflow.com/questions/64576733/where-and-how-to-change-session-user-object-after-signing-in

    async jwt({ token, user }: any) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }: any) {
      const { email, lastName, firstName } = token.user;
      session.user = {
        email,
        lastName,
        firstName,
      };
      return session;
    },
  },
};

export default NextAuth(authOptions);
