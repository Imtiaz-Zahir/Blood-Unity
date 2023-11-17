import verifyCookie from "@/customFunctions/verifyCookie";
import { connectToDB } from "@/database/connection";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import User from "@/models/user";
import { checkChangePassword } from "@/customFunctions/checkInput";
import hashPassword from "@/customFunctions/generateToken";

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
      const hashedPassword = await hashPassword(data.newPassword);
      await connectToDB();
      await User.updateOne({ _id: cookieData.id }, { password: hashedPassword });
      return new Response(JSON.stringify({ message: "Password change successful." }))
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
