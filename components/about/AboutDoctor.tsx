import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const QUALIFICATIONS = [
    "PhD Vascular Surgery",
    "FEBVS Fellow",
    "MSc Vascular & General Surgery"
];

const APPOINTMENTS = [
    "HSE Consultant Surgeon",
    "RCSI Clinical Examiner"
];

export default function AboutDoctor() {
    return (
        <section className="py-24 min-h-[93vh] overflow-hidden place-content-center bg-[#F8F9FF] ">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Doctor Image Container */}
                    <Fade direction="left" triggerOnce className="">
                        <div className="relative group">
                            {/* Decorative shadow element */}
                            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
                            
                            <div className="relative rounded-[2.5rem] max-w-[434px] max-h-[543px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,85,150,0.15)] bg-white border border-[#EFF4FF]">
                                <Image
                                    src="/doctor.svg"
                                    alt="Dr Ahmed Hassanin"
                                    width={434}
                                    height={543}
                                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-103"
                                    priority
                                />
                                {/* Design Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-[#002045]/60 to-[#002045]/0 pointer-events-none" />
                            </div>
                        </div>
                    </Fade>

                    {/* Content Container */}
                    <Fade direction="right" triggerOnce className="">
                        <div className="space-y-6">
                            {/* Badge & Name Header */}
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-[#002B4D] text-[#86A0CD] text-[10px] font-bold tracking-[0.2em] rounded-md uppercase">
                                    Consultant Vascular Surgeon
                                </span>
                                
                                <div className="space-y-2">
                                    <h1 className="text-5xl md:text-7xl font-bold text-primary leading-[1.1]">
                                        Dr Ahmed<br />Hassanin
                                    </h1>
                                    <p className="text-5xl text-[#505F76] tracking-tight">
                                        PhD FEBVS MSc
                                    </p>
                                </div>
                            </div>

                            {/* Bio Paragraphs */}
                            <div className="space-y-3 text-lg text-[#505F76CC] leading-relaxed max-w-xl">
                                <p className="font-medium text-[#505F76]">
                                    Currently practising as a Consultant Vascular Surgeon within the HSE in Dublin.
                                </p>
                                <p>
                                    Pioneering minimally invasive vascular care through academic rigor, 
                                    clinical excellence, and patient-centered surgical precision.
                                </p>
                            </div>

                            {/* Divider Line */}
                            <div className="w-full h-px bg-linear-to-r from-[#EFF4FF] via-[#DDE9FF] to-transparent" />

                            {/* Stats/Info Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Qualifications */}
                                <div className="space-y-5">
                                    <h4 className="text-[10px] font-bold text-[#505F76] uppercase tracking-[0.2em]">
                                        Qualifications
                                    </h4>
                                    <ul className="space-y-3">
                                        {QUALIFICATIONS.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <span className="text-xs text-primary">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Appointments */}
                                <div className="space-y-5">
                                    <h4 className="text-[10px] font-bold text-[#505F76] uppercase tracking-[0.2em]">
                                        Appointments
                                    </h4>
                                    <ul className="space-y-3">
                                        {APPOINTMENTS.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <span className="text-xs text-primary">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}
