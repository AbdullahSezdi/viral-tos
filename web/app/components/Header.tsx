'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            TikTok Analiz
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#teknik" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider">
              Teknik Rapor
            </Link>
            <Link href="#yol-haritasi" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider">
              Yol Haritası
            </Link>
            <Link href="#genel" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider">
              Genel Rapor
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link
              href="#teknik"
              className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Teknik Rapor
            </Link>
            <Link
              href="#yol-haritasi"
              className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Yol Haritası
            </Link>
            <Link
              href="#genel"
              className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Genel Rapor
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
} 