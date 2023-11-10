import React from "react";
import FindDonor from "@/components/FindDonor";

export default async function Page() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-20">
      <h1 className="text-2xl font-bold lg:text-5xl text-center">
        Locate Your Lifesaver
        <br />
        Find a Blood Donor Near You
      </h1>
      <FindDonor />
    </section>
  );
}
