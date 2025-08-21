
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Faculty from './pages/Faculty'
import Students from './pages/Students'
import Research from './pages/Research'
import Placements from './pages/Placements'
import Campus from './pages/Campus'
import Notice from './pages/Notice'
import Tender from './pages/Tender'
import News from './pages/News'
import Recruitment from './pages/Recruitment'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import AdminDashboard from './components/AdminDashboard'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleNavigate = (event) => {
      setIsLoading(true)
      setTimeout(() => {
        setCurrentPage(event.detail)
        setIsLoading(false)
        window.scrollTo(0, 0)
      }, 200)
    }

    window.addEventListener('navigate', handleNavigate)
    return () => window.removeEventListener('navigate', handleNavigate)
  }, [])

  // Check if we're on admin route
  if (window.location.pathname === '/admin' || window.location.hash === '#admin') {
    return <AdminDashboard />
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'academics':
        return <Academics />
      case 'admissions':
        return <Admissions />
      case 'faculty':
        return <Faculty />
      case 'students':
        return <Students />
      case 'research':
        return <Research />
      case 'placements':
        return <Placements />
      case 'campus':
        return <Campus />
      case 'notice':
        return <Notice />
      case 'tender':
        return <Tender />
      case 'news':
        return <News />
      case 'recruitment':
        return <Recruitment />
      case 'contact':
        return <Contact />
      case 'gallery':
        return <Gallery />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-700 font-medium">Loading...</span>
          </div>
        </div>
      )}
      
      <main className={`transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  )
}

export default App
