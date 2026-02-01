"use server";

import { prisma } from "@/lib/prisma";
import type { Product } from "@/types/product";
import { prismaProductToProduct } from "@/lib/utils/product";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

export async function getLatestProducts(): Promise<Product[]> {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return data.map(prismaProductToProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = await prisma.product.findFirst({
    where: { slug: slug },
  });

  if (!product) return null;

  return prismaProductToProduct(product);
}
