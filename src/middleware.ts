import { clerkMiddleware } from "@clerk/nextjs/server"

export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)"
  ]
}

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
// }

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// // Any route placed here will make sure that it is protected
// const isProtectedRoute = createRouteMatcher([
//   '/subaccount(.*)',
//   '/agency'
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();
//     const url = req.nextUrl
//     const searchParams = url.searchParams.toString()
//     let hostname = req.headers

//     const pathWithSearchParams = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''
//   }`

//   //if subdomain exists
//   const customSubDomain = hostname.get('host')?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`).filter(Boolean)[0]

//   if (customSubDomain) {
//     return NextResponse.rewrite(new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url)
//     )
//   }

//   if(url.pathname === "/sign-in" || url.pathname === "sign-up") {
//     return NextResponse.redirect(new URL(`/agency/sign-in`, req.url))
//   }

//   if (
//     url.pathname === '/' || (url.pathname === '/site' && url.host === process.env.NEXT_PUBLIC_DOMAIN)
//   ){
//     return NextResponse.rewrite(new URL('/site', req.url))
//   }

//   if (
//     url.pathname.startsWith('/agency') || url.pathname.startsWith('/subaccount')
//   ) {
//     return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url))
//   }
//   },
// );

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };
