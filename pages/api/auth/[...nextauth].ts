import { AxiosResponse } from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { Session } from "next-auth/core/types";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

import { axios } from "@/lib/axios";
import { User } from "@/types";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      type: "credentials",
      credentials: {},
      async authorize(
        credentials,
        req
      ): Promise<
        | {
            access_token: string;
            user: User;
          }
        | any
      > {
        const { endpoint = "/auth/login", redirect, csrfToken, callbackUrl, json, ...payload } = credentials as any;

        try {
          const response = await axios
            .post(endpoint, {
              ...payload
            })
            .then((res: AxiosResponse) => {
              return res.data;
            })
            .catch((err) => {
              if (err.response?.data?.message) {
                return Promise.reject(new Error(err.response?.data?.message));
              }
              return Promise.reject(new Error(err.message));
            });

          if (response) {
            return {
              access_token: response.token,
              refresh_token: response.refreshToken,
              user: {
                id: response.id,
                username: response.username,
                email: response.email,
                firstName: response.firstName,
                lastName: response.lastName,
                gender: response.gender,
                image: response.image
              }
            };
          }
        } catch (error) {
          let message = "Unknown Error";
          if (error instanceof Error) message = error.message;

          return Promise.reject(new Error(message));
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: "/login",
    newUser: "/register"
  },
  callbacks: {
    session(params: { session: Session | any; user: User | AdapterUser; token: JWT | any }) {
      params.session.access_token = params.token.access_token;
      params.session.user = params.token.user;

      return params.session;
    },
    jwt({ token, user, trigger, session }: any) {
      if (user?.access_token) {
        token.access_token = user.access_token;
      }

      if (user?.user) {
        token.user = user.user;
      }

      if (trigger === "update" && session?.user) {
        token.user = {
          ...token.user,
          ...session.user
        };
      }

      return token;
    },
    async redirect({ url }) {
      return url;
    }
  }
};

export default NextAuth(authOptions);
