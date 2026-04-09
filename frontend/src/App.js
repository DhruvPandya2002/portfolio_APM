import React, { useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import { initAnalytics, trackPageView, identifyUser, trackTimeOnPage, trackSessionEnd } from './utils/analytics';

const Home = () => {
  const sessionStartTime = useRef(Date.now());
  const timeTrackerInterval = useRef(null);

  useEffect(() => {
    // Initialize Mixpanel
    initAnalytics();
    
    // Identify user and track page view
    const { userId, visitCount } = identifyUser();
    console.log(`👤 User: ${userId} | Visit #${visitCount}`);
    trackPageView();

    // Track time on page every 30 seconds
    timeTrackerInterval.current = setInterval(() => {
      const timeSpent = Math.floor((Date.now() - sessionStartTime.current) / 1000);
      trackTimeOnPage(timeSpent);
    }, 30000); // Every 30 seconds

    // Track session end on page unload
    const handleBeforeUnload = () => {
      const totalDuration = Math.floor((Date.now() - sessionStartTime.current) / 1000);
      trackSessionEnd(totalDuration);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      if (timeTrackerInterval.current) {
        clearInterval(timeTrackerInterval.current);
      }
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;