import React from "react";
import BlogPreview from "@/components/BlogPreview";

export default function page() {
  return (
    <section className="flex justify-between px-4 sm:px-8 md:px-16 lg:px-28 py-20">
      <div className="lg:w-2/3">
        <BlogPreview />
      </div>

      <div className="lg:w-[30%] w-full">
        <div className="shadow-lg w-full p-6 rounded-xl">
          <h3 className="text-xl my-4 font-bold">categorys</h3>
          {/* {popular.map(({image,title,id,createdAt}, index) => {
                    return (
                        <div key={index} className="flex items-center my-2">
                            <Image priority={true} className="rounded-md object-cover" height={80} width={96} src={`/blog/${image}`} alt={title} />
                            <div className="p-4">
                                <Link href={`/blogs/${id}`} className="font-bold text-sm mb-3 hover:text-orange-500 transition-all">{title}</Link>
                                <p className="text-xs text-slate-500">{createdAt.toString().slice(4, 15)}</p>
                            </div>
                        </div>
                    )
                })} */}
        </div>
      </div>
    </section>
  );
}
