import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  showButtons?: boolean;
  overlay?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  showButtons = true,
  overlay = true,
  size = 'large',
}) => {
  const sizeClasses = {
    small: 'py-16',
    medium: 'py-24',
    large: 'py-32 md:py-48',
  };

  return (
    <section
      className={`relative ${sizeClasses[size]} bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-stone-900/50 lg:hidden"></div>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-serif">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}
          {showButtons && (
            <div className="flex flex-wrap gap-4">
              <NavLink to="/services">
                <Button variant="primary" size="large">
                  Our Services
                </Button>
              </NavLink>
              <NavLink to="/contact">
                <Button
                  variant="outline"
                  size="large"
                  className="bg-white/10 backdrop-blur-sm text-white border-white"
                >
                  Contact Us
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
