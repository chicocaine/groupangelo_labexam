import React from 'react';

export const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-20 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)'}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-down">Academic Programs</h1>
          <p className="text-xl text-green-100 max-w-4xl mx-auto slide-down">
            Discover our PACUCOA Level IV accredited programs and CHED Center of Development 
            offerings at UM College of Computing Education.
          </p>
        </div>
      </div>

      {/* Undergraduate Programs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center slide-down" style={{color: 'var(--primary-green)'}}>Undergraduate Programs</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'var(--light-green)'}}>
                <i className="fas fa-code text-2xl" style={{color: 'var(--primary-green)'}}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-600 mb-4">
                CHED Center of Development program focusing on software development, 
                algorithms, and computer systems fundamentals.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• CHED Center of Development</li>
                <li>• PICAB Accredited</li>
                <li>• Industry partnerships</li>
                <li>• Research opportunities</li>
              </ul>
              <button className="w-full text-white py-2 rounded-lg font-semibold transition duration-300" 
                style={{backgroundColor: 'var(--secondary-gold)', color: 'var(--dark-green)'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4af37'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary-gold)'}>
                Learn More
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'var(--light-green)'}}>
                <i className="fas fa-network-wired text-2xl" style={{color: 'var(--primary-green)'}}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bachelor of Science in Information Technology</h3>
              <p className="text-gray-600 mb-4">
                CHED Center of Development program covering network administration, 
                database management, and IT solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• CHED Center of Development</li>
                <li>• PICAB Accredited</li>
                <li>• Microsoft Training Center</li>
                <li>• Industry certifications</li>
              </ul>
              <button className="w-full text-white py-2 rounded-lg font-semibold transition duration-300" 
                style={{backgroundColor: 'var(--secondary-gold)', color: 'var(--dark-green)'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4af37'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary-gold)'}>
                Learn More
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'var(--light-green)'}}>
                <i className="fas fa-gamepad text-2xl" style={{color: 'var(--primary-green)'}}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">BS Entertainment & Multimedia Computing</h3>
              <p className="text-gray-600 mb-4">
                Major in Game Development - creating interactive entertainment 
                and multimedia applications.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Game development focus</li>
                <li>• Creative programming</li>
                <li>• Industry collaboration</li>
                <li>• Portfolio development</li>
              </ul>
              <button className="w-full text-white py-2 rounded-lg font-semibold transition duration-300" 
                style={{backgroundColor: 'var(--secondary-gold)', color: 'var(--dark-green)'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4af37'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary-gold)'}>
                Learn More
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'var(--light-green)'}}>
                <i className="fas fa-paint-brush text-2xl" style={{color: 'var(--primary-green)'}}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bachelor of Multimedia Arts</h3>
              <p className="text-gray-600 mb-4">
                Digital arts, animation, and multimedia content creation 
                program with industry-standard tools.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Digital arts focus</li>
                <li>• Animation techniques</li>
                <li>• Industry software training</li>
                <li>• Creative portfolio</li>
              </ul>
              <button className="w-full text-white py-2 rounded-lg font-semibold transition duration-300" 
                style={{backgroundColor: 'var(--secondary-gold)', color: 'var(--dark-green)'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4af37'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary-gold)'}>
                Learn More
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'var(--light-green)'}}>
                <i className="fas fa-book text-2xl" style={{color: 'var(--primary-green)'}}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bachelor of Library & Information Science</h3>
              <p className="text-gray-600 mb-4">
                Information management, library systems, and digital 
                information services program.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Information management</li>
                <li>• Digital libraries</li>
                <li>• Database systems</li>
                <li>• Research methodologies</li>
              </ul>
              <button className="w-full text-white py-2 rounded-lg font-semibold transition duration-300" 
                style={{backgroundColor: 'var(--secondary-gold)', color: 'var(--dark-green)'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4af37'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary-gold)'}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditation & Recognition */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center slide-down" style={{color: 'var(--primary-green)'}}>Accreditation & Industry Recognition</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md slide-down">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Accreditations</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full mt-1 mr-3" style={{backgroundColor: 'var(--primary-green)'}}></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">PACUCOA Level IV</h4>
                    <p className="text-gray-600 text-sm">Highest accreditation level for our programs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full mt-1 mr-3" style={{backgroundColor: 'var(--primary-green)'}}></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">CHED Center of Development</h4>
                    <p className="text-gray-600 text-sm">CS and IT programs recognized for excellence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full mt-1 mr-3" style={{backgroundColor: 'var(--primary-green)'}}></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">PICAB Accredited</h4>
                    <p className="text-gray-600 text-sm">Philippine Computer Society certification</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md slide-down">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Industry Partnerships</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full mt-1 mr-3" style={{backgroundColor: 'var(--secondary-gold)'}}></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Microsoft Training Center</h4>
                    <p className="text-gray-600 text-sm">Certified center for Microsoft technologies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full mt-1 mr-3" style={{backgroundColor: 'var(--secondary-gold)'}}></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Apple Collaboration</h4>
                    <p className="text-gray-600 text-sm">Partnership for iOS development programs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full mt-1 mr-3" style={{backgroundColor: 'var(--secondary-gold)'}}></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Google & IBM</h4>
                    <p className="text-gray-600 text-sm">Technology partnerships for advanced training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center slide-down" style={{color: 'var(--primary-green)'}}>Career Opportunities</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto slide-down">
            UM CCE graduates are highly sought after by leading companies worldwide. 
            Our industry partnerships provide direct pathways to successful careers.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border rounded-lg slide-down" style={{borderColor: 'var(--light-green)'}}>
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--primary-green)'}}>95%+</div>
              <div className="text-sm text-gray-600">Graduate Employment Rate</div>
            </div>
            <div className="text-center p-6 border rounded-lg slide-down" style={{borderColor: 'var(--light-green)'}}>
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--primary-green)'}}>4</div>
              <div className="text-sm text-gray-600">Major Industry Partners</div>
            </div>
            <div className="text-center p-6 border rounded-lg slide-down" style={{borderColor: 'var(--light-green)'}}>
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--primary-green)'}}>COD</div>
              <div className="text-sm text-gray-600">CHED Center of Development</div>
            </div>
            <div className="text-center p-6 border rounded-lg slide-down" style={{borderColor: 'var(--light-green)'}}>
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--primary-green)'}}>Level IV</div>
              <div className="text-sm text-gray-600">PACUCOA Accreditation</div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center slide-down">Popular Career Paths</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="slide-down">
                <h4 className="font-semibold text-gray-900 mb-3" style={{color: 'var(--primary-green)'}}>Software Development</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Full-Stack Developer</li>
                  <li>• Mobile App Developer</li>
                  <li>• DevOps Engineer</li>
                  <li>• Software Architect</li>
                </ul>
              </div>
              <div className="slide-down">
                <h4 className="font-semibold text-gray-900 mb-3" style={{color: 'var(--primary-green)'}}>Information Technology</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Systems Administrator</li>
                  <li>• Network Engineer</li>
                  <li>• Database Administrator</li>
                  <li>• IT Consultant</li>
                </ul>
              </div>
              <div className="slide-down">
                <h4 className="font-semibold text-gray-900 mb-3" style={{color: 'var(--primary-green)'}}>Creative Technology</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Game Developer</li>
                  <li>• Multimedia Artist</li>
                  <li>• Animation Specialist</li>
                  <li>• Digital Content Creator</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 text-white" style={{background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 slide-down">Ready to Join UM CCE?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto slide-down">
            Join the ranks of successful UM College of Computing Education graduates. 
            Apply now and start your journey in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-down">
            <button 
              className="px-8 py-3 rounded-lg font-semibold transition duration-300"
              style={{backgroundColor: 'var(--secondary-gold)', color: 'var(--dark-green)'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4af37'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary-gold)'}>
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white transition duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'var(--primary-green)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}>
              Contact Admissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};