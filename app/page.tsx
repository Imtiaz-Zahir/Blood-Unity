import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <section className="flex flex-col-reverse gap-5 md:gap-10 md:flex-row items-center px-4 sm:px-8 md:px-16 lg:px-28 py-20">
      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold lg:text-5xl">let&apos;s join together to give the gift of life.</h1>
        <p className="text-sm mt-5 mb-10 lg:text-lg text-justify">
          We are here to help you with founding Blood. We know that Blood is
          sometimes very difficult to obtain. So our associations will help you
          to find blood in emergencies.
        </p>
        <Link href='/blood' className="text-red-600 border-2 border-red-600 py-3 px-5 rounded uppercase font-semibold hover:bg-red-600 hover:text-white transition-all">Find Donors</Link>
      </div>
      <Image className="md:w-1/2" priority src="/image.png" alt="logo" width={600} height={480} />
    </section>
  );
}
