import { NextResponse } from "next/server";

// =====================================================
// MAINTENANCE SWITCH
// Vercel → Settings → Environment Variables mein:
//   MAINTENANCE_MODE = true   → sab ko "under maintenance" page dikhe ga
//   MAINTENANCE_MODE = false  → asli website khul jaye gi
// Badalne ke baad Vercel mein "Redeploy" karna zaroori hai.
// =====================================================
export function middleware(request) {
  if (process.env.MAINTENANCE_MODE !== "true") return NextResponse.next();

  const { pathname } = request.nextUrl;
  if (pathname === "/maintenance") return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

// Images, logo aur Next.js ki apni files ko chhor kar sab pages par lagu ho
export const config = {
  matcher: ["/((?!_next/|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|txt|xml)$).*)"],
};
