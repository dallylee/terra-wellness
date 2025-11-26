import React from 'react';

export const IsThisForMe: React.FC = () => {
    const cards = [
        {
            title: "New to exercise or starting over",
            body: "For people who do not exercise at all, feel intimidated by the gym, or have never had a plan of their own.",
            bullets: [
                "Safe, judgment-free start from your current level",
                "Home or gym options with simple, clear instructions",
                "Learn how to move without feeling watched or embarrassed"
            ],
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Home workouts and low-impact stability",
            body: "Ideal for middle-aged and older adults who prefer to train at home, want to feel steadier, and need exercises that respect their joints.",
            bullets: [
                "Gentle strength and balance work tailored to your abilities",
                "Focus on core, stability, and everyday movements",
                "Plans that fit around health conditions and injuries"
            ],
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            title: "Gym members who are stuck",
            body: "For younger and experienced gym goers who work hard but are not seeing the progress they expected.",
            bullets: [
                "Form checks and technique fixes for key lifts",
                "Progressive overload plans to break plateaus",
                "Guidance for muscle gain, fat loss, or performance goals"
            ],
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: "Women who want strength without the noise",
            body: "Support for women at every age, including postpartum and perimenopause, who want to feel stronger and more at home in their bodies.",
            bullets: [
                "Plans tailored to hormonal and physiological needs",
                "Build strength without chasing unrealistic body ideals",
                "Compassionate support around stress, body image, and energy"
            ],
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        }
    ];

    return (
        <section id="is-this-4me" className="py-16 lg:py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <p className="text-xs sm:text-sm text-terracotta-600 font-semibold tracking-wide uppercase mb-2">
                        Who I Help
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 font-serif">
                        Support for every stage of life and fitness.
                    </h2>
                    <p className="mt-4 lg:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-stone-600 leading-relaxed">
                        Terra Wellness is built for people who want to feel better in their bodies without feeling judged. Whether you have never exercised, feel lost in the gym, or want to move with confidence as you age, your plan is designed around your reality, not around a generic template.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-sage-100 text-sage-700 mb-4">
                                {card.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl lg:text-[24px] font-semibold text-stone-900 mb-3 font-serif">
                                {card.title}
                            </h3>

                            {/* Body */}
                            <p className="text-stone-600 leading-relaxed mb-4">
                                {card.body}
                            </p>

                            {/* Bullets */}
                            <ul className="space-y-2">
                                {card.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start text-sm text-stone-600">
                                        <svg className="w-5 h-5 text-sage-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
