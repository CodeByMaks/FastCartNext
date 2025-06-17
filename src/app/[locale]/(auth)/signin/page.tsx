'use client'

import { useLoginMutation } from '@/entities/auth/authApi'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [login, { isLoading, error }] = useLoginMutation()
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await login({
        username: formData.email,
        password: formData.password,
      }).unwrap()

      // Сохраняем токен в localStorage
      localStorage.setItem('token', response.data)
      
      // Триггерим событие для обновления всех AuthGuard
      window.dispatchEvent(new Event('auth-change'))
      
      // Перенаправляем с небольшой задержкой
      setTimeout(() => router.push('/'), 50)
    } catch (err) {
      console.error('Login failed:', err)
      // Очищаем токен при ошибке
      localStorage.removeItem('token')
      window.dispatchEvent(new Event('auth-change'))
    }
  }

  return (
    <div className='max-w-md shadow-2xl my-32 mx-auto p-6'>
      <div className='space-y-2 mb-6'>
        <h1 className='text-2xl font-medium'>Log in to Exclusive</h1>
        <p className='text-sm text-gray-600'>Enter your details below</p>
      </div>

      <form className='space-y-4' onSubmit={handleSubmit}>
        <div className='space-y-1'>
          <label htmlFor='email' className='text-xs text-gray-500'>
            Email or phone number
          </label>
          <input
            id='email'
            type='text'
            className='w-full border border-gray-300 rounded px-3 py-2 text-sm'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='space-y-1'>
          <label htmlFor='password' className='text-xs text-gray-500'>
            Password
          </label>
          <div className='relative'>
            <input
              id='password'
              type={showPassword ? 'text' : 'password'}
              className='w-full border border-gray-300 rounded px-3 py-2 text-sm'
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
            >
              {showPassword ? (
                <EyeOff className='h-5 w-5' />
              ) : (
                <Eye className='h-5 w-5' />
              )}
            </button>
          </div>
        </div>

        <div className='text-right'>
          <a href='#' className='text-sm text-red-500 hover:underline'>
            Forgot Password?
          </a>
        </div>

        {error && (
          <div className='text-red-500 text-sm'>
            {'data' in error
              ? (error.data as { message?: string }).message || 'Login failed'
              : 'Login failed'}
          </div>
        )}

        <button
          type='submit'
          className='w-full bg-red-500 text-white rounded py-3 font-medium hover:bg-red-600 transition-colors disabled:opacity-50'
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </div>
  )
}