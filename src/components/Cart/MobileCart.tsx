import { HiXMark } from "react-icons/hi2";
import CartFooter from "./CartFooter";
import CartItem from "./CartItem";

export default function MobileCart() {
  const cart = [
    {
      id: 1,
      title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی",
      price: 1350000,
      discount: 350000,
      image: "/images/products/p2.png",
    },
    {
      id: 2,
      title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی",
      price: 1700000,
      image: "/images/products/p1.png",
    },
  ];
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
                  title={item.title}
                  price={item.price}
                  discount={item.discount || undefined}
                  image={item.image}
                />
              ))}
            </div>
          </div>
          <div className="w-full h-px bg-secondary-soft dark:bg-white/10"></div>
          <CartFooter
            totalPrice={cart
              .map((item) => item.price)
              .reduce((a, b) => a + b, 0)}
          />
        </div>
      </aside>
    </div>
  );
}
