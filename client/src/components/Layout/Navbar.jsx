import { Link } from 'react-router-dom';
import { BriefcaseIcon, AcademicCapIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export const Navbar = ({ user }) => {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link 
        to="/jobs" 
        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <BriefcaseIcon className="w-5 h-5 mr-1" />
        Jobs
      </Link>
      <Link 
        to="/courses" 
        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <AcademicCapIcon className="w-5 h-5 mr-1" />
        Courses
      </Link>
      <Link 
        to="/about" 
        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <InformationCircleIcon className="w-5 h-5 mr-1" />
        About
      </Link>
      
      {/* Conditional admin link */}
      {user?.role === 'admin' && (
        <Link 
          to="/admin" 
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Cog6ToothIcon className="w-5 h-5 mr-1" />
          Admin
        </Link>
      )}
    </nav>
  );
};