import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Cloud, Code, Database, GraduationCap, Settings, Shield } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      category: "Data Analysis & Visualization",
      skills: ["Power BI", "Tableau", "Excel Dashboards", "Statistical Analysis", "Data Modeling"],
      icon: BarChart3,
      color: "text-blue-600",
    },
    {
      category: "IT & Systems Support",
      skills: [
        "TOPdesk",
        "Microsoft 365 Admin Center",
        "Google Workspace",
        "Active Directory",
        "Intune/SCCM",
        "Endpoint Management",
        "VPN Configuration",
        "MFA (DUO, Eduroam)",
      ],
      icon: Settings,
      color: "text-green-600",
    },
    {
      category: "Networking & Security",
      skills: ["TCP/IP", "DNS", "VPN", "Incident Resolution", "End-user Support", "Troubleshooting"],
      icon: Shield,
      color: "text-red-600",
    },
    {
      category: "Programming & Databases",
      skills: ["MySQL", "Python", "Pandas", "NumPy", "ETL", "Data Warehousing", "Reporting"],
      icon: Database,
      color: "text-purple-600",
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Azure", "Snowflake"],
      icon: Cloud,
      color: "text-cyan-600",
    },
    {
      category: "Soft Skills",
      skills: [
        "Communication",
        "Troubleshooting",
        "Customer Service",
        "Collaboration",
        "Business Analysis",
        "Documentation",
      ],
      icon: Code,
      color: "text-orange-600",
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive technical proficiency across modern data and IT infrastructure
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="group p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 hover:border-primary/30"
              >
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3.5 rounded-xl bg-muted group-hover:bg-primary/10 transition-all duration-300 ${category.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold leading-tight pt-2">{category.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default text-xs font-medium px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border-2 border-primary/20 hover:border-primary/30 transition-colors">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold">Education</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3 p-6 rounded-xl bg-background border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <p className="font-bold text-xl">Master's in Computer Science</p>
                <p className="text-base text-muted-foreground">California State University, Northridge</p>
                <div className="flex items-center gap-2 pt-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <p className="text-sm text-accent font-semibold">Expected December 2025</p>
                </div>
              </div>

              <div className="space-y-3 p-6 rounded-xl bg-background border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <p className="font-bold text-xl">Bachelor's in Computer Science</p>
                <p className="text-base text-muted-foreground">Kakinada Institute of Engineering & Technology</p>
                <p className="text-sm text-muted-foreground font-semibold pt-2">2018 – 2022</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
