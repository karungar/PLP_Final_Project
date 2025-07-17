import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Navbar } from './Navbar';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { InformationCircleIcon } from '@heroicons/react/20/solid'; // or '24/solid', based on your target size

export const MobileNav = ({ user }) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden p-2">
        <Bars3Icon className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 pt-6">
          <Link 
            to="/jobs" 
            className="flex items-center p-2 rounded-lg hover:bg-gray-100"
          >
            <BriefcaseIcon className="w-5 h-5 mr-3" />
            Jobs
          </Link>
          <Link 
            to="/courses" 
            className="flex items-center p-2 rounded-lg hover:bg-gray-100"
          >
            <AcademicCapIcon className="w-5 h-5 mr-3" />
            Courses
          </Link>
          <Link 
            to="/about" 
            className="flex items-center p-2 rounded-lg hover:bg-gray-100"
          >
            <InformationCircleIcon className="w-5 h-5 mr-3" />
            About
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};