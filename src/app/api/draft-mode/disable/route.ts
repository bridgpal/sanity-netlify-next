import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const draft = await draftMode();
  draft.disable();

  const requestUrl = new URL(request.url);
  const redirectParam =
    requestUrl.searchParams.get("redirect") ?? requestUrl.searchParams.get("slug");

  if (redirectParam?.startsWith("/")) {
    return NextResponse.redirect(new URL(redirectParam, requestUrl));
  }

  const referer = request.headers.get("referer");
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      if (refererUrl.origin === requestUrl.origin) {
        const safePath = `${refererUrl.pathname}${refererUrl.search}${refererUrl.hash}`;
        return NextResponse.redirect(new URL(safePath, requestUrl));
      }
    } catch {
      // Ignore malformed referrers and use the default fallback below.
    }
  }

  return NextResponse.redirect(new URL("/", requestUrl));
}
