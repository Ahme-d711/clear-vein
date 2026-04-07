import { z } from 'zod';

export const ContentUpdateSchema = z.object({
  heroTitle: z.string().min(1, 'Hero title is required'),
  heroSubtitle: z.string().min(1, 'Hero subtitle is required'),
  aboutText: z.string().min(1, 'About text is required'),
  services: z.array(z.string()).min(1, 'At least one service is required'),
  doctorProfile: z.string().min(1, 'Doctor profile is required'),
  ctaText: z.string().min(1, 'CTA text is required'),
});

export type ContentUpdateInput = z.infer<typeof ContentUpdateSchema>;
