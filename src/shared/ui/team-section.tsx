"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import onePhoto from '@/assets/Frame 874.png'
import twoPhoto from '@/assets/Frame 875.png'
import threePhoto from '@/assets/Frame 876.png'

const teamMembers = [
  [
    {
      id: 1,
      name: "Tom Cruise",
      position: "Founder & Chairman",
      image: onePhoto,
    },
    {
      id: 2,
      name: "Emma Watson",
      position: "Managing Director",
      image: twoPhoto,
    },
    {
      id: 3,
      name: "Will Smith",
      position: "Product Designer",
      image: threePhoto,
    },
  ],
  [
    {
      id: 4,
      name: "John Doe",
      position: "Marketing Director",
      image: onePhoto,
    },
    {
      id: 5,
      name: "Sarah Johnson",
      position: "Lead Developer",
      image: twoPhoto,
    },
    {
      id: 6,
      name: "Michael Brown",
      position: "Financial Analyst",
      image: threePhoto,
    },
  ],
  [
    {
      id: 7,
      name: "Emily Davis",
      position: "Customer Support Lead",
      image: onePhoto,
    },
    {
      id: 8,
      name: "Robert Wilson",
      position: "Operations Manager",
      image: twoPhoto,
    },
    {
      id: 9,
      name: "Jessica Miller",
      position: "UX Designer",
      image: threePhoto,
    },
  ],
]

export default function TeamSection() {
  // Состояние для отслеживания текущей страницы (0, 1, 2)
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = teamMembers.length

  // Обработчик клика по точке пагинации
  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  // Обработчики для кнопок "Предыдущая" и "Следующая"
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers[currentPage].map((member) => (
          <div key={member.id} className="bg-gray-50 p-6 rounded-md">
            <div className="aspect-w-3 aspect-h-4 mb-4">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={350}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{member.position}</p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Пагинация с кнопками навигации */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        {/* Кнопка "Предыдущая" */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className={`flex items-center justify-center w-10 h-10 rounded-full border ${
            currentPage === 0
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-300 text-gray-600 hover:bg-gray-100"
          }`}
          aria-label="Предыдущая страница"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Точки пагинации */}
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPage ? "bg-red-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Перейти на страницу ${index + 1}`}
            />
          ))}
        </div>

        {/* Кнопка "Следующая" */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className={`flex items-center justify-center w-10 h-10 rounded-full border ${
            currentPage === totalPages - 1
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-300 text-gray-600 hover:bg-gray-100"
          }`}
          aria-label="Следующая страница"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
