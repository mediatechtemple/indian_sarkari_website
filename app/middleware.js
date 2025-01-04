import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone(); // Clone the incoming URL

  // If the URL doesn't start with `/job`, rewrite it to include `/job`
  if (!url.pathname.startsWith("/job")) {
    url.pathname = `/job${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Allow requests to `/job` routes to proceed as normal
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"], // Exclude Next.js static and API routes
};
