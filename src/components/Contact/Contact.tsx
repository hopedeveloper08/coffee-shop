import { FiPhoneCall } from "react-icons/fi";
import { CONTACT_IMAGE_URL } from "../../lib/constants";

export default function Contact() {
  return (
    <section
      className="
      container  
      mt-8 md:mt-28
      flex max-md:flex-col
    "
    >
      <div className="w-full md:basis-1/3 lg:basis-1/4 max-md:pr-8 pl-8">
        <img
          src={CONTACT_IMAGE_URL}
          alt="contact"
          className="w-75 h-76 mx-auto"
        />
      </div>
      <div className="md:basis-2/3 lg:basis-3/4">
        <h2 className="font-morabba-medium text-2xl md:text-5xl max-md:mt-8">
          یکی از بهترین قهوه‌ها !
        </h2>
        <h5 className="font-morabba-light text-lg md:text-3xl">
          کیفیت قهوه را از ما بخواهید ...
        </h5>
        <p className="md:my-2 text-2xl text-secondary">. . .</p>
        <p className="text-lg md:text-2xl">
          فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا
          کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان
          کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!
        </p>
        <div className="mt-5 md:mt-6">
          <button
            className="
              flex items-center gap-2 
              btn btn-outline border-2
              text-base md:text-xl
              rounded-full
              py-6 md:p-7
              text-primary
              font-normal
              border-primary
              hover:bg-primary-soft/20
          "
          >
            <FiPhoneCall className="size-5 md:size-6 text-base md:text-xl" />
            ثبت سفارش تلفنی
          </button>
        </div>
      </div>
    </section>
  );
}
