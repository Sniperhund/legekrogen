// Taken from https://www.propelauth.com/post/getting-url-in-next-server-components

import { NextResponse } from "next/server"

// Since I can't use usePathname() in a server component, I get it here and pass it through a header
export function middleware(request) {
	const headers = new Headers(request.headers)
	headers.set("x-current-path", request.nextUrl.pathname)

	return NextResponse.next({ headers })
}

export const config = {
	matcher: [
		// match all routes except static files and APIs
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
}
