import { HiChevronLeft } from "react-icons/hi2";

type CartHeaderProps = {
  cartLength: number;
};

export default function CartHeader({ cartLength }: CartHeaderProps) {
  return (
    <div className="flex justify-between items-center text-xs font-medium tracking-tighter">
      <span>{cartLength} مورد</span>
      <a
        href="#"
        className="flex items-center text-primary hover:bg-primary-soft/20 transition-colors rounded-md pr-1"
      >
        مشاهده سبد خرید
        <HiChevronLeft />
      </a>
    </div>
  );
}
