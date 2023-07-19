import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/UI/Navbar";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Restaurant from "./Components/Pages/Restaurant";
import RestCard from "./Components/Pages/RestCard";

function App() {
  return (
    <>
      <Router basename="/food_app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/restaurants" element={<Restaurant />} />
          <Route path="/restaurants/restaurant_card" element={<RestCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
