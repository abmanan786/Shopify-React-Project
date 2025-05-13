import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-extrabold text-green-400 tracking-wide">
            MyWebsite
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Products", path: "/products" },
              { label: "Testimonials", path: "#testimonials", anchor: true },
            ].map(({ label, path, anchor }, i) => (
              <li key={i} className="relative">
                {anchor ? (
                  <a
                    href={path}
                    className="group relative inline-block text-white font-medium transition-transform duration-300 transform hover:scale-105 focus:scale-105 active:scale-105 "
                  >
                    {label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-500 group-hover:w-full group-focus:w-full group-active:w-full"></span>
                    <span className="absolute inset-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 opacity-0 transition duration-300 blur-sm text-green-400">
                      {label}
                    </span>
                  </a>
                ) : (
                  <Link
                    to={path}
                    className="group relative inline-block text-white font-medium transition-transform duration-300 transform hover:scale-105 focus:scale-105 active:scale-105"
                  >
                    {label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-500 group-hover:w-full group-focus:w-full group-active:w-full"></span>
                    <span className="absolute inset-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 opacity-0 transition duration-300 blur-sm text-green-400">
                      {label}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="dark bg-gray-900 text-white pt-24">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8')] bg-cover bg-center opacity-10 dark:opacity-20 z-0"></div>

          <motion.div
            className="z-10 max-w-xl text-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold">
              The Best E-Commerce Platform
              <br />
              <span className="text-green-600 dark:text-green-400">
                Powered by AI
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Experience the future of online shopping with our cutting-edge
              e-commerce platform powered by AI.
            </p>
            <motion.div
              className="mt-6 flex justify-center w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link to= "/products"> <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded shadow hover:bg-green-700 transition">
                See Our Products
              </button> </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="px-6 py-20 text-center bg-gray-50 dark:bg-gray-950"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            We are passionate about empowering people through technology. Our
            mission is to create sleek, fast, and reliable digital tools that
            help individuals and teams unlock their full potential. Whether
            you’re a student, developer, or entrepreneur, we build with you in
            mind.
          </p>
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          className="px-6 py-20 text-center dark:bg-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <FeatureCard
              title="⚡ Speed"
              desc="Lightning-fast performance for every task."
            />
            <FeatureCard
              title="🔋 Battery"
              desc="All-day power to keep you going."
            />
            <FeatureCard
              title="🌐 Connectivity"
              desc="Stay connected with the latest tech."
            />
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          id="testimonials"
          className="bg-white dark:bg-gray-900 px-6 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            What People Are Saying
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial
              name="Aisha Khan"
              quote="Fast, stylish, and powerful—just what I needed!"
            />
            <Testimonial
              name="Rahul Verma"
              quote="Amazing experience. It’s more than just a machine."
            />
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-10 px-6 text-center dark:bg-black">
          <p>
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Made with ❤️ using React, Tailwind & Framer Motion
          </p>
        </footer>
      </div>
    </>
  );
};

// Reusable FeatureCard Component
const FeatureCard = ({ title, desc }) => (
  <motion.div
    className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
      {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300">{desc}</p>
  </motion.div>
);

// Reusable Testimonial Component
const Testimonial = ({ name, quote }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400"
    whileHover={{ scale: 1.03 }}
  >
    <p className="italic text-gray-700 dark:text-gray-300">"{quote}"</p>
    <h4 className="mt-4 font-semibold text-gray-800 dark:text-white">
      — {name}
    </h4>
  </motion.div>
);

export default Home;
