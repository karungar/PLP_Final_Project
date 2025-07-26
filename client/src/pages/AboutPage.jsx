import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16 bg-paper">
      {/* Hero Section with Cultural Background */}
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block">
                About{' '}
                <span className="text-[#E6AF2E]">Afri</span>
                <span className="text-[#BC002D]">Bridge</span>
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Connecting hearts, minds, and opportunities between Africa and Japan
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-paper relative">
        {/* Washi-inspired background pattern */}
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 4px)`,
          backgroundSize: `20px 20px`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                AfriBridge was born out of a shared vision to foster meaningful connections between Africa and Japan—two regions with rich cultural heritage and immense potential for collaboration.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2023 by a diverse team of professionals with experience in both African and Japanese markets, our platform aims to bridge geographical, cultural, and economic gaps, creating opportunities for growth, innovation, and cultural exchange.
              </p>
              <p className="text-lg text-gray-600">
                Our journey began with a simple question: "How can we facilitate deeper connections between these vibrant regions?" Today, AfriBridge stands as the answer—a comprehensive platform that connects talented individuals, innovative businesses, and cultural initiatives.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d2a4e] to-[#1a3e6c]"></div>
              
              {/* Cultural pattern overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{ 
                  backgroundImage: `repeating-linear-gradient(45deg, 
                    rgba(230, 175, 46, 0.3) 0px, rgba(230, 175, 46, 0.3) 10px, 
                    rgba(188, 0, 45, 0.3) 10px, rgba(188, 0, 45, 0.3) 20px)`
                }}
              ></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center z-10">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-[#E6AF2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <motion.h3 
                  className="text-3xl font-bold mb-4 text-[#E6AF2E]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Our Mission
                </motion.h3>
                
                <motion.p 
                  className="text-xl font-medium max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  To create meaningful connections between Africa and Japan that foster economic growth, cultural understanding, and mutual prosperity.
                </motion.p>
                
                <motion.div 
                  className="mt-6 w-24 h-1 bg-gradient-to-r from-[#E6AF2E] via-[#BC002D] to-[#E6AF2E]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Our Values */}
      <section className="py-16 bg-gray-50 relative">
        {/* African Kente-inspired background pattern */}
        <div className="absolute inset-0 bg-repeat opacity-5" style={{ 
          backgroundImage: `linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22),
          linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22)`,
          backgroundSize: `40px 40px`,
          backgroundPosition: `0 0, 20px 20px`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-lg text-gray-600">
                These principles guide everything we do at AfriBridge
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-jp-indigo/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-jp-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We believe in the power of innovative thinking to solve complex challenges and create new opportunities.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-jp-indigo/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-jp-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with transparency, honesty, and ethical standards in all our interactions and business practices.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-jp-indigo/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-jp-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inclusivity</h3>
              <p className="text-gray-600">
                We embrace diversity and strive to create opportunities that are accessible to people of all backgrounds.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-jp-indigo/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-jp-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We foster meaningful partnerships and believe that working together creates stronger outcomes for all parties.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-paper relative">
        {/* Washi-inspired background pattern */}
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 4px)`,
          backgroundSize: `20px 20px`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
              <p className="text-lg text-gray-600">
                Meet the passionate individuals behind AfriBridge
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-2 bg-gradient-to-r from-afri-red via-afri-yellow to-jp-red"></div>
              <div className="p-6">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-1">Aisha Kamau</h3>
                <p className="text-center text-jp-indigo mb-3">Co-Founder & CEO</p>
                <p className="text-gray-600 text-center mb-4">
                  Former tech executive with experience in both African and Japanese markets.
                </p>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-2 bg-gradient-to-r from-afri-red via-afri-yellow to-jp-red"></div>
              <div className="p-6">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-1">Takeshi Nakamura</h3>
                <p className="text-center text-jp-indigo mb-3">Co-Founder & COO</p>
                <p className="text-gray-600 text-center mb-4">
                  International business consultant with 15+ years of experience in cross-border ventures.
                </p>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-2 bg-gradient-to-r from-afri-red via-afri-yellow to-jp-red"></div>
              <div className="p-6">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-1">Grace Okonkwo</h3>
                <p className="text-center text-jp-indigo mb-3">Chief Marketing Officer</p>
                <p className="text-gray-600 text-center mb-4">
                  Digital marketing expert specializing in cross-cultural communication strategies.
                </p>
              </div>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-2 bg-gradient-to-r from-afri-red via-afri-yellow to-jp-red"></div>
              <div className="p-6">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-1">Kenji Suzuki</h3>
                <p className="text-center text-jp-indigo mb-3">Head of Partnerships</p>
                <p className="text-gray-600 text-center mb-4">
                  Former diplomat with extensive network across African countries and Japan.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Cultural Background */}
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
        
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-lg text-gray-200 mb-8">
                Together, we can create meaningful connections that bridge cultures and drive growth.
                Whether you're an individual or organization, there's a place for you in our community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-white text-jp-indigo font-medium rounded-md hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Contact Us
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors shadow-lg"
                >
                  Join AfriBridge
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;