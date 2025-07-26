import { motion } from 'framer-motion';
import { Search, Filter, ExternalLink } from 'lucide-react';

const TalentPage = () => {
  // Sample talent data - in a real app, this would come from an API
  const talents = [
    {
      id: 1,
      name: "Chioma Okafor",
      location: "Lagos, Nigeria",
      specialty: "Software Development",
      languages: ["English", "Yoruba", "Japanese (Basic)"],
      experience: "5 years",
      bio: "Full-stack developer with experience in fintech and e-commerce, seeking opportunities to collaborate with Japanese tech companies.",
      img: "https://i.pravatar.cc/150?img=32"
    },
    {
      id: 2,
      name: "Takashi Yamamoto",
      location: "Osaka, Japan",
      specialty: "Marketing & Business Development",
      languages: ["Japanese", "English", "Swahili (Basic)"],
      experience: "8 years",
      bio: "Marketing expert with focus on Africa-Japan trade relations. Previously worked with major corporations expanding into African markets.",
      img: "https://i.pravatar.cc/150?img=68"
    },
    {
      id: 3,
      name: "Amara Diallo",
      location: "Dakar, Senegal",
      specialty: "Agricultural Technology",
      languages: ["French", "Wolof", "English", "Japanese (Intermediate)"],
      experience: "6 years",
      bio: "Agricultural engineer specializing in sustainable farming technologies. JICA alumni with extensive experience in Japanese farming techniques.",
      img: "https://i.pravatar.cc/150?img=26"
    },
    {
      id: 4,
      name: "Kenji Nakamura",
      location: "Tokyo, Japan",
      specialty: "International Education",
      languages: ["Japanese", "English", "French"],
      experience: "12 years",
      bio: "Education consultant specializing in international student exchange programs between Japanese and African educational institutions.",
      img: "https://i.pravatar.cc/150?img=13"
    },
    {
      id: 5,
      name: "Nala Mensah",
      location: "Accra, Ghana",
      specialty: "Fashion Design",
      languages: ["English", "Twi", "Japanese (Basic)"],
      experience: "7 years",
      bio: "Fashion designer blending traditional African textiles with Japanese minimalist aesthetics. Exhibited at Tokyo Fashion Week.",
      img: "https://i.pravatar.cc/150?img=23"
    },
    {
      id: 6,
      name: "Hiroshi Tanaka",
      location: "Nairobi, Kenya",
      specialty: "Renewable Energy",
      languages: ["Japanese", "English", "Swahili"],
      experience: "10 years",
      bio: "Renewable energy specialist implementing Japanese solar technologies across East African communities.",
      img: "https://i.pravatar.cc/150?img=60"
    }
  ];

  // Category filters
  const categories = ["All Specialties", "Technology", "Business", "Education", "Arts & Culture", "Science & Research"];

  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-jp-indigo to-jp-slate py-16 text-white">
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
        
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block">
                Discover{' '}
                <span className="text-[#E6AF2E]">Talent</span>{' '}
                Bridging{' '}
                <span className="text-[#BC002D]">Africa</span> and{' '}
                <span className="text-[#BC002D]">Japan</span>
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Connect with skilled professionals from Africa and Japan looking to collaborate
              and build bridges across continents.
            </motion.p>
            
            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative max-w-xl mx-auto"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-white bg-opacity-20 placeholder-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 transition duration-150 ease-in-out text-white"
                placeholder="Search by name, skill, or location..."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter section with pattern */}
      <section className="bg-paper py-6 border-b border-gray-200 relative">
        {/* Washi-inspired background pattern */}
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 4px)`,
          backgroundSize: `20px 20px`
        }}></div>
        
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Filter className="h-5 w-5 text-jp-indigo" />
              <span className="font-medium text-jp-indigo">Filters:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm shadow-sm ${
                    category === 'All Specialties'
                      ? 'bg-jp-indigo text-white shadow-md'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Talent list with pattern */}
      <section className="py-12 bg-paper relative">
        {/* African Kente-inspired background pattern */}
        <div className="absolute inset-0 bg-repeat opacity-5" style={{ 
          backgroundImage: `linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22),
          linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22)`,
          backgroundSize: `40px 40px`,
          backgroundPosition: `0 0, 20px 20px`
        }}></div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talents.map((talent) => (
              <motion.div
                key={talent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-2 bg-gradient-to-r from-afri-red via-afri-yellow to-jp-red"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                      <img src={talent.img} alt={talent.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{talent.name}</h3>
                      <p className="text-gray-600">{talent.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-jp-indigo bg-opacity-10 text-jp-indigo rounded-full text-sm font-medium">
                      {talent.specialty}
                    </span>
                    <p className="mt-3 text-sm text-gray-500">
                      <span className="font-medium">Experience:</span> {talent.experience}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{talent.bio}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Languages:</p>
                    <div className="flex flex-wrap gap-2">
                      {talent.languages.map((language, idx) => (
                        <motion.span 
                          key={idx} 
                          whileHover={{ scale: 1.1 }}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {language}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-2 px-4 py-2 bg-jp-indigo text-white rounded hover:bg-opacity-90 transition-colors flex items-center justify-center shadow-md"
                  >
                    View Profile
                    <ExternalLink size={16} className="ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <button className="px-6 py-3 bg-white border border-jp-indigo text-jp-indigo font-medium rounded-md hover:bg-jp-indigo hover:text-white transition-colors shadow-md">
              View More Talent
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Showcase Your Talent?</h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Join our network of professionals connecting Africa and Japan. Create your profile
              to be discovered by companies and collaborators across both regions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-white text-jp-indigo font-medium rounded-md hover:bg-gray-100 transition-colors shadow-lg"
            >
              Create Your Profile
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TalentPage;