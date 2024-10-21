import { connectDb } from "@/lib/connectDB";
import services from "@/lib/services";

export const GET = async () => {
  const db = await connectDb();
  const serviceCollection = await db.collection("services");

  try {
    await serviceCollection.deleteMany();
    const resp = await serviceCollection.insertMany(services);
    return Response.json({ message: "data inserted successfully" });
  } catch (error) {
    console.log(error);
  }
};
