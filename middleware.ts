import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const canonical = `https://www.crawlspacekc.com${pathname}`;
  const response = NextResponse.next();
  response.headers.set('Link', `<${canonical}>; rel="canonical"`);
  return response;
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
