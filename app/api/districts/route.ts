import { connectToDB } from "@/database/connection";
import District from "@/models/district";
import { NextApiRequest } from "next";

export function GET(req: NextApiRequest) {
  console.log(req.query);
  
  return Response.json([]);
}