import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
