import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js";

const dbConnection = async () => {
    try{
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.error("\n MongoDB connection error", error);
        process.exit(1);
    }
}

export default dbConnection;