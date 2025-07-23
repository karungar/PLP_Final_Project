import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Loader2 } from 'lucide-react';

const ProtectedRoute = ({ requireAdmin = false, roles = [] }) => {
  const { currentUser, loading, userLoaded } = useAuth();
  const location = useLocation();

  // Show loading spinner while auth state is being determined
  if (loading || !userLoaded) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="h-12 w-12 text-indigo-600 animate-spin" />
        <p className="mt-4 text-lg text-gray-600">Verifying your credentials...</p>
      </div>
    );
  }

  // If not logged in, redirect to login with return location
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // Role-based access control
  const hasRequiredRole = roles.length === 0 || roles.includes(currentUser.role);
  
  // If admin is required but user is not an admin
  if (requireAdmin && currentUser.role !== 'admin') {
    return (
      <Navigate 
        to="/unauthorized" 
        state={{ 
          message: "You don't have permission to access this page",
          requiredRole: 'admin'
        }} 
        replace 
      />
    );
  }
  
  // If specific roles are required but user doesn't have them
  if (!hasRequiredRole) {
    return (
      <Navigate 
        to="/unauthorized" 
        state={{ 
          message: "You don't have permission to access this resource",
          requiredRoles: roles
        }} 
        replace 
      />
    );
  }

  // If user is authenticated and has required role, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;