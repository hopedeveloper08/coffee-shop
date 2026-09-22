import { RiShoppingBag4Line } from "react-icons/ri";

export default function CartEmpty() {
  return (
    <div className="w-full h-77 flex justify-center items-center">
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-3 items-center">
          <RiShoppingBag4Line className="size-14" />
          <span className="font-medium text-base">هنوز محصولی به سبد خرید اضافه نشده</span>
        </div>
        <a href="#" className="btn btn-accent btn-xl text-base">مشاهده صفحه فروشگاه</a>
      </div>
    </div>
  )
}
