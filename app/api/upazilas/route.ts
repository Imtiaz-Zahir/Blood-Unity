import { connectToDB } from "@/database/connection";
import Upazila from "@/models/upazila";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.url as string;
  const index = url?.indexOf("=");
  if (index === -1) return Response.json([]);

  const districtId = url?.slice(index + 1);
  if (!districtId) return Response.json([]);

  try {
    await connectToDB();
    const districts = await Upazila.find({ district: districtId });
    return Response.json(districts);
  } catch (error) {
    console.log(error);
    return Response.json([]);
  }
}
