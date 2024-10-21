import { connectDb } from "@/lib/connectDB";
import services from "@/lib/services";

export const GET = async () => {
  const db = await connectDb();
  const serviceCollection = await db.collection("services");

  try {
    const services = await serviceCollection.find().toArray();
    return Response.json({ services });
  } catch (error) {
    console.log(error);
  }
};
