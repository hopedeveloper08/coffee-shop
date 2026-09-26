import { HiMiniChevronLeft } from "react-icons/hi2";
import { clubData } from "../../lib/constants";

export default function ClubCTA() {
  return (
    <div
      className="
        flex gap-3 items-center lg:justify-between md:grow
      "
    >
      <div className="flex gap-2 basis-2/3">
        {clubData.map((item) => (
          <div
            className="
            flex flex-col gap-2 lg:gap-5 items-center       
            lg:min-w-25 h-full
            basis-1/3  
            p-1.5 lg:pt-5
            bg-white 
            text-accent
            rounded-2xl
          "
          >
            <item.Icon className="size-10 lg:size-12" />
            <span className="font-dana text-xs lg:text-sm">{item.title}</span>
          </div>
        ))}
      </div>
      <div
        className="
        flex flex-col
      "
      >
        <h3 className="font-dana-demibold text-2xl lg:text-3xl px-1.5">542</h3>
        <p className="font-dana text-xs lg:text-sm text-center">امتیـــــــاز شما</p>
        <a
          href="#"
          className="
            font-dana-medium text-xs lg:text-sm
            flex items-center
            bg-linear-to-l from-primary to-primary-soft
            mt-1
            p-1.5
            rounded-full
        "
        >
          دریافت جایزه
          <HiMiniChevronLeft className="size-4 lg:size-6" />
        </a>
      </div>
    </div>
  );
}
