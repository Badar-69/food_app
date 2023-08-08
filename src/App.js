import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../src/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Context/Context';
import Navbar from "./Components/UI/Navbar";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Restaurant from "./Components/Pages/Restaurant";
import RestCard from "./Components/Pages/RestCard";
import Checkout from "./Components/Pages/Checkout";
import Blog from "./Components/Pages/Blog";
import Singleblog from "./Components/Pages/Singleblog";
import Services from "./Components/Pages/Services";
import Faq from "./Components/Pages/Faq";
import Pricingtable from "./Components/Pages/PrcingTable";
import BecApart from './Components/Pages/BecomeApart'
import Errorpg from "./Components/Pages/Errorpg";
import Contact from "./Components/Pages/Contact";

function App() {
  // Aos
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <AppProvider>
        <Router basename="/food_app">
          <div className="background-container">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} exact />

              <Route path="/about" element={<AboutUs />} />
              <Route path="/restaurants" element={<Restaurant />} />
              <Route path="/restaurants/restaurant_card" element={<RestCard />} />
              <Route path="/restaurants/checkout" element={<Checkout />} />
              <Route path="/pages/blog" element={<Blog />} />
              <Route path="/pages/single_blog" element={<Singleblog />} />
              <Route path="/pages/services" element={<Services />} />
              <Route path="/pages/faq" element={<Faq />} />
              <Route path="/pages/pricing_table" element={<Pricingtable />} />
              <Route path="/pages/become_a_partner" element={<BecApart />} />
              <Route path="/pages/404" element={<Errorpg />} />
              <Route path="/contacts" element={<Contact />} />
            </Routes>
          </div>

        </Router>
      </AppProvider>
    </>
  );
}

export default App;
