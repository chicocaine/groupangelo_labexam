import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our College</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Leading the way in computing education since 1985, we're committed to developing 
            the next generation of technology leaders and innovators.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                To provide exceptional education in computing and technology, fostering innovation, 
                critical thinking, and ethical leadership in our students.
              </p>
              <p className="text-gray-600">
                We are dedicated to preparing students for successful careers while contributing 
                to technological advancement through cutting-edge research and community engagement.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4">
                To be a globally recognized leader in computing education, known for our innovative 
                programs, world-class research, and graduates who shape the future of technology.
              </p>
              <p className="text-gray-600">
                We envision a future where our college serves as a hub of technological innovation, 
                driving positive change in society through education and research.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our History</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">1985</div>
                  <div className="text-sm">Foundation</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">College Established</h3>
                <p className="text-gray-700">
                  The College of Computing Education was founded as part of the university's expansion 
                  into technology education, starting with just 50 students and 5 faculty members.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">1995</div>
                  <div className="text-sm">Expansion</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Major Expansion</h3>
                <p className="text-gray-700">
                  Construction of our modern computing facility was completed, featuring state-of-the-art 
                  laboratories and research centers, accommodating over 500 students.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">2010</div>
                  <div className="text-sm">Innovation</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Excellence</h3>
                <p className="text-gray-700">
                  Established multiple research centers focusing on AI, cybersecurity, and software engineering, 
                  attracting top researchers and significant funding.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">2025</div>
                  <div className="text-sm">Today</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Excellence</h3>
                <p className="text-gray-700">
                  Today, we serve over 1,500 students with 80+ faculty members, maintaining our position 
                  as a leading institution in computing education and research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-lg">Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Dr. Sarah Mitchell</h3>
              <p className="text-blue-600 font-medium mb-2">Dean</p>
              <p className="text-gray-600 text-sm">
                Ph.D. in Computer Science, 20+ years in academia and industry leadership.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-lg">Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Dr. James Rodriguez</h3>
              <p className="text-blue-600 font-medium mb-2">Associate Dean for Research</p>
              <p className="text-gray-600 text-sm">
                Expert in AI and machine learning with numerous published research papers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-lg">Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Dr. Lisa Chen</h3>
              <p className="text-blue-600 font-medium mb-2">Associate Dean for Academics</p>
              <p className="text-gray-600 text-sm">
                Curriculum development specialist with focus on innovative teaching methods.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Fostering creative thinking and breakthrough solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                Striving for the highest standards in all we do.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                Building strong partnerships and teamwork.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                Upholding ethical standards and honest practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};