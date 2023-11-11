"use client";
import React, { useState } from "react";
import Link from "next/link";
import useSelectLocation from "@/hooks/useSelectLocation";

type UserInput = {
  name: any;
  number: any;
  blood: any;
  division: any;
  district: any;
  upazila: any;
  password: any;
  password_confirm: any;
};

export default function Page() {
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const {
    selectedLocation,
    setSelectedLocation,
    divisions,
    districts,
    upazilas,
  } = useSelectLocation(); //custom hook

  function checkInput(data: UserInput) {
    if (
      !(
        data.name &&
        data.blood &&
        data.division &&
        data.district &&
        data.upazila &&
        data.password &&
        data.password_confirm
      )
    ) {
      setErr("Please fill all the fields");
      return false;
    } else {
      if (data.password === data.password_confirm) {
        if (data.password.length >= 6 && data.password.length <= 20) {
          return true;
        } else {
          setErr("Password must be at least 6 characters");
          return false;
        }
      } else {
        setErr("Password and Confirm Password not match");
        return false;
      }
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setErr("");
    const form = e.target;
    const data = {
      name: form.name.value,
      number: form.number.value,
      blood: form.blood.value,
      division: form.division.value,
      district: form.district.value,
      upazila: form.upazila.value,
      password: form.pass.value,
      password_confirm: form.password_confirm.value,
    };
    console.log(data);

    // if (checkInput(data)) {
    //   fetch("/api/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }).then(async (res) => {
    //     const data = await res.json();
    //     console.log(data);
    //     if (res.status === 200) {
    //       window.location.href = "/login";
    //     } else {
    //       setErr(data.message);
    //     }
    //   }).catch(()=>setErr("Something went wrong"))
    // }
  }

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-20 flex justify-center">
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 lg:w-2/5 rounded-xl boxShadow">
        <h1 className="text-3xl font-bold my-6">Hello, Welcome !</h1>
        <form onSubmit={handleSubmit}>
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
            <label className="my-2 text-xl font-semibold" htmlFor="number">
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
              value={selectedLocation.division}
              name="division"
              className="border border-slate-400 bg-white h-14 p-2 my-2 rounded-md font-semibold text-lg w-full"
              required
              onChange={(e) =>
                setSelectedLocation((prev) => ({
                  ...prev,
                  division: e.target.value,
                  district: "",
                  upazila: "",
                }))
              }
            >
              <option value="" className="hidden">
                Select Your Division
              </option>
              {divisions.map(({ _id, name }, index) => (
                <option key={index} value={_id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="my-4">
            <label className="my-2 text-xl font-semibold" htmlFor="district">
              District :
            </label>
            <br />
            <select
              value={selectedLocation.district}
              name="district"
              className="border border-slate-400 bg-white h-14 p-2 my-2 rounded-md font-semibold text-lg w-full"
              required
              onChange={(e) =>
                setSelectedLocation((prev) => ({
                  ...prev,
                  district: e.target.value,
                  upazila: "",
                }))
              }
            >
              <option value="" className="hidden">
                {selectedLocation.division
                  ? "Select Your District"
                  : "Select Your Division First"}
              </option>
              {districts.map(({ _id, name }, index) => (
                <option key={index} value={_id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="my-4">
            <label className="my-2 text-xl font-semibold" htmlFor="upazila">
              Upazila :
            </label>
            <br />
            <select
              value={selectedLocation.upazila}
              name="upazila"
              className="border border-slate-400 bg-white h-14 p-2 my-2 rounded-md font-semibold text-lg w-full"
              required
              onChange={(e) =>
                setSelectedLocation((prev) => ({
                  ...prev,
                  upazila: e.target.value,
                }))
              }
            >
              <option value="" className="hidden">
                {selectedLocation.district
                  ? "Select Your Upzila"
                  : "Select Your District First"}
              </option>
              {upazilas.map(({ _id, name }, index) => (
                <option key={index} value={_id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="my-4">
            <label className="my-2 text-xl font-semibold" htmlFor="pass">
              Password :
            </label>
            <div className="flex items-center relative">
              <input
                className="w-full border border-slate-400 h-14 p-2 my-2 rounded-md"
                type={show ? "text" : "password"}
                name="pass"
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
                type={show ? "text" : "password"}
                name="password_confirm"
                placeholder="Confirm Password"
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
          </div>
          <p className="text-red-500 text-lg font-bold">{err}</p>
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
      </div>
    </section>
  );
}
