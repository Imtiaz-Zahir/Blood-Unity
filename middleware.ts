import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import verifyCookie from "./customFunctions/verifyCookie";

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const validToken = verifyCookie(cookieStore.get("token"),true);

}

// export const config = {
//     matcher: ['/admin/:path*', '/profile/:path*'],
//   }