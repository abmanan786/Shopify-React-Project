import React from 'react';
import { motion } from 'framer-motion'; // For animations

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-black to-gray-900 min-h-screen py-20 text-white">
      {/* Container for the content */}
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold tracking-wide mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">
            About Us
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We are a leading e-commerce platform offering a wide range of products with exceptional customer service, aiming to provide the best shopping experience for our users.
          </p>
        </motion.div>

        {/* Our Mission Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-semibold mb-4 text-gradient">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-200">
              Our mission is to offer customers top-quality products at the best prices. We are committed to making shopping accessible, easy, and enjoyable for everyone.
            </p>
          </motion.div>

          {/* Our Vision Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-semibold mb-4 text-gradient">Our Vision</h2>
            <p className="text-lg md:text-xl text-gray-200">
              We envision becoming the most trusted e-commerce platform globally by creating lasting relationships with our customers, vendors, and partners.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold mb-8 text-center text-gradient">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Value Cards */}
            {['Customer Satisfaction', 'Quality Assurance', 'Integrity & Transparency', 'Innovation', 'Sustainability', 'Community Engagement'].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="bg-white text-gray-800 p-8 rounded-lg shadow-lg hover:scale-110 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-2xl"
              >
                <h3 className="text-2xl font-semibold mb-4">{value}</h3>
                <p className="text-lg">
                  We aim to build lasting relationships based on these core values to provide the best experience to our customers.
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gradient">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member Cards */}
            {['John Doe', 'Jane Smith', 'David Johnson'].map((name, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.4 }}
                className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-72 hover:scale-110 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-2xl"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`} 
                    alt="team-member"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-lg text-gray-600">CEO</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
