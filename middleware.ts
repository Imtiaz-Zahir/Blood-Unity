import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  
  const validToken = await (
    await fetch("http://localhost:3000/api/verifyCookie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
  ).json();

  if (validToken) {
    if (
      request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/register")
    ) {
      return NextResponse.redirect(new URL("/profile", request.url));
    }

    if (
      request.nextUrl.pathname.startsWith("/admin") ||
      request.nextUrl.pathname.startsWith("/api/admin")
    ) {
      if (validToken.type !== "admin") {
        return NextResponse.redirect(new URL("/profile", request.url));
      }
    }
  } else {
    if (
      request.nextUrl.pathname.startsWith("/profile") ||
      request.nextUrl.pathname.startsWith("/admin")
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (request.nextUrl.pathname.startsWith("/api/admin")) {
      return NextResponse.json(
        { message: "You are not authorized to access this route" },
        { status: 401 }
      );
    }
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/profile/:path*",
    "/api/profile/:path*",
    "/api/admin/:path*",
    "/login",
    "/register",
  ],
};
