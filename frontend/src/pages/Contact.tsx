import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="text-white py-16" style={{background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="slide-down">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact & Visit UM CCE</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Connect with the University of Mindanao College of Computing Education. 
              We're here to assist with admissions, programs, and campus visits.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 hover:transform hover:scale-105 transition duration-300 slide-down">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{backgroundColor: 'var(--light-green)'}}>
                <i className="fas fa-phone text-2xl" style={{color: 'var(--primary-green)'}}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600" style={{color: 'var(--primary-green)'}}>+63 (082) 227 5456</p>
              <p className="text-gray-600 text-sm">Bolton Campus</p>
              <p className="text-gray-600" style={{color: 'var(--primary-green)'}}>+63 (082) 305 0645</p>
              <p className="text-gray-600 text-sm">Matina Campus</p>
            </div>

            <div className="text-center p-6 hover:transform hover:scale-105 transition duration-300 slide-down">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{backgroundColor: 'var(--secondary-gold)'}}>
                <i className="fas fa-envelope text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600" style={{color: 'var(--primary-green)'}}>cce@umindanao.edu.ph</p>
              <p className="text-gray-600 text-sm">College of Computing Education</p>
            </div>

            <div className="text-center p-6 hover:transform hover:scale-105 transition duration-300 slide-down">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{backgroundColor: 'var(--primary-green)'}}>
                <i className="fas fa-map-marker-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">Bolton Street, Davao City</p>
              <p className="text-gray-600">8000 Davao del Sur, Philippines</p>
            </div>

            <div className="text-center p-6 hover:transform hover:scale-105 transition duration-300 slide-down">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{backgroundColor: 'var(--dark-green)'}}>
                <i className="fas fa-clock text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-gray-600">8:00 AM - 5:00 PM</p>
              <p className="text-gray-600 text-sm">Philippine Time (PHT)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="py-16" style={{backgroundColor: 'var(--light-green)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-down">
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--primary-green)'}}>Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{'--tw-ring-color': 'var(--primary-green)'} as React.CSSProperties}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{'--tw-ring-color': 'var(--primary-green)'} as React.CSSProperties}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{'--tw-ring-color': 'var(--primary-green)'} as React.CSSProperties}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{'--tw-ring-color': 'var(--primary-green)'} as React.CSSProperties}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I'm interested in:
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                          style={{'--tw-ring-color': 'var(--primary-green)'} as React.CSSProperties}>
                    <option value="">Select an option</option>
                    <option value="bscs">BS Computer Science</option>
                    <option value="bsit">BS Information Technology</option>
                    <option value="gamedev">Game Development</option>
                    <option value="multimedia">Multimedia Arts</option>
                    <option value="blis">Bachelor of Library and Information Science</option>
                    <option value="admissions">Admissions Information</option>
                    <option value="visit">Campus Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{'--tw-ring-color': 'var(--primary-green)'} as React.CSSProperties}
                    placeholder="Tell us about your interests, questions, or how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold transition duration-300 hover:transform hover:scale-105"
                  style={{backgroundColor: 'var(--primary-green)'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--dark-green)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Location Info */}
            <div className="slide-down">
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--primary-green)'}}>Find Us</h2>
              
              {/* Map Placeholder */}
              <div className="rounded-lg h-64 mb-6 flex items-center justify-center" 
                   style={{backgroundColor: 'var(--secondary-gold)'}}>
                <div className="text-center text-white">
                  <i className="fas fa-map-marked-alt text-5xl mb-3"></i>
                  <p className="font-semibold">University of Mindanao</p>
                  <p className="text-sm">Bolton Campus - Davao City</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Campus Locations</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-xl mt-1 mr-3" style={{color: 'var(--primary-green)'}}></i>
                    <div>
                      <p className="font-medium text-gray-900">UM Bolton Campus</p>
                      <p className="text-gray-600">Bolton Street, Davao City</p>
                      <p className="text-gray-600">8000 Davao del Sur, Philippines</p>
                      <p className="text-sm" style={{color: 'var(--primary-green)'}}>+63 (082) 227 5456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-xl mt-1 mr-3" style={{color: 'var(--secondary-gold)'}}></i>
                    <div>
                      <p className="font-medium text-gray-900">UM Matina Campus</p>
                      <p className="text-gray-600">Matina, Davao City</p>
                      <p className="text-gray-600">8000 Davao del Sur, Philippines</p>
                      <p className="text-sm" style={{color: 'var(--primary-green)'}}>+63 (082) 305 0645</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <i className="fas fa-car text-xl mt-1 mr-3" style={{color: 'var(--primary-green)'}}></i>
                    <div>
                      <p className="font-medium text-gray-900">Transportation</p>
                      <p className="text-gray-600">Accessible by jeepney, taxi, and private vehicle</p>
                      <p className="text-gray-600">Visitor parking available on campus</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <i className="fas fa-info-circle text-xl mt-1 mr-3" style={{color: 'var(--secondary-gold)'}}></i>
                    <div>
                      <p className="font-medium text-gray-900">Visitor Information</p>
                      <p className="text-gray-600">Main entrance at Bolton Street</p>
                      <p className="text-gray-600">Security clearance required for campus visits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Departments */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center slide-down" style={{color: 'var(--primary-green)'}}>Department Contacts</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 rounded-lg p-6 hover:shadow-lg transition duration-300 slide-down" 
                 style={{borderColor: 'var(--light-green)'}}>
              <div className="flex items-center mb-3">
                <i className="fas fa-user-graduate text-2xl mr-3" style={{color: 'var(--primary-green)'}}></i>
                <h3 className="text-lg font-semibold text-gray-900">Admissions Office</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Phone:</span> +63 (082) 227 5456</p>
                <p><span className="font-medium">Email:</span> admissions@umindanao.edu.ph</p>
                <p><span className="font-medium">Location:</span> Admin Building, Ground Floor</p>
                <p><span className="font-medium">Hours:</span> Mon-Fri, 8AM-5PM</p>
              </div>
            </div>

            <div className="bg-white border-2 rounded-lg p-6 hover:shadow-lg transition duration-300 slide-down" 
                 style={{borderColor: 'var(--secondary-gold)'}}>
              <div className="flex items-center mb-3">
                <i className="fas fa-users text-2xl mr-3" style={{color: 'var(--secondary-gold)'}}></i>
                <h3 className="text-lg font-semibold text-gray-900">Student Services</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Phone:</span> +63 (082) 227 5456</p>
                <p><span className="font-medium">Email:</span> students.cce@umindanao.edu.ph</p>
                <p><span className="font-medium">Location:</span> CCE Building, 2nd Floor</p>
                <p><span className="font-medium">Hours:</span> Mon-Fri, 8AM-5PM</p>
              </div>
            </div>

            <div className="bg-white border-2 rounded-lg p-6 hover:shadow-lg transition duration-300 slide-down" 
                 style={{borderColor: 'var(--primary-green)'}}>
              <div className="flex items-center mb-3">
                <i className="fas fa-laptop-code text-2xl mr-3" style={{color: 'var(--primary-green)'}}></i>
                <h3 className="text-lg font-semibold text-gray-900">Computer Science Dept.</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Phone:</span> +63 (082) 227 5456 ext. 201</p>
                <p><span className="font-medium">Email:</span> cs.dept@umindanao.edu.ph</p>
                <p><span className="font-medium">Location:</span> CCE Building, 3rd Floor</p>
                <p><span className="font-medium">Hours:</span> Mon-Fri, 8AM-5PM</p>
              </div>
            </div>

            <div className="bg-white border-2 rounded-lg p-6 hover:shadow-lg transition duration-300 slide-down" 
                 style={{borderColor: 'var(--dark-green)'}}>
              <div className="flex items-center mb-3">
                <i className="fas fa-server text-2xl mr-3" style={{color: 'var(--dark-green)'}}></i>
                <h3 className="text-lg font-semibold text-gray-900">Information Technology</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Phone:</span> +63 (082) 227 5456 ext. 202</p>
                <p><span className="font-medium">Email:</span> it.dept@umindanao.edu.ph</p>
                <p><span className="font-medium">Location:</span> CCE Building, 4th Floor</p>
                <p><span className="font-medium">Hours:</span> Mon-Fri, 8AM-5PM</p>
              </div>
            </div>

            <div className="bg-white border-2 rounded-lg p-6 hover:shadow-lg transition duration-300 slide-down" 
                 style={{borderColor: 'var(--secondary-gold)'}}>
              <div className="flex items-center mb-3">
                <i className="fas fa-briefcase text-2xl mr-3" style={{color: 'var(--secondary-gold)'}}></i>
                <h3 className="text-lg font-semibold text-gray-900">Career Services</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Phone:</span> +63 (082) 227 5456 ext. 301</p>
                <p><span className="font-medium">Email:</span> careers.cce@umindanao.edu.ph</p>
                <p><span className="font-medium">Location:</span> Career Center, Ground Floor</p>
                <p><span className="font-medium">Hours:</span> Mon-Fri, 8AM-5PM</p>
              </div>
            </div>

            <div className="bg-white border-2 rounded-lg p-6 hover:shadow-lg transition duration-300 slide-down" 
                 style={{borderColor: 'var(--light-green)'}}>
              <div className="flex items-center mb-3">
                <i className="fas fa-book text-2xl mr-3" style={{color: 'var(--primary-green)'}}></i>
                <h3 className="text-lg font-semibold text-gray-900">Library & Info Science</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Phone:</span> +63 (082) 227 5456 ext. 203</p>
                <p><span className="font-medium">Email:</span> blis.dept@umindanao.edu.ph</p>
                <p><span className="font-medium">Location:</span> Library Building, 1st Floor</p>
                <p><span className="font-medium">Hours:</span> Mon-Fri, 8AM-5PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="py-16" style={{backgroundColor: 'var(--light-green)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="slide-down">
            <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--primary-green)'}}>Stay Connected</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Follow UM College of Computing Education on social media for the latest updates, 
              student achievements, research news, and campus events.
            </p>
            
            <div className="flex justify-center space-x-4 flex-wrap gap-4">
              <a href="https://www.facebook.com/umindanao.official" target="_blank" rel="noopener noreferrer" 
                 className="text-white p-4 rounded-full transition duration-300 hover:transform hover:scale-110"
                 style={{backgroundColor: '#1877F2'}}
                 onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                 onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              
              <a href="https://twitter.com/umindanao" target="_blank" rel="noopener noreferrer"
                 className="text-white p-4 rounded-full transition duration-300 hover:transform hover:scale-110"
                 style={{backgroundColor: '#1DA1F2'}}
                 onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                 onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                <i className="fab fa-twitter text-xl"></i>
              </a>
              
              <a href="https://www.tiktok.com/@umindanao.official" target="_blank" rel="noopener noreferrer"
                 className="text-white p-4 rounded-full transition duration-300 hover:transform hover:scale-110"
                 style={{backgroundColor: '#000000'}}
                 onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                 onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                <i className="fab fa-tiktok text-xl"></i>
              </a>
              
              <a href="https://www.youtube.com/umindanaoofficial" target="_blank" rel="noopener noreferrer"
                 className="text-white p-4 rounded-full transition duration-300 hover:transform hover:scale-110"
                 style={{backgroundColor: '#FF0000'}}
                 onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                 onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                <i className="fab fa-youtube text-xl"></i>
              </a>
              
              <a href="https://www.instagram.com/umindanao.official" target="_blank" rel="noopener noreferrer"
                 className="text-white p-4 rounded-full transition duration-300 hover:transform hover:scale-110"
                 style={{backgroundColor: '#E4405F'}}
                 onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                 onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                <i className="fab fa-instagram text-xl"></i>
              </a>
              
              <a href="https://www.pinterest.com/umindanao" target="_blank" rel="noopener noreferrer"
                 className="text-white p-4 rounded-full transition duration-300 hover:transform hover:scale-110"
                 style={{backgroundColor: '#BD081C'}}
                 onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                 onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                <i className="fab fa-pinterest text-xl"></i>
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Quick Links</p>
              <div className="flex justify-center space-x-6 flex-wrap gap-2">
                <a href="https://student.umindanao.edu.ph/" target="_blank" rel="noopener noreferrer"
                   className="px-4 py-2 rounded-lg font-medium transition duration-300 hover:transform hover:scale-105"
                   style={{backgroundColor: 'var(--primary-green)', color: 'white'}}
                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--dark-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-green)'}>
                  Student Portal
                </a>
                
                <a href="https://umindanao.blackboard.com/" target="_blank" rel="noopener noreferrer"
                   className="px-4 py-2 rounded-lg font-medium transition duration-300 hover:transform hover:scale-105"
                   style={{backgroundColor: 'var(--secondary-gold)', color: 'white'}}
                   onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                   onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                  Blackboard Learn
                </a>
                
                <a href="https://fms.umin.edu.ph/main/2" target="_blank" rel="noopener noreferrer"
                   className="px-4 py-2 rounded-lg font-medium transition duration-300 hover:transform hover:scale-105 border-2"
                   style={{borderColor: 'var(--primary-green)', color: 'var(--primary-green)'}}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.backgroundColor = 'var(--primary-green)';
                     e.currentTarget.style.color = 'white';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.backgroundColor = 'transparent';
                     e.currentTarget.style.color = 'var(--primary-green)';
                   }}>
                  Submit Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};