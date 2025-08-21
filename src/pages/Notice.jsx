
import React, { useState } from 'react'

const Notice = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const notices = [
    {
      id: 1,
      title: "Notice regarding Hostel Admission 2025-26",
      date: "2024-08-17",
      category: "admission",
      content: "Applications are invited for hostel accommodation for the academic year 2025-26...",
      priority: "high",
      attachment: true
    },
    {
      id: 2,
      title: "Date Extension of NID for Internal Audit at Cooch Behar Government Engineering College",
      date: "2024-07-20",
      category: "general",
      content: "The last date for submission of NID for Internal Audit has been extended...",
      priority: "medium",
      attachment: false
    },
    {
      id: 3,
      title: "Notice for extension of the Quotation submission date for the student's ID card",
      date: "2024-06-24",
      category: "student",
      content: "The deadline for quotation submission for student ID cards has been extended...",
      priority: "low",
      attachment: true
    }
  ]

  const categories = [
    { key: 'all', label: 'All Notices' },
    { key: 'admission', label: 'Admission' },
    { key: 'general', label: 'General' },
    { key: 'student', label: 'Student Affairs' },
    { key: 'academic', label: 'Academic' }
  ]

  const filteredNotices = selectedCategory === 'all' 
    ? notices 
    : notices.filter(notice => notice.category === selectedCategory)

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12h0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Official Notices</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest announcements and notifications
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Notice Cards */}
        <div className="grid gap-6">
          {filteredNotices.map((notice) => (
            <div key={notice.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(notice.priority)}`}>
                        {notice.priority.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500">{notice.date}</span>
                      {notice.attachment && (
                        <span className="inline-flex items-center text-blue-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                          Attachment
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{notice.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{notice.content}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notice
