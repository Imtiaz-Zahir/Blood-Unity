import { checkChangePassword } from "@/customFunctions/checkInput";
import generateToken from "@/customFunctions/generateToken";
import hashPassword from "@/customFunctions/generateToken";
import verifyCookie from "@/customFunctions/verifyCookie";
import { connectToDB } from "@/database/connect";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { compare } from "bcrypt";
import User from "@/models/user";

type JWTdata = {
  id: string;
  name: string;
  iat: number;
  exp: number;
};

export async function POST(req: NextRequest) {
  const data = await req.json();
  let errMsg: string = "";

  if (checkChangePassword(data, (msg) => (errMsg = msg))) {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    const cookieData = verifyCookie(token, true) as JWTdata | false;

    if (!cookieData) return Response.redirect("/login");

    try {
      await connectToDB();
      const user = await User.findOne({ _id:cookieData.id });
      const isMatch = await compare(data.oldPassword, user.password);

      if (!isMatch) {
        return new Response(
          JSON.stringify({ message: "Wrong old password" }),
          { status: 400 }
        );
      }

      const hashedPassword = await hashPassword(data.newPassword);

      if (hashedPassword) {
        await User.updateOne(
          { _id: cookieData.id },
          { password: hashedPassword }
        );
      } else {
        return new Response(
          JSON.stringify({ message: "Something went wrong try again later" }),
          { status: 500 }
        );
      }

      return new Response(
        JSON.stringify({ message: "Password change successful." }),
        {
          headers: {
            "Set-Cookie": `token=${generateToken({
              _id: cookieData.id,
              name: cookieData.name,
            })}; path=/; HttpOnly; SameSite=Strict;`,
          },
        }
      );
    } catch (error) {
      console.log(error);

      return new Response(
        JSON.stringify({ message: "Something went wrong try again later" }),
        { status: 500 }
      );
    }
  }

  return new Response(JSON.stringify({ message: errMsg }), { status: 400 });
}
