
import React from 'react'

const About = () => {
  const stats = [
    { number: '2016', label: 'Established', icon: '🏛️' },
    { number: '1500+', label: 'Students', icon: '👥' },
    { number: '80+', label: 'Faculty', icon: '👨‍🏫' },
    { number: '95%', label: 'Placement Rate', icon: '🎯' }
  ]

  const milestones = [
    { year: '2016', title: 'College Established', description: 'Cooch Behar Government Engineering College was established with a vision to provide quality technical education.' },
    { year: '2017', title: 'First Batch Admission', description: 'Welcome the first batch of students across 4 engineering disciplines.' },
    { year: '2019', title: 'Industry Partnerships', description: 'Established partnerships with leading companies for placements and internships.' },
    { year: '2021', title: 'Research Excellence', description: 'Launched research programs and published significant research papers.' },
    { year: '2023', title: 'Campus Expansion', description: 'Expanded infrastructure with new laboratories and facilities.' }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-xl">
              <span className="text-3xl">🎓</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              About Our College
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cooch Behar Government Engineering College - A beacon of excellence in technical education, 
              committed to nurturing future engineers and innovators.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">👁️</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To emerge as a center of excellence in engineering education, research, and innovation, 
                  producing globally competent engineers who contribute to the technological advancement 
                  of society and nation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To provide quality technical education with state-of-the-art infrastructure, 
                  foster research and innovation, develop industry-ready professionals, and 
                  contribute to the socio-economic development of the region.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">⭐</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
                </div>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Excellence in Education
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Innovation & Research
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Integrity & Ethics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Social Responsibility
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Achievements</h2>
                </div>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    AICTE Approved Programs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    NBA Accreditation Process
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Industry Recognition
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones in our path to excellence</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                <div className="flex-1">
                  <div className={`bg-white rounded-2xl p-8 shadow-xl ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">Meet our distinguished leadership team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Principal Name', position: 'Principal', image: '👨‍🏫' },
              { name: 'Dr. Vice Principal Name', position: 'Vice Principal', image: '👩‍🏫' },
              { name: 'Dr. Dean Name', position: 'Dean of Academics', image: '👨‍🏫' }
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group">
                <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {leader.image}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-semibold">{leader.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
