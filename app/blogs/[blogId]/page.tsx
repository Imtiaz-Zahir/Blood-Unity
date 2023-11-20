import React from "react";
import Image from "next/image";
import { connectToDB } from "@/database/connect";
import Blog from "@/models/blog";
import Link from "next/link";

export default async function page({ params }: { params: { blogId: string } }) {
  await connectToDB();
  const blog = await Blog.findById(params.blogId).populate("category");
  const popularBlogs = await Blog.find().sort({ views: "descending" }).limit(5);
  const oldBlogs = await Blog.find().sort({ createdAt: "ascending" }).limit(5); 
  await Blog.findByIdAndUpdate(params.blogId, { views: blog.views + 1 });

  return (
    <section className="flex justify-between px-4 sm:px-8 md:px-16 lg:px-28 py-20">
      <div className="lg:w-2/3">
        <div>
          <Image
            className="w-full rounded-xl aspect-video border"
            priority
            height={490}
            width={870}
            src={`/blogs/${blog.image}`}
            alt={blog.title}
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
                {blog.category.name}
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
                {new Date(blog.createdAt).toLocaleDateString()}
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
                {blog.views}
              </p>
            </div>
          </div>
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <p className="my-6 text-slate-500">{blog.description}</p>
        </div>
      </div>

      <div className="lg:w-[30%] w-full">
        <div className="shadow-lg w-full p-6 rounded-xl">
          <h3 className="text-xl my-4 font-bold">Popular Posts</h3>
          {popularBlogs.map((blog, index) => (
            <div key={index} className="flex items-center my-2">
              <Image
                className="w-24 rounded-md aspect-video"
                height={54}
                width={96}
                src={`/blogs/${blog.image}`}
                alt={blog.title}
              />
              <div className="p-4">
                <Link
                  href={`/blogs/${blog._id}`}
                  className="font-bold text-sm mb-3 hover:text-red-600 transition-all"
                >
                  {blog.title}
                </Link>
                <p className="text-xs text-slate-500">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="shadow-lg w-full p-6 rounded-xl mt-6">
          <h3 className="text-xl my-4 font-bold">Old Posts</h3>
          {oldBlogs.map((blog, index) => (
            <div key={index} className="flex items-center my-2">
              <Image
                className="w-24 rounded-md aspect-video"
                height={54}
                width={96}
                src={`/blogs/${blog.image}`}
                alt={blog.title}
              />
              <div className="p-4">
                <Link
                  href={`/blogs/${blog._id}`}
                  className="font-bold text-sm mb-3 hover:text-red-600 transition-all"
                >
                  {blog.title}
                </Link>
                <p className="text-xs text-slate-500">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
