import Curve from "../../assets/curve.svg?react";
import { HiMiniChevronDown } from "react-icons/hi2";

export default function HeaderEffect() {
  return (
    <>
      <Curve className="hidden md:block text-base-100 w-25 h-5.5 absolute bottom-0 right-0 left-0 mx-auto" />
      <div className="size-8 border-2 rounded-full border-primary hidden md:flex items-center justify-center absolute bottom-0 right-0 left-0 mx-auto translate-y-1/2">
        <HiMiniChevronDown className="size-5 text-base-content" />
      </div>
    </>
  );
}
