import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long do I have access to the courses?",
      answer: "You have lifetime access to all courses you purchase. You can learn at your own pace and revisit the material anytime."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Yes, our certificates are industry-recognized and valued by employers worldwide. Many of our graduates have successfully used them to advance their careers."
    },
    {
      question: "What if I'm not satisfied with a course?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your purchase, no questions asked."
    },
    {
      question: "Do I need any prior experience?",
      answer: "No prior experience is required. Our courses are designed for all skill levels, from complete beginners to advanced learners."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Yes, all our courses are fully accessible on mobile devices through our responsive platform and mobile app."
    },
    {
      question: "Is there a community or support system?",
      answer: "Absolutely! You'll have access to our vibrant community of learners, instructors, and mentors who are always ready to help."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about learning with Lumeeni
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
