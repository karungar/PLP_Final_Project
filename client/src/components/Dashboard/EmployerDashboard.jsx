import { useState, useEffect } from 'react';
import { authAPI, jobsAPI } from '@/services/api';  // import authAPI here
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BriefcaseIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  PlusIcon,
  EyeIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

export const EmployerDashboard = () => {
  const [user, setUser] = useState(null); // store current user here
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserAndJobs = async () => {
      try {
        const userResponse = await authAPI.getCurrentUser();  // fetch current user from API
        setUser(userResponse.data);

        const jobsResponse = await jobsAPI.getJobs();
        // Filter jobs posted by this employer
        const employerJobs = jobsResponse.data.filter(
          (job) => job.postedBy._id === userResponse.data._id
        );
        setJobs(employerJobs);
      } catch (error) {
        console.error('Error fetching user or jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndJobs();
  }, []);

  const getJobStats = () => {
    const active = jobs.filter((job) => job.status === 'active').length;
    const draft = jobs.filter((job) => job.status === 'draft').length;
    const closed = jobs.filter((job) => job.status === 'closed').length;
    const totalApplications = jobs.reduce((sum, job) => sum + job.applicationsCount, 0);
    return { active, draft, closed, totalApplications };
  };

  const stats = getJobStats();

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircleIcon className="w-4 h-4" />;
      case 'draft': return <ClockIcon className="w-4 h-4" />;
      case 'closed': return <ExclamationCircleIcon className="w-4 h-4" />;
      default: return <ClockIcon className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Employer Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your job postings and track applications.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                <p className="text-2xl font-bold text-gray-900">{stats.active}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <BriefcaseIcon className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{stats.draft} in draft</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <UserGroupIcon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Across all jobs</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Jobs</p>
                <p className="text-2xl font-bold text-gray-900">{jobs.length}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <BuildingOfficeIcon className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{stats.closed} closed</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Applications</p>
                <p className="text-2xl font-bold text-gray-900">
                  {jobs.length > 0 ? Math.round(stats.totalApplications / jobs.length) : 0}
                </p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <ArrowTrendingUpIcon className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Per job posting</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlusIcon className="w-5 h-5" />
              Post New Job
            </CardTitle>
            <CardDescription>
              Create a new job posting to attract talent
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/jobs/create')} className="w-full">
              Create Job Posting
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserGroupIcon className="w-5 h-5" />
              Manage Applications
            </CardTitle>
            <CardDescription>
              Review and manage candidate applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/applications')} className="w-full" variant="outline">
              View Applications
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowTrendingUpIcon className="w-5 h-5" />
              View Analytics
            </CardTitle>
            <CardDescription>
              Track job performance and application metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/analytics')} className="w-full" variant="outline">
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Jobs */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Your Job Postings</CardTitle>
              <CardDescription>Manage and track your job listings</CardDescription>
            </div>
            <Button onClick={() => navigate('/jobs/create')}>
              <PlusIcon className="w-4 h-4 mr-2" />
              Post Job
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12">
              <BriefcaseIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No job postings yet</h3>
              <p className="text-gray-500 mb-4">Create your first job posting to start receiving applications</p>
              <Button onClick={() => navigate('/jobs/create')}>
                <PlusIcon className="w-4 h-4 mr-2" />
                Create Job Posting
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job._id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <BriefcaseIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <BuildingOfficeIcon className="w-3 h-3" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPinIcon className="w-3 h-3" />
                          {job.location?.prefecture || 'Remote'}
                        </span>
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-3 h-3" />
                          {new Date(job.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{job.applicationsCount} applications</p>
                      <Badge variant="outline" className={getStatusColor(job.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(job.status)}
                          {job.status}
                        </span>
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate(`/jobs/${job._id}`)}
                    >
                      <EyeIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
