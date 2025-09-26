
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import ajiraLogo from '@/assets/ajira_logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-kenyan-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={ajiraLogo} 
                alt="TUK Ajira Digital Club Logo" 
                className="h-12 w-16"
              />
              <div>
                <h3 className="font-bold text-lg">TUK AJIRA CLUB</h3>
                <p className="text-sm text-gray-300">Technical University of Kenya</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering students through professional development, networking, and career opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-kenyan-red">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-kenyan-green transition-colors">About Us</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-kenyan-green transition-colors">Gallery</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-kenyan-green transition-colors">Events</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-kenyan-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-kenyan-red">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-kenyan-green" />
                <span className="text-gray-300 text-sm">Technical University of Kenya, Nairobi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-kenyan-green" />
                <span className="text-gray-300 text-sm">info@tukajiraclub.ac.ke</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-kenyan-green" />
                <span className="text-gray-300 text-sm">+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-kenyan-green" />
                <a 
                  href="https://wa.me/254725813823" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-kenyan-green transition-colors"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 TUK AJIRA CLUB. All rights reserved. | Member of NRCAC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
