import React, { useState } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

const Loginpage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Validation & Fake Login Handler
  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please fill all fields");
      setEmail(""); // Clear email value
      setPassword(""); // Clear password value
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      setEmail(""); // Clear email value
      setPassword(""); // Clear password value
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      setEmail(""); // Clear email value
      setPassword(""); // Clear password value
      return;
    }

    // Fake Success
    toast.success("Logged in successfully!");
    setEmail(""); // Clear email value
    setPassword(""); // Clear password value
    setIsSubmitted(true); // Mark form as successfully submitted
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-900">
      <Toaster position="top-center" />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        {/* Title with Lock Icons */}
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-6 text-white flex items-center justify-center gap-2"
        >
          <LockIcon />
          Login
          <LockIcon />
        </motion.h2>

        {/* Conditionally render Email and Password fields */}
        {!isSubmitted && (
          <>
            {/* Email Input with Original Email Icon */}
            <div className="relative mb-4">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                <EmailIcon />
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-white bg-gray-800 placeholder-gray-400"
                value={email} // The value is tied to the state, so it will clear when reset
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="relative mb-4">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                <LockIcon small />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-white bg-gray-800 placeholder-gray-400"
                value={password} // The value is tied to the state, so it will clear when reset
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Show/Hide Password Button */}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-500 cursor-pointer select-none"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-6">
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline hover:text-blue-600 transition"
              >
                Forgot Password?
              </a>
            </div>
          </>
        )}

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
          onClick={handleLogin}
        >
          Sign In
        </motion.button>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline hover:text-blue-600"
            >
              Sign up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Loginpage;

// 🔒 Lock Icon Component
const LockIcon = ({ small }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={small ? "h-5 w-5" : "h-6 w-6"}
    viewBox="0 0 448 512"
    fill="currentColor"
  >
    <path d="M400 192h-24v-72C376 53.7 322.3 0 256 0S136 53.7 136 120v72H112c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zM176 120c0-44.2 35.8-80 80-80s80 35.8 80 80v72H176v-72z" />
  </svg>
);

// 📧 Email Icon
const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 512 512"
    fill="#ffffff" // Default color
  >
    <path
      d="M502.3 190.8L327.4 338c-15.9 
    13.7-39.8 13.7-55.7 0L9.7 
    190.8C3.9 186.2 0 179.1 0 
    171.6c0-11.6 9.4-21 21-21h470c11.6 
    0 21 9.4 21 21 0 7.5-3.9 14.6-9.7 19.2z"
    />
  </svg>
);
