"use client"

import { Mail, Printer, Monitor, Clock, ClipboardList } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export default function ReferralPathway() {
    return (
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#EFF4FF] shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full">
            {/* Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
                        <div className="bg-[#005596] p-4 rounded-xl shadow-lg shadow-[#005596]/20">
                            <ClipboardList className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#005596] tracking-tight">
                            Standard Referral Pathway
                        </h2>
                    </div>

                    {/* Pathways Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
                        {/* Secure Email */}
                        <div className="group">
                            <div className="flex items-center gap-3 text-[#005596] mb-4">
                                <div className="p-2 bg-[#EFF4FF] rounded-lg group-hover:bg-[#005596] group-hover:text-white transition-colors duration-300">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold tracking-tight">Secure Email</h3>
                            </div>
                            <p className="text-[#505F76] text-sm leading-relaxed mb-4 min-h-[48px]">
                                Healthmail encrypted transmission for patient privacy compliance.
                            </p>
                            <a 
                                href="mailto:referrals@clearvein.ie" 
                                className="text-[#005596] font-bold text-base hover:underline decoration-2 underline-offset-4"
                            >
                                referrals@clearvein.ie
                            </a>
                        </div>

                        {/* Clinical Fax */}
                        <div className="group">
                            <div className="flex items-center gap-3 text-[#005596] mb-4">
                                <div className="p-2 bg-[#EFF4FF] rounded-lg group-hover:bg-[#005596] group-hover:text-white transition-colors duration-300">
                                    <Printer className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold tracking-tight">Clinical Fax</h3>
                            </div>
                            <p className="text-[#505F76] text-sm leading-relaxed mb-4 min-h-[48px]">
                                Direct line to our surgical administration for hardcopy referrals.
                            </p>
                            <p className="text-[#005596] font-bold text-base">
                                +353 (01) 456 7890
                            </p>
                        </div>

                        {/* Secure Form */}
                        <div className="group">
                            <div className="flex items-center gap-3 text-[#005596] mb-4">
                                <div className="p-2 bg-[#EFF4FF] rounded-lg group-hover:bg-[#005596] group-hover:text-white transition-colors duration-300">
                                    <Monitor className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold tracking-tight">Secure Form</h3>
                            </div>
                            <p className="text-[#505F76] text-sm leading-relaxed mb-4 min-h-[48px]">
                                Use our digital portal below for immediate clinical triage.
                            </p>
                            <a 
                                href="#" 
                                className="text-[#005596] font-bold text-base hover:underline decoration-2 underline-offset-4"
                            >
                                Digital Uploads
                            </a>
                        </div>
                    </div>

                    {/* Footer / Reporting */}
                    <div className="pt-8 border-t border-[#EFF4FF]">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#EFF4FF] p-2 rounded-full">
                                <Clock className="w-5 h-5 text-[#005596]" />
                            </div>
                            <p className="text-sm md:text-base text-[#505F76]">
                                <span className="font-bold text-[#005596]">Reporting:</span> Detailed clinical reports provided to referring GPs within 48 hours.
                            </p>
                        </div>
                    </div>
        </div>
    );
}
