import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContent extends Document {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  heroDescription: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  aboutText: string;
  services: string[];
  servicesTitle: string;
  servicesDescription1: string;
  servicesDescription2: string;
  doctorProfile: string;

  ctaText: string;
  conditionsTitle: string;
  conditionsDescription: string;
  conditionsList: { title: string; description: string }[];
  treatmentsTitle: string;
  treatmentsDescription: string;
  treatmentsList: { title: string; description: string; label: string }[];
  advantagesTitle: string;
  advantagesList: { title: string; description: string }[];
  
  // Global Components
  navLogoText: string;
  navLinks: { label: string; href: string }[];
  footerDescription: string;
  footerCopyright: string;
  footerLinks: { label: string; href: string }[];

  // New About Page Fields
  aboutBadge: string;
  aboutSuffix: string;
  aboutBio1: string;
  aboutBio2: string;
  aboutQualifications: string[];
  aboutAppointments: string[];
  aboutAcademicBackground: string;
  aboutAcademicTags: string[];
  aboutPublicationCount: string;
  aboutPublicationCountLabel: string;
  aboutCredentialsList: { title: string; description: string }[];
  aboutProfessionalTitle: string;
  aboutProfessionalSubtitle: string;
  aboutProfessionalParagraphs: string[];
  aboutClinicalFocus: string[];
  aboutResearchTeaching: string[];
  aboutStandardsTitle: string;
  aboutStandardsSubtitle: string;
  aboutPillars: { title: string; description: string; side: 'left' | 'right' }[];

  // Subscribe page
  subscribeHeroBadge: string;
  subscribeHeroTitle: string;
  subscribeHeroDescription: string;
  subscribeDoctorCredit: string;
  subscribeSecurityNote: string;
  subscribeHeroBgSrc: string;
  subscribeFormHeading: string;
  subscribeFormSubmitLabel: string;
  subscribePrivacyText: string;
  subscribeExpectHeading: string;
  subscribeExpectList: { title: string; description: string }[];
  subscribeExpertTitle: string;
  subscribeExpertQuote: string;
  subscribeExpertDoctorName: string;
  subscribeExpertBio: string;
  subscribeExpertImageSrc: string;
  subscribeExpertImageAlt: string;
  subscribeExpertStats: { value: string; label: string }[];

  updatedAt: Date;
}

