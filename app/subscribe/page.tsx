import SubscribeNewsletterHero from '@/components/subscribe/SubscribeNewsletterHero'
import SubscribeFormSection from '@/components/subscribe/SubscribeFormSection'
import SubscribeExpertOversight from '@/components/subscribe/SubscribeExpertOversight'
import { ContentService } from '@/services/content.service'

export default async function SubscribePage() {
  const content = await ContentService.getContent()
  if (!content) return null

  return (
    <main className="bg-[#F8F9FF]">
      <SubscribeNewsletterHero
        badge={content.subscribeHeroBadge}
        title={content.subscribeHeroTitle}
        description={content.subscribeHeroDescription}
        doctorCredit={content.subscribeDoctorCredit}
        securityNote={content.subscribeSecurityNote}
        backgroundImageSrc={content.subscribeHeroBgSrc}
      />
      <SubscribeFormSection
        formHeading={content.subscribeFormHeading}
        submitLabel={content.subscribeFormSubmitLabel}
        privacyText={content.subscribePrivacyText}
        expectHeading={content.subscribeExpectHeading}
        expectItems={content.subscribeExpectList}
      />
      <SubscribeExpertOversight
        title={content.subscribeExpertTitle}
        quote={content.subscribeExpertQuote}
        doctorName={content.subscribeExpertDoctorName}
        bio={content.subscribeExpertBio}
        imageSrc={content.subscribeExpertImageSrc}
        imageAlt={content.subscribeExpertImageAlt}
        stats={content.subscribeExpertStats}
      />
    </main>
  )
}
