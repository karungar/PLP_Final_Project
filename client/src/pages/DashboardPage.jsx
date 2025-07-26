import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Simulate fetching dashboard data
    const fetchDashboardData = async () => {
      // In a real app, this would be an API call
      setTimeout(() => {
        setDashboardData({
          applications: [
            {
              id: 'app1',
              position: 'Software Engineering Internship',
              company: 'Tech Innovations Japan',
              status: 'Under Review',
              date: '2025-07-10'
            },
            {
              id: 'app2',
              position: 'African Market Research Analyst',
              company: 'Global Trade Partners',
              status: 'Interview',
              date: '2025-07-05'
            }
          ],
          savedOpportunities: [
            {
              id: 'opp3',
              title: 'Cultural Exchange Program',
              organization: 'Japan-Africa Foundation',
              deadline: '2025-10-01',
              type: 'Program'
            },
            {
              id: 'opp4',
              title: 'Agri-Tech Partnership Manager',
              organization: 'Sustainable Farming Initiative',
              deadline: '2025-09-05',
              type: 'Full-time'
            }
          ],
          recommendedOpportunities: [
            {
              id: 'opp5',
              title: 'Japanese Language and Business Culture Workshop',
              organization: 'Africa-Japan Business Council',
              deadline: '2025-07-15',
              type: 'Workshop'
            },
            {
              id: 'opp6',
              title: 'Investment Research Associate',
              organization: 'Nikkei Africa Fund',
              deadline: '2025-08-20',
              type: 'Full-time'
            }
          ],
          notifications: [
            {
              id: 'notif1',
              title: 'Application Status Update',
              message: 'Your application for Tech Innovations Japan has moved to the interview stage',
              date: '2025-07-15',
              read: false
            },
            {
              id: 'notif2',
              title: 'New Message',
              message: 'You received a message from Global Trade Partners regarding your application',
              date: '2025-07-14',
              read: true
            },
            {
              id: 'notif3',
              title: 'New Opportunity Match',
              message: 'A new opportunity matching your skills has been posted',
              date: '2025-07-12',
              read: false
            }
          ]
        });
        setIsLoading(false);
      }, 1000);
    };

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Welcome back, {currentUser?.name || 'User'}
              </h1>
              <p className="text-gray-600">
                Here's what's happening with your AfriBridge activities
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                to="/profile" 
                className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Your Profile
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Your Applications */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Your Applications</h2>
              </div>
              
              {dashboardData.applications.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {dashboardData.applications.map((application) => (
                    <div key={application.id} className="px-6 py-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <div>
                          <h3 className="font-medium text-gray-900">{application.position}</h3>
                          <p className="text-sm text-gray-600">{application.company}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row sm:items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            application.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' : 
                            application.status === 'Interview' ? 'bg-green-100 text-green-800' : 
                            application.status === 'Rejected' ? 'bg-red-100 text-red-800' : 
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {application.status}
                          </span>
                          <span className="text-xs text-gray-500 mt-1 sm:mt-0 sm:ml-4">
                            Applied: {new Date(application.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <Link
                          to={`/applications/${application.id}`}
                          className="text-sm text-indigo-600 hover:text-indigo-800"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-6 py-8 text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
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

              <div className="px-6 py-3 bg-gray-50 text-right">
                <Link
                  to="/applications"
                  className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View All Applications
                </Link>
              </div>
            </div>

            {/* Saved Opportunities */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Saved Opportunities</h2>
              </div>
              
              {dashboardData.savedOpportunities.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {dashboardData.savedOpportunities.map((opportunity) => (
                    <div key={opportunity.id} className="px-6 py-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <div>
                          <h3 className="font-medium text-gray-900">{opportunity.title}</h3>
                          <p className="text-sm text-gray-600">{opportunity.organization}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row sm:items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            opportunity.type === 'Full-time' ? 'bg-green-100 text-green-800' : 
                            opportunity.type === 'Internship' ? 'bg-blue-100 text-blue-800' : 
                            opportunity.type === 'Program' ? 'bg-purple-100 text-purple-800' : 
                            'bg-indigo-100 text-indigo-800'
                          }`}>
                            {opportunity.type}
                          </span>
                          <span className="text-xs text-gray-500 mt-1 sm:mt-0 sm:ml-4">
                            Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-end space-x-4">
                        <Link
                          to={`/opportunities/${opportunity.id}`}
                          className="text-sm text-indigo-600 hover:text-indigo-800"
                        >
                          View Details
                        </Link>
                        <button className="text-sm text-red-600 hover:text-red-800">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-6 py-8 text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No saved opportunities</h3>
                  <p className="text-gray-500">
                    Save opportunities to review them later.
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

              <div className="px-6 py-3 bg-gray-50 text-right">
                <Link
                  to="/saved-opportunities"
                  className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View All Saved
                </Link>
              </div>
            </div>

            {/* Recommended Opportunities */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Recommended For You</h2>
              </div>
              
              {dashboardData.recommendedOpportunities.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {dashboardData.recommendedOpportunities.map((opportunity) => (
                    <div key={opportunity.id} className="px-6 py-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <div>
                          <h3 className="font-medium text-gray-900">{opportunity.title}</h3>
                          <p className="text-sm text-gray-600">{opportunity.organization}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row sm:items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            opportunity.type === 'Full-time' ? 'bg-green-100 text-green-800' : 
                            opportunity.type === 'Internship' ? 'bg-blue-100 text-blue-800' : 
                            opportunity.type === 'Workshop' ? 'bg-orange-100 text-orange-800' : 
                            'bg-indigo-100 text-indigo-800'
                          }`}>
                            {opportunity.type}
                          </span>
                          <span className="text-xs text-gray-500 mt-1 sm:mt-0 sm:ml-4">
                            Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-end space-x-4">
                        <button className="text-sm text-gray-500 hover:text-gray-700">
                          Not Interested
                        </button>
                        <Link
                          to={`/opportunities/${opportunity.id}`}
                          className="text-sm text-indigo-600 hover:text-indigo-800"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-6 py-8 text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No recommendations yet</h3>
                  <p className="text-gray-500">
                    Complete your profile to get personalized recommendations.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/profile"
                      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      Complete Profile
                    </Link>
                  </div>
                </div>
              )}

              <div className="px-6 py-3 bg-gray-50 text-right">
                <Link
                  to="/opportunities"
                  className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View All Opportunities
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Profile Completion</h2>
              </div>
              <div className="px-6 py-4">
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">70% complete</span>
                    <span className="text-xs text-gray-500">7/10 sections</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Basic information</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Contact details</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Education</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Skills</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Languages</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    to="/profile"
                    className="block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Complete Your Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-indigo-600 rounded-full">
                  {dashboardData.notifications.filter(n => !n.read).length}
                </span>
              </div>
              
              {dashboardData.notifications.length > 0 ? (
                <div className="divide-y divide-gray-200 max-h-80 overflow-y-auto">
                  {dashboardData.notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`px-6 py-4 ${!notification.read ? 'bg-indigo-50' : ''}`}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className={`font-medium ${!notification.read ? 'text-indigo-900' : 'text-gray-900'}`}>
                          {notification.title}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {new Date(notification.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className={`text-sm mt-1 ${!notification.read ? 'text-indigo-800' : 'text-gray-600'}`}>
                        {notification.message}
                      </p>
                      <div className="mt-2 flex justify-end">
                        <button className="text-xs text-indigo-600 hover:text-indigo-800">
                          {notification.read ? 'Mark as unread' : 'Mark as read'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-6 py-8 text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No notifications</h3>
                  <p className="text-gray-500">
                    You're all caught up!
                  </p>
                </div>
              )}

              <div className="px-6 py-3 bg-gray-50 text-center">
                <Link
                  to="/notifications"
                  className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View All Notifications
                </Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6 space-y-4">
                <Link
                  to="/opportunities"
                  className="block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Browse Opportunities
                </Link>
                <Link
                  to="/talent"
                  className="block w-full text-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
                >
                  Connect with Talent
                </Link>
                <Link
                  to="/events"
                  className="block w-full text-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
                >
                  Upcoming Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;