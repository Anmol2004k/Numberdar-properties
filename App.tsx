
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <PropertyList />
        <About />
        <Contact />
      </main>

      <Footer />
      
      {/* Timed Requirement Form */}
      <PopupForm />
    </div>
  );
}

export default App;
