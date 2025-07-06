// src/Pages/ContactUs.jsx

import React from 'react';
// You'll need to install react-icons if you don't have it
// npm install react-icons
import { FaLocationDot, FaEnvelope, FaClock, FaGlobe } from 'react-icons/fa6'; // Using Fa6 for modern icons

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send this form data to a backend server.
    alert('Message sent! (This is a placeholder alert)');
    e.target.reset(); // Resets the form fields
  };

  return (
    <section id="Contact" className="w-full bg-[#fff8e1] py-16 md:py-24">
      {/* section-title equivalent */}
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 relative pb-4
                     after:content-[''] after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                     after:bg-[#7a2c1c] after:h-[5px] after:w-[100px] after:rounded-full">
        Contact Us
      </h2>

      {/* section-content equivalent */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-center gap-12 md:gap-20">
        
        {/* Contact Details */}
        <div className="w-full md:w-1/2 lg:w-2/5 space-y-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Details</h3>
          
          <div className="flex items-center gap-4 text-gray-700">
            <FaLocationDot className="text-3xl text-[#7a2c1c] flex-shrink-0" />
            <p className="text-lg">Yetkha, Kathmandu, 553513</p>
          </div>
          
          <div className="flex items-center gap-4 text-gray-700">
            <FaEnvelope className="text-3xl text-[#7a2c1c] flex-shrink-0" />
            <p className="text-lg">email@gmail.com</p>
          </div>
          
          <div className="flex items-center gap-4 text-gray-700">
            <FaClock className="text-3xl text-[#7a2c1c] flex-shrink-0" />
            <div>
              <p className="text-lg">Sunday - Friday: 9:00 AM - 10:00 PM</p>
              <p className="text-lg mt-1">Saturday: Closed</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-gray-700">
            <FaGlobe className="text-3xl text-[#7a2c1c] flex-shrink-0" />
            <p className="text-lg">
              <a href="http://www.cakeshop.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                www.cakeshop.com
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 lg:w-3/5 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="text" 
              placeholder="Your Full Name" 
              required 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7a2c1c]" 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7a2c1c]" 
            />
            <textarea 
              placeholder="Your Message" 
              required 
              rows="6" // Increased rows for better usability
              className="w-full p-3 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-[#7a2c1c]" 
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-[#7a2c1c] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#5e1f12] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;