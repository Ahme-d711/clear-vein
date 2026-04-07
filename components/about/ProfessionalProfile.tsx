import { Fade } from "react-awesome-reveal";

const CLINICAL_FOCUS = [
    "Minimally Invasive Vein Surgery",
    "Advanced Endovascular Techniques",
    "Complex Wound Management",
    "Carotid & Peripheral Arterial Surgery"
];

const RESEARCH_TEACHING = [
    "30+ Peer-Reviewed Articles",
    "RCSI Surgical Education",
    "International Guest Lecturer",
    "Clinical Audit Leadership"
];

export default function ProfessionalProfile() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-[1fr,2fr] gap-16 lg:gap-24">
                    {/* Left Side: Title */}
                    <Fade direction="left" triggerOnce>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                            Professional Profile <br />
                            <span className="text-[#505F76CC] font-medium text-3xl md:text-4xl">
                                & Academic Excellence
                            </span>
                        </h2>
                    </Fade>

                    {/* Right Side: Content */}
                    <div className="space-y-12">
                        <Fade direction="up" triggerOnce>
                            <div className="space-y-8 text-lg text-[#505F76] leading-relaxed">
                                <p>
                                    Dr. Ahmed Hassanin is a distinguished Consultant Vascular Surgeon whose career is 
                                    defined by a commitment to clinical innovation and academic excellence. Currently 
                                    practising within the HSE in Dublin, he provides specialist care across the full 
                                    spectrum of arterial and venous pathologies.
                                </p>

                                <div className="border-l-4 border-[#DDE9FF] pl-8 py-2 font-medium text-primary/80">
                                    His doctoral research (PhD) and multiple international publications in varicose veins 
                                    management—referenced in the most recent ESVS Guidelines—are complemented by 
                                    two Master's degrees in Vascular and General Surgery. This academic foundation 
                                    ensures that patients at Clear Vein Clinic benefit from the most advanced, 
                                    research-backed treatments available in modern medicine.
                                </div>

                                <p>
                                    His doctoral research (PhD) and multiple international publications in varicose veins 
                                    management—referenced in the most recent ESVS Guidelines—are complemented by 
                                    two Master's degrees in Vascular and General Surgery. This academic foundation 
                                    ensures that 
                                    patients at Clear Vein Clinic benefit from the most advanced, research-backed 
                                    treatments available in modern medicine.
                                </p>
                            </div>
                        </Fade>

                        {/* Bottom Columns */}
                        <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-[#EFF4FF]">
                            <Fade direction="up" triggerOnce>
                                <div>
                                    <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-6">Clinical Focus</h4>
                                    <ul className="space-y-3">
                                        {CLINICAL_FOCUS.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-[#505F76]">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#DDE9FF]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Fade>

                            <Fade direction="up" delay={100} triggerOnce>
                                <div>
                                    <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-6">Research & Teaching</h4>
                                    <ul className="space-y-3">
                                        {RESEARCH_TEACHING.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-[#505F76]">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#DDE9FF]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
