import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./ProductPrice";
import { Product } from "@/types/product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/10 bg-white transition hover:shadow-md dark:border-white/10 dark:bg-black"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-black/5 dark:bg-white/5">
        <Image
          src={product.images?.[0] ?? "/images/placeholder.png"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">
          {product.brand}
        </p>

        <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-black dark:text-white">
          {product.name}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-center gap-1 text-sm text-black/80 dark:text-white/80">
            <span>★</span>
            <span className="font-medium">{product.rating.toFixed(1)}</span>
          </div>

          <ProductPrice className="text-green-600" value={Number(product.price)} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
