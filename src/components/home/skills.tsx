'use client'

import reacticon from "@/assets/images/icons8-react-48.png";
import nexticon from "@/assets/images/icons8-nextjs-48.png";
import tailwindicon from "@/assets/images/icons8-tailwindcss-48.png";
import typescripticon from "@/assets/images/icons8-typescript-50.png";
import Image from "next/image";
import { useProjects } from "@/context/context";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "React",
      description:
        "ساخت رابط کاربری تعاملی و پویا برای وبسایت‌ها و اپلیکیشن‌ها.",
      img: reacticon,
    },
    {
      id: 2,
      title: "Next.js",
      description:
        "توسعه وبسایت‌های بهینه، سریع و SEO-friendly با رندر سمت سرور.",
      img: nexticon,
    },
    {
      id: 3,
      title: "Tailwind CSS",
      description:
        "طراحی رابط کاربری مدرن، زیبا و ریسپانسیو با کلاس‌های Utility.",
      img: tailwindicon,
    },
    {
      id: 4,
      title: "TypeScript",
      description:
        "نوشتن کدهای امن و قابل نگهداری برای پروژه‌های حرفه‌ای و بزرگ.",
      img: typescripticon,
    },
  ];
  const {darkMode} = useProjects();

  return (
    <div className="container py-12">
      <h3 className="text-center text-3xl font-bold mb-2">مهارت‌ها</h3>
      <p className={`text-center ${darkMode ? "text-gray-300" : 'text-gray-700'} mb-10`}>
        فریمورک‌ها و ابزارهای استفاده شده در توسعه وب
      </p>

      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="w-full flex flex-col items-center gap-5 border-2 border-[var(--orange)] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
          >
            <Image src={skill.img} alt={skill.title} width={50} height={50} />
            <h4 className="text-xl font-medium">{skill.title}</h4>
            <p className={`text-center ${darkMode ? "text-gray-300" : 'text-gray-700'} leading-7`}>
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
