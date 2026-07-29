import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

/**
 * Next.js 16 renamed the `middleware` file convention to `proxy`.
 * next-intl still ships its handler under the old `next-intl/middleware`
 * entry point, but the handler itself is just a plain
 * (NextRequest) => NextResponse function, so it works unchanged here —
 * only the file name and export name need to follow the new convention.
 */
export const proxy = createMiddleware(routing);

export const config = {
  // Match all paths except static assets, Next internals and API routes.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
