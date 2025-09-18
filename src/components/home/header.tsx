'use client'

import Link from "next/link";
import headerLogo from "@/assets/images/headerLogo.jpg";
import Image from "next/image";
import { useProjects } from "@/context/context";
const Header = () => {
    const { darkMode } = useProjects();

  return (
    <header className="container max-lg:text-center mt-15 flex max-lg:flex-col-reverse max-lg:gap-30 flex-row-reverse justify-between items-center">
      <Image
        src={headerLogo}
        alt="logo"
        className="rounded-2xl"
        width={500}
        height={500}
      />
      <div>
        <h1 className="text-5xl max-md:text-4xl font-bold leading-[1.2] mb-4">
          سلام من <span className="text-[var(--orange)]">محمدطاها</span> هستم
        </h1>
        <h2 className={`text-3xl ${darkMode ? "text-gray-300" : 'text-gray-700'} font-medium mb-6`}>
          توسعه دهنده فرانت‌اند
        </h2>
        <p className={`mt-4 text-lg ${darkMode ? "text-gray-300" : 'text-gray-700'} max-w-xl mb-6`}>
          من یه فرانت‌اند دولوپر هستم که با React و Next.js وبسایت‌های مدرن و
          ریسپانسیو می‌سازم. اینجا می‌تونی نمونه‌کارام رو ببینی و برای همکاری
          باهام در ارتباط باشی.
        </p>

        <button className="cursor-pointer transition-all bg-orange-500 text-white px-6 py-2 rounded-lg border-orange-700 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
          <Link
            href="/about-me"
          >
            بیشتر درمورد من بخوانید
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
