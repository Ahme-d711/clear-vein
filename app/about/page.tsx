import AboutDoctor from "@/components/about/AboutDoctor";
import ProfessionalProfile from "@/components/about/ProfessionalProfile";
import CredentialsSection from "@/components/about/CredentialsSection";
import StandardsOfCare from "@/components/about/StandardsOfCare";
import { ContentService } from "@/services/content.service";

export default async function AboutPage() {
  const data = await ContentService.getContent();

  if (!data) return null;

  return (
    <main>
      <AboutDoctor 
        badge={data.aboutBadge}
        suffix={data.aboutSuffix}
        bio1={data.aboutBio1}
        bio2={data.aboutBio2}
        qualifications={data.aboutQualifications}
        appointments={data.aboutAppointments}
      />
      <CredentialsSection 
        background={data.aboutAcademicBackground}
        tags={data.aboutAcademicTags}
        pubCount={data.aboutPublicationCount}
        pubLabel={data.aboutPublicationCountLabel}
        credentials={data.aboutCredentialsList}
      />
      <ProfessionalProfile 
        title={data.aboutProfessionalTitle}
        subtitle={data.aboutProfessionalSubtitle}
        paragraphs={data.aboutProfessionalParagraphs}
        focus={data.aboutClinicalFocus}
        research={data.aboutResearchTeaching}
      />
      <StandardsOfCare 
        title={data.aboutStandardsTitle}
        subtitle={data.aboutStandardsSubtitle}
        pillars={data.aboutPillars}
      />
    </main>
  );
}

