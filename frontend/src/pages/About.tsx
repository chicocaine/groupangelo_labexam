import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-20 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)'}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-down">About UM College of Computing Education</h1>
          <p className="text-xl text-green-100 max-w-4xl mx-auto slide-down">
            One of the best computer schools in the region with PACUCOA Level IV accredited programs 
            and certified Center of Development status by CHED at the University of Mindanao.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-down">
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--primary-green)'}}>About the College</h2>
              <p className="text-lg text-gray-700 mb-4">
                The College of Computing Education maintains its reputation as one of the best 
                computer schools in the region through its PACUCOA Level IV accredited programs 
                as well as being a certified Center of Development.
              </p>
              <p className="text-gray-600">
                The college is composed of highly qualified faculty members who are skilled and 
                equipped with the updated skills in different fields of computer studies.
              </p>
            </div>
            
            <div className="slide-down">
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--primary-green)'}}>Accreditation & Recognition</h2>
              <p className="text-lg text-gray-700 mb-4">
                The Computer Science and Information Technology program of the college is granted 
                Center of Development (COD) status by CHED and is PICAB accredited by the Philippine 
                Computer Society (PCS) Information and Computing Accreditation Board.
              </p>
              <p className="text-gray-600">
                UM CCE has forged collaborations with industry leaders including Apple, Google, 
                Microsoft (Center of Training), and IBM, ensuring our students receive world-class education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Offerings */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center slide-down" style={{color: 'var(--primary-green)'}}>Program Offerings</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--primary-green)'}}>
                <i className="fas fa-code text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-600 text-sm text-center">CHED Center of Development program focusing on software development and computer systems.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--primary-green)'}}>
                <i className="fas fa-network-wired text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Bachelor of Science in Information Technology</h3>
              <p className="text-gray-600 text-sm text-center">CHED Center of Development program covering network administration and IT solutions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--primary-green)'}}>
                <i className="fas fa-gamepad text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">BS Entertainment & Multimedia Computing</h3>
              <p className="text-gray-600 text-sm text-center">Major in Game Development - creating interactive entertainment and multimedia applications.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--primary-green)'}}>
                <i className="fas fa-paint-brush text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Bachelor of Multimedia Arts</h3>
              <p className="text-gray-600 text-sm text-center">Digital arts, animation, and multimedia content creation program.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 slide-down">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--primary-green)'}}>
                <i className="fas fa-book text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Bachelor of Library & Information Science</h3>
              <p className="text-gray-600 text-sm text-center">Information management, library systems, and digital information services.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center slide-down" style={{color: 'var(--primary-green)'}}>Leadership Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center slide-down">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--light-green)'}}>
                <i className="fas fa-user-tie text-3xl" style={{color: 'var(--primary-green)'}}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Ramcis N. Vilchez, DIT</h3>
              <p className="font-medium mb-2" style={{color: 'var(--primary-green)'}}>Dean</p>
              <p className="text-gray-600 text-sm">
                Doctor of Information Technology leading the College of Computing Education.
              </p>
            </div>

            <div className="text-center slide-down">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--light-green)'}}>
                <i className="fas fa-user-tie text-3xl" style={{color: 'var(--primary-green)'}}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Fe B. Yara</h3>
              <p className="font-medium mb-2" style={{color: 'var(--primary-green)'}}>Assistant Dean</p>
              <p className="text-gray-600 text-sm">
                Assistant Dean supporting the academic and administrative operations of CCE.
              </p>
            </div>

            <div className="text-center slide-down">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--light-green)'}}>
                <i className="fas fa-user text-3xl" style={{color: 'var(--primary-green)'}}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Charisse P. Barbosa</h3>
              <p className="font-medium mb-2" style={{color: 'var(--primary-green)'}}>IT Program Head</p>
              <p className="text-gray-600 text-sm">
                Program Head for Bachelor of Science in Information Technology.
              </p>
            </div>

            <div className="text-center slide-down">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--light-green)'}}>
                <i className="fas fa-user text-3xl" style={{color: 'var(--primary-green)'}}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Meljohn V. Aborde, MSCS</h3>
              <p className="font-medium mb-2" style={{color: 'var(--primary-green)'}}>CS Program Head</p>
              <p className="text-gray-600 text-sm">
                Master of Science in Computer Science, Program Head for BSCS.
              </p>
            </div>

            <div className="text-center slide-down">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--light-green)'}}>
                <i className="fas fa-user text-3xl" style={{color: 'var(--primary-green)'}}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Joselaine D. Ledesma</h3>
              <p className="font-medium mb-2" style={{color: 'var(--primary-green)'}}>Multimedia Arts Head</p>
              <p className="text-gray-600 text-sm">
                Program Head for Bachelor of Multimedia Arts.
              </p>
            </div>

            <div className="text-center slide-down">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--light-green)'}}>
                <i className="fas fa-user text-3xl" style={{color: 'var(--primary-green)'}}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Justin Othello B. Vargas</h3>
              <p className="font-medium mb-2" style={{color: 'var(--primary-green)'}}>EMC Program Head</p>
              <p className="text-gray-600 text-sm">
                Program Head for Entertainment and Multimedia Computing.
              </p>
            </div>

            <div className="text-center slide-down">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--light-green)'}}>
                <i className="fas fa-user text-3xl" style={{color: 'var(--primary-green)'}}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Brigida E. Bacani, MAED</h3>
              <p className="font-medium mb-2" style={{color: 'var(--primary-green)'}}>BLIS Program Head</p>
              <p className="text-gray-600 text-sm">
                Master of Arts in Education, Program Head for Library and Information Science.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Partnerships */}
      <div className="py-16" style={{backgroundColor: 'var(--light-green)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center slide-down" style={{color: 'var(--primary-green)'}}>Industry Partnerships</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center slide-down">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--primary-green)'}}>
                <i className="fab fa-apple text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apple</h3>
              <p className="text-gray-600 text-sm">
                Collaboration for iOS development and mobile computing education.
              </p>
            </div>

            <div className="text-center slide-down">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--primary-green)'}}>
                <i className="fab fa-google text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Google</h3>
              <p className="text-gray-600 text-sm">
                Partnership for cloud computing and web development technologies.
              </p>
            </div>

            <div className="text-center slide-down">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--primary-green)'}}>
                <i className="fab fa-microsoft text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Microsoft</h3>
              <p className="text-gray-600 text-sm">
                Certified Center of Training for Microsoft technologies and Azure.
              </p>
            </div>

            <div className="text-center slide-down">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--primary-green)'}}>
                <i className="fas fa-server text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IBM</h3>
              <p className="text-gray-600 text-sm">
                Collaboration for enterprise computing and data analytics programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};