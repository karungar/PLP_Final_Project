import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ThemeToggle from '../ThemeToggle'; // Import ThemeToggle

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled 
      ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
      : 'bg-transparent dark:bg-transparent py-4'
  }`;

  const linkClasses = (path) => {
    const base = `text-base font-medium transition duration-300 ${
      scrolled 
        ? 'text-gray-800 dark:text-gray-300' 
        : 'text-gray-900 dark:text-gray-300'
    }`;
    
    return location.pathname === path
      ? `text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400`
      : `${base} hover:text-indigo-600 dark:hover:text-indigo-400`;
  };

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity duration-300">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
              AfriBridge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClasses('/')}>Home</Link>
            <Link to="/opportunities" className={linkClasses('/opportunities')}>Opportunities</Link>
            <Link to="/talent" className={linkClasses('/talent')}>Talent</Link>
            <Link to="/about" className={linkClasses('/about')}>About</Link>
            <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
          </div>

          {/* Right Section (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Add Theme Toggle Here */}
            <ThemeToggle />
            
            {currentUser ? (
              <div className="relative group flex items-center">
                <button className="flex items-center space-x-2 focus:outline-none">
                  <span className="text-base font-medium text-gray-800 dark:text-gray-300">
                    {currentUser.name}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute right-0 w-48 mt-2 py-2 bg-white dark:bg-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 transform origin-top-right -translate-y-2 group-hover:translate-y-0 top-full z-50">
                  <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Dashboard
                  </Link>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Profile
                  </Link>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-base font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                  Sign in
                </Link>
                <Link to="/register" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Add Theme Toggle Here (Mobile) */}
            <ThemeToggle />
            
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none">
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg bg-white dark:bg-gray-800">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400">
            Home
          </Link>
          <Link to="/opportunities" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400">
            Opportunities
          </Link>
          <Link to="/talent" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400">
            Talent
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400">
            About
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400">
            Contact
          </Link>
          
          {currentUser ? (
            <>
              <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400">
                Dashboard
              </Link>
              <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400">
                Profile
              </Link>
              <button onClick={logout} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400">
                Sign out
              </button>
            </>
          ) : (
            <div className="flex flex-col space-y-2 pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                Sign in
              </Link>
              <Link to="/register" className="block mx-3 py-2 rounded-md text-base font-medium text-center text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;