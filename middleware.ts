import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  });
  const requestedPage = req.nextUrl.pathname;
  if (!session) {
    const url = req.nextUrl.clone();
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }
}
export const config = {
  matcher: ['/resumen/:path*', '/total/:path*', '/cocina/:path*']
};
