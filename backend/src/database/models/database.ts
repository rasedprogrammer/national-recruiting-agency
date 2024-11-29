import mongoose from "mongoose";
import { config } from "../../config/app.config";

const connectDatabase = async () => {
  try {
    await mongoose.connect(config.MONOGO_URI);
    console.log(`Connecting to mongodb database`);
  } catch (err) {
    console.log(`Error connecting to mongodb database`);
    process.exit(1);
  }
};

export default connectDatabase;