const ContentSchema: Schema = new Schema(
  {
    heroTitle: { type: String, required: true },
    heroSubtitle: { type: String, required: true },
    heroBadge: { type: String, required: true, default: 'Specialist Vascular Clinic' },
    heroDescription: { type: String, required: true, default: '' },
    heroCtaPrimary: { type: String, required: true, default: 'Book Consultation' },
    heroCtaSecondary: { type: String, required: true, default: 'Learn More' },
    aboutText: { type: String, required: true },
    services: { type: [String], default: [] },
    servicesTitle: { type: String, default: 'Comprehensive Venous Assessment and Minimally Invasive Treatment.' },
    servicesDescription1: { type: String, default: 'We provide a gold-standard approach to vein health. Every patient journey begins with a comprehensive duplex ultrasound assessment to map the underlying venous anatomy precisely.' },
    servicesDescription2: { type: String, default: 'All procedures are performed under local anaesthetic as day-case treatments, allowing you to return to your normal routine with minimal downtime. We prioritize evidence-based guidelines and surgical precision.' },
    doctorProfile: { type: String, required: true },

    ctaText: { type: String, required: true },
    
    // Conditions Section
    conditionsTitle: { type: String, default: 'Conditions We Treat' },
    conditionsDescription: { type: String, default: 'Specialized clinical management for the full spectrum of venous pathology.' },
    conditionsList: [{
      title: String,
      description: String
    }],

    // Advanced Treatments Section
    treatmentsTitle: { type: String, default: 'Advanced Minimally Invasive Treatments' },
    treatmentsDescription: { type: String, default: 'We utilize state-of-the-art technologies to ensure effective closure of diseased veins with minimal patient discomfort.' },
    treatmentsList: [{
      title: String,
      description: String,
      label: String
    }],

    // Advantage Section
    advantagesTitle: { type: String, default: 'The Clear Vein Advantage' },
    advantagesList: [{
      title: String,
      description: String
    }],

    // Global Components
    navLogoText: { type: String, default: 'CLEAR VEIN' },
    navLinks: [{
      label: String,
      href: String
    }],
    footerDescription: { type: String, default: 'Specialist venous care delivered with surgical precision. Led by Consultant Vascular Surgeon Dr Ahmed Hassanin.' },
    footerCopyright: { type: String, default: '© 2024 Clear Vein Clinic. Mr. Ahmed Hassanin is registered on the Specialist Division of the Irish Medical Council (Vascular Surgery) and practises in accordance with professional standards and clinical guidelines.' },
    footerLinks: [{
      label: String,
      href: String
    }],

    // About Page Fields
    aboutBadge: { type: String, default: 'Consultant Vascular Surgeon' },
    aboutSuffix: { type: String, default: 'PhD FEBVS MSc' },
    aboutBio1: { type: String, default: 'Currently practising as a Consultant Vascular Surgeon within the HSE in Dublin.' },
    aboutBio2: { type: String, default: 'Pioneering minimally invasive vascular care through academic rigor, clinical excellence, and patient-centered surgical precision.' },
    aboutQualifications: { type: [String], default: [] },
    aboutAppointments: { type: [String], default: [] },
    aboutAcademicBackground: { type: String, default: '' },
    aboutAcademicTags: { type: [String], default: [] },
    aboutPublicationCount: { type: String, default: '30+' },
    aboutPublicationCountLabel: { type: String, default: 'Contributor to over 30 peer-reviewed medical publications.' },
    aboutCredentialsList: [{
      title: String,
      description: String
    }],
    aboutProfessionalTitle: { type: String, default: 'Professional Profile' },
    aboutProfessionalSubtitle: { type: String, default: '& Academic Excellence' },
    aboutProfessionalParagraphs: { type: [String], default: [] },
    aboutClinicalFocus: { type: [String], default: [] },
    aboutResearchTeaching: { type: [String], default: [] },
    aboutStandardsTitle: { type: String, default: 'The Standards of Care' },
    aboutStandardsSubtitle: { type: String, default: "Four pillars that define Dr. Hassanin's surgical practice." },
    aboutPillars: [{
      title: String,
      description: String,
      side: { type: String, enum: ['left', 'right'] }
    }],

    subscribeHeroBadge: { type: String, default: 'NEWSLETTER & UPDATES' },
    subscribeHeroTitle: {
      type: String,
      default: 'Clinical Updates &\nPatient Education',
    },
    subscribeHeroDescription: {
      type: String,
      default:
        'The primary portal for patients and healthcare professionals to stay informed about the latest evidence-based venous treatments, clinical guidelines, and clinic news.',
    },
    subscribeDoctorCredit: {
      type: String,
      default: 'Dr. Ahmed Hassanin, PhD, FEBVS',
    },
    subscribeSecurityNote: {
      type: String,
      default: 'GDPR Compliant & Secure',
    },
    subscribeHeroBgSrc: { type: String, default: '/hero.svg' },
    subscribeFormHeading: { type: String, default: 'Stay Informed' },
    subscribeFormSubmitLabel: {
      type: String,
      default: 'Subscribe to Updates',
    },
    subscribePrivacyText: {
      type: String,
      default:
        'We respect your privacy. All data is processed according to GDPR clinical standards. You can unsubscribe from these updates at any time via the link in our emails.',
    },
    subscribeExpectHeading: { type: String, default: 'What to Expect' },
    subscribeExpectList: [{
      title: String,
      description: String,
    }],
    subscribeExpertTitle: { type: String, default: 'Expert Oversight' },
    subscribeExpertQuote: {
      type: String,
      default:
        '"Our commitment is to bridge the gap between clinical research and patient care.\nEvery update provided here is scrutinized for clinical accuracy and evidence-based\nrelevance."',
    },
    subscribeExpertDoctorName: {
      type: String,
      default: 'Dr. Ahmed Hassanin, PhD, FEBVS',
    },
    subscribeExpertBio: {
      type: String,
      default:
        'Dr. Hassanin is a distinguished Fellow of the European Board of Vascular Surgery with extensive research background in venous hemodynamics. He oversees the clinical integrity of all education and update portals at Clear Vein Clinic.',
    },
    subscribeExpertImageSrc: { type: String, default: '/doctor.svg' },
    subscribeExpertImageAlt: {
      type: String,
      default: 'Dr. Ahmed Hassanin',
    },
    subscribeExpertStats: [{
      value: String,
      label: String,
    }],

  },
  { timestamps: true }
);




// Prevent model overwrite in development
const Content: Model<IContent> = mongoose.models.Content || mongoose.model<IContent>('Content', ContentSchema);

export default Content;
