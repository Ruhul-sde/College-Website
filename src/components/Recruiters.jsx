
import React from 'react'

const Recruiters = () => {
  const recruiters = [
    { name: "TCS", logo: "🏢" },
    { name: "Infosys", logo: "💼" },
    { name: "Wipro", logo: "🏭" },
    { name: "Cognizant", logo: "🏬" },
    { name: "Accenture", logo: "🏛️" },
    { name: "IBM", logo: "🏪" },
    { name: "Microsoft", logo: "🏢" },
    { name: "Google", logo: "🏬" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Recruiters</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading companies that trust our graduates
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {recruiters.map((recruiter, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {recruiter.logo}
              </div>
              <h3 className="text-sm font-semibold text-gray-800">{recruiter.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Placement Statistics</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div>Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">₹8.5L</div>
              <div>Average Package</div>
            </div>
            <div>
              <div className="text-3xl font-bold">₹25L</div>
              <div>Highest Package</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recruiters
