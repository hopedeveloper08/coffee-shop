import { LOGO_IMAGE_URL } from "../../lib/constants";
import { menu } from "../../lib/menu";

export default function TopbarNav() {
  const pathname = "/";

  return (
    <nav
      className="
        h-14
        flex items-center 
        gap-x-5 xl:gap-x-9
    "
    >
      <a href="/">
        <img src={LOGO_IMAGE_URL} alt="logo" />
      </a>
      <ul
        className="
        h-full
        flex 
        gap-x-5 xl:gap-x-9  
      "
      >
        {menu.map((item) => (
          <li key={item.title} className={item.submenu && "relative group"}>
            <a
              href={item.link}
              className={`
              text-lg lg:text-xl 
              ${item.link === pathname ? "text-primary-soft font-dana-medium" : "text-secondary-soft font-dana"}
              hover:text-primary-soft
              tracking-tightest 
              leading-14 
              transition-colors 
            `}
            >
              {item.title}
            </a>
            {item.submenu && (
              <div
                className="
                    absolute top-full 
                    opacity-0 invisible group-hover:visible group-hover:opacity-100 
                    w-52 p-6 
                    space-y-4 
                    bg-base-200 
                    text-base-content
                    border-t-[3px] border-primary 
                    shadow-normal 
                    rounded-2xl 
                    text-base 
                    tracking-normal
                    transition-opacity 
                    delay-75
                
                "
              >
                {item.submenu.map((submenuItem) => (
                  <a
                    key={submenuItem.title}
                    href={submenuItem.link}
                    className="
                      inline-block
                      hover:text-primary
                      transition-colors
                    "
                  >
                    {submenuItem.title}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
