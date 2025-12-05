import React from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import Authority from './components/Sections/Authority';
import PainPoints from './components/Sections/PainPoints';
import Solution from './components/Sections/Solution';
import Modules from './components/Sections/Modules';
import Differentiators from './components/Sections/Differentiators';
import About from './components/Sections/About';
import Footer from './components/Layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-brand-orange selection:text-white">
      <Header />
      <main>
        <Hero />
        <Authority />
        <PainPoints />
        <Solution />
        <Modules />
        <Differentiators />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;