import TopbarMobile from "./TopbarMobile";
import TopbarNav from "./TopbarNav";

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
        <div className="flex justify-between items-center">
          <TopbarNav />
          <div></div>
        </div>
      </header>
      <TopbarMobile />
    </>
  );
}
