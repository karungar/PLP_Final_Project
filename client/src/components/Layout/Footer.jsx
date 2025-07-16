import { Link } from 'react-router-dom';
import {
  AcademicCapIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <AcademicCapIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AfriBridge</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting African talent with Japanese opportunities. Bridging cultures, 
              building futures, and creating pathways to success in Japan.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-4 h-4" />
                <span className="text-sm">info@afribridge.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4" />
                <span className="text-sm">+254 700 000 000</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jobs" className="text-gray-400 hover:text-white transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">IT Jobs</span>
              </li>
              <li>
                <span className="text-gray-400">Hospitality</span>
              </li>
              <li>
                <span className="text-gray-400">Care Services</span>
              </li>
              <li>
                <span className="text-gray-400">Language Schools</span>
              </li>
              <li>
                <span className="text-gray-400">Graduate Programs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AfriBridge. All rights reserved. Connecting Kenya to Japan.
          </p>
        </div>
      </div>
    </footer>
  );
};