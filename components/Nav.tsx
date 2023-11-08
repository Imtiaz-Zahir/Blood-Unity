"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      document
        .getElementById("nav")
        ?.classList.toggle("scroll", window.scrollY > 0);
    });
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav
      id="nav"
      className="flex items-center justify-between bg-white px-4 sm:px-8 md:px-16 lg:px-28 fixed w-full left-0 top-0 transition-all"
    >
      <Link href="/">
        <Image src="/blood.jpg" priority alt="logo" width={64} height={64} />
      </Link>
      {menuOpen ? (
        <svg
          onClick={() => setMenuOpen((prev) => !prev)}
          className="w-10 z-10 md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="times"
        >
          <path
            fill="#000"
            d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
          ></path>
        </svg>
      ) : (
        <svg
          onClick={() => setMenuOpen((prev) => !prev)}
          className="w-10 md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="bars"
        >
          <path
            fill="#000"
            d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
          ></path>
        </svg>
      )}
      <div
        className={`fixed bg-red-200 w-screen h-screen ${
          menuOpen ? "left-0" : "left-full"
        } top-0 py-20 transition-all flex flex-col justify-between md:bg-white md:w-auto md:h-auto md:py-0 md:static md:flex-row md:gap-5`}
      >
        <ul className="flex flex-col md:flex-row text-center md:items-center justify-center text-2xl md:text-xl md:gap-x-5 font-bold gap-y-5">
          <Link
            onClick={closeMenu}
            className="hover:text-red-600 transition-all"
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={closeMenu}
            className="hover:text-red-600 transition-all"
            href="/blood"
          >
            Blood
          </Link>
          <Link
            onClick={closeMenu}
            className="hover:text-red-600 transition-all"
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            onClick={closeMenu}
            className="hover:text-red-600 transition-all"
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={closeMenu}
            className="hover:text-red-600 transition-all"
            href="/contact"
          >
            Contact
          </Link>
        </ul>
        <div className="flex justify-center items-center">
          <span className="bg-red-600 p-2 rounded-md text-lg md:text-base font-medium text-white">
            <Link
              onClick={closeMenu}
              className="px-3 border-r hover:text-black transition-all"
              href="/login"
            >
              Login
            </Link>
            <Link
              onClick={closeMenu}
              className="px-3 border-l hover:text-black transition-all"
              href="/register"
            >
              Register
            </Link>
          </span>
          {/* <span className="bg-red-600 p-2 rounded-md text-lg md:text-base font-medium text-white">
            <Link onClick={closeMenu} className="px-3 border-r hover:text-black transition-all" href="/">
              Profile
            </Link>
            <Link onClick={closeMenu} className="px-3 border-l hover:text-black transition-all" href="/">
              Logout
            </Link>
          </span> */}
        </div>
      </div>
    </nav>
  );
}