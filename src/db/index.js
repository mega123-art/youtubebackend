import mongoose from "mongoose";
import { DB_NAME } from "../constansts.js";


const connetDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\n MONGOdb connected! DB hsot:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongo db connection error", error);

    process.exit(1);
  }
};

export default connetDB;
