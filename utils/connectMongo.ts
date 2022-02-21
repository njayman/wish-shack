import { connect } from "mongoose";

export const connectMongo = async () => {
  try {
    const connection = await connect(process.env.DATABASE_URL as string);
    console.log("mongoose connection established");
    return connection;
  } catch (error: any) {
    console.log(error);
  }
};
