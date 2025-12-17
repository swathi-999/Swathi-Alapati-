"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, MapPin, Phone, Send, Briefcase } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Connect</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Open to full-time opportunities in IT support, data analysis, and cloud technologies
          </p>
        </div>

        <Card className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 shadow-lg">
          <div className="p-8 md:p-12">
            <div className="grid gap-12 md:grid-cols-[1.2fr,1fr]">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold">Get in Touch</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Currently pursuing my Master's in Computer Science at CSUN (graduating December 2025) and actively
                    seeking opportunities to contribute my skills in data analysis, technical support, and cloud
                    platforms to innovative teams.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="mailto:swathialapati3006@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-muted-foreground mb-0.5">Email</p>
                      <span className="font-semibold">swathialapati3006@gmail.com</span>
                    </div>
                  </a>

                  <a
                    href="tel:+18187230174"
                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-muted-foreground mb-0.5">Phone</p>
                      <span className="font-semibold">+1 (818) 723-0174</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-border bg-muted/30">
                    <div className="p-3 rounded-lg bg-muted">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-muted-foreground mb-0.5">Location</p>
                      <span className="font-semibold">Los Angeles, California</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 flex flex-col justify-center">
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 space-y-4">
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <p className="font-bold text-lg">Job Seeking Status</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>
                    <p className="font-semibold text-primary">Currently Available</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Available for full-time opportunities starting December 2025
                  </p>
                </div>

                <Button asChild size="lg" className="w-full shadow-lg gap-2 h-12">
                  <a href="https://linkedin.com/in/swathialapati" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="w-full gap-2 h-12 border-2 bg-transparent">
                  <a href="mailto:swathialapati3006@gmail.com">
                    <Send className="w-5 h-5" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <footer className="text-center text-sm text-muted-foreground pt-12 border-t border-border">
          <p>© 2025 Swathi Alapati. Built with Next.js and deployed on Vercel.</p>
        </footer>
      </div>
    </section>
  )
}
