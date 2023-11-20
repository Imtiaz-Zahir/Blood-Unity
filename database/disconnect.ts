import mongoose from "mongoose";

export async function disconnectToDB(){
    await mongoose.disconnect();
}