import { Fade } from "react-awesome-reveal";

const PILLARS = [
    {
        title: "Consultant-Led",
        description: "Every stage of your journey, from initial scan to post-operative follow-up, is personally managed by Dr. Hassanin.",
        side: "left"
    },
    {
        title: "Evidence-Based",
        description: "Utilizing the latest clinical trials and international vascular registries to ensure the highest safety profiles.",
        side: "right"
    },
    {
        title: "Patient-Centered",
        description: "Bespoke treatment plans tailored to individual lifestyle needs and clinical requirements.",
        side: "left"
    },
    {
        title: "Surgical Precision",
        description: "Employing cutting-edge endovenous laser and radiofrequency technology for superior cosmetic and functional results.",
        side: "right"
    }
];

export default function StandardsOfCare() {
    return (
        <section className="py-24 min-h-screen bg-primary relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white rounded-full bg-radial from-white to-transparent" />
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <Fade direction="up" triggerOnce>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Standards of Care</h2>
                        <p className="text-lg text-[#8BA3C7] font-medium">
                            Four pillars that define Dr. Hassanin's surgical practice.
                        </p>
                    </Fade>
                </div>

                {/* Timeline Content */}
                <div className="relative mx-auto max-w-4xl">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2 hidden lg:block" />

                    <div className="space-y-14">
                        {PILLARS.map((pillar, idx) => (
                            <div key={idx} className="relative py-2">
                                {/* Desktop Layout */}
                                <div className="hidden lg:flex items-center justify-center">
                                    {/* Left Content Column */}
                                    <div className="w-1/2 pr-12 text-right">
                                        {pillar.side === 'left' && (
                                            <Fade direction="left" triggerOnce>
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{pillar.title}</h3>
                                                <p className="text-sm md:text-md text-[#8BA3C7] leading-relaxed max-w-[320px] ml-auto">
                                                    {pillar.description}
                                                </p>
                                            </Fade>
                                        )}
                                    </div>

                                    {/* Center Pillar Point */}
                                    <div className="relative flex items-center justify-center shrink-0 w-12 h-12 z-20">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] transition-transform duration-300 group-hover:scale-125" />
                                    </div>

                                    {/* Right Content Column */}
                                    <div className="w-1/2 pl-12 text-left">
                                        {pillar.side === 'right' && (
                                            <Fade direction="right" triggerOnce>
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{pillar.title}</h3>
                                                <p className="text-sm md:text-md text-[#8BA3C7] leading-relaxed max-w-[320px]">
                                                    {pillar.description}
                                                </p>
                                            </Fade>
                                        )}
                                    </div>
                                </div>

                                {/* Mobile Layout */}
                                <div className="lg:hidden flex gap-5 py-4">
                                    <div className="flex flex-col items-center shrink-0">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 mb-2" />
                                        <div className="flex-1 w-px bg-white/10" />
                                    </div>
                                    <div className="pb-4">
                                        <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                                        <p className="text-sm text-[#8BA3C7] leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
