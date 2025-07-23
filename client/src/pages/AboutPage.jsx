import { Link } from 'react-router-dom';
import { Zap, Clock, Globe, Users, User } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About AfriBridge</h1>
            <p className="text-xl text-indigo-100">
              Connecting hearts, minds, and opportunities between Africa and Japan
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                AfriBridge was born out of a shared vision to foster meaningful connections between Africa and Japan—two regions with rich cultural heritage and immense potential for collaboration.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2023 by a diverse team of professionals with experience in both African and Japanese markets, our platform aims to bridge geographical, cultural, and economic gaps, creating opportunities for growth, innovation, and cultural exchange.
              </p>
              <p className="text-lg text-gray-600">
                Our journey began with a simple question: "How can we facilitate deeper connections between these vibrant regions?" Today, AfriBridge stands as the answer—a comprehensive platform that connects talented individuals, innovative businesses, and cultural initiatives.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-indigo-900 opacity-20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg">
                  To create meaningful connections between Africa and Japan that foster economic growth, cultural understanding, and mutual prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do at AfriBridge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We believe in the power of innovative thinking to solve complex challenges and create new opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with transparency, honesty, and ethical standards in all our interactions and business practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inclusivity</h3>
              <p className="text-gray-600">
                We embrace diversity and strive to create opportunities that are accessible to people of all backgrounds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We foster meaningful partnerships and believe that working together creates stronger outcomes for all parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-lg text-gray-600">
              Meet the passionate individuals behind AfriBridge
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-1">Aisha Kamau</h3>
                <p className="text-center text-indigo-600 mb-3">Co-Founder & CEO</p>
                <p className="text-gray-600 text-center mb-4">
                  Former tech executive with experience in both African and Japanese markets.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-1">Takeshi Nakamura</h3>
                <p className="text-center text-indigo-600 mb-3">Co-Founder & COO</p>
                <p className="text-gray-600 text-center mb-4">
                  International business consultant with 15+ years of experience in cross-border ventures.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-1">Grace Okonkwo</h3>
                <p className="text-center text-indigo-600 mb-3">Chief Marketing Officer</p>
                <p className="text-gray-600 text-center mb-4">
                  Digital marketing expert specializing in cross-cultural communication strategies.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-1">Kenji Suzuki</h3>
                <p className="text-center text-indigo-600 mb-3">Head of Partnerships</p>
                <p className="text-gray-600 text-center mb-4">
                  Former diplomat with extensive network across African countries and Japan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="max-w-2xl mx-auto text-lg text-indigo-100 mb-8">
              Together, we can create meaningful connections that bridge cultures and drive growth.
              Whether you're an individual or organization, there's a place for you in our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-md hover:bg-indigo-50 transition duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/register"
                className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition duration-300"
              >
                Join AfriBridge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;