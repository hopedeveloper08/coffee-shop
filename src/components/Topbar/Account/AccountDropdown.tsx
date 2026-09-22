import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineCog6Tooth,
  HiOutlineEnvelope,
  HiOutlineShoppingBag,
} from "react-icons/hi2";

export default function AccountDropdown() {
  return (
    <div
      className="
        absolute top-full mt-1 left-5 
        opacity-0 invisible group-hover:visible group-hover:opacity-100
        w-52 
        p-5 
        border-t-[3px] border-primary 
        bg-base-200 
        shadow-normal 
        rounded-2xl 
        text-base-content 
        transition-all 
        delay-75
    "
    >
      <div>
        <div
          className="
            flex flex-col
            *:flex *:items-center *:gap-2 *:p-2 *:hover:bg-primary-soft/20 *:rounded-md *:hover:text-primary
          "
        >
          <a href="#">
            <HiOutlineShoppingBag className="size-5" />
            <span>سفارشات من</span>
          </a>
          <a href="#">
            <HiOutlineEnvelope className="size-5" />
            <span>لیست پیام‌ها</span>
          </a>
          <a href="#">
            <HiOutlineCog6Tooth className="size-5" />
            <span>اطلاعات کاربری</span>
          </a>
        </div>
        <div className="w-full h-px bg-secondary-soft/30 my-3"></div>
        <button
          className="
            flex items-center gap-2 
            w-full
            p-2
            rounded-md
            hover:bg-error/10
            hover:text-error
            cursor-pointer
            transition-colors 
        "
        >
          <HiOutlineArrowRightOnRectangle className="size-5" />
          <span>خروج از حساب</span>
        </button>
      </div>
    </div>
  );
}
