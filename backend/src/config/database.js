import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`mongodb+srv://kit27am30_db_user:l3aZSty6ae5h0Xib@cluster0.u9u8xtj.mongodb.net/`)
    console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    console.log(process.env.MONGODB_URI);

  }catch(error){
    console.error("DB Connection Error: " + error.message);
    process.exit(1);
  }
}

export default connectDB;
