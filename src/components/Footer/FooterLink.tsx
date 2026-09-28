import { FooterLinkData } from "../../lib/constants";

export default function FooterLink() {
  return (
    <div className="flex flex-col gap-6 lg:gap-7">
      <h3 className="font-dana-demibold text-2xl text-white">دسترسی سریع</h3>
      <div
        className="
          flex gap-11 lg:gap-16
          *:flex *:flex-col *:justify-between *:gap-5
        "
      >
        <div>
          {FooterLinkData[0].map((item) => (
            <span
              key={item.title}
              className="flex gap-2 items-center group *:transition-colors"
            >
              <div className="bg-secondary rounded-full w-2.5 h-1 group-hover:bg-primary"></div>
              <a
                className="text-base md:text-xl group-hover:text-primary"
                href={item.link}
              >
                {item.title}
              </a>
            </span>
          ))}
        </div>
        <div>
          {FooterLinkData[1].map((item) => (
            <span
              key={item.title}
              className="flex gap-2 items-center group *:transition-colors"
            >
              <div className="bg-secondary rounded-full w-2.5 h-1 group-hover:bg-primary"></div>
              <a
                className="text-base md:text-xl group-hover:text-primary"
                href={item.link}
              >
                {item.title}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
