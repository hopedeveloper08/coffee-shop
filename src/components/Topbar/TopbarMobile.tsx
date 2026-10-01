import LogoType from "../../assets/logo-type.svg?react"
import { HiBars3, HiOutlineShoppingCart } from "react-icons/hi2";
import { useAppSelector } from "../../redux/hooks";

export default function TopbarMobile() {
  const cart = useAppSelector(state => state.cart)
  return (
    <header
      className="
        flex md:hidden
        justify-between items-center
        w-full h-16
        p-4
        bg-base-200 text-base-content
        shadow
    "
    >
      <label htmlFor="menu-drawer" className="btn btn-ghost btn-circle">
        <HiBars3 className="size-7" />
      </label>
      <a href="/">
        <LogoType className="h-10 text-primary" />
      </a>
      <label
        htmlFor="cart-drawer"
        className="btn btn-ghost btn-circle relative"
      >
        {cart.length > 0 && (
          <div className="absolute top-1 right-0 rounded-full bg-primary size-4 text-xs flex justify-center items-center pt-1">
            {cart.map(item => item.count).reduce((a, b) => a + b)}
          </div>
        )}
        <HiOutlineShoppingCart className="size-7" />
      </label>
    </header>
  );
}
