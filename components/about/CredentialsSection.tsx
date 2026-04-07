import { GraduationCap, BookOpen, Medal, Users, Building2 } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const ACADEMIC_TAGS = [
    "PhD Vascular Surgery",
    "MSc Vascular Surgery",
    "MSc General Surgery",
    "FEBVS Fellow",
    "L9 Healthcare Leadership & Management"
];

const CREDENTIALS = [
    {
        icon: Medal,
        title: "FEBVS Certification",
        description: "Fellow of the European Board of Vascular Surgery, signifying the highest standard of specialist training and excellence across the continent."
    },
    {
        icon: Users,
        title: "RCSI Examiner",
        description: "Serving as an official Clinical Examiner for the Royal College of Surgeons in Ireland, shaping the next generation of surgeons."
    },
    {
        icon: Building2,
        title: "UCC Leadership & Management",
        description: "Level 9 Diploma in Healthcare Leadership and Management (UCC), applying systemic innovation to clinical practice and patient pathways."
    }
];

export default function CredentialsSection() {
    return (
        <section className="py-24 bg-[#EFF4FF]">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Section Header */}
                <Fade direction="up" triggerOnce>
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-[#005596] mb-4">
                            Clinical Authority & Credentials
                        </h2>
                        <div className="w-40 h-1.5 bg-[#005596] rounded-full" />
                    </div>
                </Fade>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Academic Background - Spans 2 columns */}
                    <Fade direction="up" triggerOnce className="lg:col-span-2">
                        <div className="h-full bg-white p-10 rounded-2xl border border-[#DDE9FF] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,85,150,0.08)] transition-all duration-300">
                            <GraduationCap className="w-10 h-10 text-[#005596] mb-6" />
                            <h3 className="text-2xl font-bold text-[#005596] mb-6">Academic Background</h3>
                            <p className="text-[#505F76] leading-relaxed mb-8">
                                Dr. Hassanin holds a prestigious PhD in Vascular Surgery and two Master's degrees
                                (MSc) in both Vascular and General Surgery. As a Fellow of the European Board of
                                Vascular Surgery (FEBVS) and a Level 9 Diploma holder in Healthcare Leadership and
                                Management from UCC, he merges clinical expertise with structural excellence.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {ACADEMIC_TAGS.map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-[#F4F9FF] text-[#005596] text-xs font-semibold rounded-full border border-[#DDE9FF]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Fade>

                    {/* Publications - Spans 1 column */}
                    <Fade direction="up" delay={100} triggerOnce>
                        <div className="h-full bg-[#006E96] p-10 rounded-2xl shadow-[0_20px_40px_rgba(0,110,150,0.25)] hover:translate-y-[-4px] transition-all duration-300 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
                            <BookOpen className="w-10 h-10 text-white/90 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-6">Publications</h3>
                            <p className="text-white/80 leading-relaxed mb-12">
                                Contributor to over 30 peer-reviewed medical publications in international vascular journals.
                            </p>
                            <div className="mt-auto">
                                <span className="text-6xl font-bold text-white/20">30+</span>
                            </div>
                        </div>
                    </Fade>

                    {/* Bottom Row Credentials */}
                    {CREDENTIALS.map((item, index) => (
                        <Fade key={index} direction="up" delay={index * 100} triggerOnce className="h-full">
                            <div className="h-full bg-white p-10 rounded-2xl border border-[#DDE9FF] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,85,150,0.08)] hover:translate-y-[-4px] transition-all duration-300">
                                <item.icon className="w-8 h-8 text-[#005596] mb-6" />
                                <h3 className="text-lg font-bold text-[#005596] mb-4">{item.title}</h3>
                                <p className="text-sm text-[#505F76] leading-relaxed line-clamp-4">
                                    {item.description}
                                </p>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    );
}
