import Hero from "@/components/layout/Hero";
import Introduction from "@/components/sections/Introduction";
import OurApproach from "@/components/sections/OurApproach";
import OurBackground from "@/components/sections/OurBackground";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <OurApproach />
      <OurBackground />
    </main>
  );
}
