import { NextRequest } from "next/server";
import { connectToDB } from "@/database/connect";
import User from "@/models/user";

export async function PUT(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { type } = await req.json();

  if (!type)
    return new Response(JSON.stringify({ message: "Invalid data" }), {
      status: 400,
    });

  try {
    await connectToDB();
    const data = await User.findByIdAndUpdate(params.userId, {
      varyfied: true,
      type,
    });

    if (!data)
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });

    return Response.json({ message: "User updated successfully" });
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({ message: "Something went wrong try again later" }),
      { status: 500 }
    );
  }
}

export async function PATCH(
  _: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    await connectToDB();
    const data = await User.findByIdAndUpdate(params.userId, {
      varyfied: true,
    });

    if (!data)
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });

    return Response.json({ message: "User varyfied successfully" });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Something went wrong try again later" }),
      { status: 500 }
    );
  }
}
