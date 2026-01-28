import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";

type ProductListProps = {
  products: Product[];
  title?: string;
  limit?: number;
};

const ProductList = ({ products, title, limit }: ProductListProps) => {
  const limitedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="my-10">
      {title && <h2 className="h2-bold mb-4">{title}</h2>}

      {limitedProducts.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {limitedProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
