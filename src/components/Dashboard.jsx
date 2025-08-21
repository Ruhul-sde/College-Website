
import React, { useState } from 'react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { title: 'Total Students', value: '1,234', icon: '👥', color: 'bg-blue-500' },
    { title: 'Faculty Members', value: '89', icon: '👨‍🏫', color: 'bg-green-500' },
    { title: 'Courses', value: '25', icon: '📚', color: 'bg-purple-500' },
    { title: 'Placements', value: '95%', icon: '🎯', color: 'bg-orange-500' }
  ]

  const recentActivities = [
    { title: 'New Admission Process Started', date: '2024-01-15', type: 'info' },
    { title: 'Faculty Development Program', date: '2024-01-14', type: 'success' },
    { title: 'Technical Fest Registration', date: '2024-01-13', type: 'warning' },
    { title: 'Placement Drive Scheduled', date: '2024-01-12', type: 'info' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">College Dashboard</h1>
          <p className="text-gray-600">Welcome to the administrative dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['overview', 'students', 'faculty', 'courses'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          activity.type === 'info' ? 'bg-blue-500' :
                          activity.type === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                          <p className="text-xs text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-colors duration-200">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="text-sm font-medium text-blue-800">Add Student</div>
                    </button>
                    <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-center transition-colors duration-200">
                      <div className="text-2xl mb-2">👨‍🏫</div>
                      <div className="text-sm font-medium text-green-800">Add Faculty</div>
                    </button>
                    <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-center transition-colors duration-200">
                      <div className="text-2xl mb-2">📚</div>
                      <div className="text-sm font-medium text-purple-800">Add Course</div>
                    </button>
                    <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg text-center transition-colors duration-200">
                      <div className="text-2xl mb-2">📊</div>
                      <div className="text-sm font-medium text-orange-800">View Reports</div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'students' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Management</h3>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">👥</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Student Dashboard</h4>
                  <p className="text-gray-600">Manage student records, admissions, and academic progress</p>
                </div>
              </div>
            )}

            {activeTab === 'faculty' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Faculty Management</h3>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">👨‍🏫</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Faculty Dashboard</h4>
                  <p className="text-gray-600">Manage faculty profiles, assignments, and schedules</p>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Management</h3>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">📚</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Course Dashboard</h4>
                  <p className="text-gray-600">Manage course curriculum, schedules, and resources</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
