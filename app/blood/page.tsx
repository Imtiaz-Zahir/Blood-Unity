import React from "react";
import FindDonor from "@/components/FindDonor";
import { connectToDB } from "@/database/connection";
import Division from "@/models/division";

type Divition = {
  _id: string;
  name: string;
  bn_name: string;
};

export default async function Page() {
  await connectToDB();
  const divisions: Divition[] = await Division.find({});
  const filteredDivision = divisions.reduce(
    (prev: Divition[], curr: Divition) => {
      return [
        ...prev,
        { _id: curr._id.toString(), name: curr.name, bn_name: curr.bn_name },
      ];
    },
    []
  );

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-20">
      <h1 className="text-2xl font-bold lg:text-5xl text-center">
        Locate Your Lifesaver
        <br />
        Find a Blood Donor Near You
      </h1>
      <FindDonor divisions={filteredDivision} />
    </section>
  );
}
