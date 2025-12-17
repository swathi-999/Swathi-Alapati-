"use client"

import { ArrowRight, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-24 pb-12">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl opacity-50" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                  <Image
                    src="/swathi1.png"
                    alt="Swathi Alapati - IT Support Specialist & Data Analyst"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-primary">Open to Opportunities</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-pretty">
                  Swathi Alapati
                </h1>
                <div className="space-y-2">
                  <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
                    IT Support Specialist & Data Analyst
                  </p>
                  <p className="text-lg text-muted-foreground">Master's in Computer Science • Los Angeles, CA</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/80">
                Results-driven IT professional with proven expertise in technical support, data analysis, and systems
                administration. Skilled in leveraging <span className="font-semibold text-foreground">SQL</span>,{" "}
                <span className="font-semibold text-foreground">Python</span>,{" "}
                <span className="font-semibold text-foreground">Tableau</span>, and{" "}
                <span className="font-semibold text-foreground">Power BI</span> to deliver actionable business insights.
                Experienced in cloud platforms (<span className="font-semibold text-foreground">AWS</span>,{" "}
                <span className="font-semibold text-foreground">Azure</span>,{" "}
                <span className="font-semibold text-foreground">Snowflake</span>) and ETL processes.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" onClick={() => scrollToSection("contact")} className="gap-2 shadow-lg">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent">
                  <a href="https://linkedin.com/in/swathialapati" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              <a
                href="mailto:swathialapati3006@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-primary transition-colors" />
                <span>swathialapati3006@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
