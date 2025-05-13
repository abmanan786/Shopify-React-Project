import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // Importing check icon

const CartPage = () => {
  // Get cart items from localStorage
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // State to manage modal visibility
  const [showModal, setShowModal] = useState(false);
  const [showOrderPlacedModal, setShowOrderPlacedModal] = useState(false);
  const [scanning, setScanning] = useState(false);

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // Function to handle quantity change
  const handleQuantityChange = (id, type) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        if (type === "increase") {
          item.quantity += 1;
        } else if (type === "decrease" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to handle checkout
  const handleProceedToCheckout = () => {
    // Show the checkout modal instantly
    setShowModal(true);

    // Simulate the scanning animation after 1 second
    setTimeout(() => {
      setScanning(true);
    }, 1000); // 1 second delay before scanning animation starts

    // Simulate a delay for the scanning animation, then show the "order placed" success message
    setTimeout(() => {
      setScanning(false);
      setShowOrderPlacedModal(true);
      setShowModal(false); // Hide the checkout modal
      localStorage.removeItem("cart");

      // Reset the cart state to an empty array after the modal
      setTimeout(() => {
        setCartItems([]); // Clear cart after order is placed
      }, 2000); // Clear after 2 seconds
    }, 3000); // Simulate scanning time (3 seconds)
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showOrderPlacedModal) {
      // Automatically hide the "order placed" modal after 3 seconds
      const timer = setTimeout(() => {
        setShowOrderPlacedModal(false);
      }, 3000);

      // Cleanup the timer on unmount or when modal is closed
      return () => clearTimeout(timer);
    }
  }, [showOrderPlacedModal]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Your Shopping Cart
        </h1>

        {cartItems.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                className="cart-item flex flex-wrap items-center justify-between bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-6 w-full sm:w-3/5 md:w-2/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-600">
                      Total: ${item.price * item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 w-full sm:w-2/5 md:w-1/5 mt-4 sm:mt-0">
                  {/* Decrease button */}
                  <button
                    onClick={() => handleQuantityChange(item.id, "decrease")}
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
                  >
                    <span className="font-bold">-</span>
                  </button>

                  {/* Quantity Display */}
                  <motion.span
                    className="text-lg text-gray-700"
                    key={item.quantity}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.quantity}
                  </motion.span>

                  {/* Increase button */}
                  <button
                    onClick={() => handleQuantityChange(item.id, "increase")}
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
                  >
                    <span className="font-bold">+</span>
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Cart Total */}
            <motion.div
              className="cart-total bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-8 rounded-lg mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-3xl font-semibold mb-4">
                Total Price: ${calculateTotal()}
              </h3>
              <button
                className="mt-4 bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.p
            className="text-xl text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Your cart is empty
          </motion.p>
        )}
      </div>

      {/* Checkout Modal Pop-up */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <motion.div
            className="bg-white p-10 rounded-lg shadow-xl max-w-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()} // Prevents closing on click inside the modal
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Checking Out...</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your order is being processed. Thank you for shopping with us!
            </p>
            <motion.div
              className="w-12 h-12 border-4 border-dotted border-blue-500 rounded-full animate-spin mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
            <p className="mt-4 text-gray-600">Redirecting to payment page...</p>
          </motion.div>
        </div>
      )}

      {/* Order Placed Confirmation Modal */}
      {showOrderPlacedModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowOrderPlacedModal(false)}
        >
          <motion.div
            className="bg-white p-10 rounded-lg shadow-xl max-w-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Order Placed Successfully!
            </h2>
            <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your purchase! We will process your order shortly.
            </p>
            <motion.div
              className="w-12 h-12 border-4 border-dotted border-green-500 rounded-full animate-spin mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
            <p className="mt-4 text-gray-600">Redirecting to home...</p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CartPage;
