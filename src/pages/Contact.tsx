
import { Mail, Phone, MapPin, Clock, Send, Users, Calendar, MessageSquare, Globe, Building2, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/Layout';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Communication",
      primary: "ajiratuk2022@gmail.com",
      secondary: "president@tukajiraclub.ac.ke",
      description: "Reach out via email for general inquiries, partnership opportunities, or detailed discussions about club activities."
    },
    {
      icon: Phone,
      title: "Direct Phone Lines",
      primary: "+254 700 123 456",
      secondary: "+254 733 654 321",
      description: "Call us during business hours for immediate assistance, urgent matters, or to schedule meetings with our leadership team."
    },
    {
      icon: MapPin,
      title: "Physical Location",
      primary: "Technical University of Kenya",
      secondary: "Haile Selassie Avenue, Nairobi",
      description: "Visit our offices on campus for face-to-face meetings, document submissions, or to attend our regular office hours."
    },
    {
      icon: Clock,
      title: "Operating Hours",
      primary: "Monday - Friday: 8:00 AM - 5:00 PM",
      secondary: "Saturday: 9:00 AM - 1:00 PM",
      description: "Our team is available during these hours for consultations, meetings, and to provide comprehensive support to students."
    }
  ];

  const departments = [
    {
      name: "Membership & Registration",
      email: "membership@tukajiraclub.ac.ke",
      phone: "+254 700 111 222",
      description: "New member registration, membership inquiries, and student onboarding processes"
    },
    {
      name: "Events & Programs",
      email: "events@tukajiraclub.ac.ke", 
      phone: "+254 700 333 444",
      description: "Event registrations, workshop inquiries, and program-related questions"
    },
    {
      name: "Career Services",
      email: "careers@tukajiraclub.ac.ke",
      phone: "+254 700 555 666",
      description: "Job placement assistance, career counseling, and professional development support"
    },
    {
      name: "Corporate Partnerships",
      email: "partnerships@tukajiraclub.ac.ke",
      phone: "+254 700 777 888",
      description: "Corporate collaborations, sponsorship opportunities, and industry partnership inquiries"
    }
  ];

  const socialMedia = [
    { platform: "LinkedIn", handle: "@TUKAjiraClub", followers: "15K+" },
    { platform: "Twitter", handle: "@TUK_AjiraClub", followers: "8K+" },
    { platform: "Instagram", handle: "@tukajiraclub", followers: "12K+" },
    { platform: "Facebook", handle: "TUK Ajira Club Official", followers: "20K+" }
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
        <div className="absolute inset-0 bg-gradient-to-r from-kenyan-green/80 via-kenyan-red/70 to-kenyan-black/80"></div>
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white animate-fade-in">
              We're Here to Help
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
              Connect With Us
            </h1>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in leading-relaxed">
              Ready to transform your career journey? Get in touch with TUK AJIRA CLUB and discover 
              how we can help you achieve your professional aspirations and unlock new opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-kenyan-red mx-auto mb-4" />
                <div className="text-3xl font-bold text-kenyan-black">500+</div>
                <p className="text-gray-600">Active Members</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <MessageSquare className="h-12 w-12 text-kenyan-green mx-auto mb-4" />
                <div className="text-3xl font-bold text-kenyan-black">24hrs</div>
                <p className="text-gray-600">Response Time</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-kenyan-black mx-auto mb-4" />
                <div className="text-3xl font-bold text-kenyan-black">6 Days</div>
                <p className="text-gray-600">Office Hours</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-kenyan-red mx-auto mb-4" />
                <div className="text-3xl font-bold text-kenyan-black">24/7</div>
                <p className="text-gray-600">Online Support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Methods */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-kenyan-green/10 text-kenyan-green border-kenyan-green">
              Multiple Ways to Reach Us
            </Badge>
            <h2 className="text-4xl font-bold text-kenyan-black mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you. Our dedicated team is ready to assist 
              with all your inquiries and provide comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-2 hover:border-kenyan-green transition-all duration-300 hover:shadow-xl group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-kenyan-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-kenyan-black">{method.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <p className="text-lg font-semibold text-kenyan-red">{method.primary}</p>
                    <p className="text-gray-700">{method.secondary}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kenyan-black mb-6">Specialized Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect directly with our specialized teams for faster, more targeted assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="border-l-4 border-kenyan-red hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-kenyan-black">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-kenyan-green mr-3" />
                      <span className="text-kenyan-red font-medium">{dept.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-kenyan-green mr-3" />
                      <span className="text-gray-700">{dept.phone}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-kenyan-green/20 shadow-2xl">
            <CardHeader className="text-center bg-kenyan-green/5">
              <CardTitle className="text-3xl text-kenyan-black mb-4">Send us a Message</CardTitle>
              <p className="text-gray-600 text-lg">
                Fill out the form below and we'll get back to you within 24 hours. All fields marked with * are required.
              </p>
            </CardHeader>
            <CardContent className="p-10">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-kenyan-black mb-3">
                      First Name *
                    </label>
                    <Input 
                      placeholder="Enter your first name" 
                      className="border-gray-300 focus:border-kenyan-green h-12 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-kenyan-black mb-3">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Enter your last name" 
                      className="border-gray-300 focus:border-kenyan-green h-12 text-lg"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-kenyan-black mb-3">
                      Email Address *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="border-gray-300 focus:border-kenyan-green h-12 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-kenyan-black mb-3">
                      Phone Number
                    </label>
                    <Input 
                      placeholder="+254 700 000 000" 
                      className="border-gray-300 focus:border-kenyan-green h-12 text-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-kenyan-black mb-3">
                      Student Status
                    </label>
                    <Select>
                      <SelectTrigger className="border-gray-300 focus:border-kenyan-green h-12 text-lg">
                        <SelectValue placeholder="Select your status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current">Current TUK Student</SelectItem>
                        <SelectItem value="alumni">TUK Alumni</SelectItem>
                        <SelectItem value="prospective">Prospective Student</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-kenyan-black mb-3">
                      Inquiry Type *
                    </label>
                    <Select>
                      <SelectTrigger className="border-gray-300 focus:border-kenyan-green h-12 text-lg">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="membership">Membership Inquiry</SelectItem>
                        <SelectItem value="events">Event Information</SelectItem>
                        <SelectItem value="career">Career Services</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="general">General Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-kenyan-black mb-3">
                    Subject *
                  </label>
                  <Input 
                    placeholder="Brief description of your inquiry" 
                    className="border-gray-300 focus:border-kenyan-green h-12 text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-kenyan-black mb-3">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Please provide detailed information about your inquiry or question. The more details you provide, the better we can assist you." 
                    rows={6}
                    className="border-gray-300 focus:border-kenyan-green text-lg"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                  <Button className="bg-kenyan-red hover:bg-kenyan-red/80 text-white px-8 py-4 text-lg">
                    <Send className="h-5 w-5 mr-3" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Media & Online Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kenyan-black mb-4">Follow Our Journey</h2>
            <p className="text-lg text-gray-600">Stay connected and updated through our social media channels</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialMedia.map((social, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Globe className="h-10 w-10 text-kenyan-green mx-auto mb-3" />
                  <h3 className="font-semibold text-kenyan-black mb-1">{social.platform}</h3>
                  <p className="text-sm text-gray-600 mb-2">{social.handle}</p>
                  <Badge className="bg-kenyan-red/10 text-kenyan-red text-xs">
                    {social.followers}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-kenyan-black/10 text-kenyan-black border-kenyan-black">
              Visit Our Campus
            </Badge>
            <h2 className="text-4xl font-bold text-kenyan-black mb-6">
              Find Us at Technical University of Kenya
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Nairobi along Haile Selassie Avenue, our offices are easily accessible 
              by public transport and offer ample parking for visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <Card className="shadow-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-kenyan-green/10 to-kenyan-red/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-20 w-20 text-kenyan-green mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-kenyan-black mb-4">
                      Interactive Campus Map
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
                      We're working on embedding a detailed interactive map of Technical University of Kenya campus 
                      to help you locate our offices and navigate the campus easily.
                    </p>
                    <Button asChild className="bg-kenyan-green hover:bg-kenyan-green/80 px-6 py-3">
                      <a 
                        href="https://maps.google.com/?q=Technical+University+of+Kenya,+Nairobi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-kenyan-green">
                <CardHeader>
                  <CardTitle className="flex items-center text-kenyan-black">
                    <Building2 className="h-6 w-6 text-kenyan-green mr-3" />
                    Complete Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold">TUK AJIRA CLUB Offices</p>
                    <p>Technical University of Kenya</p>
                    <p>Haile Selassie Avenue</p>
                    <p>P.O Box 52428-00200</p>
                    <p>Nairobi, Kenya</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-kenyan-red">
                <CardHeader>
                  <CardTitle className="flex items-center text-kenyan-black">
                    <Award className="h-6 w-6 text-kenyan-red mr-3" />
                    Campus Landmarks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p>• Near TUK Main Auditorium</p>
                    <p>• Adjacent to Student Center</p>
                    <p>• Opposite Library Complex</p>
                    <p>• Ground Floor, Block A</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-kenyan-black/5">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-kenyan-green mx-auto mb-3" />
                  <h4 className="font-semibold text-kenyan-black mb-2">Walk-in Hours</h4>
                  <p className="text-sm text-gray-600">
                    Monday - Friday: 9:00 AM - 4:00 PM<br />
                    Saturday: 10:00 AM - 12:00 PM
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
