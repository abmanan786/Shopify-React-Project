import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import About from "./pages/About";
import Product from "./pages/Product";
import Loginpage from "./pages/Loginpage";
import { ThemeProvider } from "./Component/ThemeContext";

const Productpage = lazy(() => import("./pages/Productpage"));

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<div className="text-center p-10 text-xl">Loading...</div>}>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/product/:id" element={<Productpage />} />
            <Route path="/products" element={<Product />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
