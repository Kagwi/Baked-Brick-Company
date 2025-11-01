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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Premium Landscaping Company
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Creating beautiful, sustainable landscapes that bring your vision to life
            </p>
            <p className="text-lg mb-8">
              Call us today: 0722381743
            </p>
            <div>
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
          h1 {
            animation: fadeInUp 0.8s ease-out;
          }
          h1 + p {
            animation: fadeInUp 0.8s ease-out 0.3s both;
          }
          h1 + p + p {
            animation: fadeInUp 0.8s ease-out 0.6s both;
          }
          h1 + p + p + div {
            animation: fadeInUp 0.8s ease-out 0.9s both;
          }
        `}</style>
      </section>

      {/* About Section */}
      <section className="py-20 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative group">
                <img
                  src="https://images.pexels.com/photos/8985458/pexels-photo-8985458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional landscaper at work"
                  className="rounded-lg shadow-2xl w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-500 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-lime-400 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
            <div>
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
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-emerald-600">14+</div>
                  <div className="text-stone-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-emerald-600">500+</div>
                  <div className="text-stone-600">Projects Completed</div>
                </div>
              </div>
              <NavLink to="/about">
                <Button variant="outline" className="group">
                  Learn More About Us
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>

        <style jsx>{`
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
          .grid > div:first-child {
            animation: slideInLeft 0.8s ease-out;
          }
          .grid > div:last-child {
            animation: slideInRight 0.8s ease-out;
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">Our Services</h2>
            <p className="text-stone-600 max-w-3xl mx-auto text-lg">
              We offer a comprehensive range of landscaping services to transform your outdoor space 
              into a beautiful, functional oasis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <div key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <NavLink to="/services">
              <Button variant="primary" size="large">
                View All Services
              </Button>
            </NavLink>
          </div>
        </div>

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
          .text-center {
            animation: fadeInUp 0.8s ease-out;
          }
          .grid > div:nth-child(1) {
            animation: fadeInUp 0.8s ease-out 0.2s both;
          }
          .grid > div:nth-child(2) {
            animation: fadeInUp 0.8s ease-out 0.4s both;
          }
          .grid > div:nth-child(3) {
            animation: fadeInUp 0.8s ease-out 0.6s both;
          }
          .text-center.mt-16 {
            animation: fadeInUp 0.8s ease-out 0.8s both;
          }
        `}</style>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-lime-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div 
          className="absolute top-0 left-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          style={{
            animation: 'blob 7s infinite'
          }}
        ></div>
        <div 
          className="absolute top-0 right-0 w-72 h-72 bg-lime-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          style={{
            animation: 'blob 7s infinite 2s'
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          style={{
            animation: 'blob 7s infinite 4s'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div 
              className="inline-block"
              style={{
                animation: 'slideInDown 0.6s ease-out'
              }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
                🌟 Why We're Different
              </span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4"
              style={{
                animation: 'slideInUp 0.6s ease-out'
              }}
            >
              Why Choose <span className="text-emerald-600">Baked Brick</span>
            </h2>
            <p 
              className="text-stone-600 max-w-3xl mx-auto text-lg"
              style={{
                animation: 'fadeIn 0.8s ease-out 0.3s both'
              }}
            >
              Discover what sets us apart in creating your perfect outdoor space. 
              We combine expertise with passion to deliver exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌿",
                title: "Eco-Friendly Solutions",
                description: "Sustainable practices and native plants for an environmentally conscious landscape that thrives naturally.",
                color: "from-emerald-500 to-green-500",
                delay: 0
              },
              {
                icon: "⚡",
                title: "Fast & Reliable",
                description: "Timely project completion without compromising on quality. We respect your time and deadlines.",
                color: "from-amber-500 to-orange-500",
                delay: 200
              },
              {
                icon: "🎨",
                title: "Creative Design",
                description: "Unique, custom designs tailored to your vision and lifestyle. Your dream, our blueprint.",
                color: "from-blue-500 to-cyan-500",
                delay: 400
              },
              {
                icon: "🔧",
                title: "Full Service",
                description: "From design to maintenance, we handle every aspect of your project with expert care.",
                color: "from-purple-500 to-pink-500",
                delay: 600
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${feature.delay}ms both`
                }}
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-stone-50 rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105"></div>
                
                {/* Animated border gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}>
                  <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
                </div>

                <div className="relative p-8 h-full flex flex-col items-center text-center">
                  {/* Animated icon container */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full opacity-20 transition-opacity duration-500 group-hover:opacity-40`}></div>
                    <div className="relative w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-lg transition-transform duration-500 group-hover:scale-110">
                      <span className="text-3xl transition-transform duration-500 group-hover:scale-110">
                        {feature.icon}
                      </span>
                    </div>
                    
                    {/* Floating animation dots */}
                    <div 
                      className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
                      }}
                    ></div>
                    <div 
                      className="absolute -bottom-2 -left-2 w-3 h-3 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite 1s'
                      }}
                    ></div>
                  </div>

                  {/* Title with slide-in effect */}
                  <h3 className="text-xl font-bold text-stone-800 mb-4 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-green-600">
                    {feature.title}
                  </h3>

                  {/* Description with fade-in effect */}
                  <p className="text-stone-600 leading-relaxed flex-grow transition-colors duration-300 group-hover:text-stone-700">
                    {feature.description}
                  </p>

                  {/* Animated read more indicator */}
                  <div className="mt-6 opacity-0 transition-all duration-500 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div 
            className="text-center mt-16"
            style={{
              animation: 'fadeInUp 0.8s ease-out 800ms both'
            }}
          >
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <NavLink to="/about">
                <Button variant="primary" size="large" className="group">
                  <span className="flex items-center">
                    Learn More About Our Process
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Button>
              </NavLink>
              <NavLink to="/contact">
                <Button variant="outline" size="large" className="group">
                  <span className="flex items-center">
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
          <div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            style={{
              animation: 'fadeInUp 0.8s ease-out 1000ms both'
            }}
          >
            {[
              { number: "14+", label: "Years Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2"
                  style={{
                    animation: `countUp 1s ease-out ${index * 200}ms both`
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-stone-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded CSS Styles */}
        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }

          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

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

          @keyframes countUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes ping {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }
        `}</style>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">Recent Projects</h2>
            <p className="text-stone-600 max-w-3xl mx-auto text-lg">
              Take a look at some of our recent landscaping transformations that brought dreams to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 200}ms both`
                }}
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

          <div className="text-center mt-16">
            <NavLink to="/projects">
              <Button variant="primary" size="large">
                View More Projects
              </Button>
            </NavLink>
          </div>
        </div>

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
          .text-center.mb-16 {
            animation: fadeInUp 0.8s ease-out;
          }
          .text-center.mt-16 {
            animation: fadeInUp 0.8s ease-out 0.8s both;
          }
        `}</style>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 bg-cover bg-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
          }}
        >
          <div className="absolute inset-0 bg-stone-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              Contact us today to schedule a consultation and take the first step toward 
              the landscape of your dreams. Let's create something beautiful together.
            </p>
            <NavLink to="/contact">
              <Button variant="secondary" size="large" className="animate-pulse">
                Get A Free Consultation
              </Button>
            </NavLink>
          </div>
        </div>

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
          .text-center > h2 {
            animation: fadeInUp 0.8s ease-out;
          }
          .text-center > p {
            animation: fadeInUp 0.8s ease-out 0.3s both;
          }
          .text-center > a {
            animation: fadeInUp 0.8s ease-out 0.6s both;
          }
        `}</style>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">What Our Clients Say</h2>
            <p className="text-stone-600 max-w-3xl mx-auto text-lg">
              We're proud of the relationships we build with our clients and the beautiful spaces we create together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div 
                key={testimonial.id}
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 200}ms both`
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

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
          .text-center.mb-16 {
            animation: fadeInUp 0.8s ease-out;
          }
        `}</style>
      </section>
    </div>
  );
};

export default Home;
