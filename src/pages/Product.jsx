import React, { useContext } from "react";
import products from "./data";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { motion } from "framer-motion";
import { ThemeContext } from "../Component/ThemeContext";

const Product = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        {/* Page content wrapper */}
        <div className="container mx-auto px-4 py-8">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className={`text-3xl font-extrabold mb-8 text-center tracking-wider ${
              darkMode
                ? "bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text drop-shadow-md"
                : "text-slate-600"
            }`}
          >
            Our Amazing Products
          </motion.h1>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.length > 0 ? (
              products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className={`border rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    darkMode
                      ? "bg-gray-800 text-white border-gray-700"
                      : "bg-white text-black border-gray-200"
                  }`}
                >
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-fit h-64 object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  </Link>
                  <div className="h-[1px] mx-4 my-3 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 opacity-70" />
                  <div className="p-4">
                    <p
                      className={`text-sm mb-1 uppercase tracking-wide font-semibold ${
                        darkMode ? "text-pink-400" : "text-gray-500"
                      }`}
                    >
                      Beauty
                    </p>
                    <Link to={`/product/${product.id}`}>
                      <h3
                        className={`text-lg font-semibold hover:text-pink-500 transition duration-300 ease-in-out ${
                          darkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-1 mt-3 mb-2 group">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-[22px] transition-all duration-300 ${
                            i < Math.floor(product.rating)
                              ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 drop-shadow"
                              : darkMode
                              ? "text-gray-600"
                              : "text-gray-300"
                          } group-hover:scale-110`}
                          title={i < product.rating ? "Filled Star" : "Empty Star"}
                        >
                          ★
                        </span>
                      ))}
                      <span
                        className={`text-sm ml-2 italic group-hover:text-pink-500 transition-all duration-200 ${
                          darkMode ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        ({product.reviews || Math.floor(Math.random() * 400 + 50)} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xl font-semibold text-blue-600">
                        ${product.price}
                      </p>
                      <del
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-400"
                        }`}
                      >
                        ${product.oldprice}
                      </del>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <Link
                        className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
                        to={`/product/${product.id}`}
                      >
                        View Details
                      </Link>
                      <Link to={"/cart"}>
                        <button
                          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                          type="button"
                          title="ADD TO CART"
                        >
                          🛒
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p
                className={`text-center ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                No products available
              </p>
            )}
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Product;
