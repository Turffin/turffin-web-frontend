export function Instructors() {
  const instructors = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer",
      company: "Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "10+ years in full-stack development"
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert in machine learning and AI"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "Apple",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Award-winning design professional"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn from Industry Experts
          </h2>
          <p className="text-xl text-gray-600">
            Our instructors are top professionals from leading companies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {instructor.name}
              </h3>
              <p className="text-blue-600 font-medium mb-1">
                {instructor.role} at {instructor.company}
              </p>
              <p className="text-gray-600 text-sm">
                {instructor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
