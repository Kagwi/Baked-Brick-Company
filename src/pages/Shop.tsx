import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Hand Tools",
    items: [
      "Rakes (leaf rakes, bow rakes, landscape rakes)",
      "Hoes (draw hoes, stirrup hoes)",
      "Weeding Tools (hand weeders, weed pullers)",
      "Edgers (manual or powered)",
      "Loppers and Tree Pruners",
      "Soil Scoops"
    ]
  },
  {
    name: "Power Tools & Equipment",
    items: [
      "Power Tools & Machinery",
      "Lawn Mowers (push and ride-on)",
      "String Trimmers (Weed Eaters)",
      "Leaf Blowers and Vacuums",
      "Chainsaws",
      "Hedge Trimmers (electric/gas)",
      "Mini Tillers and Cultivators",
      "Pressure Washers (for cleaning patios and driveways)"
    ]
  },
  {
    name: "Watering Equipment",
    items: [
      "Watering Equipment",
      "Irrigation Kits (drip systems, soaker hoses)",
      "Sprinklers (rotary, stationary, oscillating)",
      "Garden Hoses (various lengths and qualities)",
      "Hose Reels and Hose Carts",
      "Watering Cans (various sizes)"
    ]
  },
  {
    name: "Planting & Soil",
    items: [
      "Planting Supplies",
      "Planters and Pots (ceramic, plastic, wood)",
      "Raised Garden Beds",
      "Compost Bins",
      "Seed Starters and Propagation Trays",
      "Garden Soil, Mulch, and Compost"
    ]
  },
  {
    name: "Hardscaping & Decor",
    items: [
      "Mulch and Gravel (bagged or bulk)",
      "Pavers (brick, stone, concrete)",
      "Retaining Wall Blocks",
      "Flagstones and Stepping Stones",
      "Outdoor Fire Pits and Fireplaces",
      "Water Features (fountains, ponds, waterfall kits)"
    ]
  },
  {
    name: "Lawn & Plant Care",
    items: [
      "Fertilizers & Chemicals",
      "Organic Fertilizers",
      "Lawn Care Products (grass seed, weed killers)",
      "Insecticides and Pesticides (eco-friendly options)",
      "Plant Food (specialized for flowers, trees, vegetables)"
    ]
  }
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-green-50 text-stone-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 text-center">
          Landscaping Products
        </h1>
        <p className="text-lg text-center text-stone-600 mb-10">
          Browse our full range of tools and materials, thoughtfully organized for every landscaping need.
        </p>

        <div className="space-y-10">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold text-amber-800 mb-4 border-b border-amber-300 pb-1">
                {category.name}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside pl-4 text-lg">
                {category.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <button className="bg-amber-700 hover:bg-amber-800 text-white text-lg font-medium px-6 py-3 rounded-full shadow-md transition duration-300">
              Order a Customized Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
