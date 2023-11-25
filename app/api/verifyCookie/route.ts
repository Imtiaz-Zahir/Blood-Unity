import { NextRequest } from "next/server";
import verifyCookie from "@/customFunctions/verifyCookie";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  const validToken = verifyCookie(token, true);
  
  return Response.json(validToken);
}
