export default function FooterCopyRight() {
  return (
    <div
      className="
        flex items-start gap-2.5
        font-dana-medium
        text-sm md:text-lg xl:text-xl
    "
    >
      <div>
        <div className="size-7.5 border border-white/10 rounded-full flex justify-center items-center">
          <div className="size-5 border border-white/20 rounded-full flex justify-center items-center">
            <div className="size-2.5 bg-linear-to-b from-primary to-primary-soft rounded-full"></div>
          </div>
        </div>
      </div>
      <span>
        این رابط کاربری یک نمونه‌کار توسعه داده شده توسط
        <a
          className="font-dana-demibold text-primary hover:text-primary-soft transition-colors"
          href="https://hopedeveloper08.github.io/hd/"
        >
          {" "}
          رضا شهرکی{" "}
        </a>
        می‌باشد، و منبع آن از دوره Tailwind سبزلرن با اهداف آموزشی است و حقوق
        این اثر محفوظ می‌باشد.&copy;
      </span>
    </div>
  );
}
