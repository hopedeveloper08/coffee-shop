import { HiXMark } from "react-icons/hi2";
import { LOGO_IMAGE_URL, LOGO_TYPE_COLOR_IMAGE_URL } from "../../lib/constants";

export default function MobileMenuHeader() {
  return (
    <div className="flex justify-between items-center">
      <a href={"/"} className="flex h-10 gap-x-2.5">
        <img src={LOGO_IMAGE_URL} alt="logo" />
        <img src={LOGO_TYPE_COLOR_IMAGE_URL} alt="logo" />
      </a>
      <label htmlFor="menu-drawer" className="btn btn-ghost btn-circle px-2">
        <HiXMark className="size-6" />
      </label>
    </div>
  );
}
