import Account from "./Account/Account";
import TopbarMobile from "./TopbarMobile";
import TopbarNav from "./TopbarNav";
import TopbarTheme from "./TopbarTheme";

export default function Topbar() {
  return (
    <>
      <header
        className="
      hidden md:flex
      fixed top-9 right-0 left-0
      w-[98%] md:w-[95%] lg:w-[90%]
      h-24
      mx-auto 
      px-5 xl:px-10 py-5 
      rounded-3xl 
      bg-black/50 
      backdrop-blur-[6px]  
      z-50
    "
      >
        <div className="w-full flex justify-between items-center">
          <TopbarNav />
          <div className="flex items-center gap-x-3 lg:gap-x-5 xl:gap-x-10">
            <TopbarTheme />
            <div className="w-px bg-white/20 h-14"></div>
            <Account />
          </div>
        </div>
      </header>
      <TopbarMobile />
    </>
  );
}
