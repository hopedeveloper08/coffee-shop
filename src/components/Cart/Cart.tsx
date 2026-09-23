import { HiOutlineShoppingCart } from "react-icons/hi2";
import CartEmpty from "./CartEmpty";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

export default function Cart() {
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
    <div className="relative group">
      <div className=" rounded-full hover:bg-primary-soft/10 transition-all p-1 xl:p-2 text-primary-soft">
        <HiOutlineShoppingCart className="size-7 lg:size-8" />
      </div>
      <div className="absolute top-full mt-2 left-0 w-100 p-5 opacity-0 invisible group-hover:visible group-hover:opacity-100 border-t-[3px] border-primary bg-base-200 shadow-normal rounded-2xl text-base-content transition-all delay-75">
        {cart.length ? (
          <>
            <CartHeader cartLength={cart.length} />
            <div className="flex flex-col max-h-125 overflow-y-auto">
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
            <div className="w-90 mx-auto h-px bg-secondary-soft dark:bg-white/10"></div>
            <CartFooter
              totalPrice={cart
                .map((item) => item.price)
                .reduce((a, b) => a + b, 0)}
            />
          </>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
}
