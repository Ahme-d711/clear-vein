"use client"

import { Mail, Printer, Monitor, Clock, ClipboardList } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const PATHWAYS = [
    {
        icon: Mail,
        title: "Secure Email",
        description: "Healthmail encrypted transmission for patient privacy compliance.",
        link: "mailto:referrals@clearvein.ie",
        linkText: "referrals@clearvein.ie"
    },
    {
        icon: Printer,
        title: "Clinical Fax",
        description: "Direct line to our surgical administration for hardcopy referrals.",
        text: "+353 (01) 456 7890"
    },
    {
        icon: Monitor,
        title: "Secure Form",
        description: "Use our digital portal below for immediate clinical triage.",
        link: "#",
        linkText: "Digital Uploads"
    }
];

export default function ReferralPathway() {
    return (
        <div className="bg-white rounded-[2rem] space-y-8 p-6 md:p-8 border border-[#EFF4FF] shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <div className="bg-primary p-3 rounded-xl shadow-lg shadow-primary/20">
                    <ClipboardList className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                    Standard Referral Pathway
                </h2>
            </div>

            {/* Pathways Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {PATHWAYS.map((item, index) => (
                    <div key={index} className="group">
                        <div className="flex items-center gap-3 text-primary mb-4">
                            <div className="p-1 bg-[#EFF4FF] rounded-full">
                                <item.icon className="w-3 h-3" />
                            </div>
                            <h3 className="text-sm font-bold tracking-tight">{item.title}</h3>
                        </div>
                        <p className="text-[#505F76] text-sm leading-relaxed mb-4 min-h-[48px]">
                            {item.description}
                        </p>
                        {item.link ? (
                            <a 
                                href={item.link} 
                                className="text-primary font-bold text-sm hover:underline decoration-2 underline-offset-4"
                            >
                                {item.linkText}
                            </a>
                        ) : (
                            <p className="text-primary font-bold text-sm">
                                {item.text}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer / Reporting */}
            <div className="pt-6 border-t border-[#EFF4FF]">
                <div className="flex items-center gap-3">
                    <div className="bg-[#EFF4FF] p-2 rounded-full">
                        <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm md:text-sm text-[#505F76]">
                        <span className="font-bold text-primary">Reporting:</span> Detailed clinical reports provided to referring GPs within 48 hours.
                    </p>
                </div>
            </div>
        </div>
    );
}
