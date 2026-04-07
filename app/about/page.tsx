import AboutDoctor from "@/components/about/AboutDoctor";
import ProfessionalProfile from "@/components/about/ProfessionalProfile";
import CredentialsSection from "@/components/about/CredentialsSection";
import StandardsOfCare from "@/components/about/StandardsOfCare";

export default function AboutPage() {
  return (
    <main>
      <AboutDoctor />
      <CredentialsSection />
      <ProfessionalProfile />
      <StandardsOfCare />
    </main>
  );
}
