import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectDb } from "@/lib/connectDB";

const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    rolling: false,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          console.error("Missing email or password");
          return null;
        }
        const db = await connectDb();
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          console.error("User not found");
          return null;
        }
        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!passwordMatched) {
          console.error("Password mismatch");
          return null;
        }
        return currentUser;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // Add any needed callbacks here
  },
});

export { handler as GET, handler as POST };
