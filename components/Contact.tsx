import React, { useState } from 'react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-900">Let's Chat (Free)</h2>
          <p className="mt-4 text-lg text-stone-600">
            No pressure, no sales pitch. Just a conversation about where you are and where you want to be.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-sage-50 border border-sage-200 rounded-2xl p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-sage-100 mb-4">
              <svg className="h-6 w-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-lg font-medium text-sage-900">Message received!</h3>
            <p className="mt-2 text-stone-600">Thanks for reaching out. I'll get back to you personally within 24 hours.</p>
            <button onClick={() => setIsSubmitted(false)} className="mt-6 text-sm font-medium text-sage-600 hover:text-sage-500 underline">Send another message</button>
          </div>
        ) : (
          <form action="https://formspree.io/f/enes.custic@gmail.com" method="POST" className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-stone-300 shadow-sm focus:border-sage-500 focus:ring-sage-500"
                value={formState.name}
                onChange={e => setFormState({ ...formState, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-stone-300 shadow-sm focus:border-sage-500 focus:ring-sage-500"
                value={formState.email}
                onChange={e => setFormState({ ...formState, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700">What's on your mind?</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-stone-300 shadow-sm focus:border-sage-500 focus:ring-sage-500"
                placeholder="e.g. I want to start gym but I'm nervous..."
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Request Free Consultation
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};