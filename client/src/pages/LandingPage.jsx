import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ArrowRightIcon,
  StarIcon,
  MapPinIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BriefcaseIcon className="w-8 h-8 text-blue-600" />,
      title: "Job Opportunities",
      description: "Access to IT, hospitality, and care service jobs in Japan with competitive salaries."
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8 text-purple-600" />,
      title: "Educational Programs",
      description: "Language schools and university programs tailored for African students."
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8 text-green-600" />,
      title: "Cultural Bridge",
      description: "Comprehensive cultural training to help you adapt to Japanese work environment."
    },
    {
      icon: <UserGroupIcon className="w-8 h-8 text-orange-600" />,
      title: "Community Support",
      description: "Join a network of African professionals already succeeding in Japan."
    }
  ];

  const stats = [
    { number: "500+", label: "Students Placed", icon: <AcademicCapIcon className="w-5 h-5" /> },
    { number: "50+", label: "Partner Companies", icon: <BriefcaseIcon className="w-5 h-5" /> },
    { number: "95%", label: "Success Rate", icon: <ChartBarIcon className="w-5 h-5" /> },
    { number: "3", label: "Countries", icon: <MapPinIcon className="w-5 h-5" /> }
  ];

  const testimonials = [
    {
      name: "James Mwangi",
      role: "Software Engineer, Tokyo",
      content: "AfriBridge helped me land my dream job in Tokyo. The support was incredible!",
      rating: 5
    },
    {
      name: "Sarah Akinyi",
      role: "Student, Osaka University",
      content: "The language preparation and cultural training made all the difference.",
      rating: 5
    },
    {
      name: "David Ochieng",
      role: "Hospitality Manager, Kyoto",
      content: "Professional growth opportunities in Japan exceeded my expectations.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bridge Your Future to <span className="text-yellow-300">Japan</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Connecting African talent with Japanese opportunities in IT, hospitality, 
              care services, and education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => navigate('/register')}
              >
                Start Your Journey
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => navigate('/jobs')}
              >
                Explore Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-blue-100 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AfriBridge?
            </h2>
            <p className="text-xl text-gray-600">
              We provide comprehensive support for your journey to Japan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Opportunities Awaiting You
            </h2>
            <p className="text-xl text-gray-600">
              Discover your path to success in Japan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BriefcaseIcon className="w-5 h-5 text-blue-600" />
                  IT & Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Software development, cybersecurity, data analysis, and system administration roles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">AWS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserGroupIcon className="w-5 h-5 text-purple-600" />
                  Hospitality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Hotel management, restaurant service, tourism, and event coordination positions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Customer Service</Badge>
                  <Badge variant="secondary">Management</Badge>
                  <Badge variant="secondary">Tourism</Badge>
                </div>
              </CardContent>
            </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <AcademicCapIcon className="w-5 h-5 text-green-600" />
                              Education
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 mb-4">
                              Language schools, university programs, and teaching opportunities for Africans in Japan.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary">Japanese Language</Badge>
                              <Badge variant="secondary">University</Badge>
                              <Badge variant="secondary">Teaching</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </section>
                </div>
              );
            }
