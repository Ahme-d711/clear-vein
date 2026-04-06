import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import DoctorProfile from "@/components/sections/DoctorProfile";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <DoctorProfile />
    </main>
  );
}
