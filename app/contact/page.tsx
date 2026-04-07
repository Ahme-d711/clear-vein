import GPReferrals from '@/components/contact/GPReferrals'
import ReferralPortal from '@/components/contact/ReferralPortal'
import SecurePortal from '@/components/contact/SecurePortal' 
export default function ContactPage() {
  return (
    <main className='bg-[#F8F9FF]'>    
        <GPReferrals />
        <ReferralPortal />
        <SecurePortal />
    </main>
  )
}
