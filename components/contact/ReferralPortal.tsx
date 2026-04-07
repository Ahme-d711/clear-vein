"use client"

import { Fade } from "react-awesome-reveal";
import ReferralPathway from "./ReferralPathway";
import DiagnosticsCard from "./DiagnosticsCard";

export default function ReferralPortal() {
    return (
        <section id="referral-portal" className="bg-[#F8FAFF] py-20 lg:py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <Fade direction="up" triggerOnce cascade damping={0.2}>
                    <div className="space-y-12">
                        {/* Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                            {/* Main Referral Pathways (takes 8 columns) */}
                            <div className="lg:col-span-8">
                                <ReferralPathway />
                            </div>

                            {/* Diagnostics Card (takes 4 columns) */}
                            <div className="lg:col-span-4">
                                <DiagnosticsCard />
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
}
