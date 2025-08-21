
import React, { useState, useEffect } from 'react'

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dropdowns, setDropdowns] = useState({})
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (key) => {
    setDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const navigate = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
    setDropdowns({})
  }

  const menuItems = [
    { key: 'home', label: 'HOME' },
    { key: 'about', label: 'ABOUT' },
    {
      key: 'academics',
      label: 'ACADEMICS',
      dropdown: [
        { label: 'Computer Science & Engineering', key: 'academics' },
        { label: 'Electronics & Communication', key: 'academics' },
        { label: 'Electrical Engineering', key: 'academics' },
        { label: 'Mechanical Engineering', key: 'academics' },
        { label: 'Civil Engineering', key: 'academics' },
        { label: 'Basic Science & Humanities', key: 'academics' }
      ]
    },
    {
      key: 'admissions',
      label: 'ADMISSIONS',
      dropdown: [
        { label: 'Admission Process', key: 'admissions' },
        { label: 'Fee Structure', key: 'admissions' },
        { label: 'Eligibility Criteria', key: 'admissions' },
        { label: 'Important Dates', key: 'admissions' }
      ]
    },
    { key: 'faculty', label: 'FACULTY' },
    {
      key: 'students',
      label: 'STUDENTS',
      dropdown: [
        { label: 'Student Life', key: 'students' },
        { label: 'Clubs & Societies', key: 'students' },
        { label: 'Events & Festivals', key: 'students' },
        { label: 'Student Services', key: 'students' }
      ]
    },
    { key: 'research', label: 'RESEARCH' },
    { key: 'placements', label: 'PLACEMENTS' },
    { key: 'campus', label: 'CAMPUS' },
    { key: 'gallery', label: 'GALLERY' },
    { key: 'contact', label: 'CONTACT' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => navigate('home')}
          >
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <span className="text-white font-bold text-xl">CB</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Cooch Behar Government
              </h1>
              <h2 className="text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                Engineering College
              </h2>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.key} className="relative group">
                <button
                  onClick={() => {
                    if (item.dropdown) {
                      toggleDropdown(item.key)
                    } else {
                      navigate(item.key)
                    }
                  }}
                  className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl ${
                    currentPage === item.key
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                  } ${item.dropdown ? 'flex items-center space-x-1' : ''}`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <svg className={`w-4 h-4 transition-transform duration-200 ${dropdowns[item.key] ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                {item.dropdown && dropdowns[item.key] && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
                    {item.dropdown.map((subItem, index) => (
                      <button
                        key={index}
                        onClick={() => navigate(subItem.key)}
                        className="block w-full text-left px-6 py-4 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 border-b border-gray-50 last:border-b-0"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl rounded-b-2xl">
            <div className="py-6 space-y-2 max-h-96 overflow-y-auto">
              {menuItems.map((item) => (
                <div key={item.key}>
                  <button
                    onClick={() => {
                      if (item.dropdown) {
                        toggleDropdown(item.key)
                      } else {
                        navigate(item.key)
                      }
                    }}
                    className={`block w-full text-left px-6 py-3 text-base font-semibold transition-all duration-200 rounded-xl mx-4 ${
                      currentPage === item.key
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      {item.label}
                      {item.dropdown && (
                        <svg className={`w-4 h-4 transition-transform duration-200 ${dropdowns[item.key] ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                  
                  {item.dropdown && dropdowns[item.key] && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.dropdown.map((subItem, index) => (
                        <button
                          key={index}
                          onClick={() => navigate(subItem.key)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 rounded-lg"
                        >
                          {subItem.label}
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
