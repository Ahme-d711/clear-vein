import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import DoctorProfile from "@/components/sections/DoctorProfile";
import ConditionsWeTreat from "@/components/sections/ConditionsWeTreat";
import AdvancedTreatments from "@/components/sections/AdvancedTreatments";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <DoctorProfile />
      <ConditionsWeTreat />
      <AdvancedTreatments />
    </main>
  );
}
