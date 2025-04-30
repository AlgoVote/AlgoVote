import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Google Fonts를 next/font를 통해 로딩
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: '알고투표 - 정확한 정보를 바탕으로, 현명한 선택을',
  description: '알고투표는 객관적인 정보를 통해 유권자들이 편향 없이 후보자를 비교하고 현명한 선택을 할 수 있도록 돕는 플랫폼입니다.',
  openGraph: {
    title: "알고투표",
    description: "알고투표는 객관적인 정보를 통해 유권자들이 편향 없이 후보자를 비교하고 현명한 선택을 할 수 있도록 돕는 플랫폼입니다.",
    url: "https://algo-vote-rosy.vercel.app/",
    siteName: "알고투표",
    images: [
      {
        url: "https://github.com/user-attachments/assets/28b5f0bb-1473-4007-b3c6-ddc1f34da42f",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "알고투표",
    description: "알고투표는 객관적인 정보를 통해 유권자들이 편향 없이 후보자를 비교하고 현명한 선택을 할 수 있도록 돕는 플랫폼입니다.",
    images: ["https://github.com/user-attachments/assets/28b5f0bb-1473-4007-b3c6-ddc1f34da42f"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" />
      </head>
      <body className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 