import { authMiddleware } from '@clerk/nextjs'
import { NextRequest, NextResponse } from 'next/server'

//  '/((?!api|_next/static|_next/image|favicon.ico).*)',
export const config = {
  matcher: ['/((?!_next|studio|.*\\..*).*)']
}

// async function beforeAuthMiddleware(req: NextRequest) {
//   // 白名单逻辑
//   // const blockedIps = await get<string[]>('blocked_ips')

//   return intlMiddleware(req)
// }

export default authMiddleware({
  // beforeAuth: beforeAuthMiddleware,
  publicRoutes: ['/', '/api(.*)', '/:locale(.*)', '/:locale/tag(.*)']
})
