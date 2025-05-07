import React from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

const About: React.FC = () => {
  return (
    <div>
      <Hero
        title="About Baked Brick Landscaping"
        subtitle="Creating beautiful outdoor spaces since 2010"
        backgroundImage="https://images.pexels.com/photos/888882/pexels-photo-888882.jpeg?auto=compress&cs=tinysrgb&w=600"
        showButtons={false}
        size="medium"
      />

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Our Story</h2>
              <p className="text-stone-600 mb-4">
                Baked Brick Landscaping was founded in 2010 by James and Elizabeth Green, who shared a passion for creating beautiful outdoor spaces that enhance people's lives and respect the natural environment.
              </p>
              <p className="text-stone-600 mb-4">
                What started as a small family business has grown into a full-service landscaping company, but we've never lost sight of our core values: quality craftsmanship, personalized service, and sustainable practices.
              </p>
              <p className="text-stone-600 mb-4">
                Over the years, we've had the privilege of working with hundreds of homeowners and businesses throughout Georgia, transforming ordinary outdoor spaces into extraordinary landscapes that reflect each client's unique vision and lifestyle.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4503819/pexels-photo-4503819.jpeg"
                alt="Landscaping team working"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Our Values</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Baked Brick Landscaping.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-emerald-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 text-center">Quality Craftsmanship</h3>
              <p className="text-stone-600 text-center">
                We take pride in our attention to detail and commitment to excellence in every project, from the smallest garden to the most elaborate outdoor living space.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-emerald-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 text-center">Sustainability</h3>
              <p className="text-stone-600 text-center">
                We design landscapes that conserve water, promote biodiversity, and create harmony between human needs and the natural environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-emerald-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 text-center">Client Partnership</h3>
              <p className="text-stone-600 text-center">
                We believe in collaborative relationships with our clients, working together to create outdoor spaces that exceed expectations and bring joy for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Meet Our Team</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              Our dedicated team of professionals brings expertise, creativity, and passion to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'James Green',
                title: 'Founder & Lead Designer',
                image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                name: 'Elizabeth Green',
                title: 'Co-Founder & Plant Specialist',
                image: 'https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                name: 'Michael Chen',
                title: 'Hardscape Specialist',
                image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                name: 'Sarah Martinez',
                title: 'Sustainability Consultant',
                image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-1">{member.name}</h3>
                  <p className="text-stone-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">What Our Clients Say</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              Don't just take our word for it—hear from our satisfied clients about their experiences working with Baked Brick Landscaping.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a consultation and take the first step toward the landscape of your dreams.
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

export default About;
