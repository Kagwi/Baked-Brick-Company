import React from "react";
import { Link } from "react-router-dom";

const products = [
  "Leaf Rakes",
  "Draw Hoes",
  "Hand Weeders",
  "Manual Edgers",
  "Loppers and Tree Pruners",
  "Soil Scoops",
  "Push Lawn Mowers",
  "String Trimmers",
  "Watering Cans",
  "Organic Fertilizers",
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-green-50 text-brown-800 p-8 font-sans">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Landscaping Products</h1>

      <ul className="list-disc list-inside space-y-2 text-lg">
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>

      <div className="mt-10">
        <Link to="/contact">
          <button className="bg-brown-700 hover:bg-brown-800 text-white font-semibold py-2 px-4 rounded">
            Order Customized Orders
          </button>
        </Link>
      </div>
    </div>
  );
}

// Tailwind colors:
// green-50 for background, green-800 for titles, brown-800 for text, brown-700/800 for button
// If "brown" is not available in Tailwind by default, consider extending the theme in tailwind.config.js
