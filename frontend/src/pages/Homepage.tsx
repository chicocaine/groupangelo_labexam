import React from 'react';
import { Link } from 'react-router-dom';

export const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 animate-pulse" style={{
              opacity: 1,
              animation: 'slideDown 0.8s ease-out forwards'
            }}>
              Shape the Future with Computing
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto opacity-0" style={{
              opacity: 1,
              animation: 'slideDown 0.8s ease-out 0.2s forwards'
            }}>
              The UM College of Computing Education prepares students for careers in technology through innovative
              programs, cutting-edge research, and industry partnerships.
            </p>
            <div className="opacity-0" style={{
              opacity: 1,
              animation: 'slideDown 0.8s ease-out 0.4s forwards'
            }}>
              <Link
                to="/register"
                className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition duration-300"
                style={{
                  backgroundColor: 'var(--secondary-gold)',
                  color: 'var(--dark-green)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4af37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--secondary-gold)';
                }}
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center slide-down">Our Programs</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 slide-down">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: 'var(--light-green)'}}>
                  <i className="fas fa-laptop-code text-xl" style={{color: 'var(--primary-green)'}}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Information Technology</h3>
              </div>
              <p className="text-gray-600">
                Master algorithms, data structures, and software engineering principles to build innovative solutions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: 'var(--light-green)'}}>
                  <i className="fas fa-database text-xl" style={{color: 'var(--primary-green)'}}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Computer Science</h3>
              </div>
              <p className="text-gray-600">
                Learn to extract insights from complex data sets and drive data-informed decision making.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: 'var(--light-green)'}}>
                  <i className="fas fa-shield-alt text-xl" style={{color: 'var(--primary-green)'}}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Information Systems</h3>
              </div>
              <p className="text-gray-600">
                Develop skills to protect digital assets and secure information systems from threats.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: 'var(--light-green)'}}>
                  <i className="fas fa-paint-brush text-xl" style={{color: 'var(--primary-green)'}}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Entertainment & Multimedia Computing – Digital Animation</h3>
              </div>
              <p className="text-gray-600">
                Create visually stunning digital animations for games, films, and media projects.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: 'var(--light-green)'}}>
                  <i className="fas fa-gamepad text-xl" style={{color: 'var(--primary-green)'}}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Entertainment & Multimedia Computing – Game Development</h3>
              </div>
              <p className="text-gray-600">
                Design and develop interactive games using cutting-edge technology and creative storytelling.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: 'var(--light-green)'}}>
                  <i className="fas fa-camera-retro text-xl" style={{color: 'var(--primary-green)'}}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Multimedia Arts</h3>
              </div>
              <p className="text-gray-600">
                Explore creative media production including graphics, video, and interactive content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-16" style={{backgroundColor: 'var(--light-gray)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center slide-down">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 slide-down">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src="/hackathon1.jpg" alt="UM Hackathon 2025" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">UM Hackathon 2025</h3>
                <div className="text-sm text-gray-600 mb-3">Location: Online | Date: Oct 15-17, 2025</div>
                <p className="text-gray-700 mb-4">
                  Join teams across UM to solve real-world challenges using software development and innovation.
                </p>
                <button 
                  className="w-full py-2 px-4 rounded-lg font-semibold text-white transition duration-300"
                  style={{backgroundColor: 'var(--primary-green)'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--dark-green)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-green)';
                  }}
                >
                  Register Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src="/hackathon2.jpeg" alt="AI & ML Challenge" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & ML Challenge</h3>
                <div className="text-sm text-gray-600 mb-3">Location: CCE Lab | Date: Nov 5, 2025</div>
                <p className="text-gray-700 mb-4">
                  Showcase your AI and Machine Learning skills in an interactive coding challenge with amazing prizes.
                </p>
                <button 
                  className="w-full py-2 px-4 rounded-lg font-semibold text-white transition duration-300"
                  style={{backgroundColor: 'var(--primary-green)'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--dark-green)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-green)';
                  }}
                >
                  Register Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src="/hackathon3.jpg" alt="Cybersecurity Sprint" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity Sprint</h3>
                <div className="text-sm text-gray-600 mb-3">Location: Online | Date: Nov 20, 2025</div>
                <p className="text-gray-700 mb-4">
                  Participate in solving cybersecurity puzzles and learn from industry experts in a competitive sprint.
                </p>
                <button 
                  className="w-full py-2 px-4 rounded-lg font-semibold text-white transition duration-300"
                  style={{backgroundColor: 'var(--primary-green)'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--dark-green)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-green)';
                  }}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16" style={{backgroundColor: 'var(--light-green)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center slide-down" style={{color: 'var(--primary-green)'}}>Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: 'var(--primary-green)'}}>
                  <i className="fas fa-trophy text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Excellence</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We are committed to world-class customer service and quality as we excel for the mutual success of our stakeholders. 
                We ensure that our products and services are on par with global standards to ensure their responsiveness and impact 
                on our stakeholders and the community and country in general.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: 'var(--primary-green)'}}>
                  <i className="fas fa-handshake text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Honesty and Integrity</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our organization establishes utmost trust and ensures transparency in dealing with our stakeholders. 
                We practice accountability in all our undertakings especially those that involve our stakeholders. 
                Professionalism is at the core of our thrusts as an academic institution.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: 'var(--primary-green)'}}>
                  <i className="fas fa-lightbulb text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Innovation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We always think outside the box to be of prime service to our stakeholders. 
                We do this by continuously introducing new programs as value-added benefits to our clients.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: 'var(--primary-green)'}}>
                  <i className="fas fa-users text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Teamwork</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We believe in the concept that "the whole is greater than the sum of its parts." 
                We value the collective effort of every stakeholder through synergy, cooperation, collaboration, 
                and 'esprit de corps' as it is integral to the success of the institution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Opportunities Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center slide-down">Career Opportunities & Internships</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 slide-down">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Software Engineering Intern</h3>
              <div className="text-lg font-medium mb-2" style={{color: 'var(--primary-green)'}}>Tech Solutions Inc.</div>
              <div className="text-sm text-gray-600 mb-3">Location: Remote | Duration: 3 months | Deadline: Oct 10, 2025</div>
              <p className="text-gray-700 mb-4">
                Work on real-world projects with mentorship from experienced developers. Gain hands-on experience in software development.
              </p>
              <button 
                className="w-full py-2 px-4 rounded-lg font-semibold text-white transition duration-300"
                style={{backgroundColor: 'var(--secondary-gold)', color: 'var(--dark-green)'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4af37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--secondary-gold)';
                }}
              >
                Apply Now
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Analyst Intern</h3>
              <div className="text-lg font-medium mb-2" style={{color: 'var(--primary-green)'}}>Data Insights Corp.</div>
              <div className="text-sm text-gray-600 mb-3">Location: Manila | Duration: 6 months | Deadline: Oct 20, 2025</div>
              <p className="text-gray-700 mb-4">
                Analyze datasets, generate reports, and assist in decision-making processes using Python and SQL.
              </p>
              <button 
                className="w-full py-2 px-4 rounded-lg font-semibold text-white transition duration-300"
                style={{backgroundColor: 'var(--secondary-gold)', color: 'var(--dark-green)'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4af37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--secondary-gold)';
                }}
              >
                Apply Now
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity Trainee</h3>
              <div className="text-lg font-medium mb-2" style={{color: 'var(--primary-green)'}}>SecureTech Ltd.</div>
              <div className="text-sm text-gray-600 mb-3">Location: Cebu | Duration: 4 months | Deadline: Nov 1, 2025</div>
              <p className="text-gray-700 mb-4">
                Learn to identify vulnerabilities, monitor networks, and assist in securing critical systems.
              </p>
              <button 
                className="w-full py-2 px-4 rounded-lg font-semibold text-white transition duration-300"
                style={{backgroundColor: 'var(--secondary-gold)', color: 'var(--dark-green)'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4af37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--secondary-gold)';
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};