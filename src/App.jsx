
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Faculty from './components/Faculty'
import Recruiters from './components/Recruiters'
import StudentSays from './components/StudentSays'
import Footer from './components/Footer'
import Notice from './pages/Notice'
import Tender from './pages/Tender'
import News from './pages/News'
import Recruitment from './pages/Recruitment'
import AdminDashboard from './components/AdminDashboard'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  // Check if we're on admin route
  if (window.location.pathname === '/admin' || window.location.hash === '#admin') {
    return <AdminDashboard />
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'notice':
        return <Notice />
      case 'tender':
        return <Tender />
      case 'news':
        return <News />
      case 'recruitment':
        return <Recruitment />
      case 'academic':
        return <Courses />
      case 'admission':
        return <About />
      case 'committee':
        return <Faculty />
      case 'training':
        return <Recruiters />
      case 'library':
        return <StudentSays />
      case 'contact':
        return <About />
      default:
        return (
          <>
            <Hero />
            <About />
            <Courses />
            <Faculty />
            <Recruiters />
            <StudentSays />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App
