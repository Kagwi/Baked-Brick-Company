import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaShoppingCart, FaPlus, FaMinus, FaTrash } from "react-icons/fa";

// Product data structure with all required information
const categories = [
  {
    name: "Hand Tools",
    items: [
      { 
        id: 52, 
        name: "Spade", 
        description: "Heavy-duty spade for digging, cutting through soil, and transplanting. Made with reinforced steel head.",
        image: "/Spade.png"
      },
      { 
        id: 53, 
        name: "Broom", 
        description: "Sturdy outdoor broom for sweeping patios, driveways, and garden paths. Durable bristles for tough debris.",
        image: "/Broom.png"
      },
      { 
        id: 1, 
        name: "Leaf Rakes", 
        description: "Lightweight rake designed for gathering leaves and light debris. Made from durable plastic with flexible tines.",
        image: "/Leaf Rake.jpg"
      },
      { 
        id: 2, 
        name: "Bow Rakes", 
        description: "Heavy-duty steel rake with sturdy tines for moving soil, gravel, and leveling surfaces.",
        image: "/Bow Rake.jpg"
      },
      { 
        id: 3, 
        name: "Landscape Rakes", 
        description: "Wide-head rake for grading and leveling soil in large garden areas. Adjustable handle available.",
        image: "/Landscape Rake.jpg"
      },
      { 
        id: 4, 
        name: "Draw Hoes", 
        description: "Traditional hoe for weeding and cultivating soil. Sharp steel blade with wooden handle.",
        image: "/Draw Hoe.png"
      },
      { 
        id: 5, 
        name: "Stirrup Hoes", 
        description: "Oscillating hoe that cuts weeds at root level with minimal soil disturbance. Ergonomic design.",
        image: "/stirrup hoe.jpg"
      },
      { 
        id: 6, 
        name: "Hand Weeders", 
        description: "Compact weeding tool for precision weed removal in tight spaces and flower beds.",
        image: "/Hand Weeder.jpg"
      },
      { 
        id: 7, 
        name: "Weed Pullers", 
        description: "Leverage-based tool for removing deep-rooted weeds without bending. Includes root extractor.",
        image: "/Weed Puller.jpg"
      },
      { 
        id: 8, 
        name: "Manual Edgers", 
        description: "Steel half-moon edger for creating clean borders between lawn and garden beds.",
        image: "/Manual Edgers.jpg"
      },
      { 
        id: 9, 
        name: "Powered Edgers", 
        description: "Gas-powered edger for professional-grade lawn edging. Includes depth adjustment.",
        image: "/Powered Edgers.avif"
      },
      { 
        id: 10, 
        name: "Loppers", 
        description: "Heavy-duty pruning tool with 24-inch handles for cutting branches up to 2 inches thick.",
        image: "/Loppers.jpg"
      },
      { 
        id: 11, 
        name: "Tree Pruners", 
        description: "Telescopic tree pruner with extendable pole for reaching high branches. Includes saw attachment.",
        image: "/Tree Prunner.png"
      },
      { 
        id: 12, 
        name: "Soil Scoops", 
        description: "Stainless steel soil scoop for potting, transplanting, and mixing soil. Comfort grip handle.",
        image: "/Soil Scoop.jpg"
      },
      { 
        id: 46, 
        name: "Machetes", 
        description: "Heavy-duty machete for clearing brush, cutting vegetation, and general landscaping work.",
        image: "/Machete.png"
      },
      { 
        id: 47, 
        name: "Pangas", 
        description: "Traditional African cutting tool, ideal for clearing bushes, chopping wood, and agricultural work.",
        image: "/Panga.jpg"
      }
    ]
  },
  {
    name: "Power Tools & Equipment",
    items: [
      { 
        id: 13, 
        name: "Push Lawn Mowers", 
        description: "Self-propelled petrol lawn mower with 21-inch cutting deck and grass bag. 160cc engine.",
        image: "/Lawn Mower Push.png"
      },
      { 
        id: 14, 
        name: "Ride-on Lawn Mowers", 
        description: "Ride-on mower with 42-inch cutting width, hydrostatic transmission, and 15HP engine.",
        image: "/Ride-On Lawn Mower.jpg"
      },
      { 
        id: 15, 
        name: "String Trimmers", 
        description: "Gas-powered string trimmer with 2-line head, adjustable shaft, and shoulder strap.",
        image: "/String Trimmer.jpg"
      },
      { 
        id: 16, 
        name: "Leaf Blowers", 
        description: "Backpack leaf blower with 52cc engine, variable speed control, and noise reduction.",
        image: "/Leaf Blower.jpg"
      },
      { 
        id: 17, 
        name: "Leaf Vacuums", 
        description: "Electric leaf vacuum with mulch kit, 12-amp motor, and 16:1 reduction ratio.",
        image: "/Leaf Vacuum.png"
      },
      { 
        id: 18, 
        name: "Chainsaws", 
        description: "18-inch gas chainsaw with automatic oiler, anti-vibration handle, and quick-start system.",
        image: "/Chainsaw.jpg"
      },
      { 
        id: 19, 
        name: "Hedge Trimmers (electric)", 
        description: "Corded electric hedge trimmer with 24-inch dual-action blades and safety lock.",
        image: "/Electric Hedge Trimmers.png"
      },
      { 
        id: 20, 
        name: "Hedge Trimmers (gas)", 
        description: "Gas-powered hedge trimmer with 26-inch cutting blade and anti-vibration system.",
        image: "/Gas Hedge Trimmers.png"
      },
      { 
        id: 21, 
        name: "Mini Tillers", 
        description: "Compact front-tine tiller for small gardens and flower beds. Adjustable tilling width.",
        image: "/Mini Tiller.jpg"
      },
      { 
        id: 22, 
        name: "Cultivators", 
        description: "Gas cultivator with 4 steel tines for soil aeration and weed removal in tight spaces.",
        image: "/Cultivators.jpg"
      },
      { 
        id: 23, 
        name: "Pressure Washers", 
        description: "2000 PSI pressure washer for cleaning patios, driveways, and outdoor furniture.",
        image: "/Pressure Washer.png"
      },
      { 
        id: 51, 
        name: "Brush Cutters", 
        description: "Powerful brush cutter for clearing thick vegetation, grass, and bushes in large areas.",
        image: "/Brush Cutter.jpeg"
      }
    ]
  },
  {
    name: "Watering Equipment",
    items: [
      { 
        id: 24, 
        name: "Drip Systems", 
        description: "Complete drip irrigation kit for gardens up to 500 sq ft. Timer included.",
        image: "/Drip Irrigaion Pipes.png"
      },
      { 
        id: 25, 
        name: "Rotary Sprinklers", 
        description: "Adjustable rotary sprinkler covers up to 3000 sq ft. Multiple pattern settings.",
        image: "/Rotary Sprinklers.png"
      },
      { 
        id: 26, 
        name: "Oscillating Sprinklers", 
        description: "Oscillating sprinkler with width and range adjustment. Metal construction.",
        image: "/Oscillating Sprinkler.png"
      },
      { 
        id: 27, 
        name: "Garden Hoses", 
        description: "50-foot heavy-duty garden hose with brass fittings. 5-layer construction.",
        image: "/Garden Hoses.jpg"
      },
      { 
        id: 28, 
        name: "Hose Reels", 
        description: "Wall-mounted hose reel with automatic rewind and 150-foot capacity.",
        image: "/Hose Reels.jpg"
      },
      { 
        id: 29, 
        name: "Hose Carts", 
        description: "Mobile hose cart with large wheels for easy movement around the garden.",
        image: "/Hose Carts.jpg"
      },
      { 
        id: 30, 
        name: "Watering Cans", 
        description: "2-gallon metal watering can with brass rose and removable spout.",
        image: "/Watering Cans.jpg"
      }
    ]
  },
  {
    name: "Planting & Soil",
    items: [
      { 
        id: 54, 
        name: "Concrete Planters", 
        description: "Durable concrete planters in various sizes and shapes. Weather-resistant and perfect for outdoor use.",
        image: "/Concrete Planters.jpg"
      },
      { 
        id: 65, 
        name: "Red Soil", 
        description: "High-quality red soil rich in iron oxide, ideal for gardening, landscaping, and improving soil structure.",
        image: "/Red Soil.jpg"
      },
      { 
        id: 31, 
        name: "Planters and Pots", 
        description: "Assorted ceramic, plastic, and wooden planters in various sizes. UV resistant.",
        image: "/Planters.jpg"
      },
      { 
        id: 32, 
        name: "Raised Garden Beds", 
        description: "Cedar raised garden bed kit 4x8 ft. Easy assembly, no tools required.",
        image: "/Raised Garden Beds.jpg"
      },
      { 
        id: 33, 
        name: "Compost Bins", 
        description: "80-gallon compost bin with aeration vents and removable door for easy access.",
        image: "/Compost Bin.png"
      },
      { 
        id: 34, 
        name: "Seed Starters", 
        description: "72-cell propagation tray with humidity dome and heat mat.",
        image: "/Seed Starting Systems.jpg"
      },
      { 
        id: 35, 
        name: "Top Soil", 
        description: "Premium organic topsoil blend for gardens and lawns. 40kg bag.",
        image: "/Top Soil.jpg"
      }
    ]
  },
  {
    name: "Hardscaping & Decor",
    items: [
      { 
        id: 56, 
        name: "Square Wire Fence", 
        description: "Galvanized square wire fencing for property boundaries, garden protection, and livestock enclosures.",
        image: "/Square Wire Fence.jpg"
      },
      { 
        id: 57, 
        name: "Cabro Pavers", 
        description: "Interlocking concrete pavers for driveways, walkways, and patios. Available in various colors and patterns.",
        image: "/Cabro Pavers.jpg"
      },
      { 
        id: 58, 
        name: "Hollow Blocks", 
        description: "Standard hollow concrete blocks for construction of walls, fences, and structural elements.",
        image: "/Hollow Blocks.jpg"
      },
      { 
        id: 59, 
        name: "Eclipse Blocks", 
        description: "Decorative eclipse blocks for creating privacy screens, garden walls, and architectural features.",
        image: "/Eclipse Blocks.jpg"
      },
      { 
        id: 36, 
        name: "Quartz Gravel", 
        description: "Decorative quartz gravel for pathways and garden beds. Available in multiple colors.",
        image: "/Quartz Gravel.jpg"
      },
      { 
        id: 37, 
        name: "Precast Concrete for Retaining Wall Blocks", 
        description: "Precast concrete blocks for building retaining walls. Interlocking design.",
        image: "/Precast Concrete for Retaining Wall Blocks.png"
      },
      { 
        id: 38, 
        name: "Flagstones", 
        description: "Natural flagstone for patios and walkways. Various sizes and thicknesses.",
        image: "/Flag Stone.jpg"
      }
    ]
  },
  {
    name: "Lawn & Plant Care",
    items: [
      { 
        id: 60, 
        name: "Kikuyu Turf", 
        description: "Premium Kikuyu grass turf for lawns, sports fields, and landscaping. Fast-growing and durable.",
        image: "/Kikuyu Turf.jpg"
      },
      { 
        id: 61, 
        name: "Biogas Slurry", 
        description: "Organic fertilizer from biogas digesters, rich in nutrients for plants and soil improvement.",
        image: "/Biogas Slurry.jpg"
      },
      { 
        id: 62, 
        name: "Rabbit Urine", 
        description: "Natural organic pesticide and fertilizer, effective against pests and rich in nitrogen.",
        image: "/Rabbit Urine.jpg"
      },
      { 
        id: 63, 
        name: "Manure", 
        description: "Well-composted animal manure for enriching soil with organic matter and nutrients.",
        image: "/Manure.jpg"
      },
      { 
        id: 39, 
        name: "Fertilizers & Chemicals", 
        description: "Balanced NPK fertilizer for general lawn and garden use. 20kg bag.",
        image: "/Fertilizer.jpg"
      },
      { 
        id: 40, 
        name: "Organic Fertilizers", 
        description: "100% organic fertilizer from composted manure and plant materials.",
        image: "/Organic Fertilizer.jpg"
      },
      { 
        id: 41, 
        name: "Grass Seed", 
        description: "Premium grass seed blend for Kenyan climate. Fast germination.",
        image: "/Grass Seed.jpg"
      },
      { 
        id: 42, 
        name: "Weed Killers", 
        description: "Selective weed killer for lawns. Kills weeds without harming grass.",
        image: "/Weed Killer.png"
      },
      { 
        id: 43, 
        name: "Eco-friendly Insecticides", 
        description: "Natural insecticide made from neem oil. Safe for vegetables and ornamentals.",
        image: "/Eco-Friendly Insecticide.jpg"
      },
      { 
        id: 44, 
        name: "Eco-friendly Pesticides", 
        description: "Organic pesticide with garlic and chili extract. Controls common garden pests.",
        image: "/Eco-Friendly Pesticide.jpg"
      },
      { 
        id: 45, 
        name: "Plant Food", 
        description: "Specialized plant food for flowers, trees, and vegetables. Slow-release formula.",
        image: "/Flower and Vegetable Plant Food.png"
      }
    ]
  },
  {
    name: "Safety & Utility Equipment",
    items: [
      { 
        id: 48, 
        name: "Overalls", 
        description: "Durable waterproof overalls for protection during landscaping and gardening work.",
        image: "/Overalls.png"
      },
      { 
        id: 49, 
        name: "Wheelbarrows", 
        description: "Heavy-duty wheelbarrow for transporting soil, gravel, tools, and other materials.",
        image: "/Wheelbarrow.jpg"
      },
      { 
        id: 50, 
        name: "Gumboots", 
        description: "Waterproof rubber boots for wet conditions, mud protection, and general outdoor work.",
        image: "/Gumboots.jpg"
      }
    ]
  }
];

