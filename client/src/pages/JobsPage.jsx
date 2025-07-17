import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
  BriefcaseIcon,
  MapPinIcon,
  BuildingOffice2Icon,
  ClockIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CurrencyYenIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { jobsAPI } from '@/services/api';

export const JobsPage = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [level, setLevel] = useState('');

  useEffect(() => {
    fetchJobs();
  }, [search, category, location, level]);

  const fetchJobs = async () => {
    try {
      const params = {
        ...(search && { search }),
        ...(category && { category }),
        ...(location && { location }),
        ...(level && { level })
      };
      const response = await jobsAPI.getJobs(params);
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'IT': return 'bg-blue-100 text-blue-800';
      case 'Hospitality': return 'bg-green-100 text-green-800';
      case 'Care Services': return 'bg-purple-100 text-purple-800';
      case 'Language Schools': return 'bg-orange-100 text-orange-800';
      case 'Graduate Studies': return 'bg-red-100 text-red-800';
      case 'Undergraduate Studies': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatSalary = (salary) => {
    if (!salary || !salary.min) return 'Salary not specified';
    const min = salary.min.toLocaleString();
    const max = salary.max ? salary.max.toLocaleString() : '';
    const currency = salary.currency || 'JPY';
    const period = salary.period || 'month';

    return `¥${min}${max ? ` - ¥${max}` : '+'} /${period}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Job Opportunities</h1>
        <p className="text-gray-600 mt-2">
          Discover amazing opportunities in Japan across IT, hospitality, and care services.
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MagnifyingGlassIcon className="w-5 h-5" />
            Search Jobs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <Input
                placeholder="Search jobs, companies, or keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                <SelectItem value="IT">IT & Technology</SelectItem>
                <SelectItem value="Hospitality">Hospitality</SelectItem>
                <SelectItem value="Care Services">Care Services</SelectItem>
                <SelectItem value="Language Schools">Language Schools</SelectItem>
                <SelectItem value="Graduate Studies">Graduate Studies</SelectItem>
                <SelectItem value="Undergraduate Studies">Undergraduate Studies</SelectItem>
              </SelectContent>
            </Select>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Locations</SelectItem>
                <SelectItem value="Tokyo">Tokyo</SelectItem>
                <SelectItem value="Osaka">Osaka</SelectItem>
                <SelectItem value="Kyoto">Kyoto</SelectItem>
                <SelectItem value="Yokohama">Yokohama</SelectItem>
                <SelectItem value="Nagoya">Nagoya</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
              </SelectContent>
            </Select>
            <Select value={level} onValueChange={setLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Japanese Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any Level</SelectItem>
                <SelectItem value="N5">N5 (Beginner)</SelectItem>
                <SelectItem value="N4">N4 (Elementary)</SelectItem>
                <SelectItem value="N3">N3 (Intermediate)</SelectItem>
                <SelectItem value="N2">N2 (Upper Intermediate)</SelectItem>
                <SelectItem value="N1">N1 (Advanced)</SelectItem>
                <SelectItem value="Not Required">Not Required</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Job Results */}
      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-12">
            <BriefcaseIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job) => (
              <Card key={job._id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <Badge variant="outline" className={getCategoryColor(job.category)}>
                          {job.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <BuildingOffice2Icon className="w-4 h-4" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          {job.location?.prefecture || 'Not specified'}
                          {job.location?.isRemote && ' (Remote)'}
                        </span>
                        <span className="flex items-center gap-1">
                          <CurrencyYenIcon className="w-4 h-4" />
                          {formatSalary(job.salary)}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">
                        {job.employmentType}
                      </Badge>
                      <p className="text-sm text-gray-500">
                        {job.applicationsCount} applicants
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 mb-4 line-clamp-3">
                    {job.description}
                  </CardDescription>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        Posted {new Date(job.createdAt).toLocaleDateString()}
                      </span>
                      {job.applicationDeadline && (
                        <span className="flex items-center gap-1">
                          <CalendarDaysIcon className="w-4 h-4" />
                          Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Badge variant="outline" className="text-xs">
                          {job.languageRequirement} Required
                        </Badge>
                      </span>
                    </div>
                    <Button
                      onClick={() => navigate(`/jobs/${job._id}`)}
                      className="flex items-center gap-2"
                    >
                      View Details
                      <ArrowRightIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
