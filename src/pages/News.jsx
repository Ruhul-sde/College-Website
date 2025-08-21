
import React, { useState } from 'react'

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const newsItems = [
    {
      id: 1,
      title: "CGEC Students Win National Level Technical Competition",
      excerpt: "Our Computer Science students secured first place in the National Programming Championship...",
      category: "achievement",
      date: "2024-01-20",
      image: "🏆",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 2,
      title: "New Research Center for Artificial Intelligence Inaugurated",
      excerpt: "The college inaugurated a state-of-the-art AI research center with advanced computing facilities...",
      category: "infrastructure",
      date: "2024-01-18",
      image: "🔬",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 3,
      title: "Industry-Academia Partnership with Leading Tech Companies",
      excerpt: "CGEC signs MoU with major technology companies for student internships and placement opportunities...",
      category: "partnership",
      date: "2024-01-15",
      image: "🤝",
      readTime: "4 min read",
      featured: true
    },
    {
      id: 4,
      title: "Annual Technical Fest 'TechnoVision 2024' Announced",
      excerpt: "The college's flagship technical festival will feature competitions, workshops, and guest lectures...",
      category: "event",
      date: "2024-01-12",
      image: "🎉",
      readTime: "2 min read",
      featured: false
    }
  ]

  const categories = [
    { key: 'all', label: 'All News', color: 'bg-gray-500' },
    { key: 'achievement', label: 'Achievements', color: 'bg-yellow-500' },
    { key: 'infrastructure', label: 'Infrastructure', color: 'bg-blue-500' },
    { key: 'partnership', label: 'Partnerships', color: 'bg-green-500' },
    { key: 'event', label: 'Events', color: 'bg-purple-500' }
  ]

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory)

  const featuredNews = newsItems.filter(item => item.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest happenings at CGEC
          </p>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Stories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredNews.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6">
                    <div className="text-6xl mb-4">{item.image}</div>
                    <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <button className="text-emerald-600 hover:text-emerald-800 font-medium flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.key
                    ? `${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${selectedCategory === category.key ? 'bg-white' : category.color}`}></div>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.filter(item => !item.featured).map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="p-6">
                <div className="text-4xl mb-4">{item.image}</div>
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${categories.find(cat => cat.key === item.category)?.color}`}>
                    {categories.find(cat => cat.key === item.category)?.label}
                  </span>
                  <button className="text-emerald-600 hover:text-emerald-800 font-medium text-sm">
                    Read More →
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

export default News
