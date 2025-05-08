import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-stone-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-white">
              Baked<span className="text-amber-500">Brick</span>
            </h3>
            <p className="mb-4">
              Transforming outdoor spaces into beautiful, sustainable landscapes since 2017.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/share/19NF3EBsHZ/" className="hover:text-emerald-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/bakedbrick.co.ke?igsh=eXFtYTZraW5leXIx" className="hover:text-emerald-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@bakedbrick.co.ke?_t=ZM-8wBbdlZ5k0N&_r=1" className="hover:text-emerald-400 transition-colors" aria-label="TikTok">
                <TikTok size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Our Services</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'Landscape Design', path: '/services' },
                { name: 'Hardscaping', path: '/services' },
                { name: 'Garden Maintenance', path: '/services' },
                { name: 'Irrigation Systems', path: '/services' },
                { name: 'Landscaping Products', path: '/services' },
              ].map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:0722381743" className="flex items-center hover:text-emerald-400 transition-colors">
                <Phone size={18} className="mr-2" />
                <span>0722381743</span>
              </a>
              <a href="mailto:info@bakedbrick.com" className="flex items-center hover:text-emerald-400 transition-colors">
                <Mail size={18} className="mr-2" />
                <span>support@bakedbrick.co.ke</span>
              </a>
              <a href="https://maps.google.com" className="flex items-center hover:text-emerald-400 transition-colors">
                <MapPin size={18} className="mr-2" />
                <span>Available for Consultations Countrywide</span>
              </a>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span> Mon - Sat: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Baked Brick Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
