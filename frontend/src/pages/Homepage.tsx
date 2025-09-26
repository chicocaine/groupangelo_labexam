import React from 'react';
import { Link } from 'react-router-dom';

export const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              College of Computing Education
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Shaping the future of technology through innovative education, cutting-edge research, 
              and industry partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/programs"
                className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Explore Programs
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">1,500+</div>
              <div className="text-gray-600 mt-2">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">80+</div>
              <div className="text-gray-600 mt-2">Faculty Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600 mt-2">Job Placement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600 mt-2">Industry Partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our College?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer world-class education with hands-on experience and industry connections.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence in Education</h3>
              <p className="text-gray-600">
                Cutting-edge curriculum designed by industry experts and academic leaders.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Opportunities</h3>
              <p className="text-gray-600">
                Engage in groundbreaking research projects with renowned faculty members.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Success</h3>
              <p className="text-gray-600">
                Strong industry connections and career services to launch your professional journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* News Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <Link to="/news" className="text-blue-600 hover:text-blue-800 font-semibold">
              View All News →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-sm text-gray-500 mb-2">January 15, 2025</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                New AI Research Lab Opens
              </h3>
              <p className="text-gray-600 mb-4">
                Our college inaugurates a state-of-the-art artificial intelligence research laboratory...
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-sm text-gray-500 mb-2">January 10, 2025</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Student Wins National Coding Competition
              </h3>
              <p className="text-gray-600 mb-4">
                Congratulations to Sarah Johnson for winning first place in the national programming contest...
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-sm text-gray-500 mb-2">January 5, 2025</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                New Partnership with Tech Giants
              </h3>
              <p className="text-gray-600 mb-4">
                We're excited to announce partnerships with leading technology companies for internships...
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};