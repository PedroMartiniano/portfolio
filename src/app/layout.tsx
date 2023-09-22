import { Navbar } from '@/Components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Portfólio Pedro',
  description: "This is Pedro's portfólio",
}

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-montserrat' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${montserrat.variable} bg-gray-200`}>
        <Navbar />
        <main className='h-screen px-4'>
          {children}
        </main>
      </body>
    </html>
  )
}
