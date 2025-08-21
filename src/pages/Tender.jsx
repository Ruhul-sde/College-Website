
import React, { useState } from 'react'

const Tender = () => {
  const [activeTab, setActiveTab] = useState('active')
  
  const tenders = {
    active: [
      {
        id: 1,
        title: "Supply and Installation of Laboratory Equipment for CSE Department",
        refNo: "CGEC/2024/TEND/001",
        publishDate: "2024-01-15",
        closeDate: "2024-02-15",
        category: "Equipment",
        estimatedValue: "₹25,00,000",
        status: "active"
      },
      {
        id: 2,
        title: "Construction of New Auditorium Building",
        refNo: "CGEC/2024/TEND/002",
        publishDate: "2024-01-10",
        closeDate: "2024-02-20",
        category: "Construction",
        estimatedValue: "₹1,50,00,000",
        status: "active"
      }
    ],
    closed: [
      {
        id: 3,
        title: "Maintenance of Campus Network Infrastructure",
        refNo: "CGEC/2023/TEND/015",
        publishDate: "2023-12-01",
        closeDate: "2024-01-01",
        category: "Maintenance",
        estimatedValue: "₹8,00,000",
        status: "closed"
      }
    ],
    upcoming: [
      {
        id: 4,
        title: "Procurement of Library Books and Journals",
        refNo: "CGEC/2024/TEND/003",
        publishDate: "2024-02-01",
        closeDate: "2024-03-01",
        category: "Procurement",
        estimatedValue: "₹12,00,000",
        status: "upcoming"
      }
    ]
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200'
      case 'closed': return 'bg-red-100 text-red-800 border-red-200'
      case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tender Information</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore current and upcoming tender opportunities
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-1 shadow-lg">
              {['active', 'closed', 'upcoming'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-medium capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {tab} Tenders
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tender Cards */}
        <div className="grid gap-6">
          {tenders[activeTab].map((tender) => (
            <div key={tender.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(tender.status)}`}>
                        {tender.status.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500">Ref: {tender.refNo}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{tender.title}</h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Category</div>
                        <div className="font-semibold text-gray-900">{tender.category}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Estimated Value</div>
                        <div className="font-semibold text-green-600">{tender.estimatedValue}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Published</div>
                        <div className="font-semibold text-gray-900">{tender.publishDate}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Closing Date</div>
                        <div className="font-semibold text-red-600">{tender.closeDate}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex gap-3">
                    <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                      Download Document
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </div>
                  {tender.status === 'active' && (
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tender
