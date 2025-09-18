"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import basalam from "@/assets/images/basalamIMG.png";
import blog from "@/assets/images/blogIMG.png";
import minishop from "@/assets/images/minishopIMG.png";
import todo from "@/assets/images/todoIMG.png";
import { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  img: StaticImageData;
}

interface ContextType {
  projects: Project[];
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
}

export const contextProjects = createContext<ContextType | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "فروشگاه اینترنتی (کلون باسلام)",
      description:
        "این پروژه یک کلون از وبسایت باسلام هست که با React و Tailwind CSS ساخته شده. طراحی ریسپانسیو داره و تجربه خرید آنلاین رو شبیه‌سازی می‌کنه.",
      link: "https://shop-zeta-amber-20.vercel.app/",
      img: basalam,
    },
    {
      id: 2,
      title: "مینی شاپ",
      description:
        "یک پروژه فروشگاهی با طراحی ریسپانسیو که با React و Tailwind CSS ساخته شده. رابط کاربری ساده و کاربرپسند دارد و تمرکز بر تجربه خرید سریع و لذت‌بخش است.",
      link: "https://mini-shop-bice.vercel.app/",
      img: minishop,
    },
    {
      id: 3,
      title: "اپلیکیشن لیست کارها (To-Do List)",
      description:
        "یک پروژه ساده برای مدیریت کارهای روزمره که با React و Tailwind CSS ساخته شده. رابط کاربری کارا و قابل فهم دارد و امکان افزودن، حذف و علامت‌گذاری کارها را دارد.",
      link: "https://to-do-list-mu-kohl.vercel.app/",
      img: todo,
    },
    {
      id: 4,
      title: "پلتفرم بلاگ شخصی",
      description:
        "این پروژه یک پلتفرم بلاگ است که با Next.js، React و Tailwind CSS ساخته شده. مقالات فنی، نکات کدنویسی و مطالب آموزشی در حوزه JavaScript و React منتشر می‌شود. رابط کاربری تمیز، ریسپانسیو و تجربه کاربری خوب داره.",
      link: "https://blog-gamma-pink-58.vercel.app/",
      img: blog,
    },
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("darkMode");
      if (stored) setDarkMode(stored === "true");
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("darkMode", darkMode.toString());
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode, mounted]);

  if (!mounted) return null;

  return (
    <contextProjects.Provider value={{ projects, setDarkMode, darkMode }}>
      {children}
    </contextProjects.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(contextProjects);
  if (!context) {
    throw new Error("useProjects باید داخل ProjectsProvider استفاده بشه!");
  }
  return context;
};
