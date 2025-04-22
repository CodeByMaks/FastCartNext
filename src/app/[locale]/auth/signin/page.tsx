"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="max-w-md shadow-2xl my-32 mx-auto p-6">
      <div className="space-y-2 mb-6">
        <h1 className="text-2xl font-medium">Log in to Exclusive</h1>
        <p className="text-sm text-gray-600">Enter your details below</p>
      </div>

      <form className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="email" className="text-xs text-gray-500">
            Email or phone number
          </label>
          <input
            id="email"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="text-xs text-gray-500">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="text-right">
          <a href="#" className="text-sm text-red-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white rounded py-3 font-medium hover:bg-red-600 transition-colors"
        >
          Log In
        </button>
      </form>
    </div>
  )
}
