"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Smooth scroll function
  const scrollToNextSection = () => {
    const resumeSection = document.getElementById("resume")
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Track scroll position to hide indicator when user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative">
      <div className="container flex min-h-[85vh] flex-col items-center justify-center py-16 md:py-24">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <div className="mb-4 inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              Software Engineer
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">Hi, I&apos;m Shakib Al Hasan</h1>
            <p className="mb-8 text-xl text-gray-400">
              A passionate Mobile App Developer dedicated to crafting innovative software with clean, scalable code for
              CI/CD. Skilled in Flutter & Android, API integration, and Firebase. Eager to explore AI projects and push
              technology forward with premium designs and seamless functionality.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild variant="default" className="bg-blue-500 hover:bg-blue-600">
                <Link href="https://github.com/shakibalhasan-code" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-500 text-white hover:bg-blue-500 hover:text-white"
              >
                <Link href="https://www.linkedin.com/in/shakibalhasan-code/" target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-blue-500 text-white hover:bg-blue-500 hover:text-white"
                onClick={() => (window.location.href = "mailto:work.shakib.ah@gmail.com")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0 flex-shrink-0 order-first md:order-last">
            <Image
              src="https://avatars.githubusercontent.com/u/150550328?v=4"
              alt="Shakib Al Hasan"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-500 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="text-gray-400 mb-2">Scroll to see my resume</p>
          <button
            onClick={scrollToNextSection}
            className="animate-bounce bg-blue-500/20 rounded-full p-2 text-blue-500 hover:bg-blue-500/30 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
