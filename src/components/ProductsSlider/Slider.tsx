import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import ProductCart from "../Products/ProductCart";
import { products } from "../../lib/products";

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: ".products-slide-prev-slide",
        nextEl: ".products-slide-next-slide",
      }}
      slidesPerView={2}
      spaceBetween={14}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 14,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {products.reverse().map((item) => (
        <SwiperSlide>
          <ProductCart
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            discount={item.discount}
            rate={item.rate}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
