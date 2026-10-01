import { HiOutlineTrash } from "react-icons/hi2";
import { decrement, increment } from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

type CartItemButtonProps = {
  id: number;
  count: number;
};

export default function CartItemButton({ id, count }: CartItemButtonProps) {
  const dispatch = useAppDispatch()
  return (
    <div
      className="
        w-15 md:w-24 h-8 md:h-12
        flex items-center *:h-full
        border
        rounded-full 
        *:px-1
        *:basis-1/3 *:flex *:justify-center *:items-center md:text-xl
      "
    >
      <button
        onClick={() => dispatch(increment(id))}
        className="hover:bg-primary-soft/10 pt-1 btn btn-ghost cursor-pointer transition-colors rounded-r-full"
      >
        +
      </button>
      <div className="mt-1">{count}</div>
      <button
        onClick={() => dispatch(decrement(id))}
        className="hover:bg-primary-soft/10 btn btn-ghost cursor-pointer transition-colors rounded-l-full"
      >
        { count === 1 ? <HiOutlineTrash className="size-3 md:size-4 text-error" /> : "-"}
      </button>
    </div>
  );
}
