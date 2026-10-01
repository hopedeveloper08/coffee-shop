import products from "../../data/products";
import ProductCart from "./ProductCart";

export default function Product() {
  return (
    <div
      className="
        mt-12
        grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5
      "
    >
      {products.map((item) => (
        <ProductCart key={item.id} {...item} />
      ))}
    </div>
  );
}
