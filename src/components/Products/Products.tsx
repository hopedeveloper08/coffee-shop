import { HiMiniChevronLeft } from "react-icons/hi2";
import SectionTitle from "../common/SectionTitle";
import Product from "./Product";

export default function Products() {
  return (
    <section className="bg-[url(/images/products-bg.png)] pt-8 md:pt-48 bg-fit bg-no-repeat">
      <div className="container max-w-7xl mx-auto px-4">
        <SectionTitle
          title="جدیدترین محصولات"
          subtitle="فرآوری شده از دانه قهوه"
        >
          <a
            href="#"
            className="
            p-2
            text-primary
            text-base md:text-xl
            flex items-center
            rounded-md
            hover:bg-primary-soft/20
            transition-colors
          "
          >
            <span className="md:hidden">مشاهده همه</span>
            <span className="hidden md:inline">مشاهده همه محصولات</span>
            <HiMiniChevronLeft className="size-5" />
          </a>
        </SectionTitle>
        <Product />
      </div>
    </section>
  );
}
