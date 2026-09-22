import type { IconType } from "react-icons";
import {
  HiOutlineBriefcase,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineDocumentText,
  HiOutlineHome,
  HiOutlinePhoneArrowUpRight,
  HiOutlineShoppingBag,
} from "react-icons/hi2";

type SubMenuItem = {
  title: string;
  link: string;
};

type MenuItem = {
  title: string;
  Icon?: IconType;
  link: string;
  submenu?: Array<SubMenuItem>;
};

export const menu: Array<MenuItem> = [
  {
    title: "صفحه‌اصلی",
    Icon: HiOutlineHome,
    link: "/",
  },
  {
    title: "فروشگاه",
    Icon: HiOutlineShoppingBag,
    link: "#",
    submenu: [
      {
        title: "قهوه ویژه",
        link: "#",
      },
      {
        title: "ویژه در سطح جهانی",
        link: "#",
      },
      {
        title: "قهوه درجه یک",
        link: "#",
      },
      {
        title: "ترکیبات تجاری",
        link: "#",
      },
      {
        title: "کپسول قهوه",
        link: "#",
      },
      {
        title: "قهوه زینو برزیلی",
        link: "#",
      },
    ],
  },
  {
    title: "دیکشنری",
    Icon: HiOutlineChatBubbleLeftEllipsis,
    link: "#",
  },
  {
    title: "بلاگ",
    Icon: HiOutlineBriefcase,
    link: "#",
  },
  {
    title: "درباره‌ما",
    Icon: HiOutlineDocumentText,
    link: "#",
  },
  {
    title: "تماس‌باما",
    Icon: HiOutlinePhoneArrowUpRight,
    link: "#",
  },
];
