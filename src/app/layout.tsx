import { Navbar } from '@/Components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Portfolio Pedro',
  description: "This is Pedro Paulino Martiniano portfolio",
}

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-montserrat' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${montserrat.variable} bg-gray-200 h-screen`}>
        <Navbar />
        <main className='px-4 border-l-[12px] border-yellow-600'>
          {children}
        </main>
      </body>
    </html>
  )
}
