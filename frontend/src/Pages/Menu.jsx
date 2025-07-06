// src/Pages/Menu.jsx

import React from 'react';

// --- IMPORTANT: Adjust these paths and filenames to your actual images ---
import pastryImage from '../assets/Image/1.jpg';
import chocolateImage from '../assets/Image/2.jpg';
import browniesImage from '../assets/Image/3.jpg';
import donutsImage from '../assets/Image/4.jpg';
import cookiesImage from '../assets/Image/7jpg.jpg'; // Note the 'jpg' extension
import cupCakeImage from '../assets/Image/8.jpeg'; // Note the 'jpeg' extension
// --- End of image path adjustments ---

const menuItems = [
  { id: 1, name: 'Pastry', price: 'Rs150.00', image: pastryImage },
  { id: 2, name: 'Chocolate', price: 'Rs250.00', image: chocolateImage }, // Added a price example
  { id: 3, name: 'Brownies', price: 'Rs100.00', image: browniesImage },   // Added a price example
  { id: 4, name: 'Donuts', price: 'Rs80.00', image: donutsImage },       // Added a price example
  { id: 5, name: 'Cookies', price: 'Rs120.00', image: cookiesImage },    // Added a price example
  { id: 6, name: 'Cup Cake', price: 'Rs180.00', image: cupCakeImage },    // Added a price example
];

const Menu = () => {
  return (
    <section id="menu" className="w-full bg-[#fff8e1] py-16 md:py-24">
      {/* section-title equivalent */}
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 relative pb-4
                     after:content-[''] after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                     after:bg-[#7a2c1c] after:h-[5px] after:w-[100px] after:rounded-full">
        Our Exclusive Cake
      </h2>

      {/* section-content equivalent */}
      <div className="container mx-auto px-4">
        {/* menu-list equivalent - using Tailwind Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {menuItems.map((item) => (
            // menu-item equivalent
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4" // Image styling
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {item.name}
                {item.price && ( // Only render price if it exists
                  <>
                    <br />
                    <span className="text-lg font-bold text-[#7a2c1c]">{item.price}</span>
                  </>
                )}
              </h3>
              <button className="add-to-cart bg-[#7a2c1c] text-white px-6 py-2 rounded-md mt-4 hover:bg-[#5e1f12] transition duration-300">
                Add to Cart
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Menu;