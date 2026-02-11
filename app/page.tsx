import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import Introduction from "@/components/sections/Introduction";
import AboutSection from "@/components/sections/AboutSection";
import OurApproach from "@/components/sections/OurApproach";
import OurBackground from "@/components/sections/OurBackground";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <OurApproach />
      <OurBackground />
      <CTASection />
      <AboutSection />
      <StatsSection />
    </main>
  );
}
