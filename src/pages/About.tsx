
import { Calendar, Building, Star, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const About = () => {
  const leaders = [
    {
      name: "President",
      title: "Club President",
      description: "Leading the club's vision and strategic direction"
    },
    {
      name: "Vice President",
      title: "Vice President",
      description: "Supporting club operations and member engagement"
    },
    {
      name: "Secretary",
      title: "Secretary",
      description: "Managing communications and club records"
    },
    {
      name: "Treasurer",
      title: "Treasurer",
      description: "Overseeing financial planning and budget management"
    }
  ];

  const sponsors = [
    "Sponsor 1",
    "Sponsor 2", 
    "Sponsor 3",
    "Sponsor 4"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-kenyan-green to-kenyan-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About TUK AJIRA CLUB
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Discover our journey, mission, and the people who make our community thrive
            </p>
          </div>
        </div>
      </section>

      {/* Club History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-kenyan-black mb-6">Our Story</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-kenyan-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-kenyan-black">Founded</h3>
                    <p className="text-gray-600">
                      TUK AJIRA CLUB was established to empower Technical University of Kenya 
                      students with the skills, connections, and opportunities needed to excel 
                      in their professional careers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-kenyan-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-kenyan-black">NRCAC Membership</h3>
                    <p className="text-gray-600">
                      We are proud members of the National Resource Center for Academic Clubs (NRCAC), 
                      our umbrella organization that supports and coordinates academic clubs across Kenya's 
                      higher education institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-kenyan-black mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg mb-6">
                To bridge the gap between academic learning and professional success by providing 
                TUK students with networking opportunities, career development resources, and 
                industry connections.
              </p>
              <h3 className="text-2xl font-bold text-kenyan-black mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To be the leading student organization at Technical University of Kenya, 
                empowering graduates to become industry leaders and innovators in their respective fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kenyan-black mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated leaders who guide our club's vision and ensure 
              our community continues to thrive and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-32 h-32 bg-gradient-to-br from-kenyan-red to-kenyan-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  <CardTitle className="text-kenyan-black">{leader.name}</CardTitle>
                  <p className="text-kenyan-red font-semibold">{leader.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 italic">
              Leadership photos will be updated soon!
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kenyan-black mb-4">
              Our Sponsors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're grateful for the support of our sponsors who help make our 
              programs and events possible.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="border-2 border-dashed border-gray-300 hover:border-kenyan-red transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Star className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-600 font-medium">{sponsor}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 italic">
              Sponsor logos will be updated soon!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
