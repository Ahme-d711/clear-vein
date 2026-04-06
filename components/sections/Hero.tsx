"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Fade } from "react-awesome-reveal";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[600px] lg:h-[93vh] flex items-center overflow-hidden pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.svg"
                    alt="Specialist Vascular Clinic"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Premium Dark Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-[#002045] to-[#00204500]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="max-w-3xl space-y-8">
                    {/* Badge */}
                    <Fade direction="up" triggerOnce duration={800}>
                        <div className="inline-block">
                            <span className="px-3 py-1 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-white/90 bg-white/10 backdrop-blur-md border border-white/20 rounded-md uppercase">
                                Specialist Vascular Clinic
                            </span>
                        </div>
                    </Fade>

                    {/* Headline */}
                    <Fade direction="up" triggerOnce delay={100} duration={800}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                            Consultant-Led<br />
                            Vein Care in<br />
                            Dublin
                        </h1>
                    </Fade>

                    {/* Subheadline and Description */}
                    <div className="space-y-4 max-w-2xl">
                        <Fade direction="up" triggerOnce delay={200} duration={800}>
                            <h2 className="text-xl md:text-2xl font-semibold text-white/90">
                                Clear Vein Clinic – Founded by Dr Ahmed Hassanin
                            </h2>
                        </Fade>
                        <Fade direction="up" triggerOnce delay={300} duration={800}>
                            <p className="text-base md:text-lg text-white/70 leading-relaxed font-light">
                                Specialist assessment and minimally invasive treatment delivered by a 
                                Consultant Vascular Surgeon in a state-of-the-art clinical setting.
                            </p>
                        </Fade>
                    </div>

                    {/* Action Buttons */}
                    <Fade direction="up" triggerOnce delay={400} duration={800}>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                onClick={() => openWhatsApp()}
                                className="h-14 px-8 rounded-md text-base font-bold bg-white text-[#002045] hover:bg-gray-100 transition-all duration-300"
                            >
                                Book Consultation
                            </Button>
                            <Button
                                variant="outline"
                                className="h-14 px-8 rounded-md text-base font-semibold border-2 border-white/30 text-white bg-transparent hover:bg-white/10 transition-all duration-300"
                            >
                                Learn More
                            </Button>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

