import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
    try{
        const mongoURI = process.env.MONGO_URI || 'mongodb+srv://hariprasathys:22Sep2002.@neura-backend.jaty8lq.mongodb.net/neura-api';
        await mongoose.connect(mongoURI)
        console.log("MongoDB connected successfully");
    }
    catch(error){
        console.error("Error connecting to the database: ", error);
        process.exit(1);
    }
}

export default connectDB;