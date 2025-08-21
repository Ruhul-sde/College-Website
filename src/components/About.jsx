
import React from 'react'

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our College</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to excellence in engineering education and research
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Excellence in Education</h3>
              <p className="text-gray-600 leading-relaxed">
                Cooch Behar Government Engineering College is a premier institution dedicated to providing 
                quality engineering education. Established in 2016, we have quickly emerged as a leading 
                center of technical education in West Bengal.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">Modern Facilities</h4>
                <p className="text-gray-600">State-of-the-art laboratories and infrastructure</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-800 mb-2">Expert Faculty</h4>
                <p className="text-gray-600">Experienced and qualified teaching staff</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-gray-600">Students</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">50+</div>
                    <div className="text-gray-600">Faculty</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">5</div>
                    <div className="text-gray-600">Departments</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">100%</div>
                    <div className="text-gray-600">Placement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
