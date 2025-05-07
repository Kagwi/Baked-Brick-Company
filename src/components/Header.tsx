import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <img 
              src="https://github.com/Kagwi/Baked-Brick-Company/blob/main/Baked%20Brick%20Logo.jpeg.jpg?raw=true" 
              alt="Baked Brick Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-2xl font-serif font-bold text-emerald-800">
              Baked<span className="text-amber-700">Brick</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-emerald-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-emerald-600 ${
                    isActive 
                      ? 'text-emerald-700 after:w-full after:bg-emerald-600' 
                      : 'text-stone-800'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-stone-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors hover:text-emerald-600 ${
                      isActive ? 'text-emerald-700' : 'text-stone-800'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
