
import React, { useState } from 'react'

const Admissions = () => {
  const [activeTab, setActiveTab] = useState('process')

  const admissionProcess = [
    {
      step: '01',
      title: 'Application Submission',
      description: 'Submit online application through WBJEE counselling portal',
      icon: '📝',
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: '02',
      title: 'Document Verification',
      description: 'Upload and verify required documents and certificates',
      icon: '📋',
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: '03',
      title: 'Merit List',
      description: 'Check merit list based on WBJEE rank and category',
      icon: '📊',
      color: 'from-green-500 to-green-600'
    },
    {
      step: '04',
      title: 'Counselling',
      description: 'Attend counselling session for seat allotment',
      icon: '💬',
      color: 'from-orange-500 to-orange-600'
    },
    {
      step: '05',
      title: 'Fee Payment',
      description: 'Pay admission fees and complete enrollment',
      icon: '💳',
      color: 'from-red-500 to-red-600'
    },
    {
      step: '06',
      title: 'Admission Confirmation',
      description: 'Receive admission confirmation and report to college',
      icon: '✅',
      color: 'from-teal-500 to-teal-600'
    }
  ]

  const eligibilityCriteria = [
    {
      program: 'B.Tech',
      icon: '🎓',
      requirements: [
        'Pass 10+2 or equivalent with Physics, Chemistry, Mathematics',
        'Minimum 45% marks in aggregate (40% for reserved categories)',
        'Valid WBJEE rank',
        'Age limit: Maximum 25 years (relaxation for reserved categories)'
      ]
    }
  ]

  const importantDates = [
    { event: 'WBJEE Application', date: 'February 2024', status: 'completed' },
    { event: 'WBJEE Exam', date: 'April 2024', status: 'completed' },
    { event: 'Result Declaration', date: 'May 2024', status: 'completed' },
    { event: 'Counselling Round 1', date: 'June 2024', status: 'upcoming' },
    { event: 'Counselling Round 2', date: 'July 2024', status: 'upcoming' },
    { event: 'Classes Commence', date: 'August 2024', status: 'upcoming' }
  ]

  const feeStructure = [
    { category: 'General/OBC', tuition: '1,500', development: '5,000', total: '6,500' },
    { category: 'SC/ST', tuition: '0', development: '2,500', total: '2,500' },
    { category: 'Hostel Fee', tuition: '15,000', development: '5,000', total: '20,000' }
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
              Admissions 2024
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join us in your journey to become a skilled engineer. Start your application today!
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Seats', value: '300', icon: '🎯' },
              { label: 'Departments', value: '5', icon: '🏢' },
              { label: 'Application Fee', value: '₹500', icon: '💰' },
              { label: 'Last Date', value: 'June 30', icon: '📅' }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-xl overflow-x-auto">
              {[
                { key: 'process', label: 'Process' },
                { key: 'eligibility', label: 'Eligibility' },
                { key: 'dates', label: 'Important Dates' },
                { key: 'fees', label: 'Fee Structure' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
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
      {activeTab === 'process' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Admission Process</h2>
              <p className="text-xl text-gray-600">Follow these simple steps to secure your admission</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {admissionProcess.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-300 mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'eligibility' && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Eligibility Criteria</h2>
              <p className="text-xl text-gray-600">Check if you meet the requirements</p>
            </div>

            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 mb-8">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-3xl">{criteria.icon}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">{criteria.program} Program</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {criteria.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'dates' && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Important Dates</h2>
              <p className="text-xl text-gray-600">Mark your calendar with these crucial dates</p>
            </div>

            <div className="space-y-6">
              {importantDates.map((date, index) => (
                <div key={index} className={`flex items-center p-6 rounded-2xl shadow-lg ${
                  date.status === 'completed' ? 'bg-green-50 border-l-4 border-green-500' :
                  date.status === 'upcoming' ? 'bg-blue-50 border-l-4 border-blue-500' :
                  'bg-yellow-50 border-l-4 border-yellow-500'
                }`}>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{date.event}</h3>
                    <p className="text-gray-600">{date.date}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    date.status === 'completed' ? 'bg-green-200 text-green-800' :
                    date.status === 'upcoming' ? 'bg-blue-200 text-blue-800' :
                    'bg-yellow-200 text-yellow-800'
                  }`}>
                    {date.status.charAt(0).toUpperCase() + date.status.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'fees' && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Fee Structure</h2>
              <p className="text-xl text-gray-600">Transparent and affordable fee structure</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Category</th>
                      <th className="px-6 py-4 text-center">Tuition Fee</th>
                      <th className="px-6 py-4 text-center">Development Fee</th>
                      <th className="px-6 py-4 text-center">Total (Per Year)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold text-gray-800">{fee.category}</td>
                        <td className="px-6 py-4 text-center">₹{fee.tuition}</td>
                        <td className="px-6 py-4 text-center">₹{fee.development}</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">₹{fee.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Fees are subject to revision by the Government of West Bengal
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Scholarships available for eligible students
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Hostel accommodation subject to availability
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards your engineering career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Application
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions
