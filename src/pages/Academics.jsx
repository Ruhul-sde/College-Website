
import React, { useState } from 'react'

const Academics = () => {
  const [activeTab, setActiveTab] = useState('departments')

  const departments = [
    {
      name: 'Computer Science & Engineering',
      code: 'CSE',
      icon: '💻',
      color: 'from-blue-500 to-blue-600',
      description: 'Advanced computing, AI, ML, and software development',
      intake: 60,
      duration: '4 Years',
      subjects: ['Programming', 'Data Structures', 'AI/ML', 'Database Systems', 'Software Engineering']
    },
    {
      name: 'Electronics & Communication Engineering',
      code: 'ECE',
      icon: '📡',
      color: 'from-purple-500 to-purple-600',
      description: 'Electronics, telecommunications, and embedded systems',
      intake: 60,
      duration: '4 Years',
      subjects: ['Digital Electronics', 'Signal Processing', 'Communication Systems', 'VLSI Design', 'Microprocessors']
    },
    {
      name: 'Electrical Engineering',
      code: 'EE',
      icon: '⚡',
      color: 'from-yellow-500 to-yellow-600',
      description: 'Power systems, control systems, and electrical machines',
      intake: 60,
      duration: '4 Years',
      subjects: ['Power Systems', 'Control Systems', 'Electrical Machines', 'Power Electronics', 'Renewable Energy']
    },
    {
      name: 'Mechanical Engineering',
      code: 'ME',
      icon: '⚙️',
      color: 'from-green-500 to-green-600',
      description: 'Manufacturing, thermal engineering, and design',
      intake: 60,
      duration: '4 Years',
      subjects: ['Thermodynamics', 'Machine Design', 'Manufacturing', 'Fluid Mechanics', 'Heat Transfer']
    },
    {
      name: 'Civil Engineering',
      code: 'CE',
      icon: '🏗️',
      color: 'from-orange-500 to-orange-600',
      description: 'Infrastructure, construction, and environmental engineering',
      intake: 60,
      duration: '4 Years',
      subjects: ['Structural Engineering', 'Transportation', 'Water Resources', 'Geotechnical', 'Environmental']
    }
  ]

  const programs = [
    {
      type: 'Undergraduate',
      icon: '🎓',
      programs: [
        'B.Tech in Computer Science & Engineering',
        'B.Tech in Electronics & Communication Engineering',
        'B.Tech in Electrical Engineering',
        'B.Tech in Mechanical Engineering',
        'B.Tech in Civil Engineering'
      ]
    },
    {
      type: 'Postgraduate',
      icon: '👨‍🎓',
      programs: [
        'M.Tech in Computer Science & Engineering (Proposed)',
        'M.Tech in Electronics & Communication Engineering (Proposed)'
      ]
    }
  ]

  const facilities = [
    {
      name: 'Central Library',
      icon: '📚',
      description: 'Well-equipped library with over 10,000 books and e-resources'
    },
    {
      name: 'Computer Labs',
      icon: '💻',
      description: 'State-of-the-art computer laboratories with latest software'
    },
    {
      name: 'Electronics Lab',
      icon: '🔬',
      description: 'Advanced electronics and communication laboratories'
    },
    {
      name: 'Mechanical Workshop',
      icon: '🔧',
      description: 'Fully equipped mechanical engineering workshop'
    },
    {
      name: 'Civil Engineering Lab',
      icon: '🏗️',
      description: 'Material testing and surveying laboratories'
    },
    {
      name: 'Research Centers',
      icon: '🔬',
      description: 'Dedicated research facilities for innovation'
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-xl">
              <span className="text-3xl">📚</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Academics
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive engineering education with cutting-edge curriculum and modern facilities
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-xl">
              {[
                { key: 'departments', label: 'Departments' },
                { key: 'programs', label: 'Programs' },
                { key: 'facilities', label: 'Facilities' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {activeTab === 'departments' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <div key={index} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  <div className={`h-2 bg-gradient-to-r ${dept.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                        <span className="text-3xl">{dept.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{dept.name}</h3>
                        <p className="text-blue-600 font-semibold">{dept.code}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{dept.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{dept.intake}</div>
                        <div className="text-sm text-gray-500">Intake</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{dept.duration}</div>
                        <div className="text-sm text-gray-500">Duration</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Subjects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.subjects.map((subject, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'programs' && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-3xl">{program.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{program.type} Programs</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {program.programs.map((prog, idx) => (
                      <div key={idx} className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                        <span className="text-gray-700 font-medium">{prog}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'facilities' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{facility.name}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Academic Calendar */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Academic Calendar</h2>
          <p className="text-xl mb-8 opacity-90">Stay updated with important academic dates and events</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Download Academic Calendar
          </button>
        </div>
      </section>
    </div>
  )
}

export default Academics
