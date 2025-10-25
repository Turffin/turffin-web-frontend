import React from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/15 rounded-full border border-accent/30">
                <span className="text-accent text-xs font-semibold uppercase tracking-wide">New</span>
                <span className="text-accent text-sm font-medium">AI-Powered Learning Paths</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Master New Skills Online
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance max-w-lg">
                Join thousands of learners gaining in-demand skills from expert instructors. Start your learning journey
                today with flexible, affordable courses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6"
              >
                Start Learning Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 text-foreground hover:bg-muted bg-transparent font-semibold text-base px-8 py-6"
              >
                Browse Courses
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground font-medium">Active Learners</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground font-medium">Expert Courses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">4.9★</p>
                <p className="text-sm text-muted-foreground font-medium">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Online Learning</h3>
                <p className="text-sm opacity-90">Interactive courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
