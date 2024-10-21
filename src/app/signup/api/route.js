import { connectDb } from "@/lib/connectDB";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");
export const POST = async (request) => {
  const newUser = await request.json();
  console.log(newUser);
  try {
    const db = await connectDb();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return NextResponse.json(
        { message: "user already exists" },
        { status: 200 }
      );
    }
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);
    const result = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
    return NextResponse.json(
      { message: "user created successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
