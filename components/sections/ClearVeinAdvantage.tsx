"use client"

import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { CheckCircle2 } from "lucide-react";

const advantages = [
    {
        title: "Duplex Ultrasound Included",
        description: "Gold-standard diagnostic imaging performed at the initial consultation for precise planning.",
    },
    {
        title: "Evidence-based Guidelines",
        description: "We strictly adhere to NICE and international vascular guidelines for patient safety and efficacy.",
    },
    {
        title: "Day-case Procedures",
        description: "Walk-in, walk-out treatments performed under local anaesthetic with no hospital stay required.",
    },
    {
        title: "Complex Case Expertise",
        description: "Equipped to manage complex recurrent disease and advanced venous ulceration.",
    },
];

export default function ClearVeinAdvantage() {
    return (
        <section id="advantage" className="bg-[#F8F9FF] py-24 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left Column: Content */}
                    <div className="space-y-12">
                        <Fade direction="up" triggerOnce duration={800}>
                            <div className="space-y-4">
                                <span className="text-xs font-bold tracking-[0.3em] text-[#0084a9] uppercase">
                                    Why Choose Us
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-[#002045] leading-tight">
                                    The Clear Vein Advantage
                                </h2>
                            </div>
                        </Fade>

                        <div className="space-y-8">
                            {advantages.map((item, index) => (
                                <Fade 
                                    key={item.title} 
                                    direction="up" 
                                    triggerOnce 
                                    delay={index * 100} 
                                    duration={800}
                                >
                                    <div className="flex gap-4 items-start">
                                        <div className="mt-1 shrink-0">
                                            <CheckCircle2 className="w-6 h-6 text-[#0084a9]" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold text-[#002045]">
                                                {item.title}
                                            </h3>
                                            <p className="text-[#505F76] font-light leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image and Badge */}
                    <div className="relative">
                        <Fade direction="right" triggerOnce duration={1000}>
                            <div className="relative aspect-4/3 w-full rounded-2xl shadow-2xl">
                                <Image
                                    src="/reception.png"
                                    alt="Modern Clinical Reception"
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                                
                                {/* Floating Badge */}
                                <div className="absolute -top-12 -right-14 shadow-2xl z-10 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center gap-3">

                                    <div>
                                        <p className="text-4xl font-extrabold text-primary">
                                            100%
                                        </p>
                                        <p className="text-xs font-bold text-[#505F76] uppercase tracking-wider">
                                            Consultant Led
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        {/* Decorative Background Element */}
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#0084a9]/5 -z-10 rounded-full blur-3xl" />
                    </div>

                </div>
            </div>
        </section>
    );
}
