import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  

const connectDB = async () => {
    // try {
    //     // await mongoose.connect(`${process.env.MONGO_URI}/instacopy`);
        
    //     // mongoose.connection.on('connected', () => console.log("Database Conneted"));
         
    // } catch (error) {
    //     console.error(`Error: ${error.message}`);
    //     process.exit(1);
    // }
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/instacopy`, {
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000,
        });
    
        console.log("✅ Database Connected!");
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
    
};

export default connectDB;
