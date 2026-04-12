import { z } from 'zod';

export const ContentUpdateSchema = z.object({
  heroTitle: z.string().optional(),
  heroSubtitle: z.string().optional(),
  heroBadge: z.string().optional(),
  heroDescription: z.string().optional(),
  heroCtaPrimary: z.string().optional(),
  heroCtaSecondary: z.string().optional(),
  services: z.array(z.string()).optional(),
  servicesTitle: z.string().optional(),
  servicesDescription1: z.string().optional(),
  servicesDescription2: z.string().optional(),
  doctorProfile: z.string().optional(),
  conditionsTitle: z.string().optional(),
  conditionsDescription: z.string().optional(),
  conditionsList: z.array(z.object({
    title: z.string(),
    description: z.string()
  })).optional(),
  treatmentsTitle: z.string().optional(),
  treatmentsDescription: z.string().optional(),
  treatmentsList: z.array(z.object({
    title: z.string(),
    label: z.string(),
    description: z.string()
  })).optional(),
  advantagesTitle: z.string().optional(),
  advantagesList: z.array(z.object({
    title: z.string(),
    description: z.string()
  })).optional(),
  navLogoText: z.string().optional(),
  navLinks: z.array(z.object({
    label: z.string(),
    href: z.string()
  })).optional(),
  footerDescription: z.string().optional(),
  footerCopyright: z.string().optional(),
  footerLinks: z.array(z.object({
    label: z.string(),
    href: z.string()
  })).optional(),
  aboutText: z.string().optional(),
  ctaText: z.string().optional(),

  // About Page Fields
  aboutBadge: z.string().optional(),
  aboutSuffix: z.string().optional(),
  aboutBio1: z.string().optional(),
  aboutBio2: z.string().optional(),
  aboutQualifications: z.array(z.string()).optional(),
  aboutAppointments: z.array(z.string()).optional(),
  aboutAcademicBackground: z.string().optional(),
  aboutAcademicTags: z.array(z.string()).optional(),
  aboutPublicationCount: z.string().optional(),
  aboutPublicationCountLabel: z.string().optional(),
  aboutCredentialsList: z.array(z.object({
    title: z.string(),
    description: z.string()
  })).optional(),
  aboutProfessionalTitle: z.string().optional(),
  aboutProfessionalSubtitle: z.string().optional(),
  aboutProfessionalParagraphs: z.array(z.string()).optional(),
  aboutClinicalFocus: z.array(z.string()).optional(),
  aboutResearchTeaching: z.array(z.string()).optional(),
  aboutStandardsTitle: z.string().optional(),
  aboutStandardsSubtitle: z.string().optional(),
  aboutPillars: z.array(z.object({
    title: z.string(),
    description: z.string(),
    side: z.enum(['left', 'right'])
  })).optional(),
});




export type ContentUpdateInput = z.infer<typeof ContentUpdateSchema>;
