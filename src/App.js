import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Context/Context';
import Navbar from "./Components/UI/Navbar";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Restaurant from "./Components/Pages/Restaurant";
import RestCard from "./Components/Pages/RestCard";
import Checkout from "./Components/Pages/Checkout";

function App() {
  return (
    <>
      <AppProvider>
        <Router basename="/food_app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/restaurants" element={<Restaurant />} />
            <Route path="/restaurants/restaurant_card" element={<RestCard />} />
            <Route path="/restaurants/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
