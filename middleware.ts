import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This is a simple security middleware example
// In a real application, you would implement more robust security measures
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Check for suspicious patterns in the URL that might indicate an attack attempt
  const suspiciousPatterns = [
    /(%27)|(')|(--)|(%23)|(#)/i, // SQL injection attempts
    /((%3C)|<)((%2F)|\/)*[a-z0-9%]+((%3E)|>)/i, // XSS attempts
    /((%3C)|<)((%69)|i|(%49))((%6D)|m|(%4D))((%67)|g|(%47))[^\n]+((%3E)|>)/i, // <img> XSS attempts
    /((%3C)|<)[^\n]+((%3E)|>)/i, // Other HTML tag XSS attempts
  ]

  // Check if the URL contains suspicious patterns
  const isSuspicious = suspiciousPatterns.some((pattern) => pattern.test(path))

  // If suspicious, redirect to home page or show an error
  if (isSuspicious) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Add security headers to all responses
  const response = NextResponse.next()

  // Set security headers
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'",
  )

  return response
}

// Only run middleware on specific paths
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)", "/api/:path*"],
}
