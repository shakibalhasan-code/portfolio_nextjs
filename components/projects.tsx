import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Finance AI Assistant Mobile App",
      description:
        "Finance Tracking with AI insights that analyzes data & provides financial tips. Features intuitive UI, notification capabilities, and admin panel for push notifications. Collaborated with AI developers & backend team for smooth integration.",
      image: "https://raw.githubusercontent.com/shakibalhasan-code/financial_ai/master/assets/finance_ai_cover.png",
      duration: "3 months",
      tags: ["Flutter", "AI Integration", "Firebase", "Push Notifications", "Admin Panel", "Financial Analytics"],
    },
    {
      title: "AI Baseball",
      description:
        "Applies AI and machine learning techniques to analyze baseball data, focusing on predictive modeling, player evaluation, and game strategy optimization. The project leverages Python and Jupyter Notebooks to extract insights from baseball-related datasets.",
      image: "https://raw.githubusercontent.com/shakibalhasan-code/ai_baseball/refs/heads/master/cover.png",
      duration: "Developing",
      tags: ["Flutter", "GetX", "Clean UI", "AI", "Machine Learning", "Data Analysis"],
      github: "https://github.com/shakibalhasan-code/ai_baseball",
    },
    {
      title: "myTube : Youtube cloned",
      description:
        "User can play video without ads, awesome UI, trending videos, video to audio and audio to video conversion, background audio play, and video download functionality.",
      image: "https://raw.githubusercontent.com/shakibalhasan-code/youtube_clone/refs/heads/master/muytube.png",
      duration: "2 weeks",
      tags: [
        "Flutter",
        "Figma",
        "REST API",
        "Postman",
        "GetX",
        "Firebase",
        "geo_locator",
        "Music Player",
        "Video Player",
      ],
      github: "https://github.com/shakibalhasan-code/youtube_clone",
    },
    {
      title: "FlutterStream - OTT Platform",
      description:
        "A startup OTT solution with live TV streaming, video playback, and admin panel built with Flutter and Firebase.",
      image: "https://raw.githubusercontent.com/shakibalhasan-code/my_portfolio/refs/heads/master/flutter_stream.png",
      duration: "Oct 2024 - Jan 2025",
      tags: ["Flutter", "Firebase", "OneSignal", "Admin Panel"],
      github: "https://github.com/shakibalhasan-code/flutter-stream-mobile",
    },
    {
      title: "Business Management System",
      description: "Developed 2 mobile apps & 1 admin panel with Flutter framework using Firebase as backend.",
      image: "https://raw.githubusercontent.com/shakibalhasan-code/my_portfolio/refs/heads/master/cover.png",
      duration: "4 Months",
      tags: ["Flutter", "Firebase", "GetX"],
    },
  ]

  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-white">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-gray-900 border-gray-800">
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-400"
                    >
                      <Github size={24} />
                    </a>
                  )}
                </div>
                <CardDescription>{project.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-blue-500/10 text-blue-500">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
