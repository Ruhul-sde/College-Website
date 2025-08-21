
import React from 'react'

const Courses = () => {
  const courses = [
    {
      title: "Computer Science & Engineering",
      description: "Advanced programming, AI, ML, and software development",
      icon: "💻",
      duration: "4 Years",
      seats: "60"
    },
    {
      title: "Electronics & Communication Engineering",
      description: "Electronics, communication systems, and signal processing",
      icon: "📡",
      duration: "4 Years",
      seats: "60"
    },
    {
      title: "Electrical Engineering",
      description: "Power systems, control systems, and electrical machines",
      icon: "⚡",
      duration: "4 Years",
      seats: "60"
    },
    {
      title: "Mechanical Engineering",
      description: "Manufacturing, thermal systems, and mechanical design",
      icon: "⚙️",
      duration: "4 Years",
      seats: "60"
    },
    {
      title: "Civil Engineering",
      description: "Construction, structural design, and infrastructure",
      icon: "🏗️",
      duration: "4 Years",
      seats: "60"
    },
    {
      title: "Basic Science & Humanities",
      description: "Foundation courses in mathematics, physics, and humanities",
      icon: "🔬",
      duration: "Support",
      seats: "All"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering programs designed for the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="p-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {course.duration}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    {course.seats} Seats
                  </span>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
