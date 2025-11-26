import React from 'react';
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
  const scrollToContact = () => {
    document.getElementById('free-chat')?.scrollIntoView({ behavior: 'smooth' });
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;