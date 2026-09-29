import { HiArrowLeft } from "react-icons/hi2";
import LogoType from "../../assets/logo-type.svg?react";

type BlogCardProps = {
  image: string;
  title: string;
  date: string;
};

export default function BlogCard({ image, title, date }: BlogCardProps) {
  return (
    <a
      href="#"
      className="
        bg-base-200
        rounded-2xl
        p-2.5
        flex lg:flex-col gap-3 md:gap-4
        group
      "
    >
      <div className="max-lg:size-32 relative">
        <div
          className="
            absolute
            hidden lg:group-hover:flex justify-center items-center
            size-full
            bg-linear-to-l from-primary to-primary-soft
            opacity-80
            
            "
        >
          <LogoType className="text-[#78350F] lg:w-35 lg:h-14" />
        </div>
        <img
          src={image}
          alt="blog image"
          className="max-lg:min-w-32 max-lg:min-h-32 rounded-2xl rounded-bl-4xl"
        />
      </div>
      <div
        className="
          w-full
          flex max-lg:flex-col 
          justify-evenly
          gap-5

        "
      >
        <h4 className="font-dana-medium text-sm md:text-lg line-clamp-2">{title}</h4>
        <div className="w-full h-px lg:w-px lg:h-full bg-gray-200 dark:bg-white/10"></div>
        <div className="flex justify-between items-center text-xs md:text-base">
          <p className="text-accent">{date}</p>
          <a
            href="#"
            className="
              lg:hidden
              text-primary
              flex items-center
              gap-1.5
              rounded-md
              bg-primary-soft/20
              py-1 px-2
            "
          >
            مطالعه
            <HiArrowLeft />
          </a>
        </div>
      </div>
    </a>
  );
}
