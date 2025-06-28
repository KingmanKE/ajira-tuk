
import { Calendar, Clock, MapPin, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Events = () => {
  const pastEvents = [
    {
      id: 1,
      title: "Annual Career Fair 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "TUK Main Auditorium",
      attendees: 250,
      description: "Major career fair connecting students with top employers in Kenya"
    },
    {
      id: 2,
      title: "Leadership Workshop Series",
      date: "February 20-22, 2024", 
      time: "2:00 PM - 6:00 PM",
      location: "Conference Room A",
      attendees: 80,
      description: "3-day intensive leadership development program"
    }
  ];

  const ongoingEvents = [
    {
      id: 1,
      title: "Mentorship Program 2024",
      date: "Ongoing",
      time: "Various Times",
      location: "Multiple Venues",
      participants: 120,
      description: "Year-long mentorship program pairing students with industry professionals"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit",
      date: "July 10, 2024",
      time: "10:00 AM - 4:00 PM", 
      location: "TUK Innovation Hub",
      expectedAttendees: 300,
      description: "Annual summit showcasing the latest in technology and innovation"
    },
    {
      id: 2,
      title: "Professional Network Mixer",
      date: "July 25, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Nairobi Serena Hotel",
      expectedAttendees: 150,
      description: "Evening networking event with industry leaders and alumni"
    },
    {
      id: 3,
      title: "Skills Development Workshop",
      date: "August 5, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "Computer Lab 3",
      expectedAttendees: 60,
      description: "Hands-on workshop covering in-demand technical skills"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-kenyan-black to-kenyan-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our Events
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Stay updated with our past achievements, current programs, and upcoming opportunities 
              for professional growth and networking
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kenyan-black mb-4 flex items-center justify-center">
              <AlertCircle className="h-8 w-8 text-kenyan-red mr-3" />
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">Don't miss out on these exciting opportunities!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-2 border-kenyan-red/20 hover:border-kenyan-red hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-kenyan-black">{event.title}</CardTitle>
                    <Badge className="bg-kenyan-red hover:bg-kenyan-red/80">Upcoming</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-kenyan-green" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-kenyan-green" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-kenyan-green" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-kenyan-green" />
                      <span>Expected: {event.expectedAttendees} attendees</span>
                    </div>
                    <p className="text-gray-700 mt-4">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kenyan-black mb-4 flex items-center justify-center">
              <Clock className="h-8 w-8 text-kenyan-green mr-3" />
              Ongoing Programs
            </h2>
            <p className="text-lg text-gray-600">Current programs you can still join</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ongoingEvents.map((event) => (
              <Card key={event.id} className="border-2 border-kenyan-green/20 hover:border-kenyan-green hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-kenyan-black">{event.title}</CardTitle>
                    <Badge className="bg-kenyan-green hover:bg-kenyan-green/80">Ongoing</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-kenyan-red" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-kenyan-red" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-kenyan-red" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-kenyan-red" />
                      <span>Current participants: {event.participants}</span>
                    </div>
                    <p className="text-gray-700 mt-4">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kenyan-black mb-4 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-kenyan-black mr-3" />
              Past Events
            </h2>
            <p className="text-lg text-gray-600">Highlights from our successful events</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="border-2 border-gray-200 hover:border-kenyan-black hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-kenyan-black">{event.title}</CardTitle>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-kenyan-black" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-kenyan-black" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-kenyan-black" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-kenyan-black" />
                      <span>{event.attendees} attendees</span>
                    </div>
                    <p className="text-gray-700 mt-4">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
