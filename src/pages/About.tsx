
import { Calendar, Building, Star, Users, Award, Target, Globe, BookOpen, Handshake, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const About = () => {
  const leaders = [
    {
      name: "Alexander Kimani",
      title: "Club President",
      description: "Computer Science finalist with expertise in software development and project management. Leading the club's strategic vision and fostering industry partnerships.",
      achievements: ["Dean's List 2023", "Google Developer Student Club Lead", "Hackathon Winner 2023"]
    },
    {
      name: "Grace Wanjiku",
      title: "Vice President",
      description: "Electrical Engineering student passionate about renewable energy and innovation. Spearheading member engagement and academic collaboration initiatives.",
      achievements: ["IEEE Student Branch Chair", "Innovation Challenge Winner", "Research Publication Author"]
    },
    {
      name: "David Ochieng",
      title: "Secretary General",
      description: "Information Technology specialist with strong communication skills. Managing club communications, documentation, and stakeholder relations.",
      achievements: ["Communications Excellence Award", "Digital Marketing Certified", "Student Representative Council"]
    },
    {
      name: "Sarah Akinyi",
      title: "Treasurer",
      description: "Business Information Systems student with financial management expertise. Overseeing budget planning, financial strategy, and resource allocation.",
      achievements: ["CPA Student Level", "Financial Literacy Advocate", "Entrepreneurship Competition Finalist"]
    },
    {
      name: "Michael Mwangi",
      title: "Programs Coordinator",
      description: "Mechanical Engineering student coordinating workshops, seminars, and career development programs for club members.",
      achievements: ["Project Management Certified", "Industry Liaison Lead", "Skills Development Champion"]
    },
    {
      name: "Faith Chebet",
      title: "Public Relations Officer",
      description: "Mass Communication student managing club's public image, social media presence, and external communications.",
      achievements: ["Social Media Excellence Award", "Public Speaking Champion", "Brand Ambassador"]
    }
  ];

  const sponsors = [
    {
      name: "Safaricom PLC",
      category: "Platinum Partner",
      description: "Leading telecommunications provider supporting digital innovation and career development programs"
    },
    {
      name: "Kenya Commercial Bank",
      category: "Gold Partner", 
      description: "Premier financial institution providing financial literacy training and internship opportunities"
    },
    {
      name: "Microsoft East Africa",
      category: "Technology Partner",
      description: "Global technology leader offering certification programs and cloud computing training"
    },
    {
      name: "Equity Bank Kenya",
      category: "Gold Partner",
      description: "Major financial services provider supporting entrepreneurship and financial education initiatives"
    },
    {
      name: "IBM Kenya",
      category: "Innovation Partner",
      description: "Technology giant providing AI and data science training opportunities for members"
    },
    {
      name: "Nairobi Securities Exchange",
      category: "Industry Partner",
      description: "Capital markets regulator offering financial markets education and career opportunities"
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Club Foundation",
      description: "TUK AJIRA CLUB established with 25 founding members passionate about bridging the gap between academia and industry."
    },
    {
      year: "2016",
      title: "NRCAC Membership",
      description: "Officially joined the National Resource Center for Academic Clubs, expanding our network and resources."
    },
    {
      year: "2018",
      title: "First Career Fair",
      description: "Organized the inaugural TUK Career Fair, connecting over 200 students with 15 leading employers."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Successfully transitioned to virtual programming during the pandemic, maintaining member engagement and growth."
    },
    {
      year: "2022",
      title: "500+ Members Milestone",
      description: "Reached over 500 active members, becoming one of the largest and most influential student organizations at TUK."
    },
    {
      year: "2023",
      title: "Excellence Recognition",
      description: "Awarded 'Best Student Club' by NRCAC for outstanding contribution to student career development."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-kenyan-green via-kenyan-black to-kenyan-red text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white animate-fade-in">
              Est. 2015 | NRCAC Member Institution
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
              About TUK AJIRA CLUB
            </h1>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in leading-relaxed">
              Transforming students into industry leaders through innovation, excellence, and strategic partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-kenyan-black mb-8">Our Foundation</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-kenyan-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-kenyan-black mb-3">Our Mission</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      To bridge the gap between academic excellence and professional success by providing 
                      Technical University of Kenya students with comprehensive career development resources, 
                      strategic industry partnerships, transformative networking opportunities, and the skills 
                      necessary to excel in today's competitive global marketplace.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-kenyan-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-kenyan-black mb-3">Our Vision</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      To be the premier student organization at Technical University of Kenya and a model 
                      for academic clubs across East Africa, empowering graduates to become innovative leaders, 
                      successful entrepreneurs, and transformative change-makers in their respective fields 
                      and communities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-kenyan-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-kenyan-black mb-3">NRCAC Partnership</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      As a proud member of the National Resource Center for Academic Clubs (NRCAC), 
                      we are part of Kenya's premier umbrella organization that coordinates and supports 
                      academic clubs across higher education institutions, ensuring best practices, 
                      resource sharing, and collaborative excellence in student development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-kenyan-green/10 to-kenyan-red/10 p-10 rounded-2xl">
              <h3 className="text-3xl font-bold text-kenyan-black mb-6">Our Core Values</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Award className="h-8 w-8 text-kenyan-red" />
                  <span className="text-xl font-semibold text-kenyan-black">Excellence in Everything</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-kenyan-green" />
                  <span className="text-xl font-semibold text-kenyan-black">Collaborative Growth</span>
                </div>
                <div className="flex items-center space-x-4">
                  <BookOpen className="h-8 w-8 text-kenyan-black" />
                  <span className="text-xl font-semibold text-kenyan-black">Continuous Learning</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Handshake className="h-8 w-8 text-kenyan-red" />
                  <span className="text-xl font-semibold text-kenyan-black">Integrity & Trust</span>
                </div>
                <div className="flex items-center space-x-4">
                  <TrendingUp className="h-8 w-8 text-kenyan-green" />
                  <span className="text-xl font-semibold text-kenyan-black">Innovation & Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-kenyan-black mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming TUK's premier student organization
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-kenyan-red"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-kenyan-green text-white">{milestone.year}</Badge>
                      <h3 className="text-xl font-bold text-kenyan-black mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-kenyan-red rounded-full border-4 border-white"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-kenyan-green/10 text-kenyan-green border-kenyan-green">
              Meet Our Leaders
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-kenyan-black mb-6">
              Executive Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our passionate and dedicated leaders who guide our club's vision, drive innovation, 
              and ensure our community continues to thrive and make meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {leaders.map((leader, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 group border-2 border-transparent hover:border-kenyan-green/30">
                <CardHeader className="text-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-kenyan-red via-kenyan-black to-kenyan-green rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Users className="h-20 w-20 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-kenyan-black">{leader.name}</CardTitle>
                  <p className="text-kenyan-red font-bold text-lg">{leader.title}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 leading-relaxed">{leader.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-kenyan-black">Key Achievements:</h4>
                    {leader.achievements.map((achievement, idx) => (
                      <Badge key={idx} variant="outline" className="mx-1 mb-2 text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 bg-kenyan-black/5 rounded-2xl p-8">
            <Users className="h-16 w-16 text-kenyan-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-kenyan-black mb-3">
              Leadership Photos Coming Soon!
            </h3>
            <p className="text-gray-600 text-lg">
              Professional headshots of our executive team will be uploaded shortly to showcase 
              the faces behind our success.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Sponsors Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-kenyan-red/10 text-kenyan-red border-kenyan-red">
              Partnership Excellence
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-kenyan-black mb-6">
              Our Strategic Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're honored to work with Kenya's leading organizations who share our commitment 
              to developing the next generation of professional excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="border-2 hover:border-kenyan-red transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-kenyan-green/20 to-kenyan-red/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Star className="h-12 w-12 text-kenyan-red" />
                  </div>
                  <CardTitle className="text-xl text-kenyan-black">{sponsor.name}</CardTitle>
                  <Badge className="bg-kenyan-green text-white">{sponsor.category}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{sponsor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Card className="border-2 border-dashed border-kenyan-red/30 bg-kenyan-red/5">
              <CardContent className="p-12">
                <Handshake className="h-16 w-16 text-kenyan-red mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-kenyan-black mb-4">
                  Partner With Us
                </h3>
                <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                  Join our network of esteemed partners and help shape the future of technical education 
                  in Kenya. Together, we can create lasting impact and meaningful opportunities for students.
                </p>
                <Badge className="bg-kenyan-green text-white px-6 py-2 text-sm">
                  Partnership opportunities available
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
