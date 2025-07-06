// src/Pages/About.jsx

import React from 'react';
// Corrected path to your image
import aboutImage from '../assets/Image/aboutus.jpeg'; // Assuming IMG_0053.jpeg is in src/assets/Image/
import Navbar from  '../components/Navbar'; // Adjusted import path for Header component  

const About = () => { // Changed component name to Aboutus (lowercase 'u' as per your filename)
  return (
    <section id="about" className="py-16 md:py-24 bg-[#fff8e1]">
      {/* <Navbar/> */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

          {/* About Image */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <img
              src={aboutImage}
              alt="About Bake Box"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* About Details */}
          <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a2c1c] mb-4">
              About Us
            </h2>
            <p className="text-[#7a2c1c] leading-relaxed text-lg">
              Every celebration should have a little sweetness, in our opinion at Bake Box.
              Our shop was founded with a love for baking and creating memorable experiences,
              and since then, we have been making mouthwatering cakes that brighten any occasion.
              We use premium ingredients, creativity, and a little love to create cakes that look
              as good as they taste, whether they are classic flavors or custom designs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;