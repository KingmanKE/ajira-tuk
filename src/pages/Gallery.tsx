
import { Camera, Play, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Gallery = () => {
  // Placeholder gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Career Development Workshop",
      type: "image",
      description: "Annual career development workshop with industry experts"
    },
    {
      id: 2,
      title: "Networking Event 2024",
      type: "image", 
      description: "Connecting students with alumni and industry professionals"
    },
    {
      id: 3,
      title: "Technical Skills Seminar",
      type: "image",
      description: "Hands-on training in emerging technologies"
    },
    {
      id: 4,
      title: "Club Meeting Highlights",
      type: "video",
      description: "Key moments from our monthly club meetings"
    },
    {
      id: 5,
      title: "Community Service Project",
      type: "image",
      description: "Giving back to the local community through volunteer work"
    },
    {
      id: 6,  
      title: "Industry Visit",
      type: "image",
      description: "Educational visit to leading tech companies in Nairobi"
    },
    {
      id: 7,
      title: "Leadership Training",
      type: "video",
      description: "Developing leadership skills among club members"
    },
    {
      id: 8,
      title: "Annual Club Dinner",
      type: "image",
      description: "Celebrating our achievements and milestones"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-kenyan-red to-kenyan-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Explore our club's journey through photos and videos showcasing our activities, 
              achievements, and memorable moments
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kenyan-black mb-4">
              Activities Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A visual journey through our club's events, workshops, and community activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-kenyan-green">
                <CardContent className="p-0">
                  <div className="relative aspect-square bg-gradient-to-br from-kenyan-red/10 to-kenyan-green/10 flex items-center justify-center overflow-hidden">
                    {item.type === 'image' ? (
                      <ImageIcon className="h-16 w-16 text-kenyan-green/50 group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <Play className="h-16 w-16 text-kenyan-red/50 group-hover:scale-110 transition-transform duration-300" />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute top-2 right-2">
                      <div className={`w-6 h-6 rounded-full ${item.type === 'image' ? 'bg-kenyan-green' : 'bg-kenyan-red'} flex items-center justify-center`}>
                        {item.type === 'image' ? (
                          <Camera className="h-3 w-3 text-white" />
                        ) : (
                          <Play className="h-3 w-3 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-kenyan-black mb-2 group-hover:text-kenyan-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-kenyan-black/5 rounded-lg p-8">
              <Camera className="h-12 w-12 text-kenyan-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-kenyan-black mb-2">
                More Photos Coming Soon!
              </h3>
              <p className="text-gray-600">
                We're constantly updating our gallery with new photos and videos from our latest events and activities. 
                Check back regularly to see the latest additions to our portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
