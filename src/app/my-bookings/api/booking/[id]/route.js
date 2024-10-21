import { connectDb } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const db = await connectDb();
  const bookingsCollection = db.collection("bookings");

  try {
    console.log(params.id);
    const resp = await bookingsCollection.deleteOne({
      _id: params.id,
    });
    return NextResponse.json({
      message: "deleted successfully",
      response: resp,
    });
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
};

export const PATCH = async (request, { params }) => {
  const db = await connectDb();
  const bookingsCollection = db.collection("bookings");
  const updateDoc = await request.json();
  try {
    const resp = await bookingsCollection.updateOne(
      { _id: params.id },
      {
        $set: {
          ...updateDoc,
        },
      },
      {
        upsert: true,
      }
    );
    return NextResponse.json({
      message: "updated the booking",
      response: resp,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};

export const GET = async (request, { params }) => {
  const db = await connectDb();
  const bookingsCollection = db.collection("bookings");

  try {
    console.log(params.id);
    const resp = await bookingsCollection.findOne({
      _id: params.id,
    });
    return NextResponse.json({
      message: "get data successfully",
      response: resp,
    });
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
};
