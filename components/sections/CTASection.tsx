"use client"

import { Fade } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  ctaText: string;
  aboutText: string;
}

export default function CTASection({ ctaText, aboutText }: CTASectionProps) {
    return (
        <section id="cta" className="bg-white">
                <Fade direction="up" triggerOnce duration={800}>
                    <div className="bg-[#EFF4FF] p-12 md:p-20 text-center space-y-12 border border-[#DDE9FF]">
                        <div className="space-y-6 max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-extrabold text-primary leading-tight">
                                {ctaText}
                            </h2>
                            <p className="text-xl text-[#505F76] font-light leading-relaxed whitespace-pre-line">
                                {aboutText}
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

