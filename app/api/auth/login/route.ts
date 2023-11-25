import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/database/connect";
import User from "@/models/user";
import { compare } from "bcrypt";
import { checkLoginInput } from "@/customFunctions/checkInput";
import generateToken from "@/customFunctions/generateToken";

export async function POST(req: NextRequest) {
  const { number, password } = await req.json();
  let errMsg: string = "";

  if (checkLoginInput({ number, password }, (msg) => (errMsg = msg))) {
    try {
      await connectToDB();
      const user = await User.findOne({ phone: number });
      if (!user) {
        return new Response(
          JSON.stringify({ message: "Wrong number or password" }),
          { status: 400 }
        );
      }
      
      const isMatch = await compare(password, user.password);
      
      if (!isMatch) {
        return new Response(
          JSON.stringify({ message: "Wrong number or password" }),
          { status: 400 }
        );
      }
      return new Response(JSON.stringify({ message: "Login successful" }), {
        headers: {
          "Set-Cookie": `token=${generateToken({
            _id: user._id,
            name: user.name,
            type: user.type,
          })}; path=/; HttpOnly; SameSite=Strict;Max-Age=2592000;`, // 30 days = 2592000 seconds
        },
      });

      // return Response.redirect('/profile').headers.set('Set-Cookie', `token=${generateToken(user)}; path=/; HttpOnly; SameSite=Strict;`);
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
