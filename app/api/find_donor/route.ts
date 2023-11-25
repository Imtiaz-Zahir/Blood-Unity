import { NextRequest } from "next/server";
import { connectToDB } from "@/database/connect";
import User from "@/models/user";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const upazilaId = searchParams.get("upazila");

  if (!upazilaId)
    return new Response(JSON.stringify({ message: "Upazila is required" }), {
      status: 400,
    });

  try {
    await connectToDB();
    const users = await User.find({ upazila: upazilaId, type:"moderator" });
    return Response.json(users);
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Something went wrong try again later" }),
      { status: 500 }
    );
  }
}
