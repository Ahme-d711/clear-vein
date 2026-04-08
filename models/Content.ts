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
    }]
  },
  { timestamps: true }
);



// Prevent model overwrite in development
const Content: Model<IContent> = mongoose.models.Content || mongoose.model<IContent>('Content', ContentSchema);

export default Content;
