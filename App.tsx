import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onContactClick={scrollToContact} />
      <main className="flex-grow">
        <Hero onContactClick={scrollToContact} />
        <Philosophy />
        <Services />
        <Testimonials />
        <div ref={contactRef as React.RefObject<HTMLDivElement>}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;