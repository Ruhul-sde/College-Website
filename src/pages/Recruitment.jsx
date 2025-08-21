
import React, { useState } from 'react'

const Recruitment = () => {
  const [activeTab, setActiveTab] = useState('current')
  
  const recruitments = {
    current: [
      {
        id: 1,
        position: "Assistant Professor - Computer Science Engineering",
        department: "CSE",
        type: "Teaching",
        qualification: "Ph.D in Computer Science/Engineering",
        experience: "3+ years",
        vacancies: 2,
        lastDate: "2024-02-15",
        salary: "₹57,700 - ₹1,82,400 (Level 10)",
        mode: "Direct Recruitment"
      },
      {
        id: 2,
        position: "Technical Assistant - Electronics & Communication",
        department: "ECE",
        type: "Non-Teaching",
        qualification: "B.Tech/BE in ECE + 2 years experience",
        experience: "2+ years",
        vacancies: 1,
        lastDate: "2024-02-20",
        salary: "₹25,500 - ₹81,100 (Level 6)",
        mode: "Direct Recruitment"
      }
    ],
    upcoming: [
      {
        id: 3,
        position: "Professor - Mechanical Engineering",
        department: "ME",
        type: "Teaching",
        qualification: "Ph.D + 10 years teaching experience",
        experience: "10+ years",
        vacancies: 1,
        lastDate: "2024-03-15",
        salary: "₹1,31,400 - ₹2,17,100 (Level 14)",
        mode: "Direct Recruitment"
      }
    ],
    closed: [
      {
        id: 4,
        position: "Lab Assistant - Civil Engineering",
        department: "CE",
        type: "Non-Teaching",
        qualification: "Diploma in Civil Engineering",
        experience: "1+ years",
        vacancies: 1,
        lastDate: "2024-01-15",
        salary: "₹19,900 - ₹63,200 (Level 2)",
        mode: "Direct Recruitment"
      }
    ]
  }

  const getTypeColor = (type) => {
    return type === 'Teaching' 
      ? 'bg-blue-100 text-blue-800 border-blue-200' 
      : 'bg-green-100 text-green-800 border-green-200'
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'current': return 'bg-green-500'
      case 'upcoming': return 'bg-yellow-500'
      case 'closed': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 8v6a2 2 0 002 2h4a2 2 0 002-2V8M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recruitment Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team of dedicated educators and professionals
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{recruitments.current.length}</div>
            <div className="text-gray-600">Current Openings</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">{recruitments.upcoming.length}</div>
            <div className="text-gray-600">Upcoming</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {recruitments.current.reduce((sum, job) => sum + job.vacancies, 0)}
            </div>
            <div className="text-gray-600">Total Vacancies</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
            <div className="text-gray-600">Days Avg Process</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-1 shadow-lg">
              {['current', 'upcoming', 'closed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-medium capitalize transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(tab)}`}></div>
                  {tab} Positions
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid gap-6">
          {recruitments[activeTab].map((job) => (
            <div key={job.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(job.type)}`}>
                        {job.type}
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {job.department}
                      </span>
                      <span className="text-sm text-gray-500">Last Date: {job.lastDate}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{job.position}</h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Qualification</div>
                        <div className="font-semibold text-gray-900 text-sm">{job.qualification}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Experience</div>
                        <div className="font-semibold text-gray-900">{job.experience}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Vacancies</div>
                        <div className="font-semibold text-orange-600">{job.vacancies}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Salary</div>
                        <div className="font-semibold text-green-600 text-sm">{job.salary}</div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <div className="text-sm text-blue-600 mb-1">Recruitment Mode</div>
                      <div className="font-semibold text-blue-800">{job.mode}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex gap-3">
                    <button className="text-orange-600 hover:text-orange-800 font-medium flex items-center">
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button className="text-orange-600 hover:text-orange-800 font-medium flex items-center">
                      Download Notification
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </div>
                  {activeTab === 'current' && (
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                      Apply Online
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Links</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors duration-200">
              <div className="text-orange-600 mb-2">📋</div>
              <div className="font-semibold text-gray-900">Application Form</div>
            </button>
            <button className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg text-center transition-colors duration-200">
              <div className="text-blue-600 mb-2">📞</div>
              <div className="font-semibold text-gray-900">Contact HR</div>
            </button>
            <button className="bg-green-50 hover:bg-green-100 p-4 rounded-lg text-center transition-colors duration-200">
              <div className="text-green-600 mb-2">❓</div>
              <div className="font-semibold text-gray-900">FAQ</div>
            </button>
            <button className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg text-center transition-colors duration-200">
              <div className="text-purple-600 mb-2">📊</div>
              <div className="font-semibold text-gray-900">Track Application</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recruitment
