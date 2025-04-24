import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { structuredData } from "./structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shakib Al Hasan - Software Developer | Flutter & Mobile Development",
  description: "Portfolio of Shakib Al Hasan, a passionate software developer specializing in Flutter and mobile development. Explore my projects, skills, and experience.",
  keywords: ["Software Developer", "Flutter", "Mobile Development", "Shakib Al Hasan"],
  openGraph: {
    title: "Shakib Al Hasan - Software Developer",
    description: "Passionate Flutter and mobile app developer showcasing innovative projects and skills.",
    images: [{ url: "https://avatars.githubusercontent.com/u/150550328?v=4" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-gray-950`}>{children}</body>
    </html>
  )
}
