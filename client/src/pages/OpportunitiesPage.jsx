import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Building, MapPin, Calendar, XCircle } from 'lucide-react';

const OpportunitiesPage = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [filters, setFilters] = useState({ type: '', location: '', category: '', search: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // Dummy data stub for brevity
      setOpportunities([]); // Insert dummy data array here
      setIsLoading(false);
    }, 1000);
  }, []);

  const getUniqueValues = (key) => [...new Set(opportunities.map(item => item[key]))];

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => setFilters({ type: '', location: '', category: '', search: '' });

  const filteredOpportunities = opportunities.filter(({ type, location, category, title, organization, description }) => {
    return (
      (!filters.type || type === filters.type) &&
      (!filters.location || location.includes(filters.location)) &&
      (!filters.category || category === filters.category) &&
      (!filters.search ||
        title.toLowerCase().includes(filters.search.toLowerCase()) ||
        organization.toLowerCase().includes(filters.search.toLowerCase()) ||
        description.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-indigo-900 to-purple-800 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Opportunities</h1>
        <p className="text-lg max-w-xl mx-auto">
          Discover career, business, and educational opportunities connecting Africa and Japan
        </p>
      </section>

      <section className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-4 items-end">
          <Input
            placeholder="Search opportunities..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full md:w-1/4"
          />

          <Select value={filters.type} onValueChange={(val) => handleFilterChange('type', val)}>
            <SelectTrigger className="w-full md:w-1/6">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Types</SelectItem>
              {getUniqueValues('type').map((v) => <SelectItem key={v} value={v}>{v}</SelectItem>)}
            </SelectContent>
          </Select>

          <Select value={filters.category} onValueChange={(val) => handleFilterChange('category', val)}>
            <SelectTrigger className="w-full md:w-1/6">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              {getUniqueValues('category').map((v) => <SelectItem key={v} value={v}>{v}</SelectItem>)}
            </SelectContent>
          </Select>

          <Select value={filters.location} onValueChange={(val) => handleFilterChange('location', val)}>
            <SelectTrigger className="w-full md:w-1/6">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Locations</SelectItem>
              {getUniqueValues('location').map((v) => <SelectItem key={v} value={v}>{v}</SelectItem>)}
            </SelectContent>
          </Select>

          <Button variant="ghost" onClick={clearFilters} className="w-full md:w-auto">
            Clear Filters
          </Button>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-12 h-12 animate-spin text-indigo-600" />
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredOpportunities.length} {filteredOpportunities.length === 1 ? 'Opportunity' : 'Opportunities'} Found
                </h2>
              </div>

              {filteredOpportunities.length === 0 ? (
                <div className="text-center py-16">
                  <XCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg text-gray-600 mb-4">No opportunities found</p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredOpportunities.map(({ _id, title, organization, location, type, category, deadline, description }) => (
                    <Card key={_id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between mb-2">
                          <Badge variant="outline">{type}</Badge>
                          <Badge>{category}</Badge>
                        </div>
                        <h3 className="text-lg font-bold mb-2">{title}</h3>

                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Building className="w-4 h-4 mr-2" />{organization}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <MapPin className="w-4 h-4 mr-2" />{location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-4">
                          <Calendar className="w-4 h-4 mr-2" />Deadline: {new Date(deadline).toLocaleDateString()}
                        </div>

                        <p className="text-sm text-gray-700 mb-4 line-clamp-3">{description}</p>

                        <div className="flex justify-between">
                          <Button variant="outline" asChild>
                            <Link to={`/opportunities/${_id}`}>View Details</Link>
                          </Button>
                          <Button asChild>
                            <Link to={`/opportunities/${_id}/apply`}>Apply Now</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="py-12 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Have an Opportunity to Share?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          If you represent an organization looking to connect with talent between Africa and Japan,
          you can post your opportunity on our platform.
        </p>
        <Button asChild variant="secondary">
          <Link to="/create-opportunity">Post an Opportunity</Link>
        </Button>
      </section>
    </div>
  );
};

export default OpportunitiesPage;
