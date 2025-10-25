"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">E</span>
          </div>
          <span className="font-serif font-bold text-xl text-foreground">EduLearn</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors text-sm">
            Features
          </a>
          <a href="#instructors" className="text-foreground hover:text-primary transition-colors text-sm">
            Instructors
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors text-sm">
            Pricing
          </a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors text-sm">
            FAQ
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-foreground">
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-foreground hover:text-primary">
              Features
            </a>
            <a href="#instructors" className="block text-foreground hover:text-primary">
              Instructors
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary">
              Pricing
            </a>
            <a href="#faq" className="block text-foreground hover:text-primary">
              FAQ
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="w-full text-foreground">
                Sign In
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
