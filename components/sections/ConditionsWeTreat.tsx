"use client"

import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { Activity, Stethoscope, Zap, RotateCcw, PlusSquare } from "lucide-react";

const conditions = [
    {
        title: "Varicose Veins",
        description: "Primary superficial venous insufficiency causing bulging and symptomatic lower limb veins.",
        icon: <Activity className="w-8 h-8 text-[#0084a9]" />,
    },
    {
        title: "Chronic Venous Insufficiency",
        description: "Advanced stages of venous disease including leg swelling, skin changes, and heaviness.",
        icon: <Stethoscope className="w-8 h-8 text-[#0084a9]" />,
    },
    {
        title: "Thread Veins",
        description: "Treatment of spider veins and telangiectasia using precision microsclerotherapy techniques.",
        icon: <Zap className="w-8 h-8 text-[#0084a9]" />,
    },
    {
        title: "Recurrent Varicose Veins",
        description: "Specialist management of veins that have returned following previous surgical intervention.",
        icon: <RotateCcw className="w-8 h-8 text-[#0084a9]" />,
    },
    {
        title: "Venous Ulcers",
        description: "Expert care for leg ulcers driven by venous hypertension, focusing on healing and prevention.",
        icon: <PlusSquare className="w-8 h-8 text-[#0084a9]" />,
    },
];

export default function ConditionsWeTreat() {
    return (
        <section id="conditions" className="bg-white py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="max-w-3xl mb-20 space-y-4">
                    <Fade direction="up" triggerOnce duration={800}>
                        <h2 className="text-4xl md:text-4xl font-extrabold text-primary">
                            Conditions We Treat
                        </h2>
                        <p className="text-lg text-[#505F76] font-light leading-relaxed">
                            Specialized clinical management for the full spectrum of venous pathology.
                        </p>
                    </Fade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {conditions.map((condition, index) => {
                        const isLast = index === conditions.length - 1;
                        return (
                            <Fade 
                                key={condition.title} 
                                direction="up" 
                                triggerOnce 
                                delay={index * 100} 
                                duration={800}
                                className={isLast ? "lg:col-span-2" : ""}
                            >
                                <div className={`bg-[#EFF4FF] p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col lg:flex-row gap-8 ${isLast ? "items-center" : "space-y-6"}`}>
                                    <div className={`flex flex-col space-y-6 ${isLast ? "flex-1" : ""}`}>
                                        <div className="p-3 bg-white rounded-lg w-fit">
                                            {condition.icon}
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-bold text-primary">
                                                {condition.title}
                                            </h3>
                                            <p className="text-[#505F76] leading-relaxed font-light">
                                                {condition.description}
                                            </p>
                                        </div>
                                    </div>

                                    {isLast && (
                                        <div className="flex-1 relative w-full aspect-video lg:aspect-auto lg:h-full min-h-[200px] rounded-xl overflow-hidden shadow-lg border border-white/50">
                                            <Image 
                                                src="/venous-ulcers.svg" 
                                                alt="Venous Ultrasound Diagnostic" 
                                                fill 
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            </Fade>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
