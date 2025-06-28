
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-kenyan-green to-kenyan-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Get in touch with TUK AJIRA CLUB. We're here to help you on your professional journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-kenyan-black mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-kenyan-red">
                  <CardHeader>
                    <CardTitle className="flex items-center text-kenyan-black">
                      <MapPin className="h-6 w-6 text-kenyan-red mr-3" />
                      Our Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Technical University of Kenya<br />
                      Haile Selassie Avenue<br />
                      P.O Box 52428-00200<br />
                      Nairobi, Kenya
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-kenyan-green">
                  <CardHeader>
                    <CardTitle className="flex items-center text-kenyan-black">
                      <Mail className="h-6 w-6 text-kenyan-green mr-3" />
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      info@tukajiraclub.ac.ke<br />
                      president@tukajiraclub.ac.ke
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-kenyan-black">
                  <CardHeader>
                    <CardTitle className="flex items-center text-kenyan-black">
                      <Phone className="h-6 w-6 text-kenyan-black mr-3" />
                      Call Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      +254 700 000 000<br />
                      +254 733 000 000
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-kenyan-red">
                  <CardHeader>
                    <CardTitle className="flex items-center text-kenyan-black">
                      <Clock className="h-6 w-6 text-kenyan-red mr-3" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-kenyan-green/20">
                <CardHeader>
                  <CardTitle className="text-kenyan-black text-2xl">Send us a Message</CardTitle>
                  <p className="text-gray-600">We'd love to hear from you. Fill out the form below and we'll get back to you soon.</p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-kenyan-black mb-2">
                          First Name
                        </label>
                        <Input placeholder="Your first name" className="border-gray-300 focus:border-kenyan-green" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-kenyan-black mb-2">
                          Last Name
                        </label>
                        <Input placeholder="Your last name" className="border-gray-300 focus:border-kenyan-green" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-kenyan-black mb-2">
                        Email Address
                      </label>
                      <Input type="email" placeholder="your.email@example.com" className="border-gray-300 focus:border-kenyan-green" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-kenyan-black mb-2">
                        Subject
                      </label>
                      <Input placeholder="What is this about?" className="border-gray-300 focus:border-kenyan-green" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-kenyan-black mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell us more about your inquiry..." 
                        rows={5}
                        className="border-gray-300 focus:border-kenyan-green"
                      />
                    </div>
                    
                    <Button className="w-full bg-kenyan-red hover:bg-kenyan-red/80 text-white">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kenyan-black mb-4">
              Find Us on Campus
            </h2>
            <p className="text-lg text-gray-600">
              Technical University of Kenya - Haile Selassie Avenue, Nairobi
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-kenyan-green/10 to-kenyan-red/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-kenyan-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-kenyan-black mb-2">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We're working on embedding an interactive map of Technical University of Kenya campus. 
                  In the meantime, you can find us at Haile Selassie Avenue, Nairobi.
                </p>
                <div className="mt-6">
                  <Button asChild className="bg-kenyan-green hover:bg-kenyan-green/80">
                    <a 
                      href="https://maps.google.com/?q=Technical+University+of+Kenya,+Nairobi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View on Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
