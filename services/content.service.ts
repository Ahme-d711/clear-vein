import connectDB from '@/lib/mongodb';
import Content, { IContent } from '@/models/Content';
import { ContentUpdateInput } from '@/lib/validations/content.schema';

export class ContentService {
  /**
   * Retrieves the first content entry from the database.
   * If none exists, creates a default one.
   */
  static async getContent(): Promise<IContent | null> {
    await connectDB();
    let content = await Content.findOne().lean() as IContent | null;

    if (!content) {
      // Initialize if empty
      const newContent = await Content.create({
        heroTitle: 'Welcome to Clear Vein Clinic',
        heroSubtitle: 'Specialized care for vascular health',
        aboutText: 'Our clinic provides expert care for venous disorders.',
        services: ['Sclerotherapy', 'Varicose Vein Treatment'],
        doctorProfile: 'Dr. Jane Doe is a board-certified vascular surgeon.',
        ctaText: 'Book an Appointment',
      });
      return newContent.toObject();
    }

    return content;
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

