import React from 'react';
import { NavLink } from 'react-router-dom';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-stone-800 mb-2 font-serif">{service.title}</h3>
        <p className="text-stone-600 mb-4">{service.description}</p>
        <NavLink
          to={`/services#${service.id}`}
          className="inline-block text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
        >
          Learn More
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceCard;