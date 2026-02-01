import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";

type ProductListProps = {
  products: Product[];
  title?: string;
};

const ProductList = ({ products, title }: ProductListProps) => {
  return (
    <div className="my-10">
      {title && <h2 className="h2-bold mb-4">{title}</h2>}

      {products.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
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
