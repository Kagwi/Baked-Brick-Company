import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < testimonial.rating ? 'fill-amber-500 text-amber-500' : 'text-stone-300'}
          />
        ))}
      </div>
      <p className="text-stone-700 mb-4 italic">{testimonial.quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
        </div>
        <div>
          <h4 className="font-bold text-stone-800">{testimonial.name}</h4>
          <p className="text-stone-600 text-sm">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
