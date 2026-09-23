import { menu } from "../../lib/menu";

export default function MobileMenuItems() {
  const pathname = "/";

  return (
    <ul className="w-full flex flex-col gap-1">
      {menu.map((item) => (
        <li
          key={item.title}
          className={`text-base text-base-content w-full rounded-md p-2 hover:bg-primary-soft/20 ${pathname === item.link && "bg-primary-soft/20 font-dana-medium text-primary"}`}
        >
          <a href={item.link} className="flex justify-start gap-x-2">
            {item.Icon && <item.Icon className="size-5" />}
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
