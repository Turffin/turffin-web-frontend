import { BookOpen, Users, Award, Clock } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with years of real-world experience"
    },
    {
      icon: Users,
      title: "Interactive Learning",
      description: "Engage with peers and instructors through live sessions and discussions"
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn recognized certificates upon course completion"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Learn at your own pace with 24/7 access to course materials"
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Lumeeni?
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to succeed in your learning journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
