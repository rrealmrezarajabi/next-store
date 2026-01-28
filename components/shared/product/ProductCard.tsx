import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block overflow-hidden rounded-xl border border-black/10 bg-white transition hover:shadow-md dark:border-white/10 dark:bg-black"
    >
      <div className="relative aspect-square w-full bg-black/5 dark:bg-white/5">
        <Image
          src={product.images?.[0] ?? "/images/placeholder.png"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      <div className="space-y-2 p-4">
        <p className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">
          {product.brand}
        </p>

        <h3 className="line-clamp-2 text-sm font-semibold text-black dark:text-white">
          {product.name}
        </h3>
        <div className="flex justify-between mt-5">
          <div className="flex items-center gap-1 text-sm text-black/80 dark:text-white/80">
            <span>★</span>
            <span className="font-medium">{product.rating.toFixed(1)}</span>
          </div>

          <p className="text-sm font-bold text-black dark:text-white">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
