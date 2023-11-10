import { connectToDB } from "@/database/connection";
import Division from "@/models/division";

export async function GET(){
    await connectToDB();
    const divisions = await Division.find({});
    return Response.json(divisions);
}