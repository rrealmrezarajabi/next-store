import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/ProductActions";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/shared/product/ProductPrice";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2"></div>
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
                <p>{product.brand} {product.category}</p>
                <h1 className="h3-bold">{product.name}</h1>
                <p>{product.rating.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </section>
    </> 
  );
};

export default ProductDetailsPage;
