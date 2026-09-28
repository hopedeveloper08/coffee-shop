import Curve from "../../assets/curve.svg?react";
import { HiMiniChevronUp } from "react-icons/hi2";

export default function FooterEffect() {
  return (
    <>
      <Curve className="hidden md:block text-base-100 w-25 h-5.5 absolute top-0 right-0 left-0 mx-auto rotate-180" />
      <div className="size-8 border-2 rounded-full border-primary hidden md:flex items-center justify-center absolute top-0 right-0 left-0 mx-auto -translate-y-1/2">
        <HiMiniChevronUp className="size-5 text-base-content" />
      </div>
    </>
  );
}
