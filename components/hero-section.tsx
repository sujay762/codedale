"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ProjectCard } from "./project-card" // Ensure ProjectCard is imported

const testimonials = [
  {
    quote: "CodeDale turned the impossible into possible and redefined our expectations of technology partners.",
    author: "Narasimha Reddy",
    title: "CEO, TFS",
  },
  {
    quote: "CodeDale didn't just help us build our vision — they helped us build our future.",
    author: "Sujith Reddy Gopu",
    title: "CEO, Fluent Pro",
  },
]

const avatars = ["/avatar-1.jpg", "/avatar-2.jpg", "/avatar-3.jpg"]

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Dotted background pattern - only for hero area */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8 pt-12 md:pt-20 pb-24">
        {/* Main Content Container with Side Testimonials */}
        <div className="relative">
          {/* Left Testimonial */}
          <div
            className={cn(
              "hidden xl:block absolute -left-4 top-32 transition-all duration-700 ease-out z-10",
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <div
              className="bg-white rounded-2xl shadow-xl p-5 max-w-[240px] relative border border-border/20"
              style={{ transform: "rotate(-6deg)" }}
            >
              <span className="absolute top-3 right-4 text-4xl text-muted-foreground/15 font-serif leading-none">
                "
              </span>
              <p className="text-[13px] text-muted-foreground leading-relaxed pr-6">"{testimonials[0].quote}"</p>
              <p className="mt-4 text-[13px] text-foreground font-medium">
                - {testimonials[0].author}, {testimonials[0].title}
              </p>
            </div>
          </div>

          {/* Right Testimonial */}
          <div
            className={cn(
              "hidden xl:block absolute -right-4 top-32 transition-all duration-700 ease-out z-10",
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <div
              className="bg-white rounded-2xl shadow-xl p-5 max-w-[240px] relative border border-border/20"
              style={{ transform: "rotate(6deg)" }}
            >
              <span className="absolute top-3 right-4 text-4xl text-muted-foreground/15 font-serif leading-none">
                "
              </span>
              <p className="text-[13px] text-muted-foreground leading-relaxed pr-6">"{testimonials[1].quote}"</p>
              <p className="mt-4 text-[13px] text-foreground font-medium">
                - {testimonials[1].author}, {testimonials[1].title}
              </p>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="flex flex-col items-center text-center max-w-[750px] mx-auto">
            {/* Availability Badge */}
            <div
              className={cn(
                "inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-white shadow-sm mb-10 transition-all duration-500 ease-out",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
              )}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm text-foreground font-medium">Only 2 open slots available!</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </div>

            {/* Headline */}
            <h1
              className={cn(
                "text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold text-foreground leading-[1.15] tracking-tight transition-all duration-700 ease-out",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: "100ms" }}
            >
              <span className="inline-flex items-center gap-3 flex-wrap justify-center">
                World-class Tech Partner
                {/* Vercel triangle icon */}
                <svg className="w-7 h-7 md:w-9 md:h-9 inline-block" viewBox="0 0 76 65" fill="none">
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000" />
                </svg>
                {/* Figma icon */}
                <svg className="w-6 h-6 md:w-8 md:h-8 inline-block" viewBox="0 0 38 57" fill="none">
                  <path
                    d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
                    fill="#1ABCFE"
                  />
                  <path
                    d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
                    fill="#0ACF83"
                  />
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                </svg>
              </span>
              <br />
              <span className="inline-flex items-center gap-3 flex-wrap justify-center">
                Engineering Your Digital
                {/* Lightning bolt icon */}
                <svg className="w-7 h-7 md:w-9 md:h-9 inline-block" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    fill="#F97316"
                    stroke="#F97316"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-primary">Success</span>
              </span>
            </h1>

            {/* Subheading */}
            <p
              className={cn(
                "mt-6 text-base md:text-lg text-muted-foreground max-w-[540px] leading-relaxed transition-all duration-700 ease-out",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: "200ms" }}
            >
              Trusted by startups and enterprises to design, build, and scale products that perform globally.
            </p>

            {/* CTA Button */}
            <div
              className={cn(
                "mt-8 transition-all duration-700 ease-out",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: "300ms" }}
            >
              <Button
                size="lg"
                className="rounded-full bg-foreground text-background hover:bg-foreground/90 gap-3 pl-5 pr-7 py-7 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                Book a 30-Min call
              </Button>
            </div>

            {/* Social Proof */}
            <div
              className={cn(
                "mt-8 flex items-center gap-5 transition-all duration-700 ease-out",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full border-[3px] border-white overflow-hidden bg-muted shadow-sm"
                  >
                    <Image
                      src={avatar || "/placeholder.svg"}
                      alt={`Client ${i + 1}`}
                      width={44}
                      height={44}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-11 h-11 rounded-full border-[3px] border-white bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground shadow-sm">
                  +30
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">From 30+ reviews</span>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ease-out",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
          style={{ transitionDelay: "500ms" }}
        >
          <ProjectCard
            image="/ai-learning-app-purple-illustration-with-cartoon-c.jpg"
            label="AI learning App"
            labelColor="bg-orange-500"
            overlayTitle="English made fun and personal with AI"
            overlaySubtitle="AI-powered books and a talking chatbot"
            ctaText="Start Learning Now"
            ctaColor="bg-orange-500 hover:bg-orange-600"
            description="CodeDale turned our vision into reality. Intelligent, personalized feedback changed content learning forever."
            response="Honored to drive lasting impact."
            author="Sujith Reddy Gopu"
            authorTitle="Founder of Fluent Pro"
            authorImage="/professional-man-headshot.png"
          />
          <ProjectCard
            image="/mobile-app-dark-theme-screens-mockup-business-dash.jpg"
            overlayTitle="Smart ERP to Global"
            description="CodeDale met our most ambitious requirements. Their team became a trusted extension, not just a vendor."
            response="Proud to be your trusted partner."
            author="Abhishek"
            authorTitle="Senior Business Analyst at Conquer"
            authorImage="/professional-indian-man-headshot.jpg"
          />
          <ProjectCard
            image="/saas-king-hackathon-landing-page-purple-gradient-n.jpg"
            label="47:32"
            labelColor="bg-teal-500"
            topRightBadge={true}
            overlayTitle="SaaS King Hackathon"
            overlaySubtitle="Hire Global Talent"
            description="From vision to live product in seven days— unbelievable! CodeDale delivered speed and perfection."
            response="Thrilled to make the impossible possible."
            author="Karim A. Oumran"
            authorTitle="Founder of SaaS King"
            authorImage="/professional-middle-eastern-man.png"
          />
        </div>

        <div className="flex items-center justify-center gap-2 mt-10 pb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-foreground"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20"></div>
        </div>
      </div>
    </section>
  )
}
