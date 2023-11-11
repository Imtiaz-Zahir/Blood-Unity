import { NextRequest } from "next/server";
import checkInput from "@/customFunctions/checkInput";
import { connectToDB } from "@/database/connection";
import User from "@/models/user";
import { genSalt, hash } from "bcrypt";

export async function POST(req: NextRequest) {
  const userData = await req.json();
  let errMsg: string = "";

  if (checkInput(userData, (msg) => (errMsg = msg))) {
    try {
      await connectToDB();
      const isRegistered = await User.findOne({ phone: userData.number });

      if (isRegistered) {
        return new Response(JSON.stringify({message:"This number is already registered"}), { status: 400 })
      } else {
        await User.create({
          name: userData.name,
          phone: userData.number,
          bloodGroup: userData.blood,
          division: userData.division,
          district: userData.district,
          upazila: userData.upazila,
          password: await hashPassword(userData.password),
        });

        return new Response(JSON.stringify({message:"Registration successful"}), { status: 201 })
      }
    } catch (error) {
      console.log(error);

      return new Response(JSON.stringify({message:"Something went wrong try again later"}), { status: 500 })
    }
  } else {
    return new Response(JSON.stringify({message:errMsg}), { status: 400 })
  }
}

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 6;

  try {
    // Generate a salt
    const salt = await genSalt(saltRounds);

    // Hash the password using the salt
    const hashedPassword = await hash(password, salt);

    return hashedPassword;
  } catch (error) {
    throw new Error(`Error hashing password: ${error}`);
  }
}