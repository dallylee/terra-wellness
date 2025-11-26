import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IsThisForMe } from './components/IsThisForMe';
import { HowItWorks } from './components/HowItWorks';
import { WhyTerra } from './components/WhyTerra';
import { MeetEnes } from './components/MeetEnes';
import { PlansAndPricing } from './components/PlansAndPricing';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onContactClick={scrollToContact} />
      <Hero onContactClick={scrollToContact} />
      <IsThisForMe />
      <HowItWorks />
      <WhyTerra />
      <MeetEnes />
      <PlansAndPricing />
      <Testimonials />
      <div ref={contactRef as React.RefObject<HTMLDivElement>}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;