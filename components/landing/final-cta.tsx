import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
          Ready to Transform Your Career?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-balance">
          Start learning today with our free trial. No credit card required. Access to 50+ beginner courses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
            Get Updates
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">Join 50,000+ learners already transforming their careers</p>
      </div>
    </section>
  )
}
