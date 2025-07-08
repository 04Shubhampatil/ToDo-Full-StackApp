import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
    }
}

export default connectDB