import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-20 flex justify-center">
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 lg:w-2/5 rounded-xl boxShadow">
        <h1 className="text-3xl font-bold my-6">Hi, Welcome back!</h1>
        {/* {err ? (
          <p className="text-red-600 text-lg font-bold">
            Email and Password are not valid
          </p>
        ) : null} */}
        <form >
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
            // type={show ? "text" : "password"}
            name="password"
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
          <div className="flex justify-between text-lg my-8">
            <div className='flex items-center'>
              <input type="checkbox" className='w-4 h-4' name="keep" />
              <label className="font-bold mx-2" htmlFor="keep">
                Keep me signed in
              </label>
            </div>
            <Link href="/forget" className="font-medium hover:text-blue-900 text-red-600 transition-all">Forget?</Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-600 hover:bg-blue-900 text-white rounded-md font-bold text-center text-lg uppercase transition-all"
          >
            sing in
          </button>
        </form>
        <p className="text-center text-lg font-medium mt-6">
          Don&apos;t have an account?
          <Link
            className="mx-2 text-red-600 hover:text-blue-800 transition-all "
            href="/register"
          >
            Register Now
          </Link>
        </p>
      </div>
    </section>
  )
}
