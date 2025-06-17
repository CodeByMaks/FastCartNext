'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token')
      const isValid = !!token 
      
      setIsAuthenticated(isValid)
      
      if (!isValid) {
        router.replace('/en/signin')
      }
    }

    // Первоначальная проверка
    checkAuth()

    // Подписка на кастомные события
    const handleAuthChange = () => checkAuth()
    
    window.addEventListener('auth-change', handleAuthChange)
    window.addEventListener('storage', handleAuthChange) // На случай изменения localStorage из других вкладок

    return () => {
      window.removeEventListener('auth-change', handleAuthChange)
      window.removeEventListener('storage', handleAuthChange)
    }
  }, [router])

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Checking authentication...</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Redirecting to login page...</p>
      </div>
    )
  }

  return <>{children}</>
}