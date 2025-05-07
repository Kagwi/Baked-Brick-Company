import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    
    // Simulate success response
    setFormStatus({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formStatus && (
        <div 
          className={`p-4 rounded-md ${
            formStatus.success ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {formStatus.message}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">Select a subject</option>
            <option value="Landscape Design">Landscape Design</option>
            <option value="Hardscaping">Hardscaping</option>
            <option value="Garden Maintenance">Garden Maintenance</option>
            <option value="Irrigation Systems">Irrigation Systems</option>
            <option value="Landscaping Products">Landspacing Products</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        ></textarea>
      </div>
      
      <div>
        <Button type="submit" variant="primary" size="large">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
