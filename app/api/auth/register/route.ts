import { NextRequest, NextResponse } from "next/server";
import { checkRegisterInput } from "@/customFunctions/checkInput";
import { connectToDB } from "@/database/connect";
import User from "@/models/user";
import generateToken from "@/customFunctions/generateToken";
import hashPassword from "@/customFunctions/hashPassword";

export async function POST(req: NextRequest) {
  const userData = await req.json();
  let errMsg: string = "";

  if (checkRegisterInput(userData, (msg) => (errMsg = msg))) {
    try {
      await connectToDB();
      const isRegistered = await User.findOne({ phone: userData.number });

      if (isRegistered) {
        return new Response(
          JSON.stringify({ message: "This number is already registered" }),
          { status: 400 }
        );
      } else {
        const user = await User.create({
          name: userData.name,
          phone: userData.number,
          bloodGroup: userData.blood,
          division: userData.division,
          district: userData.district,
          upazila: userData.upazila,
          password: await hashPassword(userData.password),
        });

        return new Response(
          JSON.stringify({ message: "Registration successful." }),
          {
            status: 201,
            headers: {
              "Set-Cookie": `token=${generateToken({
                _id: user._id,
                name: user.name,
                type: user.type,
              })}; path=/; HttpOnly; SameSite=Strict;Max-Age=2592000;`, // 30 days = 2592000 seconds
            },
          }
        );
      }
    } catch (error) {
      console.log(error);

      return new Response(
        JSON.stringify({ message: "Something went wrong try again later" }),
        { status: 500 }
      );
    }
  } else {
    return new Response(JSON.stringify({ message: errMsg }), { status: 400 });
  }
}
