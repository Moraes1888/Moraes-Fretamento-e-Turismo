import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    // Verificar se o usuário tem permissão para acessar rotas admin
    if (req.nextUrl.pathname.startsWith('/admin') && 
        req.nextUrl.pathname !== '/admin/login' &&
        !req.nextauth.token) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }

    // Verificar role de admin para rotas protegidas
    if (req.nextUrl.pathname.startsWith('/admin/dashboard') &&
        req.nextauth.token?.role !== 'admin') {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Permitir acesso à página de login sempre
        if (req.nextUrl.pathname === '/admin/login') {
          return true
        }
        
        // Para outras rotas admin, verificar se tem token
        if (req.nextUrl.pathname.startsWith('/admin')) {
          return !!token
        }
        
        // Permitir acesso a outras rotas
        return true
      }
    }
  }
)

export const config = {
  matcher: ['/admin/:path*']
}