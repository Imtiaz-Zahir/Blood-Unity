import { connectToDB } from "@/database/connection";
import District from "@/models/district";
// import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.url as string;
  const index = url?.indexOf("=");
  if (index === -1) return Response.json([]);

  const divisionId = url?.slice(index + 1);
  if (!divisionId) return Response.json([]);

  try {
    await connectToDB();
    const districts = await District.find({ division: divisionId });
    return Response.json(districts);
  } catch (error) {
    console.log(error);
    return Response.json([]);
  }
}
