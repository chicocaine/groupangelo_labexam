import React from 'react';

export const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Stay updated with the latest news, research breakthroughs, and upcoming events 
            at the College of Computing Education.
          </p>
        </div>
      </div>

      {/* Featured News */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured News</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                  <p className="text-sm">AI Research Lab</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>January 15, 2025</span>
                  <span className="mx-2">•</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Research</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  New AI Research Lab Opens with $5M Grant
                </h3>
                <p className="text-gray-600 mb-4">
                  Our college inaugurates a state-of-the-art artificial intelligence research laboratory 
                  with a generous $5 million grant from the National Science Foundation. The lab will 
                  focus on machine learning, natural language processing, and computer vision research.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read Full Article →</a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-sm">Student Achievement</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>January 12, 2025</span>
                  <span className="mx-2">•</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Achievement</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Students Win International Cybersecurity Competition
                </h3>
                <p className="text-gray-600 mb-4">
                  A team of our cybersecurity students has claimed first place in the International 
                  Cybersecurity Challenge, competing against over 200 teams from universities worldwide. 
                  The competition focused on network security and ethical hacking.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read Full Article →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent News */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent News</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>January 8, 2025</span>
                <span className="mx-2">•</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Partnership</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Partnership with Tech Giants Announced
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                New partnerships with Google, Microsoft, and Amazon will provide internship 
                opportunities and research collaboration for our students.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Read More →</a>
            </article>

            <article className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>January 5, 2025</span>
                <span className="mx-2">•</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Faculty</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Dr. Smith Receives Teaching Excellence Award
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Professor Sarah Smith has been recognized for her innovative teaching methods 
                in computer science education and student mentorship.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Read More →</a>
            </article>

            <article className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>January 2, 2025</span>
                <span className="mx-2">•</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Infrastructure</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Campus Tech Infrastructure Upgrade Complete
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                The $2 million technology infrastructure upgrade is now complete, 
                featuring high-speed networking and advanced computing resources.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Read More →</a>
            </article>

            <article className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>December 28, 2024</span>
                <span className="mx-2">•</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Research</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Breakthrough in Quantum Computing Research
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Our research team has published groundbreaking results in quantum algorithm 
                optimization in the Journal of Quantum Computing.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Read More →</a>
            </article>

            <article className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>December 25, 2024</span>
                <span className="mx-2">•</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Alumni</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Alumni Launch Successful Startup
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Recent graduates have launched a fintech startup that has secured 
                $10 million in Series A funding.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Read More →</a>
            </article>

            <article className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>December 20, 2024</span>
                <span className="mx-2">•</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">Community</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community Coding Bootcamp Success
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Our free community coding bootcamp has graduated its first cohort 
                with 95% job placement rate.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Read More →</a>
            </article>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-blue-600 rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      February 15, 2025
                    </div>
                    <span className="text-sm text-gray-500">10:00 AM - 4:00 PM</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Annual Tech Career Fair</h3>
                  <p className="text-gray-600 mb-2">
                    Connect with leading technology companies for internships and full-time positions. 
                    Over 50 companies will be participating.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Student Center Main Hall
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Register
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-green-600 rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      February 22, 2025
                    </div>
                    <span className="text-sm text-gray-500">2:00 PM - 5:00 PM</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AI in Healthcare Symposium</h3>
                  <p className="text-gray-600 mb-2">
                    Leading researchers will present the latest developments in artificial intelligence 
                    applications for healthcare and medical diagnosis.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Computing Building Auditorium
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                    Register
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-purple-600 rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      March 1, 2025
                    </div>
                    <span className="text-sm text-gray-500">6:00 PM - 8:00 PM</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Research Showcase</h3>
                  <p className="text-gray-600 mb-2">
                    Undergraduate and graduate students will present their research projects 
                    and compete for research excellence awards.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Library Conference Center
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                    Attend
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-orange-600 rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      March 10, 2025
                    </div>
                    <span className="text-sm text-gray-500">9:00 AM - 5:00 PM</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hackathon 2025</h3>
                  <p className="text-gray-600 mb-2">
                    24-hour coding competition focused on solving real-world problems 
                    with sustainable technology solutions.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Innovation Lab
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-300">
                    Register Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, event announcements, 
            and research updates from the College of Computing Education.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};