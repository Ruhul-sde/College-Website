
import React, { useState } from 'react'

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dropdowns, setDropdowns] = useState({})

  const toggleDropdown = (key) => {
    setDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const menuItems = [
    { key: 'home', label: 'HOME' },
    {
      key: 'academic',
      label: 'ACADEMIC',
      dropdown: [
        'Computer Science & Engineering',
        'Electronics & Communication Engineering',
        'Electrical Engineering',
        'Mechanical Engineering',
        'Civil Engineering',
        'Basic Science & Humanities'
      ]
    },
    {
      key: 'admission',
      label: 'ADMISSION',
      dropdown: ['Admission 2024', 'Fee Structure']
    },
    {
      key: 'committee',
      label: 'COMMITTEE',
      dropdown: [
        'Academic Committee',
        'Anti-ragging Committee',
        'Internal Complaint Committee',
        'Anti-ragging Squad',
        'Committee for SC & ST',
        'Grievance Redressal Committee (GRC)',
        'Institute Industry Cell',
        'Internal Quality Assurance Cell(IQAC)',
        'Student Grievance Redressal Committee',
        'Student Counsellor'
      ]
    },
    { key: 'training', label: 'TRAINING & PLACEMENT' },
    { key: 'library', label: 'LIBRARY' },
    { key: 'contact', label: 'CONTACT' }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">CB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Cooch Behar Government</h1>
              <h2 className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Engineering College</h2>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1">
            {menuItems.map((item) => (
              <div key={item.key} className="relative group">
                <button
                  onClick={() => {
                    if (item.dropdown) {
                      toggleDropdown(item.key)
                    } else {
                      setCurrentPage(item.key)
                    }
                  }}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    currentPage === item.key
                      ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                  } ${item.dropdown ? 'flex items-center' : ''}`}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${dropdowns[item.key] ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                {item.dropdown && dropdowns[item.key] && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                    {item.dropdown.map((subItem, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentPage(item.key)
                          setDropdowns({})
                        }}
                        className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 border-b border-gray-50 last:border-b-0"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white rounded-b-xl shadow-lg">
            <div className="py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.key}>
                  <button
                    onClick={() => {
                      if (item.dropdown) {
                        toggleDropdown(item.key)
                      } else {
                        setCurrentPage(item.key)
                        setIsMenuOpen(false)
                      }
                    }}
                    className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg mx-2 ${
                      currentPage === item.key
                        ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                    }`}
                  >
                    {item.label}
                  </button>
                  
                  {item.dropdown && dropdowns[item.key] && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.dropdown.map((subItem, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentPage(item.key)
                            setIsMenuOpen(false)
                            setDropdowns({})
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 rounded-lg"
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
