import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const linkClasses = `text-base font-medium hover:text-[#E6AF2E] transition-colors duration-300 ${
    scrolled ? 'text-white' : 'text-white'
  }`;

  const activeLinkClasses = `text-base font-medium text-[#E6AF2E] border-b-2 border-[#E6AF2E]`;

  const isLinkActive = (path) => location.pathname === path;

  return (
    <motion.nav 
      className="fixed w-full z-50 transition-all duration-300 bg-gray-900"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cultural pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, 
            rgba(230, 175, 46, 0.2) 0px, rgba(230, 175, 46, 0.2) 10px, 
            rgba(188, 0, 45, 0.2) 10px, rgba(188, 0, 45, 0.2) 20px)`
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <motion.span 
                className="text-xl font-bold"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  background: 'linear-gradient(90deg, #E6AF2E, #BC002D, #E6AF2E)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                AfriBridge
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Link
                to="/"
                className={isLinkActive('/') ? activeLinkClasses : linkClasses}
              >
                Home
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                to="/opportunities"
                className={isLinkActive('/opportunities') ? activeLinkClasses : linkClasses}
              >
                Opportunities
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                to="/talent"
                className={isLinkActive('/talent') ? activeLinkClasses : linkClasses}
              >
                Talent
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                to="/about"
                className={isLinkActive('/about') ? activeLinkClasses : linkClasses}
              >
                About
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className={isLinkActive('/contact') ? activeLinkClasses : linkClasses}
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>

          {/* Auth buttons or user menu */}
          <motion.div 
            className="hidden md:flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {currentUser ? (
              <motion.div 
                className="relative group flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <button className="flex items-center space-x-2 focus:outline-none">
                  <span className="text-base font-medium text-white">{currentUser.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E6AF2E]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <motion.div 
                  className="absolute right-0 w-48 mt-2 py-2 bg-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right -translate-y-2 group-hover:translate-y-0 top-full z-50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                  >
                    Sign out
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <div className="flex items-center space-x-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="/login"
                    className="text-base font-medium text-[#E6AF2E] hover:text-[#ffd166] transition-colors"
                  >
                    Sign in
                  </Link>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#E6AF2E] to-[#BC002D] hover:from-[#ffd166] hover:to-[#ff6b6b] transition-all duration-300"
                  >
                    Sign up
                  </Link>
                </motion.div>
              </div>
            )}
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#E6AF2E] hover:text-[#ffd166] focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0, 
          opacity: isMenuOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-[#E6AF2E] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/opportunities"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-[#E6AF2E] transition-colors"
          >
            Opportunities
          </Link>
          <Link
            to="/talent"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-[#E6AF2E] transition-colors"
          >
            Talent
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-[#E6AF2E] transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-[#E6AF2E] transition-colors"
          >
            Contact
          </Link>
          
          {currentUser ? (
            <>
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-[#E6AF2E] transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-[#E6AF2E] transition-colors"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-[#E6AF2E] transition-colors"
              >
                Sign out
              </button>
            </>
          ) : (
            <div className="flex flex-col space-y-2 pt-4 pb-3 border-t border-gray-800">
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-center text-[#E6AF2E] hover:text-[#ffd166] transition-colors"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="block mx-3 py-2 rounded-md text-base font-medium text-center text-white bg-gradient-to-r from-[#E6AF2E] to-[#BC002D] hover:from-[#ffd166] hover:to-[#ff6b6b] transition-all duration-300"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;