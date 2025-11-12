import React, { useState, useEffect, useRef } from 'react';
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
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const heroImages = [
    "https://images.pexels.com/photos/145685/pexels-photo-145685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://raw.githubusercontent.com/Kagwi/Baked-Brick-Company/refs/heads/main/Baked%20bunny-mellon-virginia-home-side-gardens-657382bf3fcae.avif",
    "https://github.com/Kagwi/Baked-Brick-Company/blob/main/Baked%20Flower%20Garden.jpg?raw=true",
    "https://github.com/Kagwi/Baked-Brick-Company/blob/main/Baked.PNG?raw=true"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen overflow-hidden pt-16 md:pt-0">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-lime-900 animate-pulse"></div>
        
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
              alt={`Professional Landscaping Service ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ))}
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen bg-black/40 px-4">
          <div className="text-center text-white w-full max-w-4xl mt-16 md:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 md:mb-6 leading-tight animate-fade-in-up">
              Premium Landscaping Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-8 leading-relaxed px-2 animate-fade-in-up animation-delay-200">
              Transforming outdoor spaces with beautiful lawns, gardens, and hardscapes
            </p>
            <p className="text-base sm:text-lg mb-6 md:mb-8 font-semibold animate-fade-in-up animation-delay-400">
              Call us today: 0722381743
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
              <NavLink to="/contact" className="w-full sm:w-auto">
                <Button variant="secondary" size="large" className="w-full sm:w-auto">
                  Get Free Consultation
                </Button>
              </NavLink>
              <NavLink to="/services" className="w-full sm:w-auto">
                <Button variant="outline" size="large" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-stone-800">
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
      <section 
        ref={(el) => addToRefs(el, 0)}
        className="py-16 md:py-20 bg-stone-50 overflow-hidden section-entrance"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative group">
                <img
                  src="https://github.com/Kagwi/Baked-Brick-Company/blob/main/Baked.PNG?raw=true"
                  alt="Professional landscaper designing garden landscape"
                  className="rounded-lg shadow-2xl w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-emerald-500 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 md:w-16 md:h-16 bg-lime-400 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
            <div className="mt-8 md:mt-0 animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4 md:mb-6 title-entrance">
                Welcome to Baked Brick Landscaping
              </h2>
              <div className="space-y-4 text-stone-600 mb-6 md:mb-8">
                <p className="text-base md:text-lg leading-relaxed subtitle-entrance">
                  Since 2010, we've been creating exceptional outdoor spaces with lush lawns, 
                  vibrant flower gardens, and beautiful hardscapes. Our team of experienced 
                  designers and craftsmen work closely with each client to bring their outdoor vision to life.
                </p>
                <p className="text-base md:text-lg leading-relaxed subtitle-entrance animation-delay-200">
                  We specialize in lawn care, garden design, irrigation systems, and hardscape 
                  installation using quality materials and environmentally conscious practices.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6 md:mb-8">
                <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-md animate-scale-in animation-delay-400">
                  <div className="text-xl md:text-2xl font-bold text-emerald-600">14+</div>
                  <div className="text-sm md:text-base text-stone-600">Years Experience</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-md animate-scale-in animation-delay-600">
                  <div className="text-xl md:text-2xl font-bold text-emerald-600">500+</div>
                  <div className="text-sm md:text-base text-stone-600">Projects Completed</div>
                </div>
              </div>
              <NavLink to="/about">
                <Button variant="outline" className="group w-full md:w-auto animate-fade-in-up animation-delay-800">
                  Learn More About Us
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={(el) => addToRefs(el, 1)}
        className="py-16 md:py-20 bg-white section-entrance"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4 title-entrance">Our Landscaping Services</h2>
            <p className="text-stone-600 max-w-3xl mx-auto text-base md:text-lg subtitle-entrance">
              Comprehensive landscaping services including lawn care, garden design, hardscaping, and maintenance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.slice(0, 3).map((service, index) => (
              <div key={service.id} className="animate-stagger-item" style={{ animationDelay: `${index * 200}ms` }}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16 animate-fade-in-up animation-delay-600">
            <NavLink to="/services">
              <Button variant="primary" size="large" className="w-full md:w-auto">
                View All Services
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Updated with consistent green/white theme and equal height tiles */}
      <section 
        ref={(el) => addToRefs(el, 2)}
        className="py-16 md:py-20 bg-gradient-to-br from-emerald-900 via-green-900 to-emerald-800 relative overflow-hidden section-entrance"
      >
        {/* Background decorative elements */}
        <div 
          className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-emerald-700 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          style={{
            animation: 'blob 7s infinite'
          }}
        ></div>
        <div 
          className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-green-700 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          style={{
            animation: 'blob 7s infinite 2s'
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 md:w-72 md:h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          style={{
            animation: 'blob 7s infinite 4s'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-3 md:mb-4 backdrop-blur-sm subtitle-entrance">
                🌟 Why Choose Our Landscaping
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 title-entrance">
              Why Choose <span className="text-lime-300">Baked Brick</span>
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto text-base md:text-lg subtitle-entrance">
              Professional landscaping services focused on lawns, gardens, hardscapes, and sustainable outdoor solutions
            </p>
          </div>

          {/* Updated grid with consistent green/white theme and equal height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "🌱",
                title: "Lawn Care Experts",
                description: "Professional lawn maintenance, seeding, sod installation, and turf management for lush green spaces.",
                delay: 0
              },
              {
                icon: "🌸",
                title: "Garden Design",
                description: "Beautiful flower beds, perennial gardens, and custom planting designs that bloom year-round.",
                delay: 200
              },
              {
                icon: "🪨",
                title: "Hardscape Specialists",
                description: "Patios, walkways, retaining walls, and stonework that complement your landscape design.",
                delay: 400
              },
              {
                icon: "💧",
                title: "Irrigation & Drainage",
                description: "Efficient watering systems and proper drainage solutions to keep your landscape healthy.",
                delay: 600
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative animate-stagger-item h-full flex"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                {/* Professional white card with green accents - equal height */}
                <div className="relative bg-white rounded-xl md:rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 overflow-hidden flex flex-col w-full">
                  {/* Green accent bar at top */}
                  <div className="h-2 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                  
                  <div className="p-6 md:p-8 flex flex-col items-center text-center flex-grow">
                    {/* Professional icon container */}
                    <div className="relative mb-6">
                      <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-md transition-all duration-500 group-hover:shadow-lg group-hover:scale-110 border border-emerald-100">
                        <span className="text-3xl md:text-4xl transition-transform duration-500 group-hover:scale-110">
                          {feature.icon}
                        </span>
                      </div>
                    </div>

                    {/* Title with professional styling */}
                    <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 transition-all duration-500 group-hover:text-emerald-700">
                      {feature.title}
                    </h3>

                    {/* Description - flex-grow for equal height */}
                    <p className="text-stone-600 text-base leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 md:mt-16 animate-fade-in-up animation-delay-800">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NavLink to="/about" className="w-full sm:w-auto">
                <Button variant="primary" size="large" className="w-full sm:w-auto group">
                  <span className="flex items-center justify-center">
                    Learn More About Our Process
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Button>
              </NavLink>
              <NavLink to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="large" className="w-full sm:w-auto group border-white text-white hover:bg-white hover:text-emerald-900">
                  <span className="flex items-center justify-center">
                    Get Free Estimate
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Button>
              </NavLink>
            </div>
          </div>

          {/* Stats counter */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-fade-in-up animation-delay-1000">
            {[
              { number: "14+", label: "Years Experience" },
              { number: "500+", label: "Lawns Transformed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Maintenance Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-lime-300 mb-1 md:mb-2 animate-count-up">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Accurate Landscaping Images */}
      <section 
        ref={(el) => addToRefs(el, 3)}
        className="py-16 md:py-20 bg-stone-50 section-entrance"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4 title-entrance">Our Landscaping Projects</h2>
            <p className="text-stone-600 max-w-3xl mx-auto text-base md:text-lg subtitle-entrance">
              See how we've transformed ordinary yards into beautiful outdoor living spaces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                id: 1,
                title: "Residential Lawn Transformation",
                category: "Lawn Care & Maintenance",
                image: "https://raw.githubusercontent.com/Kagwi/Baked-Brick-Company/refs/heads/main/Baked%20Brick%20Lawn.jpeg"
              },
              {
                id: 2,
                title: "Flower Garden Installation",
                category: "Garden Design",
                image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                id: 3,
                title: "Stone Patio & Pathway",
                category: "Hardscape Installation",
                image: "https://raw.githubusercontent.com/Kagwi/Baked-Brick-Company/refs/heads/main/Baked%20Brick%20Patio.jpeg"
              },
              {
                id: 4,
                title: "Modern Garden Landscape",
                category: "Complete Garden Design",
                image: "https://raw.githubusercontent.com/Kagwi/Baked-Brick-Company/refs/heads/main/Baked%20Brick%20Garden%20Landscape.jpeg"
              },
              {
                id: 5,
                title: "Outdoor Entertainment Area",
                category: "Patio & Deck Design",
                image: "https://raw.githubusercontent.com/Kagwi/Baked-Brick-Company/refs/heads/main/Baked%20Brick%20Entertainment%20Area.jpeg"
              },
              {
                id: 6,
                title: "Garden Water Feature",
                category: "Ponds & Water Gardens",
                image: "https://raw.githubusercontent.com/Kagwi/Baked-Brick-Company/refs/heads/main/Garden%20Water%20Features.jpeg"
              }
            ].map((project, index) => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-lg md:rounded-xl shadow-lg animate-stagger-item"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-6">
                  <h3 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2 animate-slide-in-up">{project.title}</h3>
                  <p className="text-white/90 text-xs md:text-sm mb-3 md:mb-4 animate-slide-in-up animation-delay-100">{project.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16 animate-fade-in-up animation-delay-600">
            <NavLink to="/projects">
              <Button variant="primary" size="large" className="w-full md:w-auto">
                View More Projects
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        ref={(el) => addToRefs(el, 4)}
        className="relative py-16 md:py-24 bg-cover bg-center overflow-hidden section-entrance"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://raw.githubusercontent.com/Kagwi/Baked-Brick-Company/refs/heads/main/Baked%20Brick10.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-stone-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 md:mb-6 title-entrance">
              Ready to Transform Your Lawn & Garden?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-6 md:mb-8 leading-relaxed px-2 subtitle-entrance">
              Contact us today for professional lawn care, garden design, and hardscape installation. 
              Let's create the beautiful outdoor space you've been dreaming of.
            </p>
            <NavLink to="/contact" className="animate-fade-in-up animation-delay-400">
              <Button variant="secondary" size="large" className="animate-pulse w-full md:w-auto">
                Get A Free Consultation
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        ref={(el) => addToRefs(el, 5)}
        className="py-16 md:py-20 bg-white section-entrance"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4 title-entrance">What Our Clients Say</h2>
            <p className="text-stone-600 max-w-3xl mx-auto text-base md:text-lg subtitle-entrance">
              Hear from homeowners who transformed their outdoor spaces with our landscaping services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="animate-stagger-item"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.5);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Animation utilities */
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out both;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out both;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out both;
        }

        .animate-slide-in-up {
          animation: fadeInUp 0.6s ease-out both;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out both;
        }

        .animate-text-reveal {
          animation: textReveal 0.8s ease-out both;
        }

        .animate-count-up {
          animation: countUp 1s ease-out both;
        }

        .animate-stagger-item {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        /* Section entrance animations */
        .section-entrance {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .section-entrance.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Title and subtitle specific animations */
        .title-entrance {
          opacity: 0;
          transform: translateY(-50px);
          transition: all 0.8s ease-out;
        }

        .subtitle-entrance {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }

        .section-entrance.animate-in .title-entrance {
          opacity: 1;
          transform: translateY(0);
        }

        .section-entrance.animate-in .subtitle-entrance {
          opacity: 1;
          transform: translateY(0);
        }

        /* Stagger animations for titles and subtitles */
        .section-entrance.animate-in .title-entrance {
          transition-delay: 200ms;
        }

        .section-entrance.animate-in .subtitle-entrance {
          transition-delay: 400ms;
        }

        .section-entrance.animate-in .subtitle-entrance.animation-delay-200 {
          transition-delay: 600ms;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(10px, -15px) scale(1.1);
            }
            66% {
              transform: translate(-8px, 8px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
