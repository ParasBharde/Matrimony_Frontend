import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
 const url = request.nextUrl.clone();
 let isLogin = request.cookies.get('logged');

if (!isLogin) {
  if (request.nextUrl.pathname.startsWith('/checkout')) {
    return NextResponse.rewrite(new URL('/signIn', request.url))
  } else if (request.nextUrl.pathname.startsWith('/profiledetail/')) {
    return NextResponse.rewrite(new URL('/signIn', request.url))
  } else if (request.nextUrl.pathname.startsWith('/profile')) {
    return NextResponse.rewrite(new URL('/signIn', request.url))
  } else if (request.nextUrl.pathname.startsWith('/likedprofile/')) {
    return NextResponse.rewrite(new URL('/signIn', request.url))
  } else if (request.nextUrl.pathname.startsWith('/downloadProfile')) {
    return NextResponse.rewrite(new URL('/signIn', request.url))
  }else if (request.nextUrl.pathname.startsWith('/orderHistory')) {
    return NextResponse.rewrite(new URL('/signIn', request.url))
  }

}
// if(isLogin) {
//   if (request.nextUrl.pathname.startsWith('/signIn')) {
//     return NextResponse.rewrite(new URL('/', request.url))
//   } else if(request.nextUrl.pathname.startsWith('/signUp')) {
//     return NextResponse.rewrite(new URL('/', request.url))
//   }
// }
}