import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Account from "@/models/Admin";
import mongoose from "mongoose";
import config from "@/config/config";

export default nextAuth({
  session: {
    strategy: "jwt",
  },
  secret: config.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        try {
          await mongoose.connect(config.MONGOODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        } catch (error) {
          return Promise.resolve(null);
        }

        try {
          const user = await Account.findOne({ username });

          if (user) {
            if (user.password === password) {
              return Promise.resolve(user);
            }
            return Promise.resolve(null);
          }

          return Promise.resolve(null);
        } catch (error) {
          console.error("Error during authentication:", error);
          return Promise.resolve(null);
        } finally {
          mongoose.connection.close();
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === "credentials") {
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },

    database: {
      type: "mongodb",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      uri: config.MONGOODB_URL,
    },

    async session({ session, token, user }) {
      if ("username" in token) {
        session.user.username = token.username;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
});
