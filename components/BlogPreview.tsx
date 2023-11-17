import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview() {
  return (
    <div>
      <Image
        className="w-full rounded-xl aspect-video border"
        priority
        height={490}
        width={870}
        src={`/blogs/blog.jpg`}
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
            Video, Donor, Help
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
            10-jan-2021
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
            50
          </p>
        </div>
      </div>
      <Link
        href={`/blogs/`}
        className="text-3xl font-bold hover:text-red-600 transition-all"
      >
        Blog Tile
      </Link>
      <p className="my-6 text-slate-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
        temporibus amet, quas nihil officiis itaque consequuntur, eligendi quia
        quisquam velit quam non quibusdam illo modi ut? Libero ad quia quos
        molestiae, sit, cumque id iusto sint debitis excepturi corporis, nulla
        impedit! Fuga et id soluta maxime. Repellendus ab reiciendis provident?
      </p>
      <Link
        href={`/blogs/`}
        className="uppercase transition-all py-4 px-8 bg-red-600 hover:bg-blue-900 text-white font-bold rounded-md"
      >
        read more
      </Link>
    </div>
  );
}
