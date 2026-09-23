import HeaderContent from "./HeaderContent";
import HeaderEffect from "./HeaderEffect";

export default function Header() {
  return (
    <section
      className="
        relative
        bg-[url(/images/headerBgMobile.webp)] md:bg-[url(/images/headerBgDesktop.webp)]
        bg-no-repeat bg-top bg-cover
        h-50 xs:h-auto lg:h-screen
        xs:aspect-2/1 lg:aspect-auto
      "
    >
      <HeaderContent />
      <HeaderEffect />
    </section>
  );
}
