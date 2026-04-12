import GPReferrals from '@/components/contact/GPReferrals'
import ReferralPortal from '@/components/contact/ReferralPortal'
import SecurePortal from '@/components/contact/SecurePortal' 
import { Fade } from 'react-awesome-reveal'

export default function ContactPage() {
  return (
    <main className='bg-[#F8F9FF] pt-32 pb-24'>
        {/* Page Header */}
        <section className="container mx-auto px-6 mb-20 max-w-6xl">
            <Fade direction="up" triggerOnce>
                <div className="max-w-3xl">
                    <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">Medical Collaboration</h4>
                    <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight mb-6">
                        Professional <span className="text-[#505F76CC]">Referral Portal</span>
                    </h1>
                    <p className="text-lg text-[#505F76] font-medium leading-relaxed">
                        Dedicated support for General Practitioners and Consultants. Submit prioritized clinical referrals through our secure, end-to-end encrypted portal.
                    </p>
                </div>
            </Fade>
        </section>

        {/* Info & Core Actions */}
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <div className="bg-primary p-12 rounded-[2.5rem] text-white shadow-xl shadow-primary/10 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-bold mb-8 relative z-10">Clinic Information</h3>
                <div className="space-y-8 relative z-10">
                    <div>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Administrative Office</p>
                        <p className="text-xl font-medium">Suite 2, Medical Centre, Dublin, Ireland</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Professional Enquiries</p>
                        <p className="text-xl font-medium">practice@clearveinclinic.ie</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Clinical Hours</p>
                        <p className="text-xl font-medium">Mon - Fri: 09:00 - 17:00</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center p-12 rounded-[2.5rem] border border-[#DDE9FF] bg-white h-full">
                <h3 className="text-2xl font-bold text-primary mb-6">Patient Referrals</h3>
                <p className="text-lg text-[#505F76] leading-relaxed mb-10">
                    Our streamlined referral process ensures your patients receive specialist vascular assessment and treatment with minimal delay.
                </p>
                <a href="#referral-portal" className="inline-flex items-center justify-center bg-primary/5 text-primary font-bold py-5 px-8 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300">
                    Go to Secure Submission Portal
                </a>
            </div>
        </div>

        {/* GP & Professional Portal Sections */}
        <div id="referral-portal">
            <GPReferrals />
            <ReferralPortal />
            <SecurePortal />
        </div>
    </main>
  )
}


