import PriorityAccess from "./PriorityAccess";
import ReferralForm from "./ReferralForm";

export default function SecurePortal() {
    return (
        <section id="secure-portal" className="py-20 lg:py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                    {/* Left Column: Priority Urgent Access */}
                    <div className="lg:col-span-2"> 
                        <PriorityAccess />
                    </div>

                    {/* Right Column: Secure Referral Portal */}
                    <div className="lg:col-span-3"> 
                        <ReferralForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
