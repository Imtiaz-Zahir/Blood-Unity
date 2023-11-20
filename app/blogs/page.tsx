import React from "react";
import { connectToDB } from "@/database/connect";
import Blog from "@/models/blog";
import Category from "@/models/category";
import Image from "next/image";
import Link from "next/link";

export default async function page({ searchParams }: any) {
  const categoryName = searchParams.category;
  const pageNo = searchParams.page ?? 0;
  const skip = pageNo - 1 < 0 ? 0 : (pageNo - 1) * 5;

  await connectToDB();

  const categorieData = await Category.findOne({ name: categoryName });
  const categories = await Category.find({});

  if (categoryName && !categorieData) {
    return <h1>No Blog Found!</h1>;
  }

  const blogs = await Blog.find(
    categorieData ? { category: categorieData._id } : {}
  )
    .sort({ createdAt: -1 })
    .limit(5)
    .skip(skip)
    .populate("category");

  const filterBlogs = blogs.reduce(
    (
      acc: {
        id: string;
        image: string;
        title: string;
        description: string;
        category: string;
        views: number;
        createdAt: string;
      }[],
      blog
    ) => {
      return [
        ...acc,
        {
          id: blog._id.toString(),
          image: blog.image,
          title: blog.title,
          description: blog.description,
          category: blog.category.name,
          views: blog.views,
          createdAt: blog.createdAt,
        },
      ];
    },
    []
  );

  return (
    <section className="flex justify-between px-4 sm:px-8 md:px-16 lg:px-28 py-20">
    <div className="lg:w-2/3 flex flex-col gap-10">
      {filterBlogs.map((blog,index) => (
        <div key={index}>
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
              {blog.category}
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
        <Link
          href={`/blogs/${blog.id}`}
          className="text-3xl font-bold hover:text-red-600 transition-all"
        >
          {blog.title}
        </Link>
        <p className="my-6 text-slate-500">
          {blog.description.slice(0, 200)}...
        </p>
        <Link
          href={`/blogs/${blog.id}`}
          className="uppercase transition-all py-4 px-8 bg-red-600 hover:bg-blue-900 text-white font-bold rounded-md"
        >
          read more
        </Link>
      </div>)
      )}
    </div>
      <div className="lg:w-[30%] w-full">
        <div className="shadow-lg w-full p-6 rounded-xl">
          <h3 className="text-xl my-4 font-bold">categorys</h3>
          <ul className="list-disc text-lg w-full pl-8 flex flex-col gap-2 font-medium">
            {categories.map(({ name }, index) => (
              <li key={index}><Link className="hover:text-red-600" href={`/blogs?category=${name}`}>{name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
