import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/ProductList";
export default function Home() {
  return (
    <>
      <ProductList
        limit={4}
        products={sampleData.products}
        title="Newest Arrivals "
      />
    </>
  );
}
