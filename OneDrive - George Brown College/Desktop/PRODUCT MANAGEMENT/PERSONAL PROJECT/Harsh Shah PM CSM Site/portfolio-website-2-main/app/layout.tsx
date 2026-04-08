import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Cursor from '@/components/Cursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Harsh Shah -- AI Product Manager',
  description:
    'AI Product Manager building research-backed products from real user insights. Based in Toronto. I turn customer problems into AI-powered products.',
  keywords: ['Harsh Shah', 'AI Product Manager', 'Customer Success', 'Toronto', 'SaaS'],
  openGraph: {
    title: 'Harsh Shah -- AI Product Manager',
    description: 'I turn customer problems into AI-powered products.',
    type: 'website',
    locale: 'en_CA',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-canvas text-white overflow-x-hidden">
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  )
}
