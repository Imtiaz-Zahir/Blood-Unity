import { connectToDB } from "@/database/connection";
import Division from "@/models/division";

export async function GET() {
  try {
    await connectToDB();
    const divisions = await Division.find({});
    return Response.json(divisions);
  } catch (error) {
    return new Response(JSON.stringify({message:"Something went wrong try again later"}), {
      status: 500,
    });
  }
}
