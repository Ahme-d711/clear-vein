"use client"

import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const PRIORITY_CRITERIA = [
    { 
        title: "Venous Ulceration", 
        desc: "Urgent assessment for active CEAP 6 disease or rapidly deteriorating stasis dermatitis." 
    },
    { 
        title: "Superficial Thrombophlebitis", 
        desc: "Immediate duplex scan to rule out proximal DVT involvement." 
    },
    { 
        title: "Recent Bleed", 
        desc: "Priority intervention for patients who have experienced a varicorrhage." 
    }
];

export default function PriorityAccess() {
    return (
        <div className="space-y-10">
            <Fade direction="left" triggerOnce>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-primary">
                        Priority Urgent Access
                    </h2>
                    <p className="text-[#505F76] text-base leading-relaxed">
                        We maintain dedicated daily slots for urgent clinical 
                        presentations to prevent secondary complications such as 
                        infection or thrombosis.
                    </p>
                </div>
            </Fade>

            <Fade direction="left" triggerOnce delay={200}>
                <div className="bg-[#EFF4FF] border-l-4 border-primary p-6 rounded-r-xl">
                    <h3 className="text-primary text-base font-bold mb-2">Clinical Access:</h3>
                    <p className="text-[#505F76] text-sm">
                        Rapid access clinic for suspected venous insufficiency and urgent cases.
                    </p>
                </div>
            </Fade>

            {/* Timeline / Highlights */}
            <div className="space-y-8 pl-4 relative">
                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-[#DDE9FF]" />
                
                {PRIORITY_CRITERIA.map((item, i) => (
                    <Fade key={i} direction="up" triggerOnce delay={300 + (i * 100)}>
                        <div className="relative pl-4">
                            <div className="absolute left-[-21px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
                            <h4 className="text-primary font-bold text-base mb-1">{item.title}</h4>
                            <p className="text-[#505F76] text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </Fade>
                ))}
            </div>

            {/* Image Asset */}
            <Fade direction="up" triggerOnce delay={700}>
                <div className="space-y-4 p-8  bg-[#EFF4FF] rounded-xl">
                    <div className="rounded-[2rem] overflow-hidden relative h-[250px]">
                        <Image 
                            src="/pri.svg" 
                            alt="Clinical procedure room" 
                            fill 
                            className="object-cover"
                        />
                    </div>
                    <p className="text-[#505F76] text-xs text-center italic px-10">
                        In-clinic procedures utilize state-of-the-art radiofrequency ablation technology.
                    </p>
                </div>
            </Fade>
        </div>
    );
}
