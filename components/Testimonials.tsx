import React from 'react';
import { TestimonialProps } from '../types';

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, quote, image }) => (
  <div className="bg-stone-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-stone-100 relative group">
    <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
      <svg className="w-16 h-16 text-sage-900" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H7.19921C6.09464 16 5.19921 16.8954 5.19921 18V21H14.017ZM21 8C21 11.866 17.866 15 14 15H10C6.13401 15 3 11.866 3 8C3 4.13401 6.13401 1 10 1H14C17.866 1 21 4.13401 21 8ZM8 21V18C8 17.4477 8.44772 17 9 17C9.55228 17 10 17.4477 10 18V21H8Z" /></svg>
    </div>
    <div className="flex-1 relative z-10">
      <div className="flex text-terracotta-500 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
        ))}
      </div>
      <p className="text-stone-700 italic leading-relaxed text-base mb-6">
        "{quote}"
      </p>
    </div>

    <div className="flex items-center pt-6 border-t border-stone-200/60 mt-auto">
      <img
        className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm mr-4"
        src={image}
        alt={name}
      />
      <div>
        <h4 className="text-stone-900 font-serif font-bold text-lg leading-tight">{name}</h4>
        <p className="text-xs text-sage-700 font-medium uppercase tracking-wider mt-1">{role}</p>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Sarah K.",
      role: "Marketing Manager",
      quote: "Before finding Enes, I thought having a demanding London job meant I simply had 'no time' to exercise. Generic workout plans felt overwhelming and quickly failed. Enes completely changed that. He didn't just give me a plan; he custom-built it around my impossible schedule and preference for home workouts. It's not 'out of the bag'—it's tailor-made. I'm finally seeing real results, and I actually feel less stressed. It's truly a personalized, affordable solution that fits my real life.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Mark B.",
      role: "Financial Analyst",
      quote: "I was going to the gym 4-5 times a week for a year but was constantly frustrated because I wasn't seeing any changes. I needed a professional to take my journey to the 'next step.' Enes identified the missing pieces in my form, nutrition, and recovery almost immediately. His plan was tough, but every session felt purpose-driven and specific to my goals. The progress tracking is amazing, and I’m hitting PBs I never thought possible. A brilliant, affordable investment.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Jessica T.",
      role: "Teacher",
      quote: "I had never stepped foot in a gym and the whole process seemed terrifying. I needed support, not just an instruction manual. Enes offers a truly holistic approach to well-being. We started slow, focusing on core strength and mindfulness alongside my workouts. He's incredibly patient, non-judgmental, and genuinely passionate about my development. I've not only lost weight, but I feel stronger, more confident, and happier. This is the full package of support I needed.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&h=200"
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-terracotta-600 font-semibold tracking-wide uppercase text-sm">Client Stories</span>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stone-900 sm:text-4xl font-serif">
            Real Results, Real People
          </h2>
          <p className="mt-3 lg:mt-4 max-w-2xl text-lg lg:text-xl text-stone-600 mx-auto">
            My passion is your progress. Here is what the community has to say about our journey together.
          </p>
        </div>
        <div className="mt-12 lg:mt-16 grid gap-6 lg:gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};