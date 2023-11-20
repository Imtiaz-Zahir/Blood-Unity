import { NextRequest } from "next/server";
import { writeFile } from "fs";
import { join } from "path";
import { connectToDB } from "@/database/connect";
import Blog from "@/models/blog";
import Category from "@/models/category";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const image: any = data.get("image");
    const imageName = new Date().getTime() + image.name;
    const path = join(process.cwd(), "public/blogs/");

    await writeFile(
      path + imageName,
      Buffer.from(await image.arrayBuffer()),
      (err) => {
        if (err) {
          console.log(err);
          throw err;
        }
      }
    );

    await connectToDB();

    let categoryId: string;
    const categoryName = data.get("catagory");
    const category = await Category.findOne({ name: categoryName });

    if (!category) {
      const { _id } = await Category.create({ name: categoryName });
      categoryId = _id;
    } else {
      categoryId = category._id;
    }

    await Blog.create({
      image: imageName,
      title: data.get("title"),
      description: data.get("content"),
      category: categoryId,
    });

    return new Response(
      JSON.stringify({ message: "Blog created successfuly." }),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Something went wrong try again later" }),
      { status: 500 }
    );
  }
}
