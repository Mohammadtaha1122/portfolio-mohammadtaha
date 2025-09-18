'use client'

import { useProjects } from "@/context/context";

const Contact = () => {
  const contactMe = [
    {
      id: 1,
      title: "ایمیل",
      content: "mohammadtahamalekidev@gmail.com",
    },
    {
      id: 2,
      title: "کارلنسر",
      content: "https://www.karlancer.com/profile/825958",
    },
    {
      id: 3,
      title: "گیت هاب",
      content: "https://github.com/Mohammadtaha1122",
    },
    {
      id: 4,
      title: "لینکدین",
      content: "https://www.linkedin.com/in/mohammadtaha-maleki-885170384",
    },
  ];

  const { darkMode } = useProjects();

  return (
    <div
      className="flex max-md:text-sm flex-col justify-center items-center min-h-screen py-20 bg-black/5"
    >
      <div className={`${darkMode ? 'bg-black/55' : 'bg-white'} flex flex-col p-4 rounded-lg shadow-2xl text-center`}>
        <h1 className="text-[var(--orange)] font-bold text-2xl py-5">
          راه های ارتباط با من
        </h1>
        {contactMe.map((item) => (
          <div key={item.id}>
            <div className=" flex flex-col gap-4 py-10">
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-[12px]" lang="en">{item.content}</p>
              {item.id === 1 ? (
                <a
                  href={`mailto:${item.content}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--orange)] hover:underline"
                >
                  {item.title}
                </a>
              ) : (
                <a
                  href={item.content}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--orange)] hover:underline"
                >
                  {item.title}
                </a>
              )}
            </div>
            {item.id !== 4 && <hr className="text-gray-400" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
