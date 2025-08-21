
import React, { useState } from 'react'

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleLogin = (e) => {
    e.preventDefault()
    // Simple demo login
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsLoggedIn(true)
    } else {
      alert('Invalid credentials. Use admin/admin123 for demo.')
    }
  }

  const stats = [
    { title: 'Total Students', value: '1,234', icon: '👥', color: 'bg-blue-500', change: '+12%' },
    { title: 'Faculty Members', value: '89', icon: '👨‍🏫', color: 'bg-green-500', change: '+3%' },
    { title: 'Active Courses', value: '25', icon: '📚', color: 'bg-purple-500', change: '+2%' },
    { title: 'Placement Rate', value: '95%', icon: '🎯', color: 'bg-orange-500', change: '+5%' }
  ]

  const recentActivities = [
    { title: 'New student admission completed', time: '2 hours ago', type: 'success' },
    { title: 'Faculty meeting scheduled', time: '4 hours ago', type: 'info' },
    { title: 'Tender document uploaded', time: '6 hours ago', type: 'warning' },
    { title: 'Recruitment notice published', time: '1 day ago', type: 'info' }
  ]

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
            <p className="text-gray-600">Please login to continue</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Login to Dashboard
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            Demo credentials: admin / admin123
          </div>
        </div>
      </div>
    )
  }

  const menuItems = [
    { key: 'overview', label: 'Overview', icon: '📊' },
    { key: 'students', label: 'Students', icon: '👥' },
    { key: 'faculty', label: 'Faculty', icon: '👨‍🏫' },
    { key: 'notices', label: 'Notices', icon: '📢' },
    { key: 'tenders', label: 'Tenders', icon: '📋' },
    { key: 'recruitment', label: 'Recruitment', icon: '💼' },
    { key: 'settings', label: 'Settings', icon: '⚙️' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">CB</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Admin Panel</h3>
              <p className="text-sm text-gray-500">CGEC Dashboard</p>
            </div>
          </div>
        </div>
        
        <nav className="p-4">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveSection(item.key)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors duration-200 ${
                activeSection === item.key
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            <span>🚪</span>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {menuItems.find(item => item.key === activeSection)?.label} Dashboard
          </h1>
          <p className="text-gray-600">Welcome back, Administrator</p>
        </div>

        {activeSection === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-2xl`}>
                      {stat.icon}
                    </div>
                    <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-gray-600">{stat.title}</p>
                </div>
              ))}
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection !== 'overview' && (
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-6xl mb-4">
              {menuItems.find(item => item.key === activeSection)?.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {menuItems.find(item => item.key === activeSection)?.label} Management
            </h3>
            <p className="text-gray-600 mb-6">
              This section is under development. Full functionality coming soon.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Configure {menuItems.find(item => item.key === activeSection)?.label}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
