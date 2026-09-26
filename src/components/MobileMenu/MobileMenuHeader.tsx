import { HiXMark } from "react-icons/hi2";
import Logo from "../../assets/logo.svg?react";
import LogoType from "../../assets/logo-type.svg?react";

export default function MobileMenuHeader() {
  return (
    <div className="flex justify-between items-center">
      <a href={"/"} className="flex h-10">
        <Logo className="text-primary h-full" />
        <LogoType className="text-primary h-full" />
      </a>
      <label htmlFor="menu-drawer" className="btn btn-ghost btn-circle px-2">
        <HiXMark className="size-6" />
      </label>
    </div>
  );
}
