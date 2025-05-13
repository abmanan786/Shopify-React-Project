import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';  // Importing motion for animation

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Top Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-12"
          initial={{ opacity: 0 }}  // Initial opacity is 0 (invisible)
          animate={{ opacity: 1 }}  // Animate to full opacity
          transition={{ delay: 0.3, duration: 1 }}  // Delay and duration for smooth transition
        >
          {/* Left Section: About Us */}
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              We are a leading e-commerce platform, committed to offering a wide variety of products at the best prices, along with top-notch customer service.
            </p>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="hover:underline hover:text-yellow-300">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline hover:text-yellow-300">Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline hover:text-yellow-300">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:underline hover:text-yellow-300">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Right Section: Follow Us */}
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom Section (Copyright) */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}  // Initial opacity is 0
          animate={{ opacity: 1 }}  // Animate to full opacity
          transition={{ delay: 0.5, duration: 1 }}  // Smooth transition with delay
        >
          <p className="text-sm">
            &copy; 2025 Your Company Name. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
