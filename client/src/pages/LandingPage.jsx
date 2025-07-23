import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  Globe, 
  Users, 
  Building, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Quote, 
  ArrowRight,
  MessageSquareQuote
} from 'lucide-react';
import { Button } from '@/components/ui/button'; // shadcn/ui Button
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // shadcn/ui Card

const LandingPage = () => {
  const [featuredOpportunities, setFeaturedOpportunities] = useState([]);
  const [featuredTalents, setFeaturedTalents] = useState([]);
  
  useEffect(() => {
    setFeaturedOpportunities([
      {
        _id: '1',
        title: 'Software Engineering Internship',
        organization: 'Tech Innovations Japan',
        location: 'Tokyo, Japan',
        type: 'Internship',
        deadline: new Date('2025-08-30'),
        description: 'Join our team for a 3-month internship focused on building innovative solutions for global markets.'
      },
      {
        _id: '2',
        title: 'African Market Research Analyst',
        organization: 'Global Trade Partners',
        location: 'Osaka, Japan (Remote)',
        type: 'Full-time',
        deadline: new Date('2025-09-15'),
        description: 'Looking for analysts with deep understanding of African markets to help Japanese companies expand.'
      },
      {
        _id: '3',
        title: 'Cultural Exchange Program',
        organization: 'Japan-Africa Foundation',
        location: 'Multiple Locations',
        type: 'Program',
        deadline: new Date('2025-10-01'),
        description: 'A 6-month exchange program for young professionals to experience business culture across borders.'
      }
    ]);

    setFeaturedTalents([
      {
        _id: '1',
        title: 'Full Stack Developer',
        user: { name: 'Ade Johnson', country: 'Nigeria' },
        skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
        experience: '5 years',
        bio: 'Passionate developer with experience in building scalable web applications for global clients.'
      },
      {
        _id: '2',
        title: 'Marketing Specialist',
        user: { name: 'Sakura Tanaka', country: 'Japan' },
        skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Market Analysis'],
        experience: '7 years',
        bio: 'Expert in developing marketing strategies for products entering the African market.'
      },
      {
        _id: '3',
        title: 'UX/UI Designer',
        user: { name: 'Chioma Okafor', country: 'Kenya' },
        skills: ['UI Design', 'UX Research', 'Figma', 'Design Systems'],
        experience: '4 years',
        bio: 'Creating user-centered designs that bridge cultural gaps and enhance user experience.'
      }
    ]);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block">Bridging Africa and Japan</span>
            <span className="block text-indigo-200">Creating Opportunities Together</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl mb-10">
            AfriBridge connects talents, businesses, and cultures between Africa and Japan,
            fostering collaboration, innovation, and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button asChild variant="default" size="lg">
              <Link to="/opportunities">
                Find Opportunities
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/talent">
                Discover Talent
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#F9FAFB" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We envision a world where collaboration between African and Japanese
              businesses, professionals, and cultures creates unprecedented opportunities
              and drives sustainable growth for all.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-indigo-600" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Exchange</h3>
                <p className="text-gray-600">
                  Fostering mutual understanding and appreciation between African and Japanese cultures
                  through immersive experiences and knowledge sharing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Network</h3>
                <p className="text-gray-600">
                  Connecting talented professionals across borders, enabling career growth and
                  creating diverse, innovative teams for businesses.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-indigo-600" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Partnerships</h3>
                <p className="text-gray-600">
                  Facilitating strategic partnerships between African and Japanese companies,
                  opening new markets and driving economic growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Opportunities</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Discover the latest opportunities connecting Africa and Japan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredOpportunities.map((opportunity) => (
              <Card key={opportunity._id} className="bg-gray-50 hover:shadow-md transition duration-300">
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full mb-4">
                    {opportunity.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <div className="flex items-start mb-4">
                    <Building className="w-5 h-5 text-gray-500 mr-2 mt-0.5" strokeWidth={1.5} />
                    <span className="text-gray-600">{opportunity.organization}</span>
                  </div>
                  <div className="flex items-start mb-4">
                    <MapPin className="w-5 h-5 text-gray-500 mr-2 mt-0.5" strokeWidth={1.5} />
                    <span className="text-gray-600">{opportunity.location}</span>
                  </div>
                  <div className="flex items-start mb-6">
                    <Calendar className="w-5 h-5 text-gray-500 mr-2 mt-0.5" strokeWidth={1.5} />
                    <span className="text-gray-600">Deadline: {opportunity.deadline.toLocaleDateString()}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                    <Link to={`/opportunities/${opportunity._id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/opportunities">
                View All Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Talents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Talent</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Meet exceptional professionals bridging Africa and Japan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTalents.map((talent) => (
              <Card key={talent._id} className="hover:shadow-md transition duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="font-bold text-indigo-600">{talent.user.name.charAt(0)}</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{talent.user.name}</h3>
                      <p className="text-gray-600">{talent.user.country}</p>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{talent.title}</h4>
                  <p className="text-gray-600 mb-4">{talent.bio}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {talent.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start mb-6">
                    <Briefcase className="w-5 h-5 text-gray-500 mr-2 mt-0.5" strokeWidth={1.5} />
                    <span className="text-gray-600">Experience: {talent.experience}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                    <Link to={`/talent/${talent._id}`}>
                      View Profile
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/talent">
                View All Talent
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Bridge?</h2>
              <p className="text-indigo-100 text-lg mb-8">
                Whether you're looking for opportunities or have talent to offer, 
                AfriBridge connects you with the right people and resources to succeed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="secondary" size="lg">
                  <Link to="/register">
                    Create Account
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-indigo-600 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-indigo-500 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-indigo-400 rounded-full flex items-center justify-center">
                      <Globe className="w-24 h-24 text-white" strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Hear from those who have benefited from the AfriBridge connection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card>
              <CardContent className="p-8">
                <MessageSquareQuote className="w-10 h-10 text-indigo-500 mb-4" fill="currentColor" />
                <p className="text-gray-600 text-lg mb-6">
                  "Through AfriBridge, I found an amazing opportunity to work with a Japanese tech company. 
                  The cultural exchange has been incredible, and I've grown professionally in ways I never imagined."
                </p>
                <div className="flex items-center">
                  <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="font-bold text-indigo-600">N</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Ngozi Adichie</h4>
                    <p className="text-gray-500">Software Developer from Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <MessageSquareQuote className="w-10 h-10 text-indigo-500 mb-4" fill="currentColor" />
                <p className="text-gray-600 text-lg mb-6">
                  "Our company expanded to three African countries with the help of AfriBridge's network. 
                  The talent we've connected with has been exceptional, and our business has grown tremendously."
                </p>
                <div className="flex items-center">
                  <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="font-bold text-indigo-600">H</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Hiroshi Yamamoto</h4>
                    <p className="text-gray-500">CEO, Tech Solutions Japan</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;