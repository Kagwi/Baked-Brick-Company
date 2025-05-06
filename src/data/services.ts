import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'landscape-design',
    title: 'Landscape Design',
    description: 'Create a custom landscape plan tailored to your property and lifestyle with our professional design services.',
    longDescription: "Our landscape design process begins with a thorough site analysis and consultation to understand your goals, preferences, and budget. Our experienced designers then create a comprehensive plan that considers your property\'s unique characteristics, local climate conditions, and maintenance requirements. We provide detailed drawings and visualizations to help you envision the final result before any work begins.",
    image: 'https://images.pexels.com/photos/1416572/pexels-photo-1416572.jpeg',
    features: [
      'Custom design plans tailored to your property and preferences',
      'Sustainable planting schemes using native and adapted species',
      'Drainage solutions to prevent water issues',
      'Integration of existing features with new design elements',
      'Phased implementation plans to fit your budget',
    ],
  },
  {
    id: 'hardscaping',
    title: 'Hardscaping',
    description: 'Add structure and functionality to your landscape with our expert hardscaping installation services.',
    longDescription: 'Hardscaping refers to the non-living elements of your landscape, including patios, walkways, retaining walls, and other structures. These features provide both function and beauty, creating outdoor living spaces and solving practical problems like erosion control. Our skilled craftsmen use quality materials and proven construction techniques to build hardscape elements that will stand the test of time while complementing your home\'s architecture and your landscape\'s natural features.',
    image: 'https://images.pexels.com/photos/6474541/pexels-photo-6474541.jpeg',
    features: [
      'Patios and outdoor living spaces',
      'Stone and brick walkways',
      'Retaining walls and garden borders',
      'Outdoor kitchens and fire features',
      'Custom pergolas and shade structures',
      'Water features and fountains',
    ],
  },
  {
    id: 'garden-maintenance',
    title: 'Garden Maintenance',
    description: 'Keep your landscape looking its best year-round with our comprehensive maintenance services.',
    longDescription: 'Regular maintenance is essential to preserve the beauty and health of your landscape investment. Our maintenance programs are tailored to your property\'s specific needs and can include everything from routine lawn care to seasonal plantings and specialized tree service. Our trained professionals use sustainable practices that promote plant health while minimizing environmental impact.',
    image: 'https://images.pexels.com/photos/13537208/pexels-photo-13537208.jpeg',
    features: [
      'Regular lawn care and mowing',
      'Seasonal clean-up and mulching',
      'Pruning and plant health care',
      'Fertilization and weed management',
      'Irrigation system maintenance',
      'Seasonal color rotations',
    ],
  },
  {
    id: 'irrigation-systems',
    title: 'Irrigation Systems',
    description: 'Ensure your landscape receives the perfect amount of water with our efficient irrigation solutions.',
    longDescription: 'A properly designed and installed irrigation system saves water while keeping your landscape healthy and beautiful. We design custom systems that consider your property\'s specific conditions, plant water requirements, and local water restrictions. Our systems include smart controllers, efficient sprinkler heads, and drip irrigation components to deliver water exactly where it\'s needed, reducing waste and promoting plant health.',
    image: 'https://images.pexels.com/photos/906098/pexels-photo-906098.jpeg',
    features: [
      'Custom system design for optimal coverage',
      'Water-efficient sprinkler heads and nozzles',
      'Drip irrigation for beds and containers',
      'Smart controllers with weather-based scheduling',
      'Rainwater harvesting integration',
      'Regular maintenance and seasonal adjustments',
    ],
  },
  {
    id: 'products',
    title: 'Landscaping Products',
    description: 'High-quality tools and materials for all your landscaping needs.',
    longDescription: 'We offer a comprehensive selection of professional-grade landscaping tools, equipment, and materials. Whether you\'re a DIY enthusiast or a professional landscaper, our products are carefully selected to ensure durability and performance. Our knowledgeable staff can help you choose the right tools and materials for your specific project needs.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
    features: [
      'Hand Tools (Rakes, Hoes, Pruners, Edgers)',
      'Power Equipment (Mowers, Trimmers, Blowers)',
      'Irrigation Supplies',
      'Planting Materials and Containers',
      'Hardscape Materials',
      'Soil Amendments and Fertilizers',
    ],
  },
];

export default services;