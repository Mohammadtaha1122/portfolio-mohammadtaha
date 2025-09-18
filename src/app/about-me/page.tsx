'use client'

import Image from "next/image";
import aboutmeimg from "@/assets/images/aboutMeImg.jpg";
import { useProjects } from "@/context/context";

const AboutMe = () => {
      const { darkMode } = useProjects();

  return (
    <div className={`${darkMode ? "bg-black" : 'bg-black/5'} min-h-screen`} >
      <section className="container py-16 leading-8">
        <div className={`mx-auto text-lg max-md:text-[16px] space-y-8  ${darkMode ? "text-gray-300 bg-white/5" : 'text-gray-700'} rounded-2xl shadow-lg p-8`}>
          <h2 className="text-4xl font-bold text-center p+b-12 text-orange-500">
            درباره من
          </h2>
          <div className="flex max-lg:flex-col-reverse gap-10 justify-between items-center leading-10">
            <Image
              className="shadow-2xl rounded-2xl"
              src={aboutmeimg}
              alt="about me img"
              width={500}
            />
            <div className="">
              <p className="mb-10">
                من{" "}
                <span className="font-semibold text-orange-500">محمدطاها</span>{" "}
                هستم، توسعه‌دهنده‌ی فرانت‌اند و علاقه‌مند به دنیای برنامه‌نویسی
                و تکنولوژی. مسیر من در دنیای وب از یادگیری{" "}
                <span className="font-semibold">HTML</span> و{" "}
                <span className="font-semibold">CSS</span> شروع شد و امروز تمرکز
                اصلی‌ام روی فریم‌ورک‌های مدرن جاوااسکریپت مثل{" "}
                <span className="font-semibold">React</span> و{" "}
                <span className="font-semibold">Next.js</span> است.
              </p>
              <p className="max-lg:hidden">
                هدف من ایجاد رابط‌های کاربری تمیز، ریسپانسیو و کاربرپسند است. در
                پروژه‌هایم از ابزارهایی مثل{" "}
                <span className="font-semibold">Tailwind CSS</span> و{" "}
                <span className="font-semibold">TypeScript</span> استفاده می‌کنم
                تا کدی مقیاس‌پذیر و ساختاریافته تولید کنم. تجربه‌ی من شامل ساخت
                فروشگاه‌های اینترنتی، وبلاگ شخصی و اپلیکیشن‌های ساده مدیریت
                وظایف بوده و هر پروژه برایم فرصتی برای یادگیری عمیق‌تر و رشد
                بیشتر بوده است.
              </p>
            </div>
          </div>
            <p className="lg:hidden mx-auto leading-11">
                هدف من ایجاد رابط‌های کاربری تمیز، ریسپانسیو و کاربرپسند است. در
                پروژه‌هایم از ابزارهایی مثل{" "}
                <span className="font-semibold">Tailwind CSS</span> و{" "}
                <span className="font-semibold">TypeScript</span> استفاده می‌کنم
                تا کدی مقیاس‌پذیر و ساختاریافته تولید کنم. تجربه‌ی من شامل ساخت
                فروشگاه‌های اینترنتی، وبلاگ شخصی و اپلیکیشن‌های ساده مدیریت
                وظایف بوده و هر پروژه برایم فرصتی برای یادگیری عمیق‌تر و رشد
                بیشتر بوده است.
              </p>
          <div className="border-t leading-10 border-gray-200 pt-6">
            <p>
              از آن‌جایی که هنوز در ابتدای مسیر حرفه‌ای خود هستم و هدف اصلی‌ام
              افزایش تجربه و گسترش نمونه‌کارهایم است، دستمزد انجام پروژه‌ها را
              کمتر از عرف بازار در نظر می‌گیرم. به این ترتیب، کارفرمایان
              می‌توانند با هزینه‌ای مناسب‌تر از خدمات توسعه‌ی وب بهره‌مند شوند و
              من نیز فرصت بیشتری برای یادگیری و رشد پیدا می‌کنم.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
