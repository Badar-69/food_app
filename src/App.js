import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../src/App.css'
import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

  function PageWrapper({ title, children }) {
    const location = useLocation();

    useEffect(() => {
      document.title = `Quickeat - ${title}`;
    }, [location.pathname, title]);

    return children;
  }


  return (
    <>
      <AppProvider>
        <Router basename="/food_app">
          <div className="background-container">
            <Navbar />
            <Routes>
              <Route path="/" element={<PageWrapper title="Home"><Home /></PageWrapper>} exact />
              <Route path="/about" element={<PageWrapper title="About Us"><AboutUs /></PageWrapper>} />
              <Route path="/restaurants" element={<PageWrapper title="Restaurants"><Restaurant />
              </PageWrapper>} />
              <Route path="/restaurants/restaurant_card" element={<PageWrapper title="Restaurant Card"><RestCard />
              </PageWrapper>} />
              <Route path="/restaurants/checkout" element={<PageWrapper title="Checkout"><Checkout />
              </PageWrapper>} />
              <Route path="/pages/blog" element={<PageWrapper title="Blog"><Blog />
              </PageWrapper>} />
              <Route path="/pages/single_blog" element={<PageWrapper title="Single Blog"><Singleblog />
              </PageWrapper>} />
              <Route path="/pages/services" element={<PageWrapper title="Services"><Services />
              </PageWrapper>} />
              <Route path="/pages/faq" element={<PageWrapper title="FAQ"><Faq />
              </PageWrapper>} />
              <Route path="/pages/pricing_table" element={<PageWrapper title="Pricing Table"><Pricingtable />
              </PageWrapper>} />
              <Route path="/pages/become_a_partner" element={<PageWrapper title="Become A Partner"><BecApart />
              </PageWrapper>} />
              <Route path="/pages/404" element={<PageWrapper title="404"><Errorpg />
              </PageWrapper>} />
              <Route path="/contacts" element={<PageWrapper title="Contact Us"><Contact />
              </PageWrapper>}/>
            </Routes>
          </div>

        </Router>
      </AppProvider>
    </>
  );
}

export default App;
