import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { projects } from '../data/projects';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/145685/pexels-photo-145685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1771335/pexels-photo-1771335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-lime-900 animate-gradient-x"></div>
        
        {/* Image Carousel */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Landscaping ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ))}
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
              Premium Landscaping Company
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animate-delay-300">
              Creating beautiful, sustainable landscapes that bring your vision to life
            </p>
            <p className="text-lg mb-8 animate-fade-in-up animate-delay-500">
              Call us today: 0722381743
            </p>
            <div className="animate-fade-in-up animate-delay-700">
              <NavLink to="/contact" className="inline-block mr-4">
                <Button variant="secondary" size="large">
                  Get Free Consultation
                </Button>
              </NavLink>
              <NavLink to="/services">
                <Button variant="outline" size="large" className="text-white border-white hover:bg-white hover:text-stone-800">
                  Our Services
                </Button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative group">
                <img
                  src="https://images.pexels.com/photos/8985458/pexels-photo-8985458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional landscaper at work"
                  className="rounded-lg shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-500 rounded-full opacity-80 animate-pulse-slow"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-lime-400 rounded-full opacity-60 animate-bounce-slow"></div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-serif font-bold text-stone-800 mb-6">
                Welcome to Baked Brick Landscaping
              </h2>
              <div className="space-y-4 text-stone-600 mb-8">
                <p className="text-lg leading-relaxed">
                  Since 2010, we've been creating exceptional outdoor spaces that combine beauty, 
                  functionality, and sustainability. Our team of experienced designers and craftsmen 
                  work closely with each client to bring their vision to life.
                </p>
                <p className="text-lg leading-relaxed">
                  We pride ourselves on our attention to detail, quality materials, and environmentally 
                  conscious practices. Every project is a unique masterpiece tailored to your lifestyle.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md animate-fade-in">
                  <div className="text-2xl font-bold text-emerald-600">14+</div>
                  <div className="text-stone-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md animate-fade-in animate-delay-200">
                  <div className="text-2xl font-bold text-emerald-600">500+</div>
                  <div className="text-stone-600">Projects Completed</div>
                </div>
              </div>
              <NavLink to="/about">
                <Button variant="outline" className="group">
                  Learn More About Us
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">Our Services</h2>
            <p className="text-stone-600 max-w-3xl mx-auto text-lg">
              We offer a comprehensive range of landscaping services to transform your outdoor space 
              into a beautiful, functional oasis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={service.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up">
            <NavLink to="/services">
              <Button variant="primary" size="large">
                View All Services
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - New Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">Why Choose Us</h2>
            <p className="text-stone-600 max-w-3xl mx-auto text-lg">
              Discover what sets us apart in creating your perfect outdoor space
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌿",
                title: "Eco-Friendly",
                description: "Sustainable practices and native plants for an environmentally conscious landscape"
              },
              {
                icon: "⚡",
                title: "Fast & Reliable",
                description: "Timely project completion without compromising on quality"
              },
              {
                icon: "🎨",
                title: "Creative Design",
                description: "Unique, custom designs tailored to your vision and lifestyle"
              },
              {
                icon: "🔧",
                title: "Full Service",
                description: "From design to maintenance, we handle every aspect of your project"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">Recent Projects</h2>
            <p className="text-stone-600 max-w-3xl mx-auto text-lg">
              Take a look at some of our recent landscaping transformations that brought dreams to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm mb-4">{project.category}</p>
                  <Button variant="outline" size="small" className="border-white text-white hover:bg-white hover:text-stone-800 w-fit">
                    View Project
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up">
            <NavLink to="/projects">
              <Button variant="primary" size="large">
                View More Projects
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 bg-cover bg-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-zoom-in-out"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
          }}
        >
          <div className="absolute inset-0 bg-stone-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              Contact us today to schedule a consultation and take the first step toward 
              the landscape of your dreams. Let's create something beautiful together.
            </p>
            <NavLink to="/contact">
              <Button variant="secondary" size="large" className="animate-pulse-slow">
                Get A Free Consultation
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">What Our Clients Say</h2>
            <p className="text-stone-600 max-w-3xl mx-auto text-lg">
              We're proud of the relationships we build with our clients and the beautiful spaces we create together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
