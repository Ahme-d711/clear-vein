import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <StatsSection />
    </main>
  );
}
