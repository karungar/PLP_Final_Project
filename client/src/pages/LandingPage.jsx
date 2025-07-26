import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [featuredOpportunities, setFeaturedOpportunities] = useState([]);
  const [featuredTalents, setFeaturedTalents] = useState([]);
  
  useEffect(() => {
    setFeaturedOpportunities([
      {
        _id: '1',
        title: 'Software Engineering Internship',
        organization: 'Tech Innovations Japan',
        location: 'Tokyo, Japan',
        type: 'Internship',
        deadline: new Date('2025-08-30'),
        description: 'Join our team for a 3-month internship focused on building innovative solutions for global markets.'
      },
      {
        _id: '2',
        title: 'African Market Research Analyst',
        organization: 'Global Trade Partners',
        location: 'Osaka, Japan (Remote)',
        type: 'Full-time',
        deadline: new Date('2025-09-15'),
        description: 'Looking for analysts with deep understanding of African markets to help Japanese companies expand.'
      },
      {
        _id: '3',
        title: 'Cultural Exchange Program',
        organization: 'Japan-Africa Foundation',
        location: 'Multiple Locations',
        type: 'Program',
        deadline: new Date('2025-10-01'),
        description: 'A 6-month exchange program for young professionals to experience business culture across borders.'
      }
    ]);

    setFeaturedTalents([
      {
        _id: '1',
        title: 'Full Stack Developer',
        user: { name: 'Ade Johnson', country: 'Nigeria' },
        skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
        experience: '5 years',
        bio: 'Passionate developer with experience in building scalable web applications for global clients.'
      },
      {
        _id: '2',
        title: 'Marketing Specialist',
        user: { name: 'Sakura Tanaka', country: 'Japan' },
        skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Market Analysis'],
        experience: '7 years',
        bio: 'Expert in developing marketing strategies for products entering the African market.'
      },
      {
        _id: '3',
        title: 'UX/UI Designer',
        user: { name: 'Chioma Okafor', country: 'Kenya' },
        skills: ['UI Design', 'UX Research', 'Figma', 'Design Systems'],
        experience: '4 years',
        bio: 'Creating user-centered designs that bridge cultural gaps and enhance user experience.'
      }
    ]);
  }, []);

  const heroImage = '/assets/images/HeroImage.jpg';

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section with Cultural Backgrounds */}
      <section className="relative bg-gradient-to-r from-jp-indigo to-jp-slate text-white">
        {/* Kente Pattern (African) */}
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ 
          backgroundImage: `linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22),
          linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22)`,
          backgroundSize: `40px 40px`,
          backgroundPosition: `0 0, 20px 20px`
        }}></div>
        
        {/* Washi Pattern (Japanese) */}
        <div className="absolute inset-0 bg-repeat opacity-20" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 4px)`,
          backgroundSize: `20px 20px`
        }}></div>
        
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.8 }}
>
  <span className="block">
    Bridging{' '}
    <span className="text-[#E6AF2E]">Africa</span>{' '}
    and{' '}
    <span className="text-[#BC002D]">Japan</span>
  </span>
  <motion.span 
    className="block text-gray-200 mt-3 text-lg md:text-xl"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
  >
    Creating Opportunities Together
  </motion.span>
</motion.h1>
            
            <motion.p 
              className="max-w-2xl mx-auto lg:mx-0 text-xl md:text-2xl mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              AfriBridge connects talents, businesses, and cultures between Africa and Japan,
              fostering collaboration, innovation, and growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link 
                to="/opportunities" 
                className="px-8 py-3 bg-white text-jp-indigo rounded-md font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Find Opportunities
              </Link>
              <Link 
                to="/talent" 
                className="px-8 py-3 border-2 border-white text-white rounded-md font-medium text-lg hover:bg-white hover:bg-opacity-10 transition-colors shadow-lg"
              >
                Discover Talent
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative w-full max-w-lg">
              {/* African Kente-inspired border */}
              <div className="absolute -inset-4 rounded-xl" style={{
                background: `linear-gradient(45deg, #e67e22, #d35400, #f39c12, #e67e22)`,
                zIndex: -1
              }}></div>
              
              <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={heroImage}
                  alt="Cultural connection between African and Japan"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-paper relative">
        {/* Washi-inspired background pattern */}
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 4px)`,
          backgroundSize: `20px 20px`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Vision
            </motion.h2>
            <motion.p 
              className="max-w-3xl mx-auto text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We envision a world where collaboration between African and Japanese
              businesses, professionals, and cultures creates unprecedented opportunities
              and drives sustainable growth for all.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-jp-indigo/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-jp-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Exchange</h3>
              <p className="text-gray-600">
                Fostering mutual understanding and appreciation between African and Japanese cultures
                through immersive experiences and knowledge sharing.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-jp-indigo/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-jp-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Network</h3>
              <p className="text-gray-600">
                Connecting talented professionals across borders, enabling career growth and
                creating diverse, innovative teams for businesses.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-jp-indigo/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-jp-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Partnerships</h3>
              <p className="text-gray-600">
                Facilitating strategic partnerships between African and Japanese companies,
                opening new markets and driving economic growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-16 bg-gray-50 relative">
        {/* African Kente-inspired background pattern */}
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ 
          backgroundImage: `linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22),
          linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22)`,
          backgroundSize: `40px 40px`,
          backgroundPosition: `0 0, 20px 20px`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Opportunities</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Discover the latest opportunities connecting Africa and Japan
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredOpportunities.map((opportunity) => (
              <motion.div 
                key={opportunity._id} 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="h-2 bg-gradient-to-r from-afri-red via-afri-yellow to-jp-red"></div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
                    opportunity.type === 'Internship' ? 'bg-blue-100 text-blue-800' :
                    opportunity.type === 'Full-time' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {opportunity.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <div className="flex items-start mb-4">
                    <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-gray-600">{opportunity.organization}</span>
                  </div>
                  <div className="flex items-start mb-4">
                    <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">{opportunity.location}</span>
                  </div>
                  <div className="flex items-start mb-6">
                    <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">Deadline: {opportunity.deadline.toLocaleDateString()}</span>
                  </div>
                  <Link 
                    to={`/opportunities/${opportunity._id}`} 
                    className="inline-block w-full text-center py-2 px-4 border border-jp-indigo text-jp-indigo font-medium rounded hover:bg-jp-indigo/10 transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/opportunities" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-jp-indigo hover:bg-jp-slate shadow-md"
            >
              View All Opportunities
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Talents */}
      <section className="py-16 bg-paper relative">
        {/* Japanese Washi-inspired background pattern */}
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 4px)`,
          backgroundSize: `20px 20px`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Talent</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Meet exceptional professionals bridging Africa and Japan
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTalents.map((talent) => (
              <motion.div 
                key={talent._id} 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="h-2 bg-gradient-to-r from-afri-red via-afri-yellow to-jp-red"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-jp-indigo/10 rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="font-bold text-jp-indigo">{talent.user.name.charAt(0)}</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{talent.user.name}</h3>
                      <p className="text-gray-600">{talent.user.country}</p>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{talent.title}</h4>
                  <p className="text-gray-600 mb-4">{talent.bio}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {talent.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start mb-6">
                    <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">Experience: {talent.experience}</span>
                  </div>
                  <Link 
                    to={`/talent/${talent._id}`} 
                    className="inline-block w-full text-center py-2 px-4 border border-jp-indigo text-jp-indigo font-medium rounded hover:bg-jp-indigo/10 transition duration-300"
                  >
                    View Profile
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/talent" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-jp-indigo hover:bg-jp-slate shadow-md"
            >
              View All Talent
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Refactored to match theme */}
      <section className="relative py-16 bg-gradient-to-r from-jp-indigo to-jp-slate text-white">
        {/* African Kente Pattern */}
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ 
          backgroundImage: `linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22),
          linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22)`,
          backgroundSize: `40px 40px`,
          backgroundPosition: `0 0, 20px 20px`
        }}></div>
        
        {/* Japanese Washi Pattern */}
        <div className="absolute inset-0 bg-repeat opacity-20" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 4px)`,
          backgroundSize: `20px 20px`
        }}></div>
        
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Bridge?</h2>
              <p className="text-gray-200 text-lg mb-8">
                Whether you're looking for opportunities or have talent to offer, 
                AfriBridge connects you with the right people and resources to succeed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/register" 
                  className="px-6 py-3 bg-white text-jp-indigo font-medium rounded-md hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Create Account
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center">
                <div className="relative w-80 h-80">
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ 
                      background: `linear-gradient(135deg, rgba(230, 175, 46, 0.3) 0%, rgba(188, 0, 45, 0.3) 100%)`
                    }}
                  />
                  <motion.div 
                    className="absolute inset-5 rounded-full"
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 4, delay: 0.5, repeat: Infinity }}
                    style={{ 
                      background: `linear-gradient(135deg, rgba(230, 175, 46, 0.4) 0%, rgba(188, 0, 45, 0.4) 100%)`
                    }}
                  />
                  <motion.div 
                    className="absolute inset-10 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.07, 1] }}
                    transition={{ duration: 4, delay: 1, repeat: Infinity }}
                    style={{ 
                      background: `linear-gradient(135deg, rgba(230, 175, 46, 0.5) 0%, rgba(188, 0, 45, 0.5) 100%)`
                    }}
                  >
                    <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50 relative">
        {/* Cultural Fusion Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
          background: `repeating-linear-gradient(45deg, 
            rgba(230, 126, 34, 0.1) 0px, rgba(230, 126, 34, 0.1) 10px, 
            rgba(0, 0, 0, 0.05) 10px, rgba(0, 0, 0, 0.05) 20px)`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Hear from those who have benefited from the AfriBridge connection
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <svg className="w-10 h-10 text-jp-indigo mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 text-lg mb-6">
                "Through AfriBridge, I found an amazing opportunity to work with a Japanese tech company. 
                The cultural exchange has been incredible, and I've grown professionally in ways I never imagined."
              </p>
              <div className="flex items-center">
                <div className="bg-jp-indigo/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="font-bold text-jp-indigo">N</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Ngozi Adichie</h4>
                  <p className="text-gray-500">Software Developer from Nigeria</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <svg className="w-10 h-10 text-jp-indigo mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 text-lg mb-6">
                "Our company expanded to three African countries with the help of AfriBridge's network. 
                The talent we've connected with has been exceptional, and our business has grown tremendously."
              </p>
              <div className="flex items-center">
                <div className="bg-jp-indigo/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="font-bold text-jp-indigo">H</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Hiroshi Yamamoto</h4>
                  <p className="text-gray-500">CEO, Tech Solutions Japan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;