import React from 'react';

export const PlansAndPricing: React.FC = () => {
    const plans = [
        {
            title: "Personal Wellness Set-Up",
            price: "£149 one-off",
            description: "A complete, personalised starting blueprint designed just for you.",
            features: [
                "Free consultation call, 20–30 minutes",
                "Detailed questionnaire and full review by Enes",
                "8–12 week personalised workout plan in your portal",
                "Nutrition guidance and calorie or portion tools",
                "Mindfulness and mindset exercises tailored to your challenges",
                "One follow-up check-in call during your first month"
            ],
            isPopular: false
        },
        {
            title: "Coaching Membership Lite",
            price: "£69 per month",
            description: "Stay accountable with monthly check-ins and plan updates.",
            features: [
                "Ongoing access to your Terra Wellness portal",
                "Monthly plan refresh based on your progress",
                "One 30-minute online check-in per month",
                "Message support inside the portal, replies within 48 hours on weekdays"
            ],
            isPopular: true
        },
        {
            title: "Coaching Membership Plus",
            price: "£109 per month",
            description: "Closer support for bigger goals and more frequent feedback.",
            features: [
                "Everything in Coaching Membership Lite",
                "Weekly written check-ins with feedback from Enes",
                "One additional 15-minute call each month for when you hit a wall",
                "Priority replies to portal messages within 24 hours on weekdays"
            ],
            isPopular: false
        }
    ];

    return (
        <section id="plans-pricing" className="py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <p className="text-xs sm:text-sm text-terracotta-600 font-semibold tracking-wide uppercase mb-2">
                        Plans and Pricing
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 font-serif">
                        Choose the level of support that suits you.
                    </h2>
                    <p className="mt-4 lg:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-stone-600 leading-relaxed">
                        Every plan starts with a free chat. Pricing is transparent so you know what you are committing to before you begin.
                    </p>
                </div>

                {/* Plan Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-2 ${plan.isPopular ? 'border-sage-600' : 'border-stone-200'
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.isPopular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sage-600 text-white">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl lg:text-[24px] font-semibold text-stone-900 mb-2 font-serif">
                                {plan.title}
                            </h3>

                            {/* Price */}
                            <p className="text-3xl font-bold text-sage-700 mb-3">
                                {plan.price}
                            </p>

                            {/* Description */}
                            <p className="text-stone-600 mb-6 leading-relaxed">
                                {plan.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm text-stone-600">
                                        <svg className="w-5 h-5 text-sage-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* In-Person Sessions Block */}
                <div className="bg-stone-50 rounded-2xl p-6 lg:p-8 border border-stone-200">
                    <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 mb-3 font-serif">
                        In-person sessions in Buckinghamshire
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-4">
                        For clients in Buckinghamshire, Enes offers a limited number of in-person personal training sessions, subject to availability. These can be combined with online coaching or booked separately.
                    </p>
                    <p className="text-lg font-semibold text-sage-700">
                        From £45 per 60-minute session. Block bookings available for better value.
                    </p>
                </div>
            </div>
        </section>
    );
};
