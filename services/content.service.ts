import connectDB from '@/lib/mongodb';
import Content, { IContent } from '@/models/Content';
import { ContentUpdateInput } from '@/lib/validations/content.schema';

const DEFAULTS = {
  heroTitle: 'Welcome to Clear Vein Clinic',
  heroSubtitle: 'Specialized care for vascular health',
  heroBadge: 'Specialist Vascular Clinic',
  heroDescription: 'Specialist assessment and minimally invasive treatment delivered by a Consultant Vascular Surgeon in a state-of-the-art clinical setting.',
  heroCtaPrimary: 'Book Consultation',
  heroCtaSecondary: 'Learn More',
  aboutText: 'Our clinic provides expert care for venous disorders.',
  services: ['Sclerotherapy', 'Varicose Vein Treatment'],
  servicesTitle: 'Comprehensive Venous Assessment and Minimally Invasive Treatment.',
  servicesDescription1: 'We provide a gold-standard approach to vein health. Every patient journey begins with a comprehensive duplex ultrasound assessment to map the underlying venous anatomy precisely.',
  servicesDescription2: 'All procedures are performed under local anaesthetic as day-case treatments, allowing you to return to your normal routine with minimal downtime. We prioritize evidence-based guidelines and surgical precision.',
  doctorProfile: 'Dr Ahmed Hassanin is a highly specialized Consultant Vascular Surgeon with international expertise in treating complex venous disorders. His clinical practice is built on a foundation of academic excellence and surgical innovation.',
  ctaText: 'Start Your Journey to Healthier Legs Today.',
  conditionsTitle: 'Conditions We Treat',
  conditionsDescription: 'Specialized clinical management for the full spectrum of venous pathology.',
  conditionsList: [
    { title: "Varicose Veins", description: "Primary superficial venous insufficiency causing bulging and symptomatic lower limb veins." },
    { title: "Chronic Venous Insufficiency", description: "Advanced stages of venous disease including leg swelling, skin changes, and heaviness." },
    { title: "Thread Veins", description: "Treatment of spider veins and telangiectasia using precision microsclerotherapy techniques." },
    { title: "Recurrent Varicose Veins", description: "Specialist management of veins that have returned following previous surgical intervention." },
    { title: "Venous Ulcers", description: "Expert care for leg ulcers driven by venous hypertension, focusing on healing and prevention." }
  ],
  treatmentsTitle: 'Advanced Minimally Invasive Treatments',
  treatmentsDescription: 'We utilize state-of-the-art technologies to ensure effective closure of diseased veins with minimal patient discomfort.',
  treatmentsList: [
    { title: "RFA", description: "Radiofrequency Ablation uses thermal energy to collapse and seal the vein wall permanently.", label: "GOLD STANDARD CHOICE" },
    { title: "EVLT", description: "Endovenous Laser Treatment uses precision light energy to target incompetent veins.", label: "CLINICAL PRECISION" },
    { title: "Foam Sclerotherapy", description: "Chemical ablation using physician-compounded foam for targeted vein closure.", label: "MINIMALLY INVASIVE" }
  ],
  advantagesTitle: 'The Clear Vein Advantage',
  advantagesList: [
    { title: "Consultant-delivered Care", description: "Your entire journey, from first scan to final treatment, is personally managed by Dr Hassanin." },
    { title: "Duplex Ultrasound Included", description: "Gold-standard diagnostic imaging performed at the initial consultation for precise planning." },
    { title: "Evidence-based Guidelines", description: "We strictly adhere to NICE and international vascular guidelines for patient safety and efficacy." },
    { title: "Day-case Procedures", description: "Walk-in, walk-out treatments performed under local anaesthetic with no hospital stay required." },
    { title: "Complex Case Expertise", description: "Equipped to manage complex recurrent disease and advanced venous ulceration." }
  ],
  navLogoText: 'CLEAR VEIN',
  navLinks: [
    { label: "HOME", href: "/" },
    { label: "ABOUT DR HASSANIN", href: "/about" },
    { label: "SUBSCRIBE", href: "/subscribe" },
    { label: "CONTACT", href: "/contact" }
  ],
  footerDescription: 'Specialist venous care delivered with surgical precision. Led by Consultant Vascular Surgeon Dr Ahmed Hassanin.',
  footerCopyright: '© 2024 Clear Vein Clinic. Mr. Ahmed Hassanin is registered on the Specialist Division of the Irish Medical Council (Vascular Surgery) and practises in accordance with professional standards and clinical guidelines.',
  footerLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Medical Disclaimer", href: "#" },
    { label: "GP Referrals", href: "#" },
    { label: "FAQs", href: "#" }
  ],
  aboutBadge: 'Consultant Vascular Surgeon',
  aboutSuffix: 'PhD FEBVS MSc',
  aboutBio1: 'Currently practising as a Consultant Vascular Surgeon within the HSE in Dublin.',
  aboutBio2: 'Pioneering minimally invasive vascular care through academic rigor, clinical excellence, and patient-centered surgical precision.',
  aboutQualifications: [
    "PhD Vascular Surgery",
    "FEBVS Fellow",
    "MSc Vascular & General Surgery"
  ],
  aboutAppointments: [
    "HSE Consultant Surgeon",
    "RCSI Clinical Examiner"
  ],
  aboutAcademicBackground: "Dr. Hassanin holds a prestigious PhD in Vascular Surgery and two Master's degrees (MSc) in both Vascular and General Surgery. As a Fellow of the European Board of Vascular Surgery (FEBVS) and a Level 9 Diploma holder in Healthcare Leadership and Management from UCC, he merges clinical expertise with structural excellence.",
  aboutAcademicTags: [
    "PhD Vascular Surgery",
    "MSc Vascular Surgery",
    "MSc General Surgery",
    "FEBVS Fellow",
    "L9 Healthcare Leadership & Management"
  ],
  aboutPublicationCount: "30+",
  aboutPublicationCountLabel: "Contributor to over 30 peer-reviewed medical publications in international vascular journals.",
  aboutCredentialsList: [
    {
      title: "FEBVS Certification",
      description: "Fellow of the European Board of Vascular Surgery, signifying the highest standard of specialist training and excellence across the continent."
    },
    {
      title: "RCSI Examiner",
      description: "Serving as an official Clinical Examiner for the Royal College of Surgeons in Ireland, shaping the next generation of surgeons."
    },
    {
      title: "UCC Leadership & Management",
      description: "Level 9 Diploma in Healthcare Leadership and Management (UCC), applying systemic innovation to clinical practice and patient pathways."
    }
  ],
  aboutProfessionalTitle: 'Professional Profile',
  aboutProfessionalSubtitle: '& Academic Excellence',
  aboutProfessionalParagraphs: [
    "Dr. Ahmed Hassanin is a distinguished Consultant Vascular Surgeon whose career is defined by a commitment to clinical innovation and academic excellence. Currently practising within the HSE in Dublin, he provides specialist care across the full spectrum of arterial and venous pathologies.",
    "His doctoral research (PhD) and multiple international publications in varicose veins management—referenced in the most recent ESVS Guidelines—are complemented by two Master's degrees in Vascular and General Surgery. This academic foundation ensures that patients at Clear Vein Clinic benefit from the most advanced, research-backed treatments available in modern medicine."
  ],
  aboutClinicalFocus: [
    "Minimally Invasive Vein Surgery",
    "Advanced Endovascular Techniques",
    "Complex Wound Management",
    "Carotid & Peripheral Arterial Surgery"
  ],
  aboutResearchTeaching: [
    "30+ Peer-Reviewed Articles",
    "RCSI Surgical Education",
    "International Guest Lecturer",
    "Clinical Audit Leadership"
  ],
  aboutStandardsTitle: 'The Standards of Care',
  aboutStandardsSubtitle: "Four pillars that define Dr. Hassanin's surgical practice.",
  aboutPillars: [
    {
      title: "Consultant-Led",
      description: "Every stage of your journey, from initial scan to post-operative follow-up, is personally managed by Dr. Hassanin.",
      side: "left"
    },
    {
      title: "Evidence-Based",
      description: "Utilizing the latest clinical trials and international vascular registries to ensure the highest safety profiles.",
      side: "right"
    },
    {
      title: "Patient-Centered",
      description: "Bespoke treatment plans tailored to individual lifestyle needs and clinical requirements.",
      side: "left"
    },
    {
      title: "Surgical Precision",
      description: "Employing cutting-edge endovenous laser and radiofrequency technology for superior cosmetic and functional results.",
      side: "right"
    }
  ]
};



export class ContentService {
  /**
   * Retrieves the first content entry from the database.
   * If none exists, creates a default one.
   */
  static async getContent(): Promise<IContent | null> {
    await connectDB();
    const content = await Content.findOne().lean();

    if (!content) {
      // Initialize if empty
      const newContent = await Content.create(DEFAULTS);
      return (newContent.toObject() as unknown) as IContent;
    }

    // Merge with defaults to handle new fields for existing documents
    return ({ ...DEFAULTS, ...content } as unknown) as IContent;
  }

  /**
   * Updates the first content entry in the database.
   * @param data Validated content input
   */
  static async updateContent(data: ContentUpdateInput): Promise<IContent | null> {
    await connectDB();
    let content = await Content.findOneAndUpdate({}, data, {
      new: true, // return updated document
      upsert: true, // create if not found
    }).lean() as IContent | null;

    return content;
  }
}

