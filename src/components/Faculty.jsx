
import React from 'react'

const Faculty = () => {
  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Head",
      department: "Computer Science Engineering",
      image: "👨‍🏫",
      expertise: "Artificial Intelligence, Machine Learning",
      experience: "15+ Years"
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Associate Professor",
      department: "Electronics & Communication",
      image: "👩‍🏫",
      expertise: "Signal Processing, Communication Systems",
      experience: "12+ Years"
    },
    {
      name: "Dr. Amit Patel",
      designation: "Assistant Professor",
      department: "Mechanical Engineering",
      image: "👨‍🔬",
      expertise: "Thermal Engineering, Manufacturing",
      experience: "8+ Years"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Distinguished educators and researchers dedicated to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                {member.image}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-1">{member.designation}</p>
              <p className="text-gray-600 mb-4">{member.department}</p>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold">Expertise:</span> {member.expertise}</p>
                <p><span className="font-semibold">Experience:</span> {member.experience}</p>
              </div>
              
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faculty
