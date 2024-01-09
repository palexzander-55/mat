import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bulma/css/bulma.min.css';


import NavBar from './components/navbar'
import Footer from './components/footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Minnesota Academy of Tumbling',
  description: 'A place to learn about tumbling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="has-navbar-fixed-top" lang="en">
      <head>
        {/* <link rel="stylesheet" href="https://unpkg.com/bulmaswatch/flatly/bulmaswatch.min.css"></link> */}
        <link href="https://cdn.jsdelivr.net/npm/@creativebulma/bulma-divider@1.1.0/dist/bulma-divider.min.css" rel="stylesheet" />
      
      </head>

      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
