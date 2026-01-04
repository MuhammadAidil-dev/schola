import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken');
  const pathname = request.nextUrl.pathname;

  // Jika sudah login dan mencoba akses halaman login
  if (token && pathname.startsWith('/auth/login')) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // Jika belum login dan mencoba akses halaman admin
  if (!token && pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Selain kondisi di atas, lanjutkan request
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/auth/login'],
};
