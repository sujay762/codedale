"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Clock, Users, TrendingUp, Shield, Target, Lightbulb, Layers, Zap } from "lucide-react"

const challenges = [
  {
    icon: Clock,
    title: "Slow Time-to-Market",
    description: "Traditional development cycles are too long, causing missed opportunities and delayed revenue.",
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    icon: Users,
    title: "Talent Shortage",
    description: "Finding skilled developers who understand modern tech stacks is increasingly difficult.",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: TrendingUp,
    title: "Scaling Challenges",
    description: "Products that work at small scale often fail when user bases grow exponentially.",
    color: "text-rose-500",
    bgColor: "bg-rose-100",
  },
  {
    icon: Shield,
    title: "Security Concerns",
    description: "Cyber threats evolve rapidly, requiring constant vigilance and expertise to combat.",
    color: "text-amber-500",
    bgColor: "bg-amber-100",
  },
  {
    icon: Target,
    title: "Poor User Experience",
    description: "Complex interfaces frustrate users and lead to high abandonment rates.",
    color: "text-pink-500",
    bgColor: "bg-pink-100",
  },
  {
    icon: Lightbulb,
    title: "Innovation Gap",
    description: "Staying ahead of competitors requires continuous technological innovation.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    icon: Layers,
    title: "Integration Complexity",
    description: "Connecting disparate systems and APIs creates technical debt and maintenance nightmares.",
    color: "text-teal-500",
    bgColor: "bg-teal-100",
  },
  {
    icon: Zap,
    title: "Performance Issues",
    description: "Slow applications frustrate users and hurt search rankings and conversion rates.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex justify-center mb-6">
            <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          <div
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium mb-8 transition-all duration-500 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
            )}
          >
            Solutions Beyond Syntax
          </div>

          <h2
            className={cn(
              "text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
            style={{ transitionDelay: "100ms" }}
          >
            The Challenges Modern Businesses
            <br />
            Face
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={challenge.title} challenge={challenge} isVisible={isVisible} delay={200 + index * 50} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ChallengeCard({
  challenge,
  isVisible,
  delay,
}: {
  challenge: (typeof challenges)[0]
  isVisible: boolean
  delay: number
}) {
  const Icon = challenge.icon

  return (
    <div
      className={cn(
        "group relative p-5 rounded-xl bg-white border border-border/40 hover:border-border hover:shadow-md transition-all duration-300 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center mb-4", challenge.bgColor)}>
        <Icon className={cn("w-5 h-5", challenge.color)} />
      </div>

      <h3 className="text-sm font-semibold text-foreground mb-2">{challenge.title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{challenge.description}</p>
    </div>
  )
}
