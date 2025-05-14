import React from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { projects } from '../data/projects';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Transform Your Outdoor Space"
        subtitle="Creating beautiful, sustainable landscapes that bring your vision to life"
        backgroundImage="https://raw.githubusercontent.com/Kagwi/Baked-Brick-Company/refs/heads/main/Baked%20Brick10.webp"
        showButtons={true}
      />

      {/* About Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://raw.githubusercontent.com/Kagwi/Baked-Brick-Company/refs/heads/main/Landscaping.webp"
                alt="Landscaper"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">
                Welcome to Baked Brick Landscaping
              </h2>
              <p className="text-stone-600 mb-6">
                Since 2010, we've been creating exceptional outdoor spaces that combine beauty, functionality, and 
                sustainability. Our team of experienced designers and craftsmen work closely with each client to 
                bring their vision to life, from concept to completion.
              </p>
              <p className="text-stone-600 mb-6">
                We pride ourselves on our attention to detail, quality materials, and environmentally conscious 
                practices. Whether you're looking for a complete landscape overhaul or enhancements to your 
                existing outdoor space, we're here to help.
              </p>
              <NavLink to="/about">
                <Button variant="outline">Learn More About Us</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Our Services</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              We offer a comprehensive range of landscaping services to transform your outdoor space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink to="/services">
              <Button variant="primary">View All Services</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Recent Projects</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              Take a look at some of our recent landscaping transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink to="/services">
              <Button variant="primary">View More Projects</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-24 bg-cover bg-center relative" 
        style={{ backgroundImage: 'url(https://github.com/Kagwi/Baked-Brick-Company/blob/main/Baked%20Brick26.jpg?raw=true)' }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-green/90 text-lg mb-8">
              Contact us today to schedule a consultation and take the first step toward the landscape of your dreams.
            </p>
            <NavLink to="/contact">
              <Button variant="secondary" size="large">
                Get A Free Consultation
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">What Our Clients Say</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              We're proud of the relationships we build with our clients and the spaces we create together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
