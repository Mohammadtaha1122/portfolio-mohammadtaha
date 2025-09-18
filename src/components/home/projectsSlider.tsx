"use client";

import { useProjects } from "@/context/context";
import Image from "next/image";
import Link from "next/link";

const ProjectsSlider = () => {
  const { projects, darkMode } = useProjects();

  return (
    <section className="container py-16 space-y-12">
      <h3 className="text-center  text-2xl font-bold text-[var(--orange)] ">
        نمونه کارها
      </h3>
      <div className="flex flex-col gap-6">
        {projects.slice(0, 3).map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center gap-8 rounded-2xl shadow-lg overflow-hidden border border-gray-200`}
          >
            <div className="w-full md:w-1/2 h-64 relative">
              <Image
                src={project.img}
                alt={project.title}
                className="object-cover h-full w-[450px] mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center gap-4 text-center md:text-right">
              <h3 className="text-2xl font-bold ">{project.title}</h3>
              <p
                className={`${
                  darkMode ? "text-gray-3  00" : "text-gray-700"
                } leading-7`}
              >
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--orange)] px-6 py-3 rounded-lg text-sm w-1/2 text-center mx-auto font-medium shadow hover:shadow-lg hover:translate-y-[-2px] transition duration-200"
              >
                مشاهده پروژه
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className="p-3 flex justify-center mx-auto bg-[var(--orange)] hover:bg-orange-600 hover:scale-105 cursor-pointer transition-all ease-in rounded-md text-white px-6">
        <Link className=" mx-auto" href={'/projects'}>موارد بیشتر</Link>
      </button>
    </section>
  );
};

export default ProjectsSlider;
