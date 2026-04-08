"use client"

import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { CheckCircle2 } from "lucide-react";

interface ClearVeinAdvantageProps {
  title: string;
  advantages: { title: string; description: string }[];
}

export default function ClearVeinAdvantage({ title, advantages = [] }: ClearVeinAdvantageProps) {
    return (
        <section id="advantage" className="bg-[#F8F9FF] py-24 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left Column: Content */}
                    <div className="space-y-16">
                        <Fade direction="up" triggerOnce duration={800}>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-primary leading-tight">
                                {title}
                            </h2>
                        </Fade>


                        <div className="relative space-y-12">
                            {/* Vertical Line */}
                            <div className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-primary/10" />

                            {advantages.map((item, index) => (
                                <Fade 
                                    key={item.title} 
                                    direction="up" 
                                    triggerOnce 
                                    delay={index * 100} 
                                    duration={800}
                                >
                                    <div className="relative flex gap-8 items-start group">
                                        {/* Bullet */}
                                        <div className="z-10 w-[24px] h-[24px] rounded-full bg-primary flex items-center justify-center mt-1.5 shrink-0 shadow-lg shadow-primary/20">
                                            <div className="w-[6px] h-[6px] bg-white rounded-full" />
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold text-primary">
                                                {item.title}
                                            </h3>
                                            <p className="text-[#505F76] font-normal leading-relaxed text-[15.5px] max-w-lg">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image and Badge */}
                    <div className="relative bg-[#DDE9FF] p-3 rounded-2xl">
                        <Fade direction="right" triggerOnce duration={1000}>
                            <div className="relative aspect-3/3 w-full rounded-2xl shadow-2xl">
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
