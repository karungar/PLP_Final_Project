import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentDashboard } from '@/components/Dashboard/StudentDashboard';
import { EmployerDashboard } from '@/components/Dashboard/EmployerDashboard';
import { AdminDashboard } from '@/components/Dashboard/AdminDashboard';
import { Header } from '@/components/Layout/Header';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { authAPI } from '@/services/api';

export const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await authAPI.getProfile();
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner className="h-12 w-12" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {user.role === 'student' && 'My Learning Dashboard'}
              {user.role === 'employer' && 'Recruitment Dashboard'}
              {user.role === 'admin' && 'Admin Dashboard'}
            </h1>
            <p className="mt-2 text-gray-600">
              {user.role === 'student' && 'Track your Japanese language progress and job applications'}
              {user.role === 'employer' && 'Manage your job postings and candidate pipeline'}
              {user.role === 'admin' && 'Manage platform users and content'}
            </p>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            {user.role === 'student' && <StudentDashboard user={user} />}
            {user.role === 'employer' && <EmployerDashboard user={user} />}
            {user.role === 'admin' && <AdminDashboard user={user} />}
          </div>
        </div>
      </main>
    </div>
  );
};
