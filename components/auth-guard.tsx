'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter()
  const pathname = usePathname()

  const publicPaths = ['/login', '/signup', '/']
  const isPublicPath = publicPaths.includes(pathname)

  useEffect(() => {
    // Skip check for public paths
    if (isPublicPath) return

    // Immediate check - no delay
    if (!isAuthenticated()) {
      router.replace('/login')
    }
  }, [pathname, router, isPublicPath])

  // Don't render anything if not authenticated on protected routes
  if (!isPublicPath && !isAuthenticated()) {
    return null
  }

  return <>{children}</>
}