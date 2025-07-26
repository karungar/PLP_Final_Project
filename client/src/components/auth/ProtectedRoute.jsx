import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ requireAdmin = false }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // While checking authentication status, show loading spinner
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // If not logged in, redirect to login
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // If admin is required but user is not an admin
  if (requireAdmin && currentUser.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  // If user is authenticated (and has required role if applicable), render the child routes
  return <Outlet />;
};

export default ProtectedRoute;