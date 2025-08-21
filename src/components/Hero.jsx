
import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "NEW ENGINEERING",
      subtitle: "COLLEGE",
      description: "Relatively new entrant in the field of technological education began its journey on July, 2016. A dream project of Chief Minister, West Bengal",
      highlight: "Excellence in Education",
      image: "🏛️"
    },
    {
      title: "MODERN",
      subtitle: "INFRASTRUCTURE",
      description: "State-of-the-art laboratories, well-equipped classrooms, and modern facilities to support quality engineering education",
      highlight: "Advanced Facilities",
      image: "🔬"
    },
    {
      title: "INDUSTRY",
      subtitle: "PARTNERSHIPS",
      description: "Strong industry connections ensuring excellent placement opportunities and practical exposure for our students",
      highlight: "95% Placement Rate",
      image: "🤝"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-purple-400 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-300 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Animated Title */}
            <div className="space-y-4">
              <div className="overflow-hidden">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight transform transition-all duration-1000">
                  {slides[currentSlide].title}
                  <span className="block text-blue-300 transform transition-all duration-1000 delay-300">
                    {slides[currentSlide].subtitle}
                  </span>
                </h1>
              </div>
              
              <div className="bg-blue-500 bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
                <div className="text-blue-300 text-sm font-semibold mb-2 uppercase tracking-wide">
                  {slides[currentSlide].highlight}
                </div>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center justify-center gap-2">
                  Explore Courses
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="group border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center justify-center gap-2">
                  Virtual Tour
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">8+</div>
                <div className="text-blue-200 text-sm">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">1200+</div>
                <div className="text-blue-200 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">95%</div>
                <div className="text-blue-200 text-sm">Placement</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Card */}
          <div className="relative">
            <div className="relative transform transition-all duration-1000 hover:scale-105">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-500">
                <div className="text-center">
                  <div className="text-8xl mb-6 animate-pulse">
                    {slides[currentSlide].image}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {slides[currentSlide].highlight}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white bg-opacity-10 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-300">25+</div>
                      <div className="text-white text-sm">Courses</div>
                    </div>
                    <div className="bg-white bg-opacity-10 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-300">89</div>
                      <div className="text-white text-sm">Faculty</div>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
