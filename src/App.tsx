import React from 'react';
import { Github, Instagram, Linkedin, Mail, Phone, ExternalLink, School, Briefcase, User, Code, Award, BookOpen, Download, Send } from 'lucide-react';

function App() {
  const handleDownload = () => {
    const details = `
    Gunti Ravikumar
    B.Tech Student at IIITDM Jabalpur
    
    Contact:
    Email: ravikumargunti837@gmail.com
    Phone: +918888888888
    
    Education:
    - B.Tech at IIITDM Jabalpur (2023-2027)
    - Intermediate at Narayana Junior College (2021-2023)
    - Secondary Education at MJPTBCWREIS (2017-2021)
    
    Technical Skills:
    - Problem Solving (90%)
    - Data Structures (85%)
    - Algorithms (80%)
    - Web Development (75%)
    
    Soft Skills:
    - Team Leadership (85%)
    - Project Management (80%)
    - Communication (90%)
    - Adaptability (85%)
    
    Projects:
    1. Field Grower
    - Agricultural optimization solution
    - Features: crop recommendation, weather monitoring, yield prediction
    
    2. Saviour
    - Disaster management system
    - Features: real-time alerts, resource management, emergency response coordination
    `;

    const blob = new Blob([details], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Gunti_Ravikumar_Details.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 via-teal-800 to-cyan-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto rounded-full border-4 border-teal-500 overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
                  alt="Profile"
                  className="w-full h-full object-cover bg-gray-100"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gunti Ravikumar</h1>
            <p className="text-xl md:text-2xl text-teal-300 mb-8">B.Tech Student at IIITDM Jabalpur</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/Ravikumar-2016" className="p-2 hover:text-teal-300 transition-colors" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/gunti-ravikumar-8b360a2a8" className="p-2 hover:text-teal-300 transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
              <a href="https://www.instagram.com/ravikumargunti58/" className="p-2 hover:text-teal-300 transition-colors" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center"><User className="mr-2" /> About Me</h2>
            <p className="text-lg leading-relaxed mb-8">
              Passionate B.Tech student with a keen interest in technology and innovation. 
              Focused on developing solutions that make a difference in agriculture and disaster management.
              Currently exploring new technologies and working on projects that can create positive impact in society.
            </p>
            <button onClick={handleDownload} className="flex items-center px-6 py-3 bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors">
              <Download className="mr-2" /> Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-indigo-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Award className="inline-block" /> Skills & Expertise
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 fade-in">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code /> Technical Skills
                </h3>
                {[
                  { name: 'Problem Solving', level: 90 },
                  { name: 'Data Structures', level: 85 },
                  { name: 'Algorithms', level: 80 },
                  { name: 'Web Development', level: 75 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6 fade-in">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User /> Soft Skills
                </h3>
                {[
                  { name: 'Team Leadership', level: 85 },
                  { name: 'Project Management', level: 80 },
                  { name: 'Communication', level: 90 },
                  { name: 'Adaptability', level: 85 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div 
                        className="h-full bg-purple-500 rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center"><Code className="mr-2" /> Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Field Grower Project */}
            <div className="bg-black/30 rounded-xl overflow-hidden">
              <img 
                src="https://agriculture.buzz/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fsaks7ubo%2Fproduction%2F1820ee712e3c18a2cb90c9e9bc06354b6919e487-1792x1024.webp%3Fw%3D1792%26q%3D100%26auto%3Dformat&w=3840&q=100" 
                alt="Field Grower" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Field Grower</h3>
                <p className="text-gray-300 mb-4">
                  Agricultural optimization solution providing crop recommendations, 
                  weather monitoring, and yield predictions to help farmers maximize their productivity.
                </p>
                <a href="#" className="inline-flex items-center text-teal-300 hover:text-teal-400">
                  Learn More <ExternalLink className="ml-1" size={16} />
                </a>
              </div>
            </div>

            {/* Saviour Project */}
            <div className="bg-black/30 rounded-xl overflow-hidden">
              <img 
                src="https://img2.chinadaily.com.cn/images/202308/10/64d4501fa310352610ba7744.jpeg" 
                alt="Saviour" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Saviour</h3>
                <p className="text-gray-300 mb-4">
                  Disaster management system featuring real-time alerts, 
                  resource management, and emergency response coordination.
                </p>
                <a href="#" className="inline-flex items-center text-teal-300 hover:text-teal-400">
                  Learn More <ExternalLink className="ml-1" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center"><School className="mr-2" /> Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">B.Tech at IIITDM Jabalpur</h3>
                <p className="text-teal-300">2023-2027</p>
                <p className="text-gray-300 mt-2">Pursuing Bachelor's in Technology</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Narayana Junior College</h3>
                <p className="text-teal-300">2021-2023</p>
                <p className="text-gray-300 mt-2">Intermediate Education</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">MJPTBCWREIS</h3>
                <p className="text-teal-300">2017-2021</p>
                <p className="text-gray-300 mt-2">Secondary Education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-purple-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Mail className="inline-block" /> Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all h-32"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:transform hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 py-8 border-t border-indigo-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/Ravikumar-2016" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/gunti-ravikumar-8b360a2a8" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/ravikumargunti58/" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-gray-400">© 2025 Gunti Ravikumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;