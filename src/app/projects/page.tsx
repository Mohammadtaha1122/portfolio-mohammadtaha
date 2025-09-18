"use client";

import { useProjects } from "@/context/context";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const { projects,darkMode } = useProjects();

  return (
    <section className="container py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">نمونه‌کارها</h1>
        <p className={`text-center  mt-2 ${darkMode ? 'text-gray-200': "text-gray-600"}`}> طراحی ریسپانسیو و رابط کاربری تمیز</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group bg-white cursor-pointer rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
            aria-labelledby={`project-title-${project.id}`}
          >
            <div className="relative w-full h-56 md:h-44 lg:h-56">
              <Image
                src={project.img}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3
                  id={`project-title-${project.id}`}
                  className="text-white text-lg font-semibold drop-shadow-sm"
                >
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="p-5 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-7 line-clamp-3">
                {project.description}
              </p>

              <div className="mt-2 flex items-center justify-between">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--orange)] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:translate-y-[-2px] transition-transform duration-200"
                >
                  مشاهده
                </Link>

                <span className="text-xs text-gray-500"></span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
