import { ArrowRight, Users, Calendar, Award, Target, BookOpen, Handshake, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Index = () => {
  const stats = [
    { number: "500+", label: "Active Members", icon: Users },
    { number: "50+", label: "Industry Partners", icon: Handshake },
    { number: "100+", label: "Successful Placements", icon: TrendingUp },
    { number: "25+", label: "Annual Events", icon: Calendar }
  ];

  const achievements = [
    "Best Student Club Award 2023 - NRCAC",
    "Outstanding Career Development Program",
    "Excellence in Industry Partnerships",
    "Community Impact Recognition Award"
  ];

  return (
    <Layout>
      {/* Enhanced Hero Section with TUK Building Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center hero-pattern">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/1469a0a1-e991-4aa5-b8da-f625cd41f585.png')`
          }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-kenyan-black/80 via-kenyan-red/60 to-kenyan-green/60"></div>
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <Badge className="mb-6 bg-kenyan-red/20 text-white border-kenyan-red animate-fade-in">
            Est. 2022 | NRCAC Member Institution
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Welcome to <span className="text-kenyan-red">TUK AJIRA CLUB</span>
          </h1>
          <p className="text-xl md:text-3xl mb-6 text-gray-200 animate-fade-in font-light">
            Bridging Academia and Industry Excellence
          </p>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-4xl mx-auto animate-fade-in">
            The premier student organization at Technical University of Kenya, dedicated to empowering future 
            professionals through comprehensive career development, strategic industry partnerships, and 
            transformative networking opportunities that shape tomorrow's leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-kenyan-red hover:bg-kenyan-red/80 text-white px-8 py-4 text-lg">
              <Link to="/about">
                Discover Our Story <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-kenyan-black px-8 py-4 text-lg">
              <Link to="/events">
                Explore Events
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-kenyan-green text-kenyan-green hover:bg-kenyan-green hover:text-white px-8 py-4 text-lg">
              <Link to="/contact">
                Join Us Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-kenyan-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-300">Measurable success in career development and professional growth</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-transparent border-2 border-kenyan-red/30 hover:border-kenyan-red transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <stat.icon className="h-12 w-12 text-kenyan-green mx-auto mb-4" />
                  <div className="text-4xl font-bold text-kenyan-red mb-2">{stat.number}</div>
                  <div className="text-white font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-kenyan-green/10 text-kenyan-green border-kenyan-green">
              What Makes Us Different
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-kenyan-black mb-6">
              Comprehensive Career Development
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              TUK AJIRA CLUB stands as the bridge between academic excellence and professional success, 
              offering a holistic approach to career development that transforms students into industry-ready professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="border-2 border-kenyan-green/20 hover:border-kenyan-green hover:shadow-2xl transition-all duration-500 group">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-kenyan-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-kenyan-black mb-3">Strategic Networking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Build meaningful connections with industry titans, successful alumni, and ambitious peers 
                  through our exclusive networking events, mentorship programs, and professional meetups.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Monthly industry expert sessions</li>
                  <li>• Alumni mentorship matching</li>
                  <li>• Corporate partnership events</li>
                  <li>• Peer collaboration projects</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-kenyan-red/20 hover:border-kenyan-red hover:shadow-2xl transition-all duration-500 group">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-kenyan-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-kenyan-black mb-3">Skills Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Master cutting-edge skills through intensive workshops, certification programs, and hands-on 
                  training sessions designed to keep you ahead in today's competitive job market.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Technical certification programs</li>
                  <li>• Soft skills enhancement</li>
                  <li>• Leadership development tracks</li>
                  <li>• Industry-specific training</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-kenyan-black/20 hover:border-kenyan-black hover:shadow-2xl transition-all duration-500 group">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-kenyan-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-kenyan-black mb-3">Career Placement</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Secure your dream career with our comprehensive placement assistance, including resume optimization, 
                  interview coaching, and direct connections to top-tier employers across Kenya and beyond.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Personalized career counseling</li>
                  <li>• Resume and portfolio reviews</li>
                  <li>• Mock interview sessions</li>
                  <li>• Direct employer connections</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kenyan-black mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-gray-600">Celebrating excellence in student career development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-l-4 border-kenyan-red hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 flex items-center">
                  <Award className="h-12 w-12 text-kenyan-red mr-6 flex-shrink-0" />
                  <span className="text-lg font-semibold text-kenyan-black">{achievement}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-kenyan-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kenyan-red/20 to-kenyan-green/20"></div>
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-kenyan-red/20 text-white border-kenyan-red">
            Transform Your Future Today
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl mb-6 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join over 500 ambitious students who have transformed their careers through TUK AJIRA CLUB. 
            Your journey to professional excellence starts here.
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            Be part of a vibrant community that's actively shaping the future of technical professionals 
            across Kenya and East Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-kenyan-red hover:bg-kenyan-red/80 px-10 py-4 text-lg">
              <Link to="/contact">
                Start Your Journey <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-kenyan-green text-kenyan-green hover:bg-kenyan-green hover:text-white px-10 py-4 text-lg">
              <Link to="/about">
                Learn Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
