import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDb = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("car_doctor");
    // console.log(db);
    if (db) {
      console.log("db connected");
    }
    return db;
  } catch (error) {
    console.log(error);
  }
};
