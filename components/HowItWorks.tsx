import React from 'react';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            number: "1",
            title: "Free chat",
            body: "You book a free, friendly conversation with Enes to talk about your life, health history, worries, and goals. No scripts, no pressure. You decide if this feels like the right fit for you."
        },
        {
            number: "2",
            title: "Questionnaire and plan design",
            body: "Enes sends you a detailed questionnaire about your age, daily routine, injuries, confidence level, and what you hope to achieve. Using your answers, he designs a fully personalised plan instead of copying a generic template."
        },
        {
            number: "3",
            title: "Your private Terra Wellness page",
            body: "You receive login details for your own page on the Terra Wellness site. There you find your workout plan, progress trackers, nutrition guidance, calorie or portion tools, mindfulness exercises, and a direct way to message Enes when you need support."
        }
    ];

    return (
        <section id="how-it-works" className="py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <p className="text-xs sm:text-sm text-terracotta-600 font-semibold tracking-wide uppercase mb-2">
                        How It Works
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 font-serif">
                        Personal coaching in three simple steps.
                    </h2>
                    <p className="mt-4 lg:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-stone-600 leading-relaxed">
                        The process is simple. You have a free conversation, share your story, and Enes builds a realistic plan that lives in your own private space on the Terra Wellness site.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Step Number */}
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sage-600 text-white text-2xl font-bold mb-4 mx-auto md:mx-0">
                                {step.number}
                            </div>

                            {/* Connector Line (desktop only) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-sage-200" style={{ width: 'calc(100% - 64px)' }}></div>
                            )}

                            {/* Content */}
                            <div className="text-center md:text-left">
                                <p className="text-xs sm:text-sm text-sage-600 font-semibold uppercase tracking-wide mb-2">
                                    Step {step.number}
                                </p>
                                <h3 className="text-xl sm:text-2xl lg:text-[24px] font-semibold text-stone-900 mb-3 font-serif">
                                    {step.title}
                                </h3>
                                <p className="text-stone-600 leading-relaxed">
                                    {step.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Visual Element - Portal Mock-up */}
                <div className="mt-12 lg:mt-16 bg-gradient-to-br from-sage-50 to-stone-50 rounded-2xl p-8 lg:p-12 border border-stone-200">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
                                <h4 className="text-lg font-semibold text-stone-900">Your Terra Wellness Dashboard</h4>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="bg-sage-50 rounded-lg p-4 border border-sage-200">
                                    <p className="text-sm font-semibold text-sage-900 mb-1">Today's Plan</p>
                                    <p className="text-xs text-sage-600">Upper body strength</p>
                                </div>
                                <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                                    <p className="text-sm font-semibold text-stone-900 mb-1">Workouts</p>
                                    <p className="text-xs text-stone-600">12 completed this month</p>
                                </div>
                                <div className="bg-terracotta-50 rounded-lg p-4 border border-terracotta-200">
                                    <p className="text-sm font-semibold text-terracotta-900 mb-1">Progress</p>
                                    <p className="text-xs text-terracotta-600">+5kg on squat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
