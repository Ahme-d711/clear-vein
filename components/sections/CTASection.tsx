"use client"

import { Fade } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <section id="cta" className="bg-white">
                <Fade direction="up" triggerOnce duration={800}>
                    <div className="bg-[#EFF4FF] p-12 md:p-20 text-center space-y-12 border border-[#DDE9FF]">
                        <div className="space-y-6 max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-extrabold text-primary leading-tight">
                                Start Your Journey to Healthier Legs Today.
                            </h2>
                            <p className="text-xl text-[#505F76] font-light leading-relaxed">
                                Book a specialist assessment with Dr Hassanin in our Dublin clinic.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Button 
                                size="xl" 
                            >
                                Book Consultation
                            </Button>
                            <Button 
                                size="xl"
                                variant="outline" 
                            >
                                View Treatment Fees
                            </Button>
                        </div>
                    </div>
                </Fade>
        </section>
    );
}
