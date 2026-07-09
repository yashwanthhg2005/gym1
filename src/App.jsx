import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Plans from './components/Plans';
import Trainers from './components/Trainers';
import BmiCalculator from './components/BmiCalculator';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time to show animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="relative min-h-screen">
          <div className="noise-bg pointer-events-none z-50"></div>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Programs />
            <Plans />
            <Trainers />
            <BmiCalculator />
            <Testimonials />
            <Gallery />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
