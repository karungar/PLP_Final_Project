import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/auth/useAuth';
import { User, FileText, Loader2 } from 'lucide-react';
import { applicationsAPI } from '@/services/api';

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApplications() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await applicationsAPI.getMyApplications();
        setApplications(res.data);
      } catch (err) {
        setError('Failed to load applications. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchApplications();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {currentUser?.name ?? 'User'}
          </h1>
          <Link
            to="/profile"
            className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
          >
            <User className="w-5 h-5 mr-2" />
            Your Profile
          </Link>
        </section>

        {/* Applications Section */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <header className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Your Applications</h2>
          </header>

          {applications.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {applications.map(({ id, position, company, status, date }) => (
                <article key={id} className="px-6 py-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div>
                      <h3 className="font-medium text-gray-900">{position}</h3>
                      <p className="text-sm text-gray-600">{company}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row sm:items-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          status === 'Under Review'
                            ? 'bg-yellow-100 text-yellow-800'
                            : status === 'Interview'
                            ? 'bg-green-100 text-green-800'
                            : status === 'Rejected'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {status}
                      </span>
                      <time
                        className="text-xs text-gray-500 mt-1 sm:mt-0 sm:ml-4"
                        dateTime={new Date(date).toISOString()}
                      >
                        Applied: {new Date(date).toLocaleDateString()}
                      </time>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Link
                      to={`/applications/${id}`}
                      className="text-sm text-indigo-600 hover:text-indigo-800"
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="px-6 py-8 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No applications yet</h3>
              <p className="text-gray-500">
                Start applying to opportunities to see them here.
              </p>
              <div className="mt-4">
                <Link
                  to="/opportunities"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Browse Opportunities
                </Link>
              </div>
            </div>
          )}

          <footer className="px-6 py-3 bg-gray-50 text-right">
            <Link
              to="/applications"
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
            >
              View All Applications
            </Link>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
