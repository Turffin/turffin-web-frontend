import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Lumeeni</h3>
            <p className="text-gray-400 mb-4">
              Empowering learners worldwide with quality education and practical skills.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Web Development</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Data Science</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">UI/UX Design</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Digital Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Help Center</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Community</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Lumeeni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
