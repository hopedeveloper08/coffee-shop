import Logo from "../../assets/logo.svg?react";
import LogoType from "../../assets/logo-type.svg?react";

export default function FooterAbout() {
  return (
    <div className="flex flex-col gap-4.5 lg:gap-6">
      <a
        href="/"
        className="
          flex items-center
          *:h-11
          group
          *:text-secondary-soft *:group-hover:text-primary 
          *:transition-colors 
        "
      >
        <Logo />
        <LogoType />
      </a>
      <div>
        <p className="text-lg md:text-xl/12 text-justify">ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.</p>
      </div>
    </div>
  );
}
