import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <section className="flex flex-col gap-5 md:gap-10 md:flex-row items-center px-4 sm:px-8 md:px-16 lg:px-28 py-20">
      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold lg:text-5xl">
          Are you Looking for Blood
        </h1>
        <p className="text-sm mt-5 mb-10 lg:text-lg text-justify">
          We are here to help you with founding Blood. We know that Blood is
          sometimes very difficult to obtain. So our associations will help you
          to find blood in emergencies.
        </p>
        <Link
          href="/donor"
          className="text-red-600 border-2 border-red-600 py-3 px-5 rounded uppercase font-semibold hover:bg-red-600 hover:text-white transition-all"
        >
          Find Donors
        </Link>
      </div>
      <div className="lg:w-2/3">
        <div>
          <Image
            className="w-full rounded-xl aspect-video border mt-4"
            priority
            height={490}
            width={870}
            src={`/blogs/1700496954474milky-way-illuminates-landscape-creates-breathtaking-beauty-generated-by-ai.jpg`}
            alt=""
          />
          <div className="md:flex my-6 font-semibold">
            <div className="flex flex-wrap gap-4">
              <p className="flex items-center gap-1 whitespace-nowrap">
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="tag-alt"
                >
                  <path
                    fill="#DC2626"
                    d="M7.5,6A1.5,1.5,0,1,0,9,7.5,1.5,1.5,0,0,0,7.5,6Zm13.62,4.71L12.71,2.29A1,1,0,0,0,12,2H3A1,1,0,0,0,2,3v9a1,1,0,0,0,.29.71l8.42,8.41a3,3,0,0,0,4.24,0L21.12,15a3,3,0,0,0,0-4.24Zm-1.41,2.82h0l-6.18,6.17a1,1,0,0,1-1.41,0L4,11.59V4h7.59l8.12,8.12a1,1,0,0,1,.29.71A1,1,0,0,1,19.71,13.53Z"
                  ></path>
                </svg>
                Blood
              </p>
              <p className="flex items-center gap-1 whitespace-nowrap">
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="calendar-alt"
                >
                  <path
                    fill="#DC2626"
                    d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"
                  ></path>
                </svg>
                10/10/2021
              </p>
              <p className="flex items-center gap-1 whitespace-nowrap">
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="eye"
                >
                  <path
                    fill="#DC2626"
                    d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
                  ></path>
                </svg>
                100
              </p>
            </div>
          </div>
          <h1 className="text-3xl font-bold">Donate Blood</h1>
          <p className="my-6 text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id at
            laudantium tempora doloremque perferendis tempore quod suscipit
            nesciunt rem nostrum consequuntur, quasi animi aliquam reiciendis
            amet eius, enim molestiae beatae?
          </p>
        </div>
      </div>
    </section>
  );
}
