import {
  HiOutlineArrowRightEndOnRectangle,
  HiOutlineUser,
} from "react-icons/hi2";
import AccountDropdown from "./AccountDropdown";

export default function Account() {
  const isLogin = true;
  const name = "رضا شهرکی";
  return (
    <div
      className="
      flex items-center gap-2.5
      text-primary-soft 
      tracking-tightest 
      hover:bg-primary-soft/10 
      transition-all 
      rounded-full 
      py-1 px-1 lg:px-6 lg:py-2
      relative group
      "
    >
      {isLogin ? (
        <>
          <div className="flex items-center gap-2">
            <HiOutlineUser className="size-7 lg:size-8" />
            <span className="hidden xl:inline-block">{name}</span>
          </div>
          <AccountDropdown />
        </>
      ) : (
        <>
          <HiOutlineArrowRightEndOnRectangle className="size-7 lg:size-8" />
          <span className="hidden xl:inline-block">ورود | ثبت‌نام</span>
        </>
      )}
    </div>
  );
}
