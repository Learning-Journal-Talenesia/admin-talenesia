import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import config from "@/config/config";

const onlyAdmin = ["/admin"];

export default function withAuth(middleware, requireAuth = []) {
  return async (req, next) => {
    const pathname = req.nextUrl.pathname;
    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: config.NEXTAUTH_SECRET,
      });
      if (!token) {
        const url = new URL("/auth/login", req.url);
        url.searchParams.set("callback", encodeURI(req.url));
        return NextResponse.redirect(url);
      }
      if (token.role !== "admin" && onlyAdmin.includes(pathname)) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
    return middleware(req, next);
  };
}
