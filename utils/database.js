import mongoose from "mongoose";

let isConnected = false; // track the connection
const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already Connected");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "share_prompt",
    });
    isConnected = true;

    console.log("MongoDB is Connected");
  } catch (error) {
    console.log(error);
  }
};
