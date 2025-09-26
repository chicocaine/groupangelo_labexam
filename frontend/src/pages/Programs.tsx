import React from 'react';

export const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Discover our comprehensive range of undergraduate and graduate programs designed to 
            prepare you for success in the rapidly evolving world of technology.
          </p>
        </div>
      </div>

      {/* Undergraduate Programs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Undergraduate Programs</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Science</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive program covering algorithms, data structures, software engineering, 
                and computer systems fundamentals.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Duration: 4 years</li>
                <li>• Credits: 120</li>
                <li>• Internship required</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Software Engineering</h3>
              <p className="text-gray-600 mb-4">
                Focus on large-scale software development, project management, 
                and modern development methodologies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Duration: 4 years</li>
                <li>• Credits: 120</li>
                <li>• Industry project required</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Science</h3>
              <p className="text-gray-600 mb-4">
                Combines statistics, programming, and domain expertise to extract 
                insights from complex data sets.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Duration: 4 years</li>
                <li>• Credits: 120</li>
                <li>• Research project required</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Specialized program focusing on information security, network security, 
                and digital forensics.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Duration: 4 years</li>
                <li>• Credits: 120</li>
                <li>• Security clearance track available</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Systems</h3>
              <p className="text-gray-600 mb-4">
                Bridge between technology and business, focusing on systems analysis, 
                database management, and IT strategy.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Duration: 4 years</li>
                <li>• Credits: 120</li>
                <li>• Business minor included</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Game Development</h3>
              <p className="text-gray-600 mb-4">
                Creative program combining programming, design, and storytelling 
                for interactive entertainment development.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Duration: 4 years</li>
                <li>• Credits: 120</li>
                <li>• Portfolio development</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Graduate Programs */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Graduate Programs</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Master's Programs</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">M.S. in Computer Science</h4>
                    <p className="text-gray-600 text-sm">Advanced study in algorithms, AI, and system design</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">M.S. in Data Science</h4>
                    <p className="text-gray-600 text-sm">Advanced analytics, machine learning, and big data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">M.S. in Cybersecurity</h4>
                    <p className="text-gray-600 text-sm">Advanced security concepts and threat analysis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">M.S. in Software Engineering</h4>
                    <p className="text-gray-600 text-sm">Enterprise software architecture and management</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">Duration: 2 years | Credits: 36-42</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Doctoral Programs</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ph.D. in Computer Science</h4>
                    <p className="text-gray-600 text-sm">Research-focused program with dissertation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ph.D. in Information Systems</h4>
                    <p className="text-gray-600 text-sm">Interdisciplinary research in technology and society</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">Duration: 4-6 years | Research intensive</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Career Opportunities</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our graduates are highly sought after by leading companies worldwide. 
            Explore the diverse career paths available with our programs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">$85K+</div>
              <div className="text-sm text-gray-600">Average Starting Salary</div>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Job Placement Rate</div>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Industry Partners</div>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">6 months</div>
              <div className="text-sm text-gray-600">Average Job Search</div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Popular Career Paths</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Software Development</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Full-Stack Developer</li>
                  <li>• Mobile App Developer</li>
                  <li>• DevOps Engineer</li>
                  <li>• Software Architect</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Data & Analytics</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Data Scientist</li>
                  <li>• Machine Learning Engineer</li>
                  <li>• Business Analyst</li>
                  <li>• Data Engineer</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Security & Systems</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Cybersecurity Analyst</li>
                  <li>• Systems Administrator</li>
                  <li>• Network Engineer</li>
                  <li>• IT Consultant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who started their careers with us. 
            Apply now and take the first step toward your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition duration-300">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};