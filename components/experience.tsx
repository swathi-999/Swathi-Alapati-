import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, TrendingUp } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "IT Student Assistant",
      company: "California State University, Northridge",
      period: "Jan 2025 – Present",
      highlights: [
        "Serve as primary point of contact for end-user technical support for faculty, staff, and students",
        "Manage full ticket lifecycle in TOPdesk, ensuring timely resolution and accurate documentation",
        "Provide direct assistance for password resets, software installations (Microsoft 365, Adobe, Lockdown Browser), and network troubleshooting",
        "Support and administer Microsoft 365 (Outlook, SharePoint, Teams) and Google Workspace",
        "Maintain accurate IT asset inventory including tagging, deployment tracking, and lifecycle documentation",
        "Provide on-site A/V support (Zoom, projectors, LCD displays) for meetings and classes",
        "Uphold IT security standards including endpoint encryption, MFA (VPN, DUO, Eduroam)",
        "Perform incident resolution and system configuration using Intune/SCCM and PowerShell",
      ],
      skills: [
        "TOPdesk",
        "Microsoft 365",
        "Google Workspace",
        "Active Directory",
        "Intune/SCCM",
        "PowerShell",
        "VPN",
        "DUO MFA",
      ],
      current: true,
    },
    {
      title: "Data Analyst",
      company: "Wipro Technologies",
      period: "Jul 2022 – Aug 2023",
      highlights: [
        "Performed SQL and Excel-based analysis for project validation and KPI tracking",
        "Created Power BI dashboards for reporting and cost optimization",
        "Improved analytics workflows using AWS, Azure, and Cloudera platforms",
        "Automated reporting processes for quality metrics, improving reporting efficiency by 20%",
        "Prepared forecasts and dashboards enhancing predictive accuracy by 15%",
        "Identified and resolved data anomalies, ensuring 99.5% accuracy across reports",
        "Utilized SQL for complex data analysis, reducing data processing time by 30%",
        "Provided technical support and training to peers, improving data analysis proficiency by 25%",
      ],
      skills: ["SQL", "Power BI", "AWS", "Azure", "Cloudera", "Excel", "SharePoint", "Teams"],
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Experience</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Delivering technical excellence and data-driven solutions across diverse environments
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 bg-card"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-primary to-accent" />

              <div className="p-8 md:p-10 space-y-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary mt-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold">{exp.title}</h3>
                        <p className="text-xl text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-muted/50 border-2 border-border">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <p className="text-sm font-semibold">{exp.period}</p>
                    {exp.current && (
                      <span className="ml-2 relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-base leading-relaxed text-foreground/85 flex gap-4 group/item">
                      <span className="text-primary text-xl font-bold mt-1 shrink-0">•</span>
                      <span className="flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-3 text-sm font-medium text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span>Technologies & Tools</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
