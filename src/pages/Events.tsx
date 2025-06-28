
import { Calendar, Clock, MapPin, Users, CheckCircle, AlertCircle, Trophy, BookOpen, Handshake, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Events = () => {
  const pastEvents = [
    {
      id: 1,
      title: "Annual Career Fair 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "TUK Main Auditorium & Exhibition Grounds",
      attendees: 850,
      description: "The largest career fair in TUK's history, featuring over 45 leading employers from various industries including technology, finance, engineering, and telecommunications.",
      highlights: ["45+ Participating Companies", "200+ Job Opportunities", "Live Interview Sessions", "Industry Expert Panels"],
      category: "Career Development",
      impact: "320 students received job offers within 30 days"
    },
    {
      id: 2,
      title: "Leadership Excellence Workshop Series",
      date: "February 20-22, 2024", 
      time: "2:00 PM - 6:00 PM",
      location: "TUK Conference Center",
      attendees: 150,
      description: "Intensive 3-day leadership development program featuring renowned speakers, interactive workshops, and practical leadership exercises designed to transform students into confident leaders.",
      highlights: ["Leadership Assessment Tools", "Team Building Activities", "Public Speaking Masterclass", "Personal Branding Workshop"],
      category: "Professional Development",
      impact: "95% of participants reported improved leadership confidence"
    },
    {
      id: 3,
      title: "Tech Innovation Summit 2024",
      date: "January 25, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "TUK Innovation Hub",
      attendees: 400,
      description: "Premier technology conference showcasing cutting-edge innovations, startup pitches, and networking opportunities with industry leaders in artificial intelligence, blockchain, and fintech.",
      highlights: ["20+ Tech Startups", "AI & ML Workshops", "Blockchain Demonstrations", "Investor Pitch Sessions"],
      category: "Technology & Innovation",
      impact: "12 student startups secured mentorship opportunities"
    }
  ];

  const ongoingEvents = [
    {
      id: 1,
      title: "Professional Mentorship Program 2024",
      date: "January - December 2024",
      time: "Flexible Scheduling",
      location: "Virtual & In-Person Sessions",
      participants: 180,
      description: "Comprehensive year-long mentorship program pairing students with successful industry professionals for personalized career guidance, skill development, and networking opportunities.",
      features: ["One-on-One Mentoring", "Group Coaching Sessions", "Industry Site Visits", "Career Planning Workshops"],
      category: "Mentorship",
      status: "Applications Open"
    },
    {
      id: 2,
      title: "Digital Skills Certification Track",
      date: "Ongoing Monthly Cohorts",
      time: "Weekends 9:00 AM - 4:00 PM",
      location: "TUK Computer Labs",
      participants: 95,
      description: "Structured certification program covering in-demand digital skills including cloud computing, data analytics, digital marketing, and cybersecurity fundamentals.",
      features: ["Microsoft Azure Certification", "Google Analytics Training", "Cybersecurity Fundamentals", "Data Science with Python"],
      category: "Skills Development",
      status: "Next Cohort: July 2024"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Global Career Opportunities Expo",
      date: "July 18-19, 2024",
      time: "9:00 AM - 6:00 PM", 
      location: "TUK Main Campus & Virtual Platform",
      expectedAttendees: 1000,
      description: "International career expo featuring multinational corporations, study abroad programs, and global internship opportunities for ambitious students seeking international exposure.",
      speakers: ["International HR Directors", "Global Recruitment Specialists", "Study Abroad Advisors"],
      registration: "Opens June 15, 2024",
      category: "International Opportunities"
    },
    {
      id: 2,
      title: "Entrepreneurship & Innovation Challenge",
      date: "August 10-12, 2024",
      time: "48-Hour Hackathon Format",
      location: "TUK Innovation Center",
      expectedAttendees: 200,
      description: "Intensive 48-hour startup challenge where student teams develop innovative solutions to real-world problems, with prizes worth over KES 500,000 and incubation opportunities.",
      speakers: ["Successful Entrepreneurs", "Venture Capitalists", "Innovation Experts"],
      registration: "Registration Required by July 25",
      category: "Entrepreneurship"
    },
    {
      id: 3,
      title: "Industry Leaders Summit",
      date: "September 5, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Nairobi Serena Hotel",
      expectedAttendees: 300,
      description: "Exclusive summit bringing together CEOs, industry pioneers, and thought leaders to share insights on future trends, career opportunities, and professional excellence.",
      speakers: ["Fortune 500 CEOs", "Industry Pioneers", "Tech Innovators"],
      registration: "Limited Seats - RSVP Required",
      category: "Leadership & Strategy"
    },
    {
      id: 4,
      title: "Annual Alumni Homecoming & Networking Gala",
      date: "October 20, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Safari Park Hotel, Nairobi",
      expectedAttendees: 250,
      description: "Prestigious annual gathering celebrating our alumni's achievements while providing networking opportunities between current students and successful graduates across various industries.",
      speakers: ["Distinguished Alumni", "Industry Champions", "Success Stories"],
      registration: "Formal Attire Required",
      category: "Alumni Network"
    }
  ];

  const eventCategories = [
    { name: "Career Development", count: 12, icon: TrendingUp, color: "bg-kenyan-red" },
    { name: "Professional Skills", count: 8, icon: BookOpen, color: "bg-kenyan-green" },
    { name: "Networking", count: 6, icon: Handshake, color: "bg-kenyan-black" },
    { name: "Innovation", count: 4, icon: Trophy, color: "bg-kenyan-red" }
  ];

  return (
    <Layout>
      {/* Enhanced Hero Section with Background Image */}
      <section className="relative py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/second-hero-image.png')`
          }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-kenyan-black/80 via-kenyan-red/70 to-kenyan-green/80"></div>
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white animate-fade-in">
              Excellence in Events & Programming
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
              Our Events Portfolio
            </h1>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in leading-relaxed">
              Comprehensive programming designed to accelerate your professional journey through 
              world-class events, workshops, and networking opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {eventCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-kenyan-black mb-2">{category.name}</h3>
                  <p className="text-3xl font-bold text-kenyan-red">{category.count}+</p>
                  <p className="text-gray-600 text-sm">Annual Events</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-kenyan-red/10 text-kenyan-red border-kenyan-red">
              Don't Miss Out
            </Badge>
            <h2 className="text-4xl font-bold text-kenyan-black mb-6 flex items-center justify-center">
              <AlertCircle className="h-10 w-10 text-kenyan-red mr-4" />
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendars for these transformative opportunities that will accelerate your career journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-2 border-kenyan-red/20 hover:border-kenyan-red hover:shadow-2xl transition-all duration-500 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-kenyan-red hover:bg-kenyan-red/80 text-white font-semibold">
                      {event.category}
                    </Badge>
                    <Badge variant="outline" className="border-kenyan-red text-kenyan-red">
                      Upcoming
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-kenyan-black group-hover:text-kenyan-red transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-kenyan-green" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-3 text-kenyan-green" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-3 text-kenyan-green" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-3 text-kenyan-green" />
                      <span>Expected: {event.expectedAttendees} attendees</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-kenyan-black mb-3">Featured Speakers:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.speakers.map((speaker, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {speaker}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Card className="bg-kenyan-green/5 border-kenyan-green/20">
                    <CardContent className="p-4">
                      <p className="text-sm font-medium text-kenyan-black">
                        <strong>Registration:</strong> {event.registration}
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-kenyan-green/10 text-kenyan-green border-kenyan-green">
              Join Anytime
            </Badge>
            <h2 className="text-4xl font-bold text-kenyan-black mb-6 flex items-center justify-center">
              <Clock className="h-10 w-10 text-kenyan-green mr-4" />
              Ongoing Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous learning opportunities that you can join throughout the year
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {ongoingEvents.map((event) => (
              <Card key={event.id} className="border-2 border-kenyan-green/20 hover:border-kenyan-green hover:shadow-2xl transition-all duration-500">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-kenyan-green hover:bg-kenyan-green/80 text-white">
                      {event.category}
                    </Badge>
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-kenyan-black">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-kenyan-red" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-3 text-kenyan-red" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-3 text-kenyan-red" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-3 text-kenyan-red" />
                      <span>Current participants: {event.participants}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-kenyan-black mb-3">Program Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {event.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-kenyan-green mr-2" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-kenyan-black/10 text-kenyan-black border-kenyan-black">
              Proven Success
            </Badge>
            <h2 className="text-4xl font-bold text-kenyan-black mb-6 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-kenyan-black mr-4" />
              Past Event Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating our successful events and their measurable impact on student career development
            </p>
          </div>

          <div className="space-y-10">
            {pastEvents.map((event) => (
              <Card key={event.id} className="border-2 border-gray-200 hover:border-kenyan-black hover:shadow-xl transition-all duration-500">
                <CardContent className="p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-kenyan-black text-white">{event.category}</Badge>
                        <Badge variant="secondary" className="text-gray-600">Completed</Badge>
                      </div>
                      <h3 className="text-3xl font-bold text-kenyan-black mb-4">{event.title}</h3>
                      <div className="grid grid-cols-2 gap-4 mb-6 text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 mr-2 text-kenyan-black" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-2 text-kenyan-black" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-kenyan-black" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-5 w-5 mr-2 text-kenyan-black" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>
                      
                      <Card className="bg-kenyan-red/5 border-kenyan-red/20">
                        <CardContent className="p-4">
                          <h4 className="font-bold text-kenyan-black mb-2">Impact Achieved:</h4>
                          <p className="text-kenyan-red font-semibold">{event.impact}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-kenyan-black mb-4">Event Highlights:</h4>
                      <div className="space-y-3">
                        {event.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <Trophy className="h-4 w-4 text-kenyan-green mr-3" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kenyan-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Join our upcoming events and be part of a community that's actively shaping the future 
            of professional excellence in Kenya and beyond.
          </p>
          <Button size="lg" className="bg-kenyan-red hover:bg-kenyan-red/80 px-8 py-4 text-lg">
            View All Events & Register
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
