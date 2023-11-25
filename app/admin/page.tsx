"use client";
import React, { useEffect, useState } from "react";
import Blog from "./(components)/blog";
import NewUser from "./(components)/newUser";

const sideManu = [
  { name: "Users", component: <NewUser /> },
  { name: "blogs", component: <Blog /> },
];

export default function Page() {
  const [active, setActive] = useState({ name: "Users", component: <NewUser /> });

  return (
    <section className=" px-4 sm:px-8 md:px-16 lg:px-28 py-20 lg:flex">
      <ul className="lg:w-[20%] w-full border-r border-slate-300 text-lg font-medium flex flex-col gap-2">
        {sideManu.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setActive(item)}
              className={`pl-2 flex items-center gap-2 cursor-pointer py-2 rounded-l-md ${
                active.name == item.name
                  ? "bg-orange-500 text-white"
                  : "hover:bg-orange-200"
              }`}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      {active.component}
    </section>
  );
}
