import ProductList from "@/components/shared/product/ProductList";
import { getLatestProducts } from "@/lib/actions/ProductActions";

export default async function Home() {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList products={latestProducts} title="Newest Arrivals " />
    </>
  );
}
