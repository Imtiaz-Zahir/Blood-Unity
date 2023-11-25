import { connectToDB } from "@/database/connect";
import District from "@/models/district";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const divisionId = searchParams.get("division");
  
  if (!divisionId)
    return new Response(
      JSON.stringify({ message: "Division id is required" }),
      {
        status: 400,
      }
    );

  try {
    await connectToDB();
    const districts = await District.find({ division: divisionId });
    return Response.json(districts);
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Something went wrong try again later" }),
      {
        status: 500,
      }
    );
  }
}
