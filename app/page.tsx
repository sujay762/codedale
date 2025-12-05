import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { LogoCarousel } from "@/components/logo-carousel"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { FloatingNav } from "@/components/floating-nav"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div
        className="relative bg-[#f8fafc]"
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      >
        <Header />
        <HeroSection />
      </div>

      <ProjectShowcase />
      <LogoCarousel />
      <ServicesSection />
      <CTASection />
      <SiteFooter />
      <FloatingNav />
    </main>
  )
}
