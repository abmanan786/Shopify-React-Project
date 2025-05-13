import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = 3;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`px-6 py-4 shadow-md transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100"
      }`}
      style={{ position: "sticky", top: 0, zIndex: 10 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Top section: logo and toggle buttons */}
        <div className="w-full flex items-center justify-between">
          <motion.p
            className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent tracking-wide hover:scale-105 transition-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Shopify
          </motion.p>

          <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleDarkMode} className="text-2xl">
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button onClick={toggleMenu} className="text-3xl">
              ☰
            </button>
            <Link to="/cart" className="relative">
              <div className="p-2 border border-gray-400 rounded-full bg-white hover:bg-pink-500 hover:text-white transition-all transform hover:scale-110">
                🛒
              </div>
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5">
                {cartItemCount}
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Search bar */}
        <motion.div
          className="hidden md:flex w-full max-w-lg items-center mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <input
            type="text"
            placeholder="Search for a product"
            className="w-[85%] px-4 py-2 border ml-[-50px] border-blue-500 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button className="w-[15%] bg-blue-600 text-white py-[9px] rounded-r-md hover:bg-blue-700 transition-transform hover:scale-105">
            🔍
          </button>
        </motion.div>

        {/* ✅ Desktop nav links with HOME */}
        <motion.div
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link
            to="/"
            className="text-lg font-medium hover:text-green-500 hover:font-bold hover:underline underline-offset-4 transition-all duration-300"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-lg hover:text-pink-600 hover:underline underline-offset-4"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-lg hover:text-pink-600 hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            to="/login"
            className="text-lg hover:text-blue-600 hover:underline underline-offset-4"
          >
            Login
          </Link>
          <Link to="/cart" className="relative">
            <div className="p-2 border border-gray-400 rounded-full bg-white hover:bg-pink-500 hover:text-white transition-all transform hover:scale-110">
              🛒
            </div>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5">
              {cartItemCount}
            </span>
          </Link>
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </motion.div>
      </div>

      {/* ✅ Mobile dropdown menu with HOME */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden mt-4 flex flex-col gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-base font-medium hover:text-green-500 hover:font-bold hover:underline underline-offset-4 transition-all duration-300"
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={toggleMenu}
            className="text-base hover:text-pink-600 hover:underline underline-offset-4"
          >
            Products
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="text-base hover:text-pink-600 hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            to="/login"
            onClick={toggleMenu}
            className="text-base hover:text-blue-600 hover:underline underline-offset-4"
          >
            Login
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
