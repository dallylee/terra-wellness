import React, { useState, useRef } from 'react';
import { Button } from './Button';
import { generateEnesGymImage } from '../services/geminiService';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  // Default placeholder that matches Enes's description (Bald, Beard, Fit)
  const [heroImage, setHeroImage] = useState("https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80");
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsGenerating(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
        const base64Data = base64String.split(',')[1];

        const generatedImage = await generateEnesGymImage(base64Data);
        if (generatedImage) {
          setHeroImage(generatedImage);
        }
        setIsGenerating(false);
      };
    } catch (error) {
      console.error("Failed to generate image", error);
      setIsGenerating(false);
      alert("Failed to generate image. Please check your API key and try again.");
    }
  };

  return (
    <div className="relative overflow-hidden bg-stone-50 pt-20 pb-12 lg:pt-48 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-sm font-medium mb-4 lg:mb-6">
              <span className="flex h-2 w-2 rounded-full bg-sage-600 mr-2"></span>
              London Based & Online Coaching
            </div>
            <h1 className="text-3xl tracking-tight font-extrabold text-stone-900 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif">
              <span className="block xl:inline">Not just a workout plan.</span>{' '}
              <span className="block text-sage-700 mt-1 lg:mt-2 italic">A path to your best self.</span>
            </h1>
            <p className="mt-4 text-base text-stone-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed">
              I believe in a holistic approach to wellbeing. Whether you're a busy professional, a beginner, or looking to regain your mobility, I offer affordable, personalized care crafted specifically for <em>your</em> life. No cookie-cutter solutions here.
            </p>
            <div className="mt-6 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-3">
              <Button onClick={onContactClick}>
                Start with a Free Chat
              </Button>
              <a href="#meet-enes" className="inline-flex items-center justify-center px-6 py-3 border border-stone-300 text-base font-medium rounded-full text-stone-700 bg-white hover:bg-stone-50 transition-all duration-300">
                Learn my approach
              </a>
            </div>
          </div>
          <div className="mt-8 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center justify-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md overflow-hidden group">
              <div className="absolute inset-0 bg-sage-900/10 mix-blend-multiply pointer-events-none"></div>

              {isGenerating ? (
                <div className="w-full h-[350px] sm:h-[450px] lg:h-[500px] bg-stone-200 animate-pulse flex flex-col items-center justify-center text-stone-500">
                  <svg className="w-12 h-12 mb-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="font-medium">Designing your custom Enes...</span>
                </div>
              ) : (
                <img
                  className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                  src={heroImage}
                  alt="Enes coaching a client warmly"
                />
              )}

              {/* AI Generation Trigger (Hidden/Subtle) */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-white/90 backdrop-blur-sm text-xs font-medium text-stone-600 px-3 py-2 rounded-lg shadow-lg hover:bg-white flex items-center gap-2"
                  title="Admin: Generate AI Branding Image"
                >
                  <svg className="w-4 h-4 text-terracotta-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Regenerate Look
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            {/* Decorative blobls */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-terracotta-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-sage-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};