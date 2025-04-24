import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Join Venture AI",
      period: "Jan 2025 - Present",
      description:
        "Building innovative mobile apps with Flutter, transforming client ideas into reality. Collaborating with backend & UI/UX teams to craft seamless and engaging user experiences.",
      type: "Full-time",
    },
    {
      title: "Freelance Software Developer",
      company: "Upwork",
      period: "2024 - Present",
      description:
        "Creating and publishing mobile app source codes on CodeCanyon, enhancing coding structure and adhering to best practices.",
      type: "Freelance",
    },
    {
      title: "Jr IT Specialist",
      company: "SkyLine Enterprise",
      period: "Nov 2021 - Jul 2023",
      description:
        "Provided tech-related solutions, managed WordPress website, created/fixed bugs, ran Google/Facebook ads, and solved client problems.",
      type: "Full-time",
    },
  ]

  return (
    <section id="experience" className="py-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-white">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-500">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
