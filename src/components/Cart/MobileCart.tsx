import { HiXMark } from "react-icons/hi2";
import CartFooter from "./CartFooter";
import CartItem from "./CartItem";
import products from "../../data/products";
import { useAppSelector } from "../../redux/hooks";

export default function MobileCart() {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="drawer drawer-end">
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
      <aside className="drawer-side z-50">
        <label
          htmlFor="cart-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-200 text-base-content text-sm h-full max-h-screen w-80 px-4 py-5 flex flex-col">
          <div className="flex justify-between items-center text-base-content">
            <label
              htmlFor="cart-drawer"
              className="btn btn-ghost btn-circle px-2"
            >
              <HiXMark className="size-6" />
            </label>
            <div className="font-dana-medium text-base">سبد خرید</div>
          </div>
          <div className="w-full h-px bg-secondary-soft dark:bg-white/10 my-2"></div>
          <div className="grow min-h-0 overflow-y-auto">
            <div className="flex flex-col">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  {...products.filter((product) => product.id === item.id)[0]}
                  count={item.count}
                />
              ))}
            </div>
          </div>
          <div className="w-full h-px bg-secondary-soft dark:bg-white/10"></div>
          <CartFooter
            totalPrice={cart
              .map((item) => {
                const product = products.filter(
                  (product) => product.id === item.id,
                )[0];
                if (product.discount) {
                  return (
                    (product.price -
                      Math.floor((product.price * product.discount) / 100)) *
                    item.count
                  );
                } else return product.price * item.count;
              })
              .reduce((a, b) => a + b, 0)}
          />
        </div>
      </aside>
    </div>
  );
}
