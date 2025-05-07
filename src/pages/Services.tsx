import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Button from '../components/Button';
import { services } from '../data/services';
import { projects } from '../data/projects';

const Services: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the service section if there is a hash in the URL
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the # character
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <Hero
        title="Our Services"
        subtitle="Comprehensive landscaping solutions for every outdoor space"
        backgroundImage="https://raw.githubusercontent.com/Kagwi/Baked-Brick-Company/refs/heads/main/Baked%20Brick10.webp"
        showButtons={false}
        size="medium"
      />

      {/* Services Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">
              Comprehensive Landscaping Solutions
            </h2>
            <p className="text-stone-600">
              At Baked Brick Landscaping, we offer a full range of services to transform your outdoor space. 
              From initial design to ongoing maintenance, our team provides expert guidance and craftsmanship 
              every step of the way.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="grid md:grid-cols-2 gap-12 items-center"
                style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
              >
                <div className={index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className={index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}>
                  <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 mb-6">
                    {service.longDescription}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-stone-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <NavLink to="/contact">
                    <Button variant="primary">
                      Request a Consultation
                    </Button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Our Recent Projects</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              Take a look at some of our recent work showcasing our range of services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  <p className="text-white/90 text-sm mb-2">{project.category}</p>
                  <p className="text-white/80 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your landscape needs and schedule a consultation.
          </p>
          <NavLink to="/contact">
            <Button variant="secondary" size="large">
              Get A Free Consultation
            </Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Services;
