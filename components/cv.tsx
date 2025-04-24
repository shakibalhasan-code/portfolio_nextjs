"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Mail, Globe, Github, Linkedin, Phone } from "lucide-react"
import Link from "next/link"

export function CV() {
  // Function to create a dummy PDF download
  const handleDownloadCV = () => {
    // In a real implementation, you would link to an actual PDF file
    alert("In a production environment, this would download your CV as a PDF")
  }

  return (
    <section id="resume" className="py-12 scroll-mt-16">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">My Resume</h2>
          <Button className="bg-blue-500 hover:bg-blue-600" onClick={handleDownloadCV}>
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        <Card className="bg-gray-900 border-gray-800 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 pb-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-2">SHAKIB AL HASAN</h1>
              <h2 className="text-xl text-blue-100 mb-4">FLUTTER DEVELOPER</h2>
              <div className="flex justify-center space-x-4 mb-4">
                <Link href="mailto:work.shakib.ah@gmail.com" className="text-white hover:text-blue-200">
                  <Mail className="h-5 w-5" />
                </Link>
                <Link href="https://shakibalhasan.dev" className="text-white hover:text-blue-200">
                  <Globe className="h-5 w-5" />
                </Link>
                <Link href="https://github.com/shakibalhasan-code" className="text-white hover:text-blue-200">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/shakibalhasan-code/" className="text-white hover:text-blue-200">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="tel:+8801857895107" className="text-white hover:text-blue-200">
                  <Phone className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-blue-100">
                Dhaka, BD |{" "}
                <Link href="tel:+8801857895107" className="hover:underline">
                  +8801857895107
                </Link>{" "}
                |{" "}
                <Link href="mailto:work.shakib.ah@gmail.com" className="hover:underline">
                  work.shakib.ah@gmail.com
                </Link>{" "}
                |{" "}
                <Link href="https://shakibalhasan.dev" className="hover:underline">
                  Portfolio
                </Link>{" "}
                |{" "}
                <Link href="https://github.com/shakibalhasan-code" className="hover:underline">
                  Github
                </Link>{" "}
                |{" "}
                <Link href="https://www.linkedin.com/in/shakibalhasan-code/" className="hover:underline">
                  Linkedin
                </Link>
              </p>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">TECHNICAL SKILLS</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Flutter",
                      "Dart",
                      "GetX State Management",
                      "Firebase Firestore",
                      "Firebase Realtime",
                      "Socket/WebSocket",
                      "REST API, HTTP",
                      "ZegoCloud",
                      "MongoDB",
                      "Shared Preferences",
                      "sqflite",
                      "Local Notifications/OneSignal/FCM",
                      "CI/CD (CodeMagic/GitActions)",
                    ].map((skill, index) => (
                      <Badge key={index} className="bg-blue-500/10 text-blue-400">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                    EDUCATION & COURSES
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium">
                        <Link href="https://phitron.io" target="_blank" className="hover:text-blue-400">
                          CSE Fundamentals with Problem Solving - Phitron
                        </Link>
                      </h4>
                      <p className="text-gray-400 text-sm">Running</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        <Link href="https://interactivecares.com" target="_blank" className="hover:text-blue-400">
                          Complete Flutter App Development Bootcamp
                        </Link>
                      </h4>
                      <p className="text-gray-400 text-sm">Dec 2023 - Oct 2024</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        <Link href="https://cub.edu.bd" target="_blank" className="hover:text-blue-400">
                          Bsc in CSE - CUB
                        </Link>
                      </h4>
                      <p className="text-gray-400 text-sm">Running</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                    ADDITIONAL INFORMATION
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-white font-medium">Languages:</h4>
                      <p className="text-gray-400">English, Bangla</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Certifications:</h4>
                      <p className="text-gray-400">
                        <Link
                          href="https://www.google.com/certificates"
                          target="_blank"
                          className="hover:text-blue-400"
                        >
                          P. Google IT Specialist
                        </Link>{" "}
                        |
                        <Link href="https://www.greatlearning.com" target="_blank" className="hover:text-blue-400">
                          Network Security in Mobile Development
                        </Link>
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Hobby:</h4>
                      <p className="text-gray-400">Playing Cricket, Football & Making some unique projects</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">SUMMARY</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Flutter Developer with 1+ years of experience building scalable, high-performance apps. Expert in
                    Firebase, GetX, API integration, and AI-driven features with a passion for clean UI/UX. Google
                    Certified, constantly exploring new tech to innovate and elevate mobile experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                    PROFESSIONAL EXPERIENCE
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <h4 className="text-white font-semibold">
                          <Link href="#" className="hover:text-blue-400">
                            Join Venture AI
                          </Link>{" "}
                          - Software Developer
                        </h4>
                        <span className="text-gray-400 text-sm">Jan 2025 - Present</span>
                      </div>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>
                          Building innovative AI mobile apps with Flutter, transforming client's ideas into reality.
                        </li>
                        <li>
                          Collaborating with backend & UI/UX teams to craft seamless and engaging user experiences.
                        </li>
                        <li>Striving for excellence by writing clean, scalable code and ensuring top performance.</li>
                        <li>
                          Growing daily—embracing new challenges, mastering new technologies, and pushing boundaries.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <h4 className="text-white font-semibold">
                          <Link href="https://codecanyon.net" target="_blank" className="hover:text-blue-400">
                            CodeCanyon
                          </Link>
                        </h4>
                        <span className="text-gray-400 text-sm">Feb 2024 - Present</span>
                      </div>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>
                          Develop and publish online mobile applications on CodeCanyon, ensuring high performance and
                          user engagement.
                        </li>
                        <li>
                          Focus on clean code, API integration, and advanced state management. Optimize apps for
                          marketplace approval and customer satisfaction.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">PROJECTS</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold">
                        <Link
                          href="https://github.com/shakibalhasan-code/financial_ai"
                          target="_blank"
                          className="hover:text-blue-400"
                        >
                          Financial AI Assistant Mobile App
                        </Link>
                      </h4>
                      <p className="text-gray-400">
                        Finance Tracking | AI Insights & Optimization | Seamless User Experience
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        <Link
                          href="https://github.com/shakibalhasan-code/ai_baseball"
                          target="_blank"
                          className="hover:text-blue-400"
                        >
                          AI Baseball
                        </Link>
                      </h4>
                      <p className="text-gray-400">AI Analysis | Machine Learning | Data Visualization</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        <Link href="#" target="_blank" className="hover:text-blue-400">
                          Menstrual Cycle Tracker
                        </Link>
                      </h4>
                      <p className="text-gray-400">
                        Cycle Tracking | Display predicted ovulation and fertile windows | Calendar View
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
