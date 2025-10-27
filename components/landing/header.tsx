"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { isAuthenticated } from "@/lib/auth"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">E</span>
          </div>
          <span className="font-serif font-bold text-lg text-foreground">EduLearn</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#instructors" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Instructors
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Pricing
          </a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            FAQ
          </a>
          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm font-medium">
              Resources
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">Blog</a>
                <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">Help Center</a>
                <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">Community</a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated() ? (
            <Link href="/home">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Go to Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="text-foreground hover:bg-muted">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-foreground hover:text-primary py-2 font-medium">
              Features
            </a>
            <a href="#instructors" className="block text-foreground hover:text-primary py-2 font-medium">
              Instructors
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary py-2 font-medium">
              Pricing
            </a>
            <a href="#faq" className="block text-foreground hover:text-primary py-2 font-medium">
              FAQ
            </a>
            <div className="border-t border-border pt-4">
              <div className="space-y-2">
                <a href="#" className="block text-foreground hover:text-primary py-2 text-sm">Blog</a>
                <a href="#" className="block text-foreground hover:text-primary py-2 text-sm">Help Center</a>
                <a href="#" className="block text-foreground hover:text-primary py-2 text-sm">Community</a>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              {isAuthenticated() ? (
                <Link href="/home">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" className="w-full text-foreground">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}