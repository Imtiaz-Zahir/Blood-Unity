"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/get_token")
      .then((res) => res.json())
      .then((data) => (data.token ? setIsLogin(true) : setIsLogin(false)));
  }, [pathname]);

  useEffect(() => {
    // stop scrolling when menu is open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  useEffect(() => {
    // add effect if window is scrolled on load
    if (window.scrollY > 0) {
      document.getElementById("nav")?.classList.add("scroll");
    }

    // toggle effect on scroll
    window.addEventListener("scroll", () => {
      document
        .getElementById("nav")
        ?.classList.toggle("scroll", window.scrollY > 0);
    });
  }, []);

  const routes = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Donor",
      link: "/donor",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav
      id="nav"
      className="flex items-center justify-between bg-white px-4 sm:px-8 md:px-16 lg:px-28 fixed w-full left-0 top-0 transition-all z-10"
    >
      <Link href="/">
        <Image src="/blood.jpg" priority alt="logo" width={64} height={64} />
      </Link>
      <svg
        onClick={() => setMenuOpen((prev) => !prev)}
        className="w-10 z-20 md:hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="#000"
          d={
            menuOpen
              ? "M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
              : "M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
          }
        ></path>
      </svg>
      <div
        className={`fixed bg-red-200 w-screen h-screen ${
          menuOpen ? "left-0" : "left-full"
        } top-0 py-20 transition-all flex flex-col justify-between md:bg-white md:w-auto md:h-auto md:py-0 md:static md:flex-row md:gap-5`}
      >
        <ul className="flex flex-col md:flex-row text-center md:items-center justify-center text-2xl md:text-xl md:gap-x-5 font-bold gap-y-5">
          {routes.map(({ name, link }, index) => (
            <Link key={index} onClick={() => setMenuOpen(false)} href={link}>
              {name}
            </Link>
          ))}
        </ul>
        <div className="flex justify-center items-center">
          <span className="bg-red-600 p-2 rounded-md text-lg md:text-base font-medium text-white">
            <Link
              onClick={() => setMenuOpen(false)}
              className="px-3 border-r hover:text-black transition-all"
              href={isLogin ? "/profile" : "/login"}
            >
              {isLogin ? "Profile" : "Login"}
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              className="px-3 border-l hover:text-black transition-all"
              href={isLogin ? "/api/auth/logout" : "/register"}
            >
              {isLogin ? "Logout" : "Register"}
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}
