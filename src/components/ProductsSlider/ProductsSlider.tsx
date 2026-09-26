import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

import SectionTitle from "../common/SectionTitle";
import Slider from "./Slider";

export default function ProductsSlider() {
  return (
    <section
      className="
        container px-4 mx-auto max-w-7xl
        mt-10 md:mt-20
      "
    >
      <SectionTitle title="جدیدترین محصولات" subtitle="پیشنهاد قهوه خورها ...">
        <div
          className="
            flex gap-3 md:gap-5
            *:btn *:btn-circle *:btn-ghost 
            *:size-9 *:md:size-11
            *:bg-base-200 *:text-base-content
        "
        >
          <button className="products-slide-prev-slide">
            <HiMiniChevronRight className="size-5 md:size-6" />
          </button>
          <button className="products-slide-next-slide">
            <HiMiniChevronLeft className="size-5 md:size-6" />
          </button>
        </div>
      </SectionTitle>
      <div className="mt-5 md:mt-12">
        <Slider />
      </div>
    </section>
  );
}
