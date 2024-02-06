"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
  title: string;
  href: string;
  className: string;
};

const CustomLink: React.FC<props> = ({ title, href, className }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${className} text-sm font-normal relative group`}
    >
      {title}
      <span
        className={`h-[1.5px] inline-block bg-primary absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${pathname === href ? "w-full" : "w-0"}
    `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
