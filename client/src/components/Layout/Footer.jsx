import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and mission */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AfriBridge
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Connecting African and Japanese cultures, businesses, and opportunities for mutual growth and innovation.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300">
                {/* Social icons with dark mode */}
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              {/* Other links */}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              {/* Resource links */}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  Tokyo Office<br />
                  Shibuya Crossing, 4F<br />
                  Shibuya, Tokyo 150-0002
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">+81 3-1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">info@afribridge.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            &copy; {currentYear} AfriBridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;