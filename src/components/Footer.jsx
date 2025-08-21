import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">CGEC INFO</h3>
            <div className="space-y-2 text-gray-300">
              <p>Cooch Behar Government Engineering College</p>
              <p>Harinchawra, Ghughumari</p>
              <p>Cooch Behar - 736170</p>
              <p>West Bengal, India</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">QUICK LINKS</h3>
            <div className="space-y-2 text-gray-300">
              <a href="#" className="block hover:text-blue-400 transition-colors duration-200">About Us</a>
              <a href="#" className="block hover:text-blue-400 transition-colors duration-200">Admissions</a>
              <a href="#" className="block hover:text-blue-400 transition-colors duration-200">Academic</a>
              <a href="#" className="block hover:text-blue-400 transition-colors duration-200">Faculty</a>
              <a href="#" className="block hover:text-blue-400 transition-colors duration-200">Placements</a>
            </div>
          </div>

          {/* Admissions */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ADMISSION</h3>
            <div className="space-y-2 text-gray-300">
              <a href="#" className="block hover:text-blue-400 transition-colors duration-200">Admission Process</a>
              <a href="#" className="block hover:text-blue-400 transition-colors duration-200">Fee Structure</a>
              <a href="#" className="block hover:text-blue-400 transition-colors duration-200">Scholarships</a>
              <a href="#" className="block hover:text-blue-400 transition-colors duration-200">Important Dates</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SOCIAL LINKS</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-200">
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 Cooch Behar Government Engineering College. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer