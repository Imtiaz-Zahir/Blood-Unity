import { NextRequest } from "next/server";
import { connectToDB } from "@/database/connect";
import User from "@/models/user";

export async function GET(req: NextRequest) {
  // const {searchParams} = new URL(req.url);
  try {
    await connectToDB();
    const users = await User.find({ varyfied: false }).select("-password");
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Something went wrong try again later" }),
      { status: 500 }
    );
  }
}