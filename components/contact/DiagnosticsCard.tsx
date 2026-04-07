"use client"

import { Activity, Calendar } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export default function DiagnosticsCard() {
    return (
        <div className="bg-primary rounded-[2rem] p-6 md:p-8 text-white shadow-xl flex flex-col gap-6 h-full">
            {/* Header: Icon & Label */}
            <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-white/90" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                    Diagnostics
                </span>
            </div>

            {/* Content */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold leading-tight">
                    Rapid Duplex Availability
                </h2>
                <p className="text-white/85 text-sm leading-relaxed font-light">
                    We provide GP-led access to diagnostic duplex ultrasound for 
                    suspected DVT, varicose veins, or arterial insufficiency with 
                    findings delivered within 24 hours.
                </p>
            </div>

            {/* Status Box */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/5 p-5 rounded-2xl space-y-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-white/60" />
                        <span className="text-xs text-white/60 uppercase tracking-wider">
                            Next Available Slot
                        </span>
                    </div>
                    <div className="bg-white px-3 py-1 rounded-md">
                        <span className="text-primary text-[10px] font-bold uppercase">
                            Tomorrow
                        </span>
                    </div>
                </div>
                
                <h3 className="text-xl">
                    48hr Fast-Track
                </h3>
            </div>
        </div>
    );
}
