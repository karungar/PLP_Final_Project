import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OpportunitiesPage = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    category: '',
    search: ''
  });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch opportunities data
  useEffect(() => {
    setTimeout(() => {
      const dummyOpportunities = [
        {
          _id: '1',
          title: 'Software Engineering Internship',
          organization: 'Tech Innovations Japan',
          location: 'Tokyo, Japan',
          type: 'Internship',
          category: 'Technology',
          deadline: new Date('2025-08-30'),
          description: 'Join our team for a 3-month internship focused on building innovative solutions for global markets. Work with senior engineers on real projects and gain valuable experience in Japanese tech culture.',
          requirements: ['Proficiency in JavaScript/TypeScript', 'Knowledge of React or Vue.js', 'Basic understanding of server-side technologies', 'Strong problem-solving skills'],
          benefits: ['Competitive stipend', 'Mentorship from senior engineers', 'Networking opportunities', 'Possible full-time offer upon completion']
        },
        {
          _id: '2',
          title: 'African Market Research Analyst',
          organization: 'Global Trade Partners',
          location: 'Osaka, Japan (Remote)',
          type: 'Full-time',
          category: 'Business',
          deadline: new Date('2025-09-15'),
          description: 'Looking for analysts with deep understanding of African markets to help Japanese companies expand. You will conduct market research, create entry strategies, and build relationships with key stakeholders across various African countries.',
          requirements: ['Experience in market research', 'Understanding of African business landscapes', 'Fluent in English and at least one regional African language', 'Bachelor\'s degree in Business, Economics, or related field'],
          benefits: ['Competitive salary', 'Remote work options', 'Travel opportunities to African countries', 'Professional development budget']
        },
        {
          _id: '3',
          title: 'Cultural Exchange Program',
          organization: 'Japan-Africa Foundation',
          location: 'Multiple Locations',
          type: 'Program',
          category: 'Education',
          deadline: new Date('2025-10-01'),
          description: 'A 6-month exchange program for young professionals to experience business culture across borders. Participants will spend time in both Japanese and African organizations, building cross-cultural skills and international networks.',
          requirements: ['Age 22-35', 'Bachelor\'s degree or equivalent', 'Professional experience of 1-5 years', 'Interest in cross-cultural collaboration'],
          benefits: ['All expenses covered', 'Monthly stipend', 'Language training', 'Certificate upon completion']
        },
        {
          _id: '4',
          title: 'Agri-Tech Partnership Manager',
          organization: 'Sustainable Farming Initiative',
          location: 'Nairobi, Kenya',
          type: 'Full-time',
          category: 'Agriculture',
          deadline: new Date('2025-09-05'),
          description: 'Lead partnerships between Japanese agricultural technology companies and African farming communities. You will be responsible for identifying collaboration opportunities, managing relationships, and measuring impact.',
          requirements: ['Experience in agriculture sector', 'Project management skills', 'Understanding of both African and Japanese business cultures', 'Strong communication skills'],
          benefits: ['Competitive salary', 'Impact-driven work', 'International travel', 'Professional development opportunities']
        },
        {
          _id: '5',
          title: 'Japanese Language and Business Culture Workshop',
          organization: 'Africa-Japan Business Council',
          location: 'Virtual',
          type: 'Workshop',
          category: 'Education',
          deadline: new Date('2025-07-15'),
          description: 'A 4-week intensive workshop designed for African professionals looking to work with Japanese businesses. Learn business Japanese, cultural etiquette, and networking skills specific to Japanese corporate environments.',
          requirements: ['Professional working in or planning to work with Japanese companies', 'Beginner to intermediate Japanese language skills preferred but not required'],
          benefits: ['Certificate of completion', 'Networking with Japanese businesses', 'Job opportunity connections', 'Follow-up mentoring sessions']
        },
        {
          _id: '6',
          title: 'Investment Research Associate',
          organization: 'Nikkei Africa Fund',
          location: 'Johannesburg, South Africa',
          type: 'Full-time',
          category: 'Finance',
          deadline: new Date('2025-08-20'),
          description: 'Join a leading Japanese investment fund focusing on African startups and growth companies. You will research potential investment opportunities, conduct due diligence, and prepare investment recommendations.',
          requirements: ['Finance or business background', 'Understanding of African startup ecosystem', 'Strong analytical skills', 'Excellent report writing abilities'],
          benefits: ['Competitive compensation package', 'Performance bonuses', 'International exposure', 'Career advancement opportunities']
        },
        {
          _id: '7',
          title: 'Clean Energy Technology Transfer Program',
          organization: 'Japan International Cooperation Agency',
          location: 'Multiple African Countries',
          type: 'Program',
          category: 'Energy',
          deadline: new Date('2025-11-30'),
          description: 'A collaborative program to implement Japanese clean energy technologies in African communities. We are looking for engineers, project managers, and community engagement specialists.',
          requirements: ['Background in renewable energy', 'Project implementation experience', 'Willingness to travel to remote areas', 'Passion for sustainable development'],
          benefits: ['Fully funded program', 'Technical training in Japan', 'Long-term career opportunities', 'Impact on sustainable development']
        },
        {
          _id: '8',
          title: 'African Cuisine Chef',
          organization: 'Pan-African Restaurant Group',
          location: 'Tokyo, Japan',
          type: 'Full-time',
          category: 'Culinary',
          deadline: new Date('2025-07-25'),
          description: 'Leading African restaurant chain in Japan is looking for talented chefs with expertise in authentic African cuisines. You will create menus, train kitchen staff, and help introduce African culinary traditions to Japanese audiences.',
          requirements: ['Professional cooking experience', 'Knowledge of African cuisines', 'Creativity and presentation skills', 'Ability to adapt recipes to local ingredients'],
          benefits: ['Competitive salary', 'Visa sponsorship', 'Accommodation assistance', 'Career growth opportunities']
        }
      ];
      setOpportunities(dummyOpportunities);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter unique values for select dropdowns
  const getUniqueValues = (key) => {
    return [...new Set(opportunities.map(item => item[key]))];
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      type: '',
      location: '',
      category: '',
      search: ''
    });
  };

  // Filter opportunities based on selected filters
  const filteredOpportunities = opportunities.filter(opportunity => {
    return (
      (filters.type === '' || opportunity.type === filters.type) &&
      (filters.location === '' || opportunity.location.includes(filters.location)) &&
      (filters.category === '' || opportunity.category === filters.category) &&
      (filters.search === '' || 
        opportunity.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        opportunity.organization.toLowerCase().includes(filters.search.toLowerCase()) ||
        opportunity.description.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

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
                Discover{' '}
                <span className="text-[#E6AF2E]">Opportunities</span>{' '}
                Connecting{' '}
                <span className="text-[#BC002D]">Africa</span> and{' '}
                <span className="text-[#BC002D]">Japan</span>
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Find career, business, and educational opportunities bridging our cultures
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="bg-white border-b border-gray-200 relative">
        {/* Washi-inspired background pattern */}
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 4px)`,
          backgroundSize: `20px 20px`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 items-end"
          >
            <div className="w-full md:w-1/4">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                  placeholder="Search opportunities..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-jp-indigo focus:border-jp-indigo"
                />
              </div>
            </div>

            <div className="w-full md:w-1/6">
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                id="type"
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-jp-indigo focus:border-jp-indigo"
              >
                <option value="">All Types</option>
                {getUniqueValues('type').map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-1/6">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-jp-indigo focus:border-jp-indigo"
              >
                <option value="">All Categories</option>
                {getUniqueValues('category').map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-1/6">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                id="location"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-jp-indigo focus:border-jp-indigo"
              >
                <option value="">All Locations</option>
                {getUniqueValues('location').map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-auto">
              <motion.button
                onClick={clearFilters}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-jp-indigo hover:text-jp-slate hover:bg-jp-indigo/10 rounded-md transition-colors w-full md:w-auto shadow-sm"
              >
                Clear Filters
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opportunities List Section */}
      <section className="py-12 bg-paper relative">
        {/* African Kente-inspired background pattern */}
        <div className="absolute inset-0 bg-repeat opacity-5" style={{ 
          backgroundImage: `linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22),
          linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22)`,
          backgroundSize: `40px 40px`,
          backgroundPosition: `0 0, 20px 20px`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-jp-indigo"></div>
            </div>
          ) : (
            <>
              <motion.div 
                className="mb-8 flex justify-between items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredOpportunities.length} {filteredOpportunities.length === 1 ? 'Opportunity' : 'Opportunities'} Found
                </h2>
                <div className="text-gray-600">
                  Sort by: 
                  <select className="ml-2 px-2 py-1 border border-gray-300 rounded-md focus:ring-jp-indigo focus:border-jp-indigo">
                    <option>Recent</option>
                    <option>Deadline (soonest)</option>
                    <option>Alphabetical</option>
                  </select>
                </div>
              </motion.div>

              {filteredOpportunities.length === 0 ? (
                <motion.div 
                  className="bg-white rounded-lg shadow-md p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172C9.27715 16.0671 9.36144 15.9427 9.42064 15.805C9.47984 15.6674 9.51259 15.5191 9.51729 15.368C9.522 15.217 9.49855 15.0664 9.44844 14.9248C9.39832 14.7831 9.32263 14.6534 9.22501 14.5424C9.12739 14.4313 9.00963 14.3411 8.87646 14.2758C8.74329 14.2105 8.59904 14.1715 8.44808 14.1605C8.29712 14.1496 8.1469 14.1671 8.00522 14.212C7.86353 14.2569 7.73333 14.3284 7.62 14.422L3.707 18.334C3.56925 18.4714 3.49343 18.6551 3.49343 18.8465C3.49343 19.038 3.56925 19.2216 3.707 19.359C3.84439 19.4967 4.02805 19.5726 4.2195 19.5726C4.41095 19.5726 4.59461 19.4967 4.732 19.359L8.645 15.446C8.70281 15.3882 8.77123 15.3429 8.84611 15.313C8.92099 15.2831 9.00077 15.2694 9.08062 15.2726C9.16048 15.2758 9.23892 15.296 9.31121 15.3318C9.3835 15.3677 9.44807 15.4185 9.50112 15.4809C9.55417 15.5434 9.59458 15.6162 9.61977 15.6949C9.64496 15.7736 9.65437 15.8565 9.6474 15.939C9.64043 16.0215 9.61721 16.1018 9.57934 16.1755C9.54147 16.2492 9.48973 16.3147 9.428 16.368L5.515 20.281C5.44282 20.3532 5.38577 20.4414 5.34845 20.5391C5.31112 20.6368 5.29442 20.7416 5.29957 20.8466C5.30472 20.9516 5.33161 21.0539 5.37827 21.1471C5.42494 21.2402 5.49028 21.3221 5.57 21.388C5.64972 21.4539 5.74318 21.5027 5.84383 21.5317C5.94449 21.5607 6.05092 21.569 6.15571 21.5561C6.26051 21.5432 6.36146 21.5093 6.45219 21.4567C6.54292 21.4042 6.62211 21.3341 6.683 21.251L10.583 17.351C10.6748 17.2591 10.7471 17.1498 10.7957 17.0291C10.8444 16.9084 10.8685 16.7787 10.8666 16.6481C10.8647 16.5174 10.8368 16.3885 10.7845 16.2691C10.7323 16.1498 10.6566 16.0425 10.562 15.953C10.4674 15.8635 10.3562 15.794 10.2346 15.7491C10.1131 15.7042 9.98361 15.6847 9.85374 15.6919C9.72387 15.699 9.5983 15.7325 9.48327 15.7903C9.36823 15.8481 9.26784 15.9288 9.185 16.028L5.272 19.941C5.22446 19.9885 5.16751 20.0261 5.10458 20.0518C5.04165 20.0775 4.97404 20.0909 4.7055 20.0909C4.83696 20.0909 4.76935 20.0775 4.70642 20.0518C4.64349 20.0261 4.58654 19.9885 4.539 19.941C4.49146 19.8935 4.45396 19.8365 4.42828 19.7736C4.4026 19.7107 4.3892 19.643 4.3892 19.575C4.3892 19.5069 4.4026 19.4393 4.42828 19.3764C4.45396 19.3135 4.49146 19.2565 4.539 19.209L8.452 15.296C8.58939 15.1586 8.66521 14.9749 8.66521 14.7835C8.66521 14.592 8.58939 14.4084 8.452 14.271C8.31461 14.1333 8.13095 14.0574 7.9395 14.0574C7.74805 14.0574 7.56439 14.1333 7.427 14.271L3.514 18.184C3.11843 18.5795 2.89913 19.1093 2.89913 19.6605C2.89913 20.2117 3.11843 20.7415 3.514 21.137C3.90948 21.5326 4.4393 21.7519 4.9905 21.7519C5.5417 21.7519 6.07152 21.5326 6.467 21.137L10.38 17.224C10.5173 17.0866 10.5931 16.903 10.5931 16.7115C10.5931 16.5201 10.5173 16.3364 10.38 16.199C10.2426 16.0613 10.059 15.9855 9.8675 15.9855C9.67605 15.9855 9.49239 16.0613 9.355 16.199" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No opportunities found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any opportunities matching your search criteria.
                  </p>
                  <motion.button
                    onClick={clearFilters}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-jp-indigo text-white rounded-md hover:bg-jp-slate transition-colors shadow-md"
                  >
                    Clear Filters
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, staggerChildren: 0.1 }}
                  viewport={{ once: true }}
                >
                  {filteredOpportunities.map((opportunity) => (
                    <motion.div 
                      key={opportunity._id}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-2 bg-gradient-to-r from-afri-red via-afri-yellow to-jp-red"></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start">
                          <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${
                            opportunity.type === 'Full-time' ? 'bg-green-100 text-green-800' : 
                            opportunity.type === 'Internship' ? 'bg-blue-100 text-blue-800' : 
                            opportunity.type === 'Program' ? 'bg-purple-100 text-purple-800' : 
                            'bg-jp-indigo/10 text-jp-indigo'
                          }`}>
                            {opportunity.type}
                          </span>
                          <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800`}>
                            {opportunity.category}
                          </span>
                        </div>

                        <h3 className="mt-4 text-xl font-bold text-gray-900 mb-2">{opportunity.title}</h3>
                        
                        <div className="flex items-start mb-3">
                          <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span className="text-gray-600 text-sm">{opportunity.organization}</span>
                        </div>
                        
                        <div className="flex items-start mb-3">
                          <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-gray-600 text-sm">{opportunity.location}</span>
                        </div>
                        
                        <div className="flex items-start mb-4">
                          <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-600 text-sm">
                            Deadline: {opportunity.deadline.toLocaleDateString()}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {opportunity.description}
                        </p>
                        
                        <div className="flex justify-between items-center mt-4">
                          <Link
                            to={`/opportunities/${opportunity._id}`}
                            className="inline-block text-center py-2 px-4 border border-jp-indigo text-jp-indigo font-medium rounded hover:bg-jp-indigo/10 transition-colors shadow-sm"
                          >
                            View Details
                          </Link>
                          
                          <Link
                            to={`/opportunities/${opportunity._id}/apply`}
                            className="inline-block text-center py-2 px-4 bg-jp-indigo text-white font-medium rounded hover:bg-jp-slate transition-colors shadow-md"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Create Opportunity CTA */}
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
            <h2 className="text-3xl font-bold mb-4">Have an Opportunity to Share?</h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              If you represent an organization looking to connect with talent between Africa and Japan,
              you can post your opportunity on our platform.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/create-opportunity"
                className="inline-block px-6 py-3 bg-white text-jp-indigo font-medium rounded-md hover:bg-gray-100 transition-colors shadow-lg"
              >
                Post an Opportunity
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OpportunitiesPage;