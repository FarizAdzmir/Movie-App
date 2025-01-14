import { Inter } from 'next/font/google'
import favicon from './favicon.svg'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie App',
  description: 'Browse and search movies',
  icons: [{ rel: 'icon', url: favicon.src }]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
