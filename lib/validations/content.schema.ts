import { z } from 'zod';

export const ContentUpdateSchema = z.object({
  heroTitle: z.string().min(1, 'Hero title is required'),
  heroSubtitle: z.string().min(1, 'Hero subtitle is required'),
  heroBadge: z.string().optional(),
  heroDescription: z.string().optional(),
  heroCtaPrimary: z.string().optional(),
  heroCtaSecondary: z.string().optional(),
  aboutText: z.string().min(1, 'About text is required'),
  services: z.array(z.string()).min(1, 'At least one service is required'),
  doctorProfile: z.string().min(1, 'Doctor profile is required'),
  ctaText: z.string().min(1, 'CTA text is required'),
});


export type ContentUpdateInput = z.infer<typeof ContentUpdateSchema>;
