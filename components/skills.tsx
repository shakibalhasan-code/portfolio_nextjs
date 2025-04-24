import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skills = {
    mobileDevelopment: ["Flutter (Dart)", "Android (Java)"],
    databaseBackend: ["Firebase Firestore", "Firebase Realtime", "MongoDB", "Socket/WebSocket"],
    cloudDeployment: ["DigitalOcean Cloud", "CI/CD (CodeMagic/GitActions)", "REST API, HTTP", "ZegoCloud"],
    versionControl: ["Git", "GitHub", "Team Collaboration", "Agile Development"],
    devOpsMonetization: ["Google Play Console", "AdMob Integration"],
    storage: ["Shared Preferences", "sqflite"],
    tools: ["Postman", "VS Code", "Android Studio", "Figma", "Canva"],
    softSkills: ["Communication", "Problem-solving", "Time Management", "Adaptability", "Leadership", "Collaboration"],
    languages: ["English", "Bengali (Native)"],
    notifications: ["OneSignal", "Firebase Push", "Local Push"],
  }

  const courses = [
    {
      title: "CSE Fundamentals with Problem Solving",
      provider: "Phitron",
      period: "Running",
    },
    {
      title: "Google Professional IT Specialist",
      provider: "Google",
      period: "Oct 2024",
      score: "87/100",
    },
    {
      title: "Complete Flutter App Development Career Path",
      provider: "Interactive Cares",
      period: "Dec 2023 - Sep 2024",
    },
    {
      title: "Flutter UI Bootcamp",
      provider: "Udemy",
      period: "Ongoing",
    },
    {
      title: "Network & Security - Mobile Platform",
      provider: "Great Learning",
      period: "Jan 2024 - Feb 2024",
    },
    {
      title: "Software Design and Architecture Specialization",
      provider: "University Of Alberta",
      period: "Ongoing",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <div className="grid gap-12">
          <div>
            <h2 className="mb-12 text-3xl font-bold text-white">Skills</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">{category.replace(/([A-Z])/g, " $1").trim()}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-500/10 text-blue-500">
                        {skill}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-12 text-3xl font-bold text-white">Courses & Certifications</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{course.provider}</p>
                    <p className="text-sm text-gray-500">{course.period}</p>
                    {course.score && (
                      <Badge className="mt-2 bg-green-500/10 text-green-500">Score: {course.score}</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
