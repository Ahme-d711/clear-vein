import GPReferrals from '@/components/contact/GPReferrals'
import ReferralPortal from '@/components/contact/ReferralPortal'
import SecurePortal from '@/components/contact/SecurePortal' 
import { Fade } from 'react-awesome-reveal'

export default function ContactPage() {
  return (
    <main className='bg-[#F8F9FF]'>

        {/* GP & Professional Portal Sections */}
        <div id="referral-portal">
            <GPReferrals />
            <ReferralPortal />
            <SecurePortal />
        </div>
    </main>
  )
}


