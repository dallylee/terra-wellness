import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-serif font-bold mb-4">ENES.</h3>
          <p className="text-sm leading-relaxed">
            Helping you build a healthier, happier life through personalized fitness, nutrition, and mindset coaching.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>One-on-One London</li>
            <li>Online Coaching</li>
            <li>Elderly Stability</li>
            <li>Post-Rehab Support</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>London, UK</li>
            <li>consultation@enes-fitness.com</li>
            <li className="mt-4 flex gap-4">
              {/* Social placeholders */}
              <div className="w-6 h-6 bg-stone-700 rounded-full"></div>
              <div className="w-6 h-6 bg-stone-700 rounded-full"></div>
              <div className="w-6 h-6 bg-stone-700 rounded-full"></div>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-xs text-center">
        &copy; {new Date().getFullYear()} Enes Holistic Health. All rights reserved.
      </div>
    </footer>
  );
};