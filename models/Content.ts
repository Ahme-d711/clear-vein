import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContent extends Document {
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  services: string[];
  doctorProfile: string;
  ctaText: string;
  updatedAt: Date;
}

const ContentSchema: Schema = new Schema(
  {
    heroTitle: { type: String, required: true },
    heroSubtitle: { type: String, required: true },
    aboutText: { type: String, required: true },
    services: { type: [String], default: [] },
    doctorProfile: { type: String, required: true },
    ctaText: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent model overwrite in development
const Content: Model<IContent> = mongoose.models.Content || mongoose.model<IContent>('Content', ContentSchema);

export default Content;
