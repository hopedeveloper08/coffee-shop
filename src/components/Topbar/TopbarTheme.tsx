import { useEffect, useRef } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { themeChange } from "../../lib/theme";

export default function TopbarTheme() {
  const themeToggleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (themeToggleRef.current)
      themeToggleRef.current.checked = localStorage.getItem("theme") === "dark";
  }, []);

  return (
    <label className="swap swap-rotate rounded-full hover:bg-primary-soft/10 transition-all p-1 xl:p-2 text-primary-soft">
      <input
        ref={themeToggleRef}
        type="checkbox"
        onChange={(e) => themeChange(e.target.checked)}
      />
      <HiOutlineSun className="swap-on size-7 lg:size-8" />
      <HiOutlineMoon className="swap-off size-7 lg:size-8" />
    </label>
  );
}
