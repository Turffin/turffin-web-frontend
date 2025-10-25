export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Software Engineer",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      content: "Lumeeni transformed my career. The courses are practical and the instructors are amazing. I landed my dream job within 3 months!"
    },
    {
      name: "Maria Garcia",
      role: "Data Analyst",
      company: "DataFlow",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      content: "The hands-on approach and real-world projects helped me gain confidence. The community support is incredible!"
    },
    {
      name: "David Kim",
      role: "Product Manager",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      content: "Best investment I've made in my career. The quality of content and the practical skills I gained are unmatched."
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of successful learners
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
