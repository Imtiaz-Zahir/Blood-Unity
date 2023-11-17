import { NextRequest } from "next/server";
import { connectToDB } from "@/database/connection";
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
          "Set-Cookie": `token=${generateToken(
            user
          )}; path=/; HttpOnly; SameSite=Strict;`,
        },
      });
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
