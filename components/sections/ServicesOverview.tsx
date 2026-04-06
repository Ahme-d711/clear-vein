"use client"

import { Fade } from "react-awesome-reveal";

export default function ServicesOverview() {
    return (
        <section className="bg-[#F8F9FF] py-24 lg:py-32 border-b border-gray-100">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-start">
                    {/* Left Side: Headline (1/3) */}
                    <Fade direction="up" triggerOnce duration={800} className="lg:col-span-2">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
                            Comprehensive Venous Assessment and Minimally Invasive Treatment.
                        </h2>
                    </Fade>

                    {/* Right Side: Description Content (2/3) */}
                    <div className="space-y-8 lg:col-span-3">
                        <Fade direction="up" triggerOnce delay={200} duration={800}>
                            <div className="relative pl-8 border-l-4 border-primary p-5 bg-white">
                                <p className="text-base md:text-lg leading-relaxed">
                                    We provide a gold-standard approach to vein health. Every patient journey begins with a 
                                    <span className="text-primary font-bold mx-2">
                                        comprehensive duplex ultrasound
                                    </span>
                                    assessment to map the underlying venous anatomy precisely.
                                </p>
                            </div>
                        </Fade>

                        <Fade direction="up" triggerOnce delay={400} duration={800}>
                            <p className="text-base md:text-lg leading-relaxed font-light max-w-2xl">
                                All procedures are performed under local anaesthetic as day-case treatments, allowing you 
                                to return to your normal routine with minimal downtime. We prioritize evidence-based 
                                guidelines and surgical precision.
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}
