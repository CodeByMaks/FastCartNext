import createMiddleware from 'next-intl/middleware';
import i18n from './next-intl.config';
import { NextRequest } from 'next/server';

const nextIntlMiddleware = createMiddleware(i18n);

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return Response.redirect(new URL('/en', request.url));
  }

  return nextIntlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(ru|en|tj)/:path*'],
};