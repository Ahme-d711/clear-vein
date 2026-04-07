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
      />
      <ServicesOverview services={content.services} />
      <DoctorProfile profile={content.doctorProfile} />
      <ConditionsWeTreat />
      <AdvancedTreatments />
      <ClearVeinAdvantage />
      <CTASection ctaText={content.ctaText} aboutText={content.aboutText} />
    </main>
  );
}

