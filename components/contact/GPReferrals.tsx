"use client"

import { Fade } from "react-awesome-reveal";
import { ShieldCheck } from "lucide-react";

export default function GPReferrals() {
    return (
        <section id="gp-referrals" className="bg-white py-10 lg:py-14 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
                    
                    {/* Left Column: Content */}
                    <div className="lg:col-span-7 space-y-8">
                        <Fade direction="up" triggerOnce duration={800}>
                            <div className="space-y-6">
                                <div className="inline-block px-3 py-1 bg-[#DDE9FF] rounded-md">
                                    <span className="text-xs font-bold tracking-widest text-primary uppercase">
                                        Medical Professional Portal
                                    </span>
                                </div>
                                
                                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                                    <span className="text-[#005596]">GP Referrals &</span>
                                    <span className="text-[#8BA3C7] mt-4 block">Specialist Access.</span>
                                </h2>
                                
                                <p className="text-lg text-[#505F76] leading-relaxed max-w-xl">
                                    Providing primary care partners with streamlined clinical pathways, 
                                    urgent triage for complex venous cases, and diagnostic-grade duplex 
                                    imaging within 48 hours.
                                </p>
                            </div>
                        </Fade>
                    </div>

                    {/* Right Column: Registration Card */}
                    <div className="lg:col-span-5 ">
                        <Fade direction="right" triggerOnce duration={1000}>
                            <div className="bg-[#EFF4FF] p-6 md:p-8 rounded-[2rem] border border-[#DDE9FF] shadow-sm space-y-4 relative overflow-hidden">
                                {/* Decorative Icon Background */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/40 rounded-full blur-3xl" />
                                
                                <div className="flex items-center gap-2 text-[#005596]">
                                    <ShieldCheck className="w-5 h-5" />
                                    <h3 className="text-sm font-bold tracking-tight">
                                        IMC Specialist Registered
                                    </h3>
                                </div>
                                
                                <p className="text-[#505F76] text-xs font-light leading-relaxed">
                                    Dr Ahmed Hassanin (PhD, EBVS, CSD) is listed on the 
                                    Medical Council Specialist Division for Vascular Surgery, 
                                    ensuring the highest tier of surgical governance.
                                </p>
                                
                                <div className="pt-4 border-t border-[#DDE9FF]">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-[#8BA3C7] uppercase tracking-[0.2em]">
                                            IMC Registration No.
                                        </p>
                                        <p className="text-sm font-black text-[#005596]">
                                            407255
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                </div>
            </div>
        </section>
    );
}
