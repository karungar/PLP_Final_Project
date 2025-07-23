// import { Link } from 'react-router-dom';
import { Home, MessageCircle, Search, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className="max-w-md w-full border-0 shadow-xl">
        <CardContent className="text-center p-8">
          {/* Large 404 with icon */}
          <div className="flex items-center justify-center mb-6">
            <AlertCircle className="w-16 h-16 text-red-500 mr-4" />
            <h1 className="text-6xl font-bold text-slate-800">404</h1>
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Page Not Found</h2>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            The page you are looking for doesn't exist or has been moved. 
            Please check the URL or go back to the homepage.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button className="flex items-center gap-2" onClick={() => window.location.href = '/'}>
              <Home className="w-4 h-4" />
              Back to Homepage
            </Button>
            
            <Button variant="outline" className="flex items-center gap-2" onClick={() => window.location.href = '/contact'}>
              <MessageCircle className="w-4 h-4" />
              Contact Support
            </Button>
          </div>
          
          {/* Additional helpful action */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-slate-500 hover:text-slate-700" onClick={() => window.location.href = '/search'}>
              <Search className="w-4 h-4" />
              Search our site
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-indigo-100/50 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 right-20 animate-bounce">
          <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-32 left-16 animate-pulse">
          <div className="w-3 h-3 bg-purple-400 rounded-full opacity-40"></div>
        </div>
        <div className="absolute top-1/2 right-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;