"use client";
import React, { useState } from "react";
import Link from "next/link";
import { checkLoginInput } from "@/customFunctions/checkInput";

export default function Page() {
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  

  async function handleSubmit(e: any) {
    e.preventDefault();
    setErr("");
    const form = e.target;
    const data = { number: form.number.value, password: form.password.value };
    if (checkLoginInput(data, (err) => setErr(err))) {
      try {
        fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then(async (res) => {
          const data = await res.json();
          if (res.status === 200) {
            form.reset();
            window.location.href = "/profile";
          } else {
            setErr(data.message);
          }
        });
      } catch (error) {
        console.log(error);
        setErr("Something went wrong try again later");
      }
    }
  }

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-20 flex justify-center">
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 lg:w-2/5 rounded-xl boxShadow">
        <h1 className="text-3xl font-bold my-6">Hi, Welcome back!</h1>
        <p className="text-red-600 text-lg font-bold">{err}</p>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full border border-slate-400 h-12 p-2 my-2 rounded-md"
            type="text"
            name="number"
            placeholder="Phone Number"
            required
          />
          <div className="flex items-center relative">
            <input
              className="w-full border border-slate-400 h-12 p-2 mt-2 rounded-md"
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 cursor-pointer absolute right-4"
              onClick={() => setShow((prv) => !prv)}
            >
              <path
                fill="#000"
                d={
                  show
                    ? "M10.94,6.08A6.93,6.93,0,0,1,12,6c3.18,0,6.17,2.29,7.91,6a15.23,15.23,0,0,1-.9,1.64,1,1,0,0,0-.16.55,1,1,0,0,0,1.86.5,15.77,15.77,0,0,0,1.21-2.3,1,1,0,0,0,0-.79C19.9,6.91,16.1,4,12,4a7.77,7.77,0,0,0-1.4.12,1,1,0,1,0,.34,2ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.39,6.8a14.62,14.62,0,0,0-3.31,4.8,1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20a9.26,9.26,0,0,0,5.05-1.54l3.24,3.25a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6.36,9.19,2.45,2.45A1.81,1.81,0,0,1,12,14a2,2,0,0,1-2-2A1.81,1.81,0,0,1,10.07,11.48ZM12,18c-3.18,0-6.17-2.29-7.9-6A12.09,12.09,0,0,1,6.8,8.21L8.57,10A4,4,0,0,0,14,15.43L15.59,17A7.24,7.24,0,0,1,12,18Z"
                    : "M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
                }
              ></path>
            </svg>
          </div>
          <button
            type="submit"
            className="mt-8 w-full py-2 bg-red-600 hover:bg-blue-900 text-white rounded-md font-bold text-center text-lg uppercase transition-all"
          >
            sing in
          </button>
        </form>
        <div className="mt-6 text-center text-lg font-medium">
          <p className="text-center text-lg font-medium">
            Don&apos;t have an account?
            <Link
              className="mx-2 text-red-600 hover:text-blue-800 transition-all "
              href="/register"
            >
              Register Now
            </Link>
          </p>
          <p className="text-center text-lg font-medium mt-2">
            Forget Passowrd?
            <Link
              href="/recover"
              className="font-medium hover:text-blue-900 text-red-600 transition-all mx-2"
            >
              Recover Now
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
