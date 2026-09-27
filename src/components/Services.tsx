import Coffee from "../assets/services/coffee.svg?react";
import ExpressDelivery from "../assets/services/express-delivery.svg?react";
import Pitcher from "../assets/services/pitcher.svg?react";
import Support from "../assets/services/support.svg?react";

export default function Services() {
  return (
    <section
      className="
        container
        mt-16 md:mt-28
        flex flex-wrap lg:justify-between
      "
    >
      <div
        className="
        w-fit
        flex max-lg:flex-col lg:gap-4 
        justify-center items-center
        gap-5
        basis-1/2 lg:basis-1/4
        max-lg:border-l max-lg:border-b 
        max-lg:border-secondary-soft max-lg:dark:border-white/10
        max-lg:pb-5
        "
      >
        <Support className="text-base-content" />
        <div className="flex flex-col justify-center max-lg:items-center">
          <h3 className="font-dana-demibold text-sm lg:text-lg">
            پشتیبانی شبانه روزی
          </h3>
          <h6 className="text-xs lg:text-sm mt-1 lg:mt-4">
            7 روز هفته ، 24 ساعته
          </h6>
        </div>
      </div>
      <div
        className="
        w-fit
        flex max-lg:flex-col lg:gap-4 
        justify-center items-center
        gap-5
        basis-1/2 lg:basis-1/4
        max-lg:border-r max-lg:border-b 
        max-lg:border-secondary-soft max-lg:dark:border-white/10
        max-lg:pb-5
        "
      >
        <ExpressDelivery className="text-base-content" />
        <div className="flex flex-col justify-center max-lg:items-center">
          <h3 className="font-dana-demibold text-sm lg:text-lg">
            امکان تحویل اکسپرس
          </h3>
          <h6 className="text-xs lg:text-sm mt-1 lg:mt-4">
            ارسال بسته با سرعت باد
          </h6>
        </div>
      </div>
      <div
        className="
        flex max-lg:flex-col lg:gap-4 
        justify-center items-center
        gap-5
        basis-1/2 lg:basis-1/4
        max-lg:border-l max-lg:border-t 
        max-lg:border-secondary-soft max-lg:dark:border-white/10
        max-lg:pt-5
        "
      >
        <Coffee className="text-base-content" />
        <div className="flex flex-col justify-center max-lg:items-center">
          <h3 className="font-dana-demibold text-sm lg:text-lg">رست تخصصی</h3>
          <h6 className="text-xs lg:text-sm mt-1 lg:mt-4">
            تازه برشته شده و با کیفیت
          </h6>
        </div>
      </div>
      <div
        className="
        w-fit
        flex max-lg:flex-col lg:gap-4 
        justify-center items-center
        gap-5
        basis-1/2 lg:basis-1/4
        max-lg:border-r max-lg:border-t 
        max-lg:border-secondary-soft max-lg:dark:border-white/10
        max-lg:pt-5
        "
      >
        <Pitcher className="text-base-content" />
        <div className="flex flex-col justify-center max-lg:items-center">
          <h3 className="font-dana-demibold text-sm lg:text-lg">
            اکسسوری قهوه
          </h3>
          <h6 className="text-xs lg:text-sm mt-1 lg:mt-4">
            وسایل و ادوات دم آوری
          </h6>
        </div>
      </div>
    </section>
  );
}
