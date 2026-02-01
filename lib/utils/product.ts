import type { Product as PrismaProduct } from "@/lib/generated/prisma/client";
import type { Product } from "@/lib/validators/product";

/**
 * تبدیل Prisma Product به Product type
 * این تابع Decimal ها را به number تبدیل می‌کند
 */
export function prismaProductToProduct(prismaProduct: PrismaProduct): Product {
  return {
    id: prismaProduct.id,
    name: prismaProduct.name,
    slug: prismaProduct.slug,
    category: prismaProduct.category,
    images: prismaProduct.images,
    brand: prismaProduct.brand,
    description: prismaProduct.description,
    stock: prismaProduct.stock,
    price: prismaProduct.price.toNumber(),
    rating: prismaProduct.rating.toNumber(),
    numReviews: prismaProduct.numReviews,
    isFeatured: prismaProduct.isFeatured,
    banner: prismaProduct.banner,
    createdAt: prismaProduct.createdAt.toISOString(),
  };
}

