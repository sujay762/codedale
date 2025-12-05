"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Achievements", href: "#achievements" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4" />
                </svg>
              </div>
              <span className="text-xl font-bold text-foreground">CodeDale</span>
            </Link>

            {/* Centered Navigation - Desktop */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center gap-1 px-2 py-2 rounded-full border border-border bg-white shadow-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2 px-5 py-2.5 text-sm font-medium">
                Book a Call
                <div className="w-5 h-5 rounded-full bg-muted-foreground/30 flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-white border border-border shadow-sm hover:bg-muted transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-background transition-all duration-300 ease-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6 p-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button className="mt-4 rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2 px-6 py-3 text-base">
            Book a Call
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </nav>
      </div>
    </>
  )
}
