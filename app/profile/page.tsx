import React from "react";
import { connectToDB } from "@/database/connect";
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
  if (!cookieData) return null;

  const userData = await User.findById(cookieData.id);

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-28 flex justify-center gap-28">
      <div className="w-3/4">
        <h1 className="text-3xl font-bold ">Profile</h1>
        <div className="grid grid-cols-2 text-xl mt-4 gap-4 font-medium">
          <span>Name </span>
          <span>: {userData.name}</span>
          <span>Phone Number</span>
          <span>: {userData.phone}</span>
          <span>Blood Group</span>
          <span>: {userData.bloodGroup}</span>
          <span>Division </span>
          <span>: {userData.division}</span>
          <span>District</span>
          <span>: {userData.district}</span>
          <span>Upazila </span>
          <span>: {userData.upazila}</span>
        </div>
      </div>
      <ChangePassword />
    </section>
  );
}
