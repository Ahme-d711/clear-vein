"use client"

import { Fade } from "react-awesome-reveal";

const treatments = [
    {
        title: "RFA",
        description: "Radiofrequency Ablation uses thermal energy to collapse and seal the vein wall permanently.",
        label: "GOLD STANDARD CHOICE",
    },
    {
        title: "EVLT",
        description: "Endovenous Laser Treatment uses precision light energy to target incompetent veins.",
        label: "CLINICAL PRECISION",
    },
    {
        title: "Foam Sclerotherapy",
        description: "Chemical ablation using physician-compounded foam for targeted vein closure.",
        label: "MINIMALLY INVASIVE",
    },
];

export default function AdvancedTreatments() {
    return (
        <section className="bg-[#006A9B] py-24 lg:py-32 text-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
                    <div className="max-w-2xl space-y-4">
                        <Fade direction="up" triggerOnce duration={800}>
                            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                                Advanced Minimally Invasive Treatments
                            </h2>
                            <p className="text-lg text-white/80 font-light max-w-xl">
                                We utilize state-of-the-art technologies to ensure effective closure of 
                                diseased veins with minimal patient discomfort.
                            </p>
                        </Fade>
                    </div>
                </div>

                {/* Treatment Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 relative">
                    {treatments.map((treatment, index) => (
                        <div key={treatment.title} className="relative group">
                            {/* Content */}
                            <Fade 
                                direction="up" 
                                triggerOnce 
                                delay={index * 150} 
                                duration={800}
                                className={`lg:px-12 ${index !== 0 ? 'lg:border-l lg:border-white/10' : ''}`}
                            >
                                <div className="space-y-8 h-full flex flex-col justify-between">
                                    <div className="space-y-6">
                                        
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-bold tracking-tight">
                                                {treatment.title}
                                            </h3>
                                        </div>
                                        
                                        <p className="text-base text-white/80 font-light leading-relaxed">
                                            {treatment.description}
                                        </p>
                                    </div>
                                    
                                    {/* Bottom Label */}
                                    <div className="pt-8">
                                        <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">
                                            {treatment.label}
                                        </span>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
