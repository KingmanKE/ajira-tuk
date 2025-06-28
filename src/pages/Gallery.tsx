
import { Camera, Play, Image as ImageIcon, Trophy, Users, Calendar, Award, Download, Share, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Gallery = () => {
  const galleryStats = [
    { number: "500+", label: "Photos", icon: Camera },
    { number: "50+", label: "Videos", icon: Play },
    { number: "25+", label: "Events Covered", icon: Calendar },
    { number: "1000+", label: "Memories Captured", icon: Trophy }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Annual Career Development Summit 2024",
      type: "image",
      category: "Career Events",
      date: "March 2024",
      description: "Our biggest career development event featuring industry leaders, workshop sessions, and networking opportunities with over 500 attendees.",
      metrics: { views: "2.5K", likes: "450", shares: "89" },
      highlights: ["45+ Industry Speakers", "15 Workshop Sessions", "500+ Attendees", "85% Job Placement Rate"]
    },
    {
      id: 2,
      title: "Professional Network Mixer 2024",
      type: "image", 
      category: "Networking",
      date: "February 2024",
      description: "Exclusive networking event connecting ambitious students with successful alumni and industry professionals across various sectors.",
      metrics: { views: "1.8K", likes: "320", shares: "67" },
      highlights: ["200+ Professionals", "50+ Alumni", "12 Industry Sectors", "100+ New Connections"]
    },
    {
      id: 3,
      title: "Technical Skills Bootcamp Series",
      type: "image",
      category: "Skills Development",
      date: "January 2024",
      description: "Intensive hands-on training program covering emerging technologies, programming languages, and professional tools.",
      metrics: { views: "3.1K", likes: "580", shares: "125" },
      highlights: ["5 Technology Tracks", "Expert Instructors", "Certification Awards", "95% Completion Rate"]
    },
    {
      id: 4,
      title: "Club Meeting Highlights & Member Stories",
      type: "video",
      category: "Club Activities",
      date: "Ongoing",
      description: "Behind-the-scenes moments from our regular club meetings, member testimonials, and success stories.",
      metrics: { views: "4.2K", likes: "720", shares: "156" },
      highlights: ["Monthly Meetings", "Member Testimonials", "Success Stories", "Team Building Activities"]
    },
    {
      id: 5,
      title: "Community Impact & Service Projects",
      type: "image",
      category: "Community Service",
      date: "December 2023",
      description: "Documenting our commitment to giving back through various community service initiatives and social impact projects.",
      metrics: { views: "1.5K", likes: "280", shares: "45" },
      highlights: ["3 Community Projects", "100+ Volunteer Hours", "5 Partner Organizations", "Direct Community Impact"]
    },
    {
      id: 6,  
      title: "Industry Visit & Corporate Tours",
      type: "image",
      category: "Industry Exposure",
      date: "November 2023",
      description: "Educational visits to leading technology companies, financial institutions, and innovative startups in Nairobi.",
      metrics: { views: "2.2K", likes: "395", shares: "78" },
      highlights: ["8 Company Visits", "Industry Insights", "Executive Interactions", "Career Opportunities"]
    },
    {
      id: 7,
      title: "Leadership Training & Development Program",
      type: "video",
      category: "Leadership",
      date: "October 2023",
      description: "Comprehensive leadership development program featuring workshops, team challenges, and personal growth activities.",
      metrics: { views: "3.8K", likes: "665", shares: "134" },
      highlights: ["Leadership Workshops", "Team Challenges", "Personal Development", "Mentorship Sessions"]
    },
    {
      id: 8,
      title: "Annual Club Awards & Recognition Gala",
      type: "image",
      category: "Celebrations",
      date: "September 2023",
      description: "Prestigious annual celebration recognizing outstanding achievements, celebrating milestones, and honoring our community.",
      metrics: { views: "5.0K", likes: "890", shares: "200" },
      highlights: ["Excellence Awards", "Achievement Recognition", "Community Celebration", "Alumni Reunion"]
    },
    {
      id: 9,
      title: "Innovation Challenge & Startup Showcase",
      type: "video",
      category: "Innovation",
      date: "August 2023",
      description: "Student-led innovation challenge featuring creative solutions, startup pitches, and entrepreneurship development.",
      metrics: { views: "2.8K", likes: "485", shares: "92" },
      highlights: ["15 Student Startups", "Innovation Challenges", "Investor Panels", "Entrepreneurship Focus"]
    },
    {
      id: 10,
      title: "Alumni Success Stories & Testimonials",
      type: "video",
      category: "Alumni Network",
      date: "July 2023",
      description: "Inspiring stories from our successful alumni sharing their career journeys and the impact of club membership.",
      metrics: { views: "3.5K", likes: "620", shares: "118" },
      highlights: ["Success Stories", "Career Journeys", "Impact Testimonials", "Inspirational Content"]
    },
    {
      id: 11,
      title: "International Partnership Summit",
      type: "image",
      category: "Global Connections",
      date: "June 2023",
      description: "Historic summit establishing international partnerships and global opportunities for our members.",
      metrics: { views: "1.9K", likes: "340", shares: "65" },
      highlights: ["International Partners", "Global Opportunities", "Cultural Exchange", "Partnership Agreements"]
    },
    {
      id: 12,
      title: "Skills Certification Award Ceremony",
      type: "image",
      category: "Achievements",
      date: "May 2023",
      description: "Celebrating our members' achievements in various professional certification programs and skill development initiatives.",
      metrics: { views: "2.4K", likes: "425", shares: "87" },
      highlights: ["Professional Certifications", "Skill Recognition", "Achievement Celebration", "Personal Growth"]
    }
  ];

  const categories = [
    { name: "All", count: galleryItems.length, active: true },
    { name: "Career Events", count: 3, active: false },
    { name: "Skills Development", count: 2, active: false },
    { name: "Networking", count: 2, active: false },
    { name: "Innovation", count: 1, active: false },
    { name: "Community Service", count: 1, active: false }
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
        <div className="absolute inset-0 bg-gradient-to-r from-kenyan-red/80 via-kenyan-black/70 to-kenyan-green/80"></div>
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white animate-fade-in">
              Visual Stories of Excellence
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
              Our Gallery
            </h1>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto animate-fade-in leading-relaxed">
              Explore our comprehensive visual portfolio showcasing transformative events, 
              inspiring achievements, and the vibrant community that defines TUK AJIRA CLUB's impact.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kenyan-black mb-4">Our Visual Impact</h2>
            <p className="text-lg text-gray-600">Documenting excellence through compelling visual storytelling</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {galleryStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-kenyan-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-kenyan-red mb-2">{stat.number}</div>
                  <div className="text-kenyan-black font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-kenyan-black mb-6">Explore by Category</h2>
            <p className="text-xl text-gray-600">Filter through our diverse collection of events and activities</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                size="lg"
                className={`px-6 py-3 ${category.active 
                  ? 'bg-kenyan-red hover:bg-kenyan-red/80 text-white' 
                  : 'border-kenyan-red text-kenyan-red hover:bg-kenyan-red hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-kenyan-green/10 text-kenyan-green border-kenyan-green">
              Comprehensive Portfolio
            </Badge>
            <h2 className="text-4xl font-bold text-kenyan-black mb-6">
              Activities & Events Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A comprehensive visual journey through our club's impactful events, transformative workshops, 
              community initiatives, and the remarkable achievements of our members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-kenyan-green/30 overflow-hidden">
                <div className="relative">
                  <div className="relative aspect-video bg-gradient-to-br from-kenyan-red/10 to-kenyan-green/10 flex items-center justify-center overflow-hidden">
                    {item.type === 'image' ? (
                      <ImageIcon className="h-20 w-20 text-kenyan-green/50 group-hover:scale-125 transition-transform duration-500" />
                    ) : (
                      <Play className="h-20 w-20 text-kenyan-red/50 group-hover:scale-125 transition-transform duration-500" />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500"></div>
                    
                    {/* Type and Category Badges */}
                    <div className="absolute top-3 left-3">
                      <Badge className={`${item.type === 'image' ? 'bg-kenyan-green' : 'bg-kenyan-red'} text-white text-xs`}>
                        {item.type === 'image' ? (
                          <><Camera className="h-3 w-3 mr-1" /> PHOTOS</>
                        ) : (
                          <><Play className="h-3 w-3 mr-1" /> VIDEO</>
                        )}
                      </Badge>
                    </div>
                    
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-white/90 text-kenyan-black text-xs">
                        {item.category}
                      </Badge>
                    </div>

                    {/* Interaction Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-3">
                        <Button size="sm" className="bg-white/90 text-kenyan-black hover:bg-white">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" className="bg-white/90 text-kenyan-black hover:bg-white">
                          <Share className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Engagement Metrics */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/70 rounded-lg p-2 flex justify-between text-white text-xs">
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {item.metrics.views}
                      </span>
                      <span className="flex items-center">
                        <Trophy className="h-3 w-3 mr-1" />
                        {item.metrics.likes}
                      </span>
                      <span className="flex items-center">
                        <Share className="h-3 w-3 mr-1" />
                        {item.metrics.shares}
                      </span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-kenyan-black/10 text-kenyan-black text-xs">
                      {item.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-kenyan-black group-hover:text-kenyan-red transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-kenyan-black mb-2 text-sm">Event Highlights:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {item.highlights.slice(0, 4).map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-600">
                            <Award className="h-3 w-3 text-kenyan-green mr-1 flex-shrink-0" />
                            <span className="truncate">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <Button variant="outline" size="sm" className="text-kenyan-green border-kenyan-green hover:bg-kenyan-green hover:text-white">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" className="bg-kenyan-red hover:bg-kenyan-red/80 text-white">
                        View Gallery
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-16">
            <Card className="border-2 border-dashed border-kenyan-green/30 bg-kenyan-green/5">
              <CardContent className="p-12">
                <Camera className="h-16 w-16 text-kenyan-green mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-kenyan-black mb-4">
                  More Visual Stories Coming Soon!
                </h3>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  We're constantly updating our gallery with fresh photos and videos from our latest events, 
                  workshops, and community activities. Check back regularly to see our newest additions and 
                  stay connected with our vibrant community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-kenyan-green hover:bg-kenyan-green/80 text-white px-6 py-3">
                    <Camera className="h-4 w-4 mr-2" />
                    View All Photos
                  </Button>
                  <Button variant="outline" className="border-kenyan-red text-kenyan-red hover:bg-kenyan-red hover:text-white px-6 py-3">
                    <Play className="h-4 w-4 mr-2" />
                    Watch All Videos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upload & Contribution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-kenyan-black mb-6">
            Share Your Memories
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Have great photos or videos from our events? We'd love to feature them in our gallery! 
            Share your memories and help us document our club's amazing journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-kenyan-red hover:bg-kenyan-red/80 text-white px-8 py-4 text-lg">
              <Camera className="h-5 w-5 mr-3" />
              Upload Photos
            </Button>
            <Button variant="outline" className="border-kenyan-green text-kenyan-green hover:bg-kenyan-green hover:text-white px-8 py-4 text-lg">
              <Play className="h-5 w-5 mr-3" />
              Submit Videos
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
