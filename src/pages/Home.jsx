
import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Courses from '../components/Courses'
import Faculty from '../components/Faculty'
import Recruiters from '../components/Recruiters'
import StudentSays from '../components/StudentSays'

const Home = () => {
  const quickLinks = [
    {
      title: 'Notice',
      icon: '📢',
      description: 'Latest announcements and notifications',
      color: 'from-blue-500 to-blue-600',
      path: 'notice'
    },
    {
      title: 'Tender',
      icon: '📋',
      description: 'Current tender notifications and updates',
      color: 'from-green-500 to-green-600',
      path: 'tender'
    },
    {
      title: 'News',
      icon: '📰',
      description: 'Latest news and updates from college',
      color: 'from-purple-500 to-purple-600',
      path: 'news'
    },
    {
      title: 'Recruitment',
      icon: '💼',
      description: 'Faculty and staff recruitment information',
      color: 'from-orange-500 to-orange-600',
      path: 'recruitment'
    }
  ]

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Quick Access Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600 rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-600 rounded-full"></div>
          <div className="absolute bottom-20 left-40 w-12 h-12 bg-green-600 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-600 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-xl">
              <span className="text-3xl">🚀</span>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Information Hub
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your gateway to the latest updates, opportunities, and announcements
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Featured Cards - Notice & Tender */}
            <div className="space-y-6">
              {quickLinks.slice(0, 2).map((link, index) => (
                <div
                  key={index}
                  className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-500 hover:rotate-1"
                  onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: link.path }))}
                >
                  <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-100">
                    <div className="flex items-center">
                      <div className={`w-24 h-full bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                        <span className="text-4xl filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                      </div>
                      <div className="flex-1 p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {link.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {link.description}
                        </p>
                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300">
                          <span>Explore Now</span>
                          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Cards - News & Recruitment */}
            <div className="space-y-6">
              {quickLinks.slice(2, 4).map((link, index) => (
                <div
                  key={index + 2}
                  className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-500 hover:-rotate-1"
                  onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: link.path }))}
                >
                  <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-100">
                    <div className="flex items-center">
                      <div className={`w-24 h-full bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                        <span className="text-4xl filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                      </div>
                      <div className="flex-1 p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {link.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {link.description}
                        </p>
                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300">
                          <span>Explore Now</span>
                          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Stats Bar */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">📢</div>
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm opacity-90">Active Notices</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">📋</div>
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm opacity-90">Open Tenders</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">📰</div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">News Articles</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">💼</div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm opacity-90">Job Openings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Courses />
      <Faculty />
      <Recruiters />
      <StudentSays />
    </div>
  )
}

export default Home
