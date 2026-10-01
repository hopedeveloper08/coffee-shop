import { HiOutlineShoppingCart } from "react-icons/hi2";
import CartEmpty from "./CartEmpty";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import { useAppSelector } from "../../redux/hooks";
import products from "../../data/products";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="relative group">
      <div className=" rounded-full hover:bg-primary-soft/10 transition-all p-1 xl:p-2 text-primary-soft relative">
        {cart.length > 0 && (
          <div className="absolute top-1 right-0 rounded-full bg-primary size-4 text-xs text-primary-content flex justify-center items-center pt-1">
            {cart.map((item) => item.count).reduce((a, b) => a + b)}
          </div>
        )}
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
                  {...products.filter((product) => product.id === item.id)[0]}
                  count={item.count}
                />
              ))}
            </div>
            <div className="w-90 mx-auto h-px bg-secondary-soft dark:bg-white/10"></div>
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
          </>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
}
