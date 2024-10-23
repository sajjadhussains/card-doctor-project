import { connectDb } from "@/lib/connectDB";
import services from "@/lib/services";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDb();
  const serviceCollection = await db.collection("services");

  try {
    await serviceCollection.deleteMany();
    const resp = await serviceCollection.insertMany(services);
    return NextResponse.json({ message: "data inserted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
};
