import { connectToDB } from "@/database/connect";
import Upazila from "@/models/upazila";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.url as string;
  const index = url?.indexOf("=");
  if (index === -1) return new Response(JSON.stringify({message:"Invalid request"}), { status: 400 });

  const districtId = url?.slice(index + 1);
  if (!districtId) return new Response(JSON.stringify({message:"Invalid request"}), { status: 400 });

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
