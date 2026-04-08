import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import DoctorProfile from "@/components/sections/DoctorProfile";
import ConditionsWeTreat from "@/components/sections/ConditionsWeTreat";
import AdvancedTreatments from "@/components/sections/AdvancedTreatments";
import ClearVeinAdvantage from "@/components/sections/ClearVeinAdvantage";
import CTASection from "@/components/sections/CTASection";
import { ContentService } from "@/services/content.service";

export default async function Home() {
  const content = await ContentService.getContent();

  // If no content found (highly unlikely given service initialization),
  // but a safe fallback is good for robust production apps
  if (!content) return null;

  return (
    <main>
      <Hero
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        badge={content.heroBadge}
        description={content.heroDescription}
        ctaPrimary={content.heroCtaPrimary}
        ctaSecondary={content.heroCtaSecondary}
      />

      <ServicesOverview 
        services={content.services} 
        title={content.servicesTitle}
        description1={content.servicesDescription1}
        description2={content.servicesDescription2}
      />

      <DoctorProfile profile={content.doctorProfile} />
      <ConditionsWeTreat 
        title={content.conditionsTitle} 
        description={content.conditionsDescription} 
        conditions={content.conditionsList} 
      />
      <AdvancedTreatments 
        title={content.treatmentsTitle} 
        description={content.treatmentsDescription} 
        treatments={content.treatmentsList} 
      />
      <ClearVeinAdvantage 
        title={content.advantagesTitle} 
        advantages={content.advantagesList} 
      />
      <CTASection ctaText={content.ctaText} aboutText={content.aboutText} />
    </main>

  );
}

