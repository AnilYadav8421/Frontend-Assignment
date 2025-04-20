import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import DigitalMastery from './components/DigitalMastery';
import Services from './components/Services';
import Marketing from './components/Marketing';
import PropertyInq from './components/PropertyInq';
import Experties from './components/Experties';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Nav />
      <Hero />
      <DigitalMastery />
      <Services />
      <Marketing />
      <PropertyInq />
      <Experties />
      <Testimonial />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
