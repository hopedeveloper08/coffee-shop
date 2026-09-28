import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function FooterContact() {
  return (
    <div className="flex flex-col gap-6 lg:gap-7">
      <h3 className="font-dana-demibold text-2xl text-white">در تماس باشیم</h3>
      <div>
        <a href="https://hopedeveloper08.github.io/hd/" className="flex items-center gap-2 mb-4 hover:text-primary">
          <HiOutlineExternalLink className="size-5 md:size-6" />
          <span className="mt-1">hopedeveloper.ir</span>
        </a>
        <div className="flex items-center gap-2 mb-4">
          <HiOutlineMapPin className="size-5 md:size-6" />
          <span className="mt-1">شیراز، بلوار عدالت، خیابان فتح‌المبین</span>
        </div>
        <div
          className="
            flex max-md:flex-col gap-2 md:gap-5
            *:flex *:items-center 
            *:hover:text-primary
            "
        >
          <a href="mailto:hopedeveloper08@gmail.com" className="gap-2">
            <HiOutlineEnvelope className="size-5 md:size-6" />
            <span className="mt-1">hopedeveloper08@gmail.com</span>
          </a>
          <a href="tel:09172255301" className="gap-2">
            <HiOutlinePhone className="size-5 md:size-6" />
            <span className="mt-1">09172255301</span>
          </a>
        </div>
      </div>
      <div
        className="
          flex gap-4 xl:gap-6
          *:btn *:btn-ghost 
          *:rounded-xl 
          *:h-12 
          *:p-3 
          *:font-dana-medium
          *:font-medium
        "
      >
        <a
          href="https://www.linkedin.com/in/reza-shahraki/"
          className="text-primary border border-primary"
        >
          <FaLinkedin className="size-6" />
          <span className="text-base lg:text-xl mt-1">reza-shahraki</span>
        </a>
        <a
          href="https://github.com/hopedeveloper08"
          className="bg-linear-to-l from-primary to-primary-soft text-zinc-700"
        >
          <FaGithub className="size-6" />
          <span className="text-base lg:text-xl mt-1">hopedeveloper08</span>
        </a>
      </div>
    </div>
  );
}