export default function Shop() {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const categoryRefs = useRef([]);

  // Handle scroll for animations and cart button positioning
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Trigger animations on scroll
      categoryRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.8;
          
          if (isInView) {
            ref.classList.add('opacity-100', 'translate-y-0');
            ref.classList.remove('opacity-0', 'translate-y-8');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize refs
  useEffect(() => {
    categoryRefs.current = categoryRefs.current.slice(0, categories.length);
  }, []);

  // Function to generate WhatsApp message
  const generateWhatsAppMessage = (product) => {
    return `Hello! I'm interested in purchasing the ${product.name} from Baked Brick Company.\n\nProduct Details:\n- Name: ${product.name}\n- Description: ${product.description}\n\nPlease let me know about pricing, availability and delivery options.`;
  };

  // Function to generate email content
  const generateEmailContent = (product) => {
    const subject = `Inquiry about ${product.name}`;
    const body = `Dear Baked Brick Team,\n\nI would like to inquire about purchasing the following product:\n\nProduct: ${product.name}\nDescription: ${product.description}\n\nPlease provide information on pricing, availability, payment methods, and delivery options.\n\nThank you.`;
    return { subject, body };
  };

  // Cart functions
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter(item => item.id !== productId);
      }
    });
  };

  const removeItemCompletely = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <div className="min-h-screen font-agrandir bg-green-50 text-stone-800">
      {/* Cart Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-80 md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${cartVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800">Your Cart</h2>
            <button 
              onClick={() => setCartVisible(false)}
              className="text-gray-500 hover:text-gray-700 text-xl transition-colors"
            >
              ✕
            </button>
          </div>
          
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
              <FaShoppingCart className="text-5xl mb-4 opacity-50" />
              <p className="text-lg">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-start">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-contain rounded-md mr-4 bg-gray-100 p-1"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <div className="flex items-center mt-2">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            <FaMinus size={12} />
                          </button>
                          <span className="mx-3 font-semibold">{item.quantity}</span>
                          <button 
                            onClick={() => addToCart(item)}
                            className="w-8 h-8 rounded-full bg-green-100 text-green-800 flex items-center justify-center hover:bg-green-200 transition-colors"
                          >
                            <FaPlus size={12} />
                          </button>
                          <button 
                            onClick={() => removeItemCompletely(item.id)}
                            className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="mb-4">
                  <span className="text-lg font-semibold">Items in cart: {getCartItemCount()}</span>
                </div>
                
                {/* WhatsApp Order Button */}
                <a
                  href={`https://wa.me/0708396001?text=${encodeURIComponent(`Hello! I'd like to place an order from Baked Brick Company.\n\nOrder Summary:\n${cart.map(item => `- ${item.name} x${item.quantity}`).join('\n')}\n\nTotal Items: ${getCartItemCount()}\n\nPlease provide pricing, payment and delivery details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
                >
                  <FaWhatsapp className="mr-2" /> Order via WhatsApp
                </a>
                
                {/* Email Order Button */}
                <a
                  href={`mailto:support@bakedbrick.co.ke?subject=${encodeURIComponent('Order Inquiry')}&body=${encodeURIComponent(`Dear Baked Brick Team,\n\nI would like to place an order for the following items:\n\n${cart.map(item => `- ${item.name} (Quantity: ${item.quantity})`).join('\n')}\n\nTotal Items: ${getCartItemCount()}\n\nPlease provide information on pricing, payment methods, delivery options, and estimated delivery time.\n\nThank you.`)}`}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
                >
                  <FaEnvelope className="mr-2" /> Order via Email
                </a>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Cart Overlay */}
      {cartVisible && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setCartVisible(false)}
        ></div>
      )}

      {/* Header + Title Section */}
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/Kagwi/Baked-Brick-Company/refs/heads/main/Baked%20Brick10.webp')"
        }}
      >
        <div className="bg-black/60 w-full">
          {/* Title Section */}
          <div className="text-center px-6 py-20 max-w-6xl mx-auto">
            <h1 className="text-5xl font-extrabold text-white mb-4 transition-all duration-700 transform translate-y-0 opacity-100">
              Landscaping Products
            </h1>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto transition-all duration-700 delay-200 transform translate-y-0 opacity-100">
              Discover our full range of professional landscaping tools and materials.
            </p>
          </div>
        </div>
      </div>

      {/* Cart Button - Positioned better to avoid nav bar */}
      <div className={`fixed z-30 transition-all duration-300 ${isScrolled ? 'top-24' : 'top-28'} right-4 md:right-6`}>
        <button 
          onClick={() => setCartVisible(true)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full px-5 py-3 flex items-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <FaShoppingCart className="mr-2" />
          Cart ({getCartItemCount()})
          {cart.length > 0 && (
            <span className="ml-2 bg-white text-green-600 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {getCartItemCount()}
            </span>
          )}
        </button>
      </div>

      {/* Products Section */}
      <div className="px-4 md:px-6 py-12 max-w-6xl mx-auto space-y-16">
        {categories.map((category, idx) => (
          <div 
            key={idx} 
            ref={el => categoryRefs.current[idx] = el}
            className="bg-white rounded-xl p-6 shadow-lg transition-all duration-700 transform opacity-0 translate-y-8"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-8 border-b border-green-300 pb-2 transition-all duration-500 delay-100">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((product) => {
                const whatsappMessage = generateWhatsAppMessage(product);
                const emailContent = generateEmailContent(product);
                
                return (
                  <div 
                    key={product.id} 
                    className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Image Container - Fixed height with centered image */}
                    <div className="relative h-64 w-full overflow-hidden bg-gray-100 flex items-center justify-center p-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x300?text=Image+Loading";
                          e.target.className = "max-h-full max-w-full object-contain";
                        }}
                      />
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 transition-all duration-500">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm transition-all duration-500 delay-100 flex-grow">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-medium text-green-700 italic">Contact for pricing</span>
                        <button 
                          onClick={() => addToCart(product)}
                          className="bg-green-100 text-green-800 hover:bg-green-200 font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
                        >
                          Add to Cart
                        </button>
                      </div>
                      
                      {/* Purchase Buttons */}
                      <div className="space-y-3">
                        <a
                          href={`https://wa.me/0708396001?text=${encodeURIComponent(whatsappMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
                        >
                          <FaWhatsapp className="mr-2" /> Inquire on WhatsApp
                        </a>
                        
                        <a
                          href={`mailto:support@bakedbrick.co.ke?subject=${encodeURIComponent(emailContent.subject)}&body=${encodeURIComponent(emailContent.body)}`}
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
                        >
                          <FaEnvelope className="mr-2" /> Inquire via Email
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16 mb-10">
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
          <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Order a Customized Order
          </button>
        </Link>
      </div>
    </div>
  );
}
