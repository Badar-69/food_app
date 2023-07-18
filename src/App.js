import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/UI/Navbar";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Restaurant from "./Components/Pages/Restaurant";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/restaurants" element={<Restaurant />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
