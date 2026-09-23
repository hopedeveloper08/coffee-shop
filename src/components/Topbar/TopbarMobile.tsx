import LogoType from "../../assets/logo-type.svg?react"
import { HiBars3, HiOutlineShoppingCart } from "react-icons/hi2";

export default function TopbarMobile() {
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
      <label htmlFor="cart-drawer" className="btn btn-ghost btn-circle">
        <HiOutlineShoppingCart className="size-7" />
      </label>
    </header>
  );
}
