"use client";
import React, { useState } from "react";
// import parse from "html-react-parser";

export default function Page() {
  const [submit, setSubmit] = useState("submit");
  const [content, setContent] = useState("");

  function addBlog(e: any) {
    e.preventDefault();
    setSubmit("submiting...");
    fetch("/api/admin/blogs", {
      method: "POST",
      body: new FormData(e.target),
    }).then(async (res) => {
      const data = await res.json();
      alert(data.message);
      if (res.status === 201) {
        e.target.reset();
      }
    });
    setSubmit("submit");
  }

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-20 grid grid-cols-2 gap-5">
      <div>
        <h1 className="text-2xl font-bold my-5">Post Blog</h1>
        <form onSubmit={addBlog} className="flex flex-col gap-4">
          <input
            type="file"
            name="image"
            placeholder="image"
            className="border-2 border-slate-500 focus:outline-none"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="title"
            className="border-2 border-slate-500 focus:outline-none"
            required
          />
          <input
            type="text"
            name="catagory"
            placeholder="catagory"
            className="border-2 border-slate-500 focus:outline-none"
            required
          />
          <textarea
            name="content"
            onChange={(e) => setContent(e.target.value)}
            cols={30}
            rows={10}
            placeholder="content"
            className="border-2 border-slate-500 focus:outline-none"
            required
          ></textarea>

          <button
            className="bg-orange-500 text-white focus:outline-none py-2"
            type="submit"
            disabled={submit === "submiting..." ? true : false}
          >
            {submit}
          </button>
        </form>
      </div>
      <div>
        <h1 className="text-2xl font-bold my-5">Blog content Preview</h1>
        {/* <div className="mt-5 border-2 h-full">{parse(content)}</div> */}
      </div>
    </section>
  );
}
