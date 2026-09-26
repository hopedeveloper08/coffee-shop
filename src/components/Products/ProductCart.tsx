import {
  HiOutlineArrowsRightLeft,
  HiOutlineShoppingCart,
  HiOutlineStar,
} from "react-icons/hi2";

type ProductCartProps = {
  id: number;
  title: string;
  image: string;
  price?: number;
  discount?: number;
  rate: number;
};

export default function ProductCart({
  title,
  image,
  price,
  discount,
  rate,
}: ProductCartProps) {
  return (
    <div
      className="
        bg-base-200 text-base-content
        w-43 md:w-75
        mx-auto
        p-2 md:p-5
        rounded-2xl
        flex flex-col justify-center items-center
        relative
    "
    >
      {discount && (
        <div
          className="
              absolute 
              top-2 right-2 md:top-6 md:right-6 
              w-10 h-5 md:w-13 md:h-7
              bg-primary 
              text-primary-content 
              rounded-full
              font-dana-demibold
              text-xs md:text-base 
              flex justify-center items-center pt-1
          "
        >
          {discount}%
        </div>
      )}
      <div>
        <img src={image} alt="product image" className="size-32 md:size-65" />
      </div>
      <h3 className="font-dana-medium text-sm md:text-xl mt-2 md:mt-5">
        {title}
      </h3>
      <div className="w-full flex justify-start">
        {price ? (
          <div className="mt-2">
            <span className="font-dana-demibold text-base md:text-xl text-accent">
              {discount ? (
                <>
                  <span>
                    {Math.round(price * (1 - discount / 100)).toLocaleString()}{" "}
                    <span className="font-dana text-xs md:text-sm">تومان</span>
                  </span>
                  <span className="font-dana text-xs md:text-lg relative text-secondary mr-2">
                    {price.toLocaleString()}{" "}
                    <div className="absolute top-0 bottom-0 left-0 w-full h-px bg-error my-auto"></div>
                  </span>
                </>
              ) : (
                <>
                  {price.toLocaleString()}
                  <span className="font-dana text-xs md:text-sm">تومان</span>
                </>
              )}{" "}
            </span>
          </div>
        ) : (
          <div className="mt-2 text-error text-base md:text-xl">
            فعلا موجود نیست
          </div>
        )}
      </div>
      <div className="w-full mt-2.5 md:mt-4 flex justify-between items-center">
        <div
          className="
            flex gap-1
            *:btn *:btn-circle *:btn-ghost 
            *:size-7 *:md:size-9
            *:text-secondary
          "
        >
          <button
            className="
              bg-base-100 hover:bg-accent hover:text-accent-content 
              tooltip tooltip-accent tooltip-top
            "
            data-tip="افزودن به سبد خرید"
            >
            <HiOutlineShoppingCart className="size-4 md:size-6" />
          </button>
          <button
            className="
            hover:text-accent
            tooltip tooltip-accent tooltip-top
          "
          data-tip="مقایسه"
          >
            <HiOutlineArrowsRightLeft className="size-4 md:size-6" />
          </button>
        </div>
        <div
          className="
          flex flex-row-reverse
          *:size-4 *:md:size-6 *:cursor-pointer
        "
        >
          <HiOutlineStar
            className={`${rate >= 1 ? "text-warning" : "text-secondary"}`}
          />
          <HiOutlineStar
            className={`${rate >= 2 ? "text-warning" : "text-secondary"}`}
          />
          <HiOutlineStar
            className={`${rate >= 3 ? "text-warning" : "text-secondary"}`}
          />
          <HiOutlineStar
            className={`${rate >= 4 ? "text-warning" : "text-secondary"}`}
          />
          <HiOutlineStar
            className={`${rate >= 5 ? "text-warning" : "text-secondary"}`}
          />
        </div>
      </div>
    </div>
  );
}
