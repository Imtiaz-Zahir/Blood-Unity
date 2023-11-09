import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-20 flex justify-center">
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 lg:w-2/5 rounded-xl boxShadow">
        <h1 className="text-3xl font-bold my-6">Hello, Welcome !</h1>
        <form>
          <div className="my-4">
            <label className="my-2 text-xl font-semibold" htmlFor="name">
              Name :
            </label>
            <input
              className="w-full border border-slate-400 h-14 p-2 my-2 rounded-md"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="my-4">
            <label className="my-2 text-xl font-semibold" htmlFor="email">
              Phone Number :
            </label>
            <input
              className="w-full border border-slate-400 h-14 p-2 my-2 rounded-md"
              type="text"
              name="number"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="my-4">
            <label className="my-2 text-xl font-semibold" htmlFor="blood">
              Blood Group :
            </label>
            <br />
            <select
              name="blood"
              className="border border-slate-400 bg-white h-14 p-2 my-2 rounded-md font-semibold text-lg w-full"
              required
            >
              <option value="" className="hidden">
                Select Blood Your Group
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>

              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>

              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="my-4">
            <label className="my-2 text-xl font-semibold" htmlFor="division">
            Division :
            </label>
            <br />
            <select
              name="division"
              className="border border-slate-400 bg-white h-14 p-2 my-2 rounded-md font-semibold text-lg w-full"
              required
            >
              <option value="" className="hidden">
                Select Your Division
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>

              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>

              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="my-4">
            <label className="my-2 text-xl font-semibold" htmlFor="pass">
              Password :
            </label>
            <div className="flex items-center relative">
              <input
                className="w-full border border-slate-400 h-14 p-2 my-2 rounded-md"
                // type={show ? "text" : "password"}
                name="pass"
                placeholder="Password"
                required
              />
              {/* {show ? (
                <UilEyeSlash
                  size="20"
                  className="text-slate-400 cursor-pointer absolute right-4"
                  onClick={() => setShow((prv) => !prv)}
                />
              ) : (
                <UilEye
                  size="20"
                  className="text-slate-400 cursor-pointer absolute right-4"
                  onClick={() => setShow((prv) => !prv)}
                />
              )} */}
            </div>
          </div>
          <div className="my-4">
            <label
              className="my-2 text-xl font-semibold"
              htmlFor="password_confirm"
            >
              Confirm Password :
            </label>
            <div className="flex items-center relative">
              <input
                className="w-full border border-slate-400 h-14 p-2 my-2 rounded-md"
                // type={show ? "text" : "password"}
                name="password_confirm"
                placeholder="Confirm Password"
                required
              />
              {/* {show ? (
                <UilEyeSlash
                  size="20"
                  className="text-slate-400 cursor-pointer absolute right-4"
                  onClick={() => setShow((prv) => !prv)}
                />
              ) : (
                <UilEye
                  size="20"
                  className="text-slate-400 cursor-pointer absolute right-4"
                  onClick={() => setShow((prv) => !prv)}
                />
              )} */}
            </div>
          </div>
          <div className="my-4 flex justify-between items-center">
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white rounded-md font-bold text-center text-lg uppercase"
            >
              Register
            </button>
            <p className="text-center font-medium">
              Alrady have an account?
              <Link
                className="mx-2 text-red-600 hover:text-blue-800 transition-all "
                href="./login"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
        {/* <p className="text-red-600 text-lg font-bold">{err}</p> */}
      </div>
    </section>
  );
}
