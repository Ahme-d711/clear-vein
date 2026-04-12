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
    { label: "VEIN CONDITIONS", href: "/#conditions" },
    { label: "TREATMENTS", href: "/#treatments" },
    { label: "FEES", href: "/#fees" },
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

