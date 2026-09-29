import {
  HiOutlineArrowRightEndOnRectangle,
  HiOutlineUser,
} from "react-icons/hi2";
import AccountDropdown from "./AccountDropdown";
import { useContext } from "react";
import AuthContext from "../../../contexts/auth";

export default function Account() {
  const { user, login } = useContext(AuthContext)

  return (
    <div
      onClick={() => user ? null : login()}
      className="
      flex items-center gap-2.5
      text-primary-soft 
      tracking-tightest 
      hover:bg-primary-soft/10 
      transition-all 
      rounded-full 
      py-1 px-1 lg:px-6 lg:py-2
      relative group
      cursor-pointer  
      "
    >
      {user ? (
        <>
          <div className="flex items-center gap-2">
            <HiOutlineUser className="size-7 lg:size-8" />
            <span className="hidden xl:inline-block">{user}</span>
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
