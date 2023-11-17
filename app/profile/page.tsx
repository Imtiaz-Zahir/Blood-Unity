import React from "react";
import { connectToDB } from "@/database/connection";
import User from "@/models/user";
import ChangePassword from "@/components/ChangePassword";
import { cookies } from "next/headers";
import verifyCookie from "@/customFunctions/verifyCookie";

type JWTdata = {
  id: string;
  name: string;
  iat: number;
  exp: number;
};

export default async function page() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const cookieData = verifyCookie(token, true) as JWTdata;
  await connectToDB();
  if(!cookieData) return null;
  const userData = await User.findOne({ _id: cookieData.id })
  

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-20 flex justify-between">
      <div className="w-3/4">
        <h1 className="text-3xl font-bold ">Profile</h1>
        <div className="flex flex-col text-xl mt-4 gap-2 font-medium">
          <p>Name : {userData.name}</p>
          <p>Phone : {userData.phone}</p>
          <p>Blood : {userData.bloodGroup}</p>
          <p>Division : {userData.division}</p>
          <p>District : {userData.district}</p>
          <p>Upazila : {userData.upazila}</p>
        </div>
      </div>
      <ChangePassword />
    </section>
  );
}
