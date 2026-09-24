import { bannerData } from "../../lib/constants";

export default function Banner() {
  return (
    <section
      className="
        mt-8 md:mt-20
        container max-w-7xl px-4
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {bannerData.map((item) => (
          <a href="#"
            className={
              item.image +
              ` 
              bg-cover bg-no-repeat
              h-36 md:h-62
              px-7 py-10 md:px-12 md:py-22
              rounded-2xl
              relative
              `
            }
          >
            <div className="absolute top-0 right-0 size-full bg-linear-to-l from-black/60 to-black/10 rounded-2xl"></div>
            <div className="flex flex-col items-start gap-4 md:gap-7 text-white ">
              <h1 className="font-dana-demibold text-2xl md:text-4xl z-10">
                {item.title}
              </h1>
              <h4 className="z-10">{item.subtitle}</h4>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
