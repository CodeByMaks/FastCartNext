"use client"

import { useState, useEffect } from "react"
import Image from "next/legacy/image"
import beets from '@/assets/Frame 694.png'

export default function SpeakerPromo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours
        const newDays = newHours < 0 ? prevTime.days - 1 : prevTime.days

        return {
          days: newDays < 0 ? 0 : newDays,
          hours: newHours < 0 ? 23 : (newMinutes < 0 ? newHours - 1 : newHours) % 24,
          minutes: newMinutes < 0 ? 59 : newMinutes % 60,
          seconds: newSeconds < 0 ? 59 : newSeconds % 60,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-black my-11 text-white min-h-[500px] flex items-center">
      <div className="w-[85%] container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-green-400 font-medium mb-2">Categories</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Enhance Your
                <br />
                Music Experience
              </h1>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white text-black rounded-full w-24 h-24 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</span>
                <span className="text-sm">Hours</span>
              </div>
              <div className="bg-white text-black rounded-full w-24 h-24 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{timeLeft.days.toString().padStart(2, "0")}</span>
                <span className="text-sm">Days</span>
              </div>
              <div className="bg-white text-black rounded-full w-24 h-24 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</span>
                <span className="text-sm">Minutes</span>
              </div>
              <div className="bg-white text-black rounded-full w-24 h-24 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</span>
                <span className="text-sm">Seconds</span>
              </div>
            </div>

            <button className="bg-green-400 hover:bg-green-500 text-black font-medium py-3 px-8 rounded-md transition-colors">
              Buy Now!
            </button>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={beets}
              alt="JBL Speaker"
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
