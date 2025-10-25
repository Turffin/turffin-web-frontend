import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "per month",
      description: "Perfect for beginners",
      features: [
        "Access to 50+ courses",
        "Community support",
        "Mobile app access",
        "Basic certificates"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$59",
      period: "per month",
      description: "Most popular choice",
      features: [
        "Access to all courses",
        "Priority support",
        "Live sessions",
        "Professional certificates",
        "1-on-1 mentoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team management",
        "Custom learning paths",
        "Analytics dashboard",
        "Dedicated support"
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Plan
          </h2>
          <p className="text-xl text-gray-600">
            Flexible pricing options to fit your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-blue-500 bg-blue-50' : 'bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">{plan.price}</div>
                <div className="text-gray-600">{plan.period}</div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
