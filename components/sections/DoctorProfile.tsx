"use client"

import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

interface DoctorProfileProps {
  profile: string;
}

export default function DoctorProfile({ profile }: DoctorProfileProps) {
    const qualifications = ["MD", "EBVS Cert (Hon)", "PhD", "MSc", "CSD"];

    return (
        <section id="about" className="bg-[#EFF4FF] py-24 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left: Image Column (col-span-5) */}
                    <div className="lg:col-span-5">
                        <Fade direction="left" triggerOnce duration={1000}>
                            <div className="relative group p-4 lg:p-0">
                                {/* Decorative Blue Square behind the image */}
                                <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-48 h-48 lg:w-64 lg:h-64 bg-[#002045] -z-10" />

                                {/* Image Container */}
                                <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden shadow-2xl bg-white">
                                    <Image
                                        src="/doctor.svg"
                                        alt="Dr Ahmed Hassanin"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Right: Text Column (col-span-7) */}
                    <div className="lg:col-span-7 space-y-8">
                        <Fade direction="up" triggerOnce duration={800}>
                            <div className="space-y-4">
                                <span className="text-xs font-bold text-[#505F76] uppercase">
                                    LEAD CLINICIAN
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                                    Dr Ahmed Hassanin
                                </h2>
                                <h3 className="text-lg md:text-xl font-bold text-primary">
                                    Consultant Vascular Surgeon
                                </h3>
                                <div className="text-base md:text-lg text-[#505F76]">
                                    PhD | EBVS | CCT Ireland. RCSI Examiner.
                                </div>
                            </div>
                        </Fade>
                        {/* Body Text */}
                        <Fade direction="up" triggerOnce delay={400} duration={800}>
                            <div className="space-y-6 text-base md:text-lg leading-relaxed font-light whitespace-pre-line">
                                {profile}
                            </div>
                        </Fade>

                        <Fade direction="up" triggerOnce delay={400} duration={800}>
                            <Button variant="link" className="w-fit text-lg font-bold">Read Full Profile <ArrowRight className="w-5! h-5!"/></Button>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}
