import { products } from "../../lib/products";
import ProductCart from "./ProductCart";

export default function Product() {
  return (
    <div
      className="
        mt-12
        grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5
      "
    >
      {products.map((item) => (
        <ProductCart
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          discount={item.discount}
          rate={item.rate}
        />
      ))}
    </div>
  );
}
