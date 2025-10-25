const outcomes = [
  {
    number: "1",
    title: "Structured Learning Path",
    description:
      "Follow a carefully designed curriculum that builds skills progressively from basics to advanced topics.",
  },
  {
    number: "2",
    title: "Hands-On Projects",
    description: "Apply what you learn with real-world projects that you can add to your portfolio.",
  },
  {
    number: "3",
    title: "Community Support",
    description: "Connect with fellow learners, ask questions, and get help from instructors and peers.",
  },
  {
    number: "4",
    title: "Career Advancement",
    description: "Gain skills that employers are looking for and advance your career with confidence.",
  },
]

export function LearningOutcomes() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
            What You'll Achieve
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Transform your skills and career with our comprehensive learning outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-serif font-bold text-lg">
                  {outcome.number}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">{outcome.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{outcome.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
