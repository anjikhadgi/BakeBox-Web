// src/Pages/CustomCakes.jsx

import React from 'react';

// --- IMPORTANT: Adjust these paths and filenames to your actual images ---
// Ensure you have these image files in your src/assets/Image/ folder
import butterscotchImage from '../assets/Image/butterscotch.jpg';
import cheeseImage from '../assets/Image/cheese-image.jpeg';
import pinkVelvetImage from '../assets/Image/pink-velvet-.avif'; // Note: .avif extension
import vanillaImage from '../assets/Image/Vanilla-.webp';     // Note: .webp extension
import carrotImage from '../assets/Image/carrotimages.jpeg';
import chocolateCakeImage from '../assets/Image/hchocolate_cake_.png'; // Note: .png extension
// --- End of image path adjustments ---

const customCakeExamples = [
  { id: 1, name: 'Butterscotch Cake', image: butterscotchImage },
  { id: 2, name: 'Cheese Cake', image: cheeseImage },
  { id: 3, name: 'Pink Velvet Cake', image: pinkVelvetImage },
  { id: 4, name: 'Vanilla Cake', image: vanillaImage },
  { id: 5, name: 'Carrot Cake', image: carrotImage },
  { id: 6, name: 'Chocolate Layer Cake', image: chocolateCakeImage },
];

const CustomCakes = () => {
  return (
    <section id="theme" className="w-full bg-[#fff8e1] py-16 md:py-24"> {/* Changed background to white for contrast if placed after Menu */}
      {/* section-title equivalent */}
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 relative pb-4
                     after:content-[''] after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                     after:bg-[#7a2c1c] after:h-[5px] after:w-[100px] after:rounded-full">
        Custom Cakes
      </h2>

      {/* section-content equivalent */}
      <div className="container mx-auto px-4">
        {/* menu-list equivalent - using Tailwind Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {customCakeExamples.map((cake) => (
            // menu-item equivalent
            // Simplified for just an image gallery, added hover effect
            <div key={cake.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl group">
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-64 object-cover rounded-md" // Adjusted height for gallery images
              />
              {/* Optional: Add a subtle overlay or text on hover for names */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-semibold text-center px-4">{cake.name}</p>
              </div>
            </div>
          ))}

        </div>
        {/* Optional: Add a call to action for custom cake inquiries */}
        <div className="text-center mt-12">
            <button className="bg-[#7a2c1c] text-white px-8 py-3 rounded-md hover:bg-[#5e1f12] transition duration-300 text-lg font-medium">
                Request a Custom Cake
            </button>
        </div>
      </div>
    </section>
  );
};

export default CustomCakes;