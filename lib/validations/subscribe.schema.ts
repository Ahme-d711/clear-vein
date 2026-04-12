import { z } from "zod";

export const SubscribePostSchema = z.object({
  fullName: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  description: z.string().max(5000).optional().default(""),
  role: z.enum(["patient", "gp", "hcp"]),
});

export type SubscribePostInput = z.infer<typeof SubscribePostSchema>;
