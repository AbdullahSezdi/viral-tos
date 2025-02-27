import React from 'react'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-gray-100">{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'TikTok Trend Analizi',
  description: 'TikTok trendlerini analiz eden web uygulaması',
} 