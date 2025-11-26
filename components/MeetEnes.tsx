import React from 'react';
import enesImage from '../src/assets/meet-enes-gym.png';

export const MeetEnes: React.FC = () => {
    return (
        <section id="meet-enes" className="py-16 lg:py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Image - Left Side */}
                    <div className="relative mb-8 lg:mb-0">
                        <div className="absolute inset-0 bg-sage-100 rounded-3xl transform -rotate-3 scale-105"></div>
                        <img
                            src={enesImage}
                            alt="Enes, Terra Wellness coach, smiling in a gym setting"
                            className="relative rounded-3xl shadow-xl w-full object-cover h-[350px] sm:h-[450px] lg:h-[550px]"
                        />
                    </div>

                    {/* Text Content - Right Side */}
                    <div>
                        <p className="text-xs sm:text-sm text-terracotta-600 font-semibold tracking-wide uppercase mb-2">
                            Meet Enes
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 mb-6 font-serif">
                            A grounded coach with roots in hard work.
                        </h2>

                        <div className="space-y-4 text-stone-600 leading-relaxed">
                            <p>
                                I am Enes, the coach behind Terra Wellness. My approach to fitness grew from the simple, hardworking traditions of Croatia, spending long days on the land and learning how movement, food, and routine shape the way we feel in our bodies.
                            </p>

                            <p>
                                For over 20 years, staying active has not just been a job for me, it has been a way of life. That experience taught me that real change is not about quick fixes, it is about consistency, patience, and building habits you can actually keep.
                            </p>

                            <p>
                                Terra Wellness is my passion project. I work with people who feel nervous, stuck, or tired of one-size-fits-all plans. Whether you are a complete beginner, an elder wanting to stay steady on your feet, or a seasoned gym goer chasing bigger goals, I build a plan that respects where you are and where you want to go.
                            </p>
                        </div>

                        {/* Quote Box */}
                        <div className="mt-8 bg-sage-50 border-l-4 border-sage-600 p-6 rounded-r-xl">
                            <p className="font-serif text-lg italic text-sage-900">
                                "Health is built like a garden: with care, consistency, and patience."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
