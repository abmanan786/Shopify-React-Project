import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import products from "./data";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useParams, useNavigate } from "react-router-dom";

const Productpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  // Handle dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItemIndex = existingCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex >= 0) {
      existingCart[existingItemIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    navigate("/cart");
  };

  // Get related products (products in the same category)
  const relatedProducts = products.filter(
    (p) => p.Category === product.Category && p.id !== product.id
  );

  // Toggle dark mode manually
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Navbar />

      {/* Breadcrumb and Back Button (Mobile Only) */}
      <div className="lg:hidden max-w-screen-xl mx-auto px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Home
        </button>
        <span className="text-gray-500">/</span>
        <button
          onClick={() => navigate("/products")}
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Products
        </button>
        <span className="text-gray-500">/</span>
        <span className="text-gray-800">{product.name}</span>
      </div>

      {/* Dark Mode Toggle Button */}
      {/* Main Product Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-screen-xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-10"
      >
        {/* Product Image (always on top in mobile) */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            className="w-full max-w-[350px] rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            src={product.image}
            alt={product.name}
          />
        </motion.div>

        {/* Product Details */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-extrabold mt-4  text-gray-800">
            {product.name}
          </h1>

          <div className="rating text-yellow-500 mt-2">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                {i < product.rating ? "★" : "☆"}
              </span>
            ))}
          </div>

          <p className="text-lg font-semibold mt-2">
            <strong>Price:</strong> ${product.price}
          </p>

          <div className="old-price text-slate-500 mt-1">
            <del>${product.oldprice}</del>
            <span className="ml-4 font-bold text-lg">${product.price}</span>
          </div>

          <p className="mt-2 text-sm">
            <strong>Brand:</strong> {product.Brand}
          </p>
          <p className="mt-1 text-sm">
            <strong>Category:</strong> {product.Category}
          </p>
          <p className="mt-1 text-sm">
            <strong>Stock:</strong> {product.Stock}
          </p>

          <div className="about-product mt-4">
            <strong>About the product:</strong>
            <p className="mt-2">{product.About}</p>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <button
              onClick={handleAddToCart}
              className="flex items-center space-x-2 bg-pink-500 hover:bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-200"
            > 
            <p className="text-white">
            🛒 
            </p> 
              <span>Add to Cart</span>
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Related Products Section */}
      <motion.div
        className="max-w-screen-xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {relatedProducts.map((item) => (
            <motion.div
              key={item.id}
              className="product-card p-4 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-full h-[200px] object-cover rounded-md"
                src={item.image}
                alt={item.name}
              />
              <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
              <p className="mt-2 text-lg font-semibold">${item.price}</p>
              <button
                onClick={() => navigate(`/product/${item.id}`)}
                className="mt-4 py-2 px-6 bg-pink-500 hover:bg-blue-500 text-white rounded-full"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Productpage;
