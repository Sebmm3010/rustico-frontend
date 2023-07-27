import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
export async function middleware(req: NextRequest) {
  const session: any = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  });
  const requestedPage = req.nextUrl.pathname;
  if (!session) {
    const url = req.nextUrl.clone();
    url.pathname = '/auth/login';
    url.search = `p=${requestedPage}`;
    if (requestedPage.includes('api')) {
      return new Response(JSON.stringify({ msg: 'No esta autorizado' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    return NextResponse.redirect(url);
  }
  // if (
  //   requestedPage.includes('/admin') &&
  //   !session.user.roles.includes('admin')
  // ) {
  //   return NextResponse.redirect(new URL('/', req.url));
  // }
  // return NextResponse.next();
}
export const config = {
  matcher: [
    '/resumen/:path*',
    '/total/:path*',
    '/cocina/:path*',
    '/admin/:path*'
  ]
};
