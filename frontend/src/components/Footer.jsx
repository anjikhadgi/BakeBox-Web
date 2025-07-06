// src/components/Footer.jsx (or .tsx)
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Us */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">About MySite</h3>
                        <p className="text-gray-400">
                            We are a company dedicated to providing the best web solutions. Our mission is to empower
                            businesses with stunning and functional online presences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-teal-400 transition-colors duration-200">Home</a></li>
                            <li><a href="/privacy" className="hover:text-teal-400 transition-colors duration-200">Privacy Policy</a></li>
                            <li><a href="/terms" className="hover:text-teal-400 transition-colors duration-200">Terms of Service</a></li>
                            <li><a href="/faq" className="hover:text-teal-400 transition-colors duration-200">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400">Email: info@mysite.com</p>
                        <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
                        <p className="text-gray-400">Address: 123 Web Dev St, Internet City</p>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                                {/* Replace with actual icons if you use Font Awesome or similar */}
                                Facebook
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                                Twitter
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;