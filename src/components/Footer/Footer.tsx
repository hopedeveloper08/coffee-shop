import FooterAbout from "./FooterAbout";
import FooterContact from "./FooterContact";
import FooterCopyRight from "./FooterCopyRight";
import FooterEffect from "./FooterEffect";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer
      className="
        relative  
        mt-14 lg:mt-36
        bg-zinc-700
        text-secondary-soft
        flex flex-col
        px-4 py-8
        xl:px-24 xl:pt-16 xl:pb-11
      "
    >
      <FooterEffect />
      <section
        className="
          flex max-lg:flex-col items-start 
          justify-between
          gap-10 xl:gap-28 
        "
      >
        <div className="basis-4/10">
          <FooterAbout />
        </div>
        <div className="basis-3/10">
          <FooterLink />
        </div>
        <div className="basis-3/10">
          <FooterContact />
        </div>
      </section>
      <div className="w-full h-px bg-white/10 my-11"></div>
      <section><FooterCopyRight /></section>
    </footer>
  );
}
