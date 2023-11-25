import { connectToDB } from "@/database/connect";
import Upazila from "@/models/upazila";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const districtId = searchParams.get("district");
  if (!districtId)
    return new Response(
      JSON.stringify({ message: "District id is required" }),
      {
        status: 400,
      }
    );
  try {
    await connectToDB();
    const districts = await Upazila.find({ district: districtId });
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
