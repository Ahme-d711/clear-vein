import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import DoctorProfile from "@/components/sections/DoctorProfile";
import ConditionsWeTreat from "@/components/sections/ConditionsWeTreat";
import AdvancedTreatments from "@/components/sections/AdvancedTreatments";
import ClearVeinAdvantage from "@/components/sections/ClearVeinAdvantage";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <DoctorProfile />
      <ConditionsWeTreat />
      <AdvancedTreatments />
      <ClearVeinAdvantage />
      <CTASection />
    </main>
  );
}
