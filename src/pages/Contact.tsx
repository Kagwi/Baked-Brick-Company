import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Get in touch to discuss your landscaping project"
        backgroundImage="https://raw.githubusercontent.com/Kagwi/Baked-Brick-Company/refs/heads/main/Baked%20Brick10.webp"
        showButtons={false}
        size="medium"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Phone size={20} className="text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Phone</h3>
                <a href="tel:+11234567890" className="text-stone-600 hover:text-emerald-700 transition-colors">
                  (123) 456-7890
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Mail size={20} className="text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Email</h3>
                <a href="support@bakedbrick.co.ke" className="text-stone-600 hover:text-emerald-700 transition-colors">
                  support@bakedbrick.co.ke
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock size={20} className="text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Hours</h3>
                <p className="text-stone-600">
                  Mon-Fri: 8am-6pm<br />
                  Sat: 9am-4pm<br />
                  Sun: Closed
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">
                  Get In Touch
                </h2>
                <p className="text-stone-600 mb-6">
                  We'd love to hear about your landscaping project! Fill out the form below and one of our experts will
                  get back to you within 24 hours to discuss how we can help transform your outdoor space.
                </p>
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com" 
                      className="w-10 h-10 bg-emerald-700 text-white rounded-full flex items-center justify-center hover:bg-emerald-800 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com" 
                      className="w-10 h-10 bg-emerald-700 text-white rounded-full flex items-center justify-center hover:bg-emerald-800 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com" 
                      className="w-10 h-10 bg-emerald-700 text-white rounded-full flex items-center justify-center hover:bg-emerald-800 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Contact;
