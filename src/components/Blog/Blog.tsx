import { HiMiniChevronLeft } from "react-icons/hi2";
import SectionTitle from "../common/SectionTitle";
import BlogCard from "./BlogCard";
import { blogData } from "../../lib/constants";

export default function Blog() {
  return (
    <section
      className="
        container max-w-7xl mx-auto px-4
        mt-8 md:mt-20
      "
    >
      <SectionTitle title="مطالب خواندنی">
        <a
          href="#"
          className="
            text-primary 
            hover:bg-primary-soft/20
            px-2
            rounded-md
            transition-colors
            flex items-center
          "
        >
          مشاهده همه <span className="max-md:hidden mr-1">مطالب</span>
          <HiMiniChevronLeft className="size-5" />
        </a>
      </SectionTitle>
      <div className="mt-5 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5">
        {blogData.map((item) => (
          <BlogCard title={item.title} image={item.image} date={item.date} />
        ))}
      </div>
    </section>
  );
}
