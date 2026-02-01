import { z } from "zod";

export const productSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  slug: z.string().min(1),
  category: z.string().min(1),
  images: z.array(z.string()),
  brand: z.string().min(1),
  description: z.string(),
  stock: z.number().int().min(0),
  price: z.number().positive(),
  rating: z.number().min(0).max(5),
  numReviews: z.number().int().min(0),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  createdAt: z.string().datetime(),
});

// استخراج type از schema
export type Product = z.infer<typeof productSchema>;


