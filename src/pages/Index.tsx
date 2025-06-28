
import { ArrowRight, Users, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-kenyan-black via-kenyan-red to-kenyan-green min-h-[80vh] flex items-center justify-center hero-pattern">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-kenyan-red">TUK AJIRA CLUB</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Empowering Technical University of Kenya students through professional development, 
            networking, and career opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-kenyan-red hover:bg-kenyan-red/80 text-white">
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-kenyan-black">
              <Link to="/events">
                View Events
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kenyan-black mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              TUK AJIRA CLUB is dedicated to bridging the gap between academic learning 
              and professional success for Technical University of Kenya students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-kenyan-green/20 hover:border-kenyan-green transition-colors duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-kenyan-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-kenyan-black mb-3">Networking</h3>
                <p className="text-gray-600">
                  Connect with industry professionals, alumni, and fellow students 
                  to build meaningful career relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-kenyan-red/20 hover:border-kenyan-red transition-colors duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-kenyan-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-kenyan-black mb-3">Events & Workshops</h3>
                <p className="text-gray-600">
                  Regular career development workshops, seminars, and networking events 
                  to enhance your professional skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-kenyan-black/20 hover:border-kenyan-black transition-colors duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-kenyan-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-kenyan-black mb-3">Career Support</h3>
                <p className="text-gray-600">
                  Job placement assistance, internship opportunities, and career 
                  guidance to help you achieve your professional goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kenyan-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Be part of a vibrant community that's shaping the future of technical professionals in Kenya.
          </p>
          <Button asChild size="lg" className="bg-kenyan-red hover:bg-kenyan-red/80">
            <Link to="/contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
