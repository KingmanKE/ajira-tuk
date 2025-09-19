
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-kenyan-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-kenyan-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">TAC</span>
              </div>
              <div className="text-white">
                <h1 className="font-bold text-lg">TUK AJIRA CLUB</h1>
                <p className="text-xs text-gray-300">Technical University of Kenya</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-kenyan-red text-white'
                    : 'text-gray-300 hover:bg-kenyan-green hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-2 bg-kenyan-green text-white rounded-md hover:bg-kenyan-green/80 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-kenyan-red"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-kenyan-black border-t border-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-kenyan-red text-white'
                      : 'text-gray-300 hover:bg-kenyan-green hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 px-3 py-2 bg-kenyan-green text-white rounded-md hover:bg-kenyan-green/80 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-base font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
