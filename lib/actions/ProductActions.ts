"use server";

import { prisma } from "@/lib/prisma";
import type { Product } from "@/types/product";

export async function getLatestProducts(): Promise<Product[]> {
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return data.map((p) => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    category: p.category,
    images: p.images,
    brand: p.brand,
    description: p.description,
    stock: p.stock,
    price: p.price.toNumber(),
    rating: p.rating.toNumber(),
    numReviews: p.numReviews,
    isFeatured: p.isFeatured,
    banner: p.banner,
    createdAt: p.createdAt.toISOString(),
  }));
}
