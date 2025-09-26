import React from 'react';

export const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-20 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)'}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-down">News & Events</h1>
          <p className="text-xl text-green-100 max-w-4xl mx-auto slide-down">
            Stay updated with the latest news, achievements, and upcoming events 
            at UM College of Computing Education.
          </p>
        </div>
      </div>

      {/* Featured News */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 slide-down" style={{color: 'var(--primary-green)'}}>Featured News</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 slide-down">
              <div className="h-64 flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)'}}>
                <div className="text-white text-center">
                  <i className="fas fa-trophy text-5xl mb-3"></i>
                  <p className="text-sm">Student Achievement</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>September 15, 2025</span>
                  <span className="mx-2">•</span>
                  <span className="px-2 py-1 rounded-full text-xs text-white" style={{backgroundColor: 'var(--secondary-gold)'}}>Achievement</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  UM CCE Students Win National Programming Contest
                </h3>
                <p className="text-gray-600 mb-4">
                  Our Computer Science students have claimed first place in the National Collegiate Programming Contest, 
                  competing against over 150 teams from universities nationwide. This marks UM CCE's third consecutive 
                  victory in the competition.
                </p>
                <a href="#" className="font-medium transition duration-300" 
                   style={{color: 'var(--primary-green)'}}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dark-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-green)'}>
                  Read Full Article →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 slide-down">
              <div className="h-64 flex items-center justify-center" style={{backgroundColor: 'var(--light-green)'}}>
                <div className="text-center" style={{color: 'var(--primary-green)'}}>
                  <i className="fas fa-handshake text-5xl mb-3"></i>
                  <p className="text-sm">Partnership</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>September 10, 2025</span>
                  <span className="mx-2">•</span>
                  <span className="px-2 py-1 rounded-full text-xs" style={{backgroundColor: 'var(--light-green)', color: 'var(--primary-green)'}}>Partnership</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  New Industry Partnerships Strengthen UM CCE Programs
                </h3>
                <p className="text-gray-600 mb-4">
                  UM College of Computing Education announces expanded partnerships with Microsoft, Google, Apple, and IBM. 
                  These collaborations will provide enhanced training opportunities, industry certifications, and direct 
                  internship pathways for our students.
                </p>
                <a href="#" className="font-medium transition duration-300" 
                   style={{color: 'var(--primary-green)'}}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dark-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-green)'}>
                  Read Full Article →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent News */}
            {/* Recent News */}
      <div className="py-16" style={{backgroundColor: 'var(--light-green)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center slide-down" style={{color: 'var(--primary-green)'}}>Recent News</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 slide-down">
              <div className="h-48 flex items-center justify-center" style={{backgroundColor: 'var(--secondary-gold)'}}>
                <div className="text-white text-center">
                  <i className="fas fa-graduation-cap text-4xl mb-2"></i>
                  <p className="text-xs">Graduation</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">September 5, 2025</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Fall 2025 Commencement Ceremony</h3>
                <p className="text-gray-600 text-sm mb-3">
                  UM CCE celebrates 450 graduates across all programs. Join us for the commencement ceremony 
                  featuring keynote speaker Dr. Maria Santos, CTO of TechCorp Philippines.
                </p>
                <a href="#" className="text-sm font-medium transition duration-300" 
                   style={{color: 'var(--primary-green)'}}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dark-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-green)'}>
                  Read More →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 slide-down">
              <div className="h-48 flex items-center justify-center" style={{backgroundColor: 'var(--primary-green)'}}>
                <div className="text-white text-center">
                  <i className="fas fa-code text-4xl mb-2"></i>
                  <p className="text-xs">Hackathon</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">August 28, 2025</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">UM CodeFest 2025 Results</h3>
                <p className="text-gray-600 text-sm mb-3">
                  48-hour hackathon concludes with 15 innovative projects. Team "GreenTech" wins first place 
                  with their sustainable campus management system.
                </p>
                <a href="#" className="text-sm font-medium transition duration-300" 
                   style={{color: 'var(--primary-green)'}}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dark-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-green)'}>
                  Read More →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 slide-down">
              <div className="h-48 flex items-center justify-center" style={{backgroundColor: 'var(--dark-green)'}}>
                <div className="text-white text-center">
                  <i className="fas fa-award text-4xl mb-2"></i>
                  <p className="text-xs">Recognition</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">August 20, 2025</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">PACUCOA Level IV Accreditation</h3>
                <p className="text-gray-600 text-sm mb-3">
                  UM CCE's Computer Science and Information Technology programs receive prestigious 
                  PACUCOA Level IV accreditation, recognizing excellence in education.
                </p>
                <a href="#" className="text-sm font-medium transition duration-300" 
                   style={{color: 'var(--primary-green)'}}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dark-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-green)'}>
                  Read More →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 slide-down">
              <div className="h-48 flex items-center justify-center" style={{backgroundColor: 'var(--secondary-gold)'}}>
                <div className="text-white text-center">
                  <i className="fas fa-users text-4xl mb-2"></i>
                  <p className="text-xs">Faculty</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">August 15, 2025</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">New Faculty Orientation Week</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Welcome to our 8 new faculty members joining UM CCE this semester. They bring expertise 
                  in AI, cybersecurity, and software engineering.
                </p>
                <a href="#" className="text-sm font-medium transition duration-300" 
                   style={{color: 'var(--primary-green)'}}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dark-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-green)'}>
                  Read More →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 slide-down">
              <div className="h-48 flex items-center justify-center" style={{backgroundColor: 'var(--primary-green)'}}>
                <div className="text-white text-center">
                  <i className="fas fa-building text-4xl mb-2"></i>
                  <p className="text-xs">Infrastructure</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">August 10, 2025</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">New Computer Labs Unveiled</h3>
                <p className="text-gray-600 text-sm mb-3">
                  State-of-the-art computer laboratories with latest hardware and software ready for 
                  the new semester. Features 200 workstations and specialized equipment.
                </p>
                <a href="#" className="text-sm font-medium transition duration-300" 
                   style={{color: 'var(--primary-green)'}}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dark-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-green)'}>
                  Read More →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 slide-down">
              <div className="h-48 flex items-center justify-center" style={{backgroundColor: 'var(--dark-green)'}}>
                <div className="text-center" style={{color: 'var(--primary-green)'}}>
                <i className="fas fa-rocket text-4xl mb-2" style={{ color: 'white' }}></i>
                  <p className="text-xs" style={{ color: 'white' }}>Innovation</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">August 5, 2025</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Tech Innovation Hub Launch</h3>
                <p className="text-gray-600 text-sm mb-3">
                  UM CCE launches its Innovation Hub to support student startups and tech entrepreneurship. 
                  Features co-working spaces and mentorship programs.
                </p>
                <a href="#" className="text-sm font-medium transition duration-300" 
                   style={{color: 'var(--primary-green)'}}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dark-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-green)'}>
                  Read More →
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center slide-down" style={{color: 'var(--primary-green)'}}>Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 slide-down">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: 'var(--secondary-gold)'}}>
                  <i className="fas fa-calendar-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Tech Career Fair 2025</h3>
                  <p className="text-sm text-gray-500">October 15, 2025 • 9:00 AM - 4:00 PM</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Connect with top employers including Microsoft, Google, IBM, and local tech startups. 
                Open to all UM CCE students and alumni. Bring your resume and portfolio!
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white" 
                      style={{backgroundColor: 'var(--primary-green)'}}>
                  Career Fair
                </span>
                <a href="#" className="text-sm font-medium transition duration-300" 
                   style={{color: 'var(--primary-green)'}}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dark-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-green)'}>
                  Learn More →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 slide-down">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: 'var(--primary-green)'}}>
                  <i className="fas fa-laptop-code text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Workshop Series</h3>
                  <p className="text-sm text-gray-500">October 20-22, 2025 • 2:00 PM - 5:00 PM</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                3-day intensive workshop on Machine Learning and AI fundamentals. Led by industry experts 
                and UM CCE faculty. Hands-on projects with Python and TensorFlow.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium" 
                      style={{backgroundColor: 'var(--light-green)', color: 'var(--primary-green)'}}>
                  Workshop
                </span>
                <a href="#" className="text-sm font-medium transition duration-300" 
                   style={{color: 'var(--primary-green)'}}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dark-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-green)'}>
                  Register Now →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 slide-down">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: 'var(--dark-green)'}}>
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Alumni Homecoming</h3>
                  <p className="text-sm text-gray-500">November 5, 2025 • 10:00 AM - 6:00 PM</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Annual homecoming celebration for UM CCE alumni. Network with fellow graduates, 
                tour updated facilities, and share career success stories with current students.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white" 
                      style={{backgroundColor: 'var(--secondary-gold)'}}>
                  Alumni Event
                </span>
                <a href="#" className="text-sm font-medium transition duration-300" 
                   style={{color: 'var(--primary-green)'}}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dark-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-green)'}>
                  RSVP Here →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 slide-down">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: 'var(--secondary-gold)'}}>
                  <i className="fas fa-trophy text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Winter Hackathon 2025</h3>
                  <p className="text-sm text-gray-500">December 1-3, 2025 • 48-hour Event</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                48-hour coding marathon focusing on sustainable technology solutions. Prizes include 
                cash awards, internship opportunities, and mentorship programs with industry partners.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white" 
                      style={{backgroundColor: 'var(--primary-green)'}}>
                  Hackathon
                </span>
                <a href="#" className="text-sm font-medium transition duration-300" 
                   style={{color: 'var(--primary-green)'}}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dark-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-green)'}>
                  Join Team →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16" style={{background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="slide-down">
            <i className="fas fa-envelope text-5xl text-white mb-6"></i>
            <h2 className="text-3xl font-bold text-white mb-4">Stay Connected with UM CCE</h2>
            <p className="text-xl text-white mb-8 opacity-90">
              Get the latest news, events, and opportunities delivered to your inbox
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 bg-white focus:ring-4 focus:ring-white focus:ring-opacity-30 focus:outline-none"
                />
                <button className="px-8 py-3 rounded-lg font-semibold transition duration-300 hover:transform hover:scale-105"
                        style={{backgroundColor: 'var(--secondary-gold)', color: 'white'}}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-white opacity-75 mt-4">
                Join 2,500+ students, faculty, and alumni in our community
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};