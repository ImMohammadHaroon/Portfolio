import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MeetAI from './pages/projects/MeetAI';
import Syeen from './pages/projects/Syeen';
import EcommerceProject from './pages/projects/EcommerceProject';
import Foncentra from './pages/projects/Foncentra';
import EmpireTaxSolutions from './pages/projects/EmpireTaxSolutions';
import ApertureFutures from './pages/projects/ApertureFutures';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SpeedInsights />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
            </>
          } />
          <Route path="/project/meet-ai" element={<MeetAI />} />
          <Route path="/project/syeen" element={<Syeen />} />
          <Route path="/project/ecommerce" element={<EcommerceProject />} />
          <Route path="/project/foncentra" element={<Foncentra />} />
          <Route path="/project/empire-tax-solutions" element={<EmpireTaxSolutions />} />
          <Route path="/project/aperture-futures" element={<ApertureFutures />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
