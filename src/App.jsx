import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import SectionLoader from './components/SectionLoader';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const MeetAI = lazy(() => import('./pages/projects/MeetAI'));
const Syeen = lazy(() => import('./pages/projects/Syeen'));
const EcommerceProject = lazy(() => import('./pages/projects/EcommerceProject'));
const Foncentra = lazy(() => import('./pages/projects/Foncentra'));
const EmpireTaxSolutions = lazy(() => import('./pages/projects/EmpireTaxSolutions'));
const ApertureFutures = lazy(() => import('./pages/projects/ApertureFutures'));
const WordyApp = lazy(() => import('./pages/projects/WordyApp'));
const AllProjects = lazy(() => import('./pages/AllProjects'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SpeedInsights />
      <Analytics />
      <CustomCursor />
      <div className="min-h-screen bg-bg-main dark:bg-darkbg transition-colors duration-300">
        <Suspense fallback={<SectionLoader />}>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Home />
              </>
            } />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/project/meet-ai" element={<MeetAI />} />
            <Route path="/project/syeen" element={<Syeen />} />
            <Route path="/project/ecommerce" element={<EcommerceProject />} />
            <Route path="/project/foncentra" element={<Foncentra />} />
            <Route path="/project/empire-tax-solutions" element={<EmpireTaxSolutions />} />
            <Route path="/project/aperture-futures" element={<ApertureFutures />} />
            <Route path="/project/wordy-app" element={<WordyApp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
