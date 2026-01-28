

const ProductList = ({
  products,
  title,
  limit
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any;
  title?: string;
  limit?:number
}) => {

    const limitedProducts = limit ? products.slice(0,limit) : products
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {products.length > 0 ? (
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {limitedProducts.map((p: any) => (
            <div key={p.name}>{p.name}</div>
          ))}
        </div>
      ) : ( 
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
