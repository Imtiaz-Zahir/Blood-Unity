"use client";
import React,{useState} from "react";
import Blog from "./(components)/blog";


const sideManu = ["New Users", "blogs"];

export default function Page() {
  const [active, setActive] = useState({name: "blogs", component: <Blog/>});

  const clickHandler = (m) => {
    // setLis(m.target.innerText);
    // const contain = m.target.innerText;

    // switch (contain) {
    //   case "blog":
    //     setMain(<Blog/>);
    //     break;
    //   default:
    //     setMain(<Course/>);
    // }
  };

  return (
    <section className=" px-4 sm:px-8 md:px-16 lg:px-28 py-20 lg:flex">
      <ul className="lg:w-[20%] w-full border-r border-slate-300 text-lg font-medium flex flex-col gap-2">
        {sideManu.map((item, index) => {
          return (
            <li
              key={index}
              onClick={clickHandler}
              className={`pl-2 flex items-center gap-2 cursor-pointer py-2 rounded-l-md ${
                active.name == item ? "bg-orange-500 text-white" : "hover:bg-orange-200"
              }`}
            >
              {item}
            </li>
          );
        })}
      </ul>
      {active.component}
    </section>
  );
}
