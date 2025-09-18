"use client";

import Image from "next/image";
import profileLogo from "@/assets/images/profilLogo.jpg";
import karlancerLogo from "@/assets/images/karlancerLogo.ico";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useProjects } from "@/context/context";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [conactOpen, setConactOpen] = useState(false);
  const { setDarkMode, darkMode } = useProjects();
  const pathName = usePathname();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (navMenu) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [darkMode, navMenu]);

  return (
    <nav className="shadow-lg mx-auto">
      <div className="container flex items-center max-md:py-5 justify-between py-2">
        <div className="flex gap-2 max-md:hidden max-sm:flex items-center">
          <Image
            src={profileLogo}
            alt="logo"
            width={50}
            className="rounded-full"
            height={50}
          />
          <span className={`${darkMode ? "text-white" : "text-gray-700"
              } text-xl max-sm:hidden`}
          >
            Mohammad Taha
          </span>
        </div>
        <ul className="flex max-md:ml-15 max-sm:hidden gap-15">
          <li>
            <Link
              className={`pb-1 border-b-2 transition-all duration-300 ease-in-out
                ${pathName === "/"
                  ? "text-orange-400 border-orange-400"
                  : "border-transparent"
                }
                hover:text-orange-400 hover:border-orange-400`}
              href={"/"}
            >
              خانه
            </Link>
          </li>
          <li>
            <Link
              className={`pb-1 border-b-2 transition-all duration-300 ease-in-out
                ${pathName === "/about-me"
                  ? "text-orange-400 border-orange-400"
                  : "border-transparent"
                }
                hover:text-orange-400 hover:border-orange-400`}
              href={"/about-me"}
            >
              درباره من
            </Link>
          </li>
          <li>
            <Link
              className={`pb-1 border-b-2 transition-all duration-300 ease-in-out
                ${pathName === "/projects"
                  ? "text-orange-400 border-orange-400"
                  : "border-transparent"
                }
                hover:text-orange-400 hover:border-orange-400`}
              href={"/projects"}
            >
              پروژه ها
            </Link>
          </li>
          <li>
            <Link
              className={`pb-1 border-b-2 transition-all duration-300 ease-in-out
                ${pathName === "/contact"
                  ? "text-orange-400 border-orange-400"
                  : "border-transparent"
                }
                hover:text-orange-400 hover:border-orange-400`}
              href={"/contact"}
            >
              ارتباط با من
            </Link>
          </li>
        </ul>
        <div className="flex flex-row-reverse items-center gap-3 justify-between">
          <div>
            <button
              onClick={() => setConactOpen(!conactOpen)}
              className="p-3 max-lg:hidden relative bg-[var(--orange)] hover:bg-orange-600 hover:scale-105 cursor-pointer transition-all ease-in rounded-md text-white px-6"
            >
              ارتباط با من
            </button>
            <div
              className={`absolute text-nowrap mt-4 max-lg:hidden text-center flex flex-col transition ease-in justify-center rounded-sm py-2 ${conactOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
              <a
                lang="en"
                href="https://github.com/Mohammadtaha1122"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-[120px] shadow-3xl my-2 flex items-center justify-center gap-2 rounded-md border-none bg-[#171718] px-2 py-2 outline-[3px] outline-[#181717] outline-offset-[-3px] transition duration-400 hover:bg-white cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition duration-400 group-hover:fill-[#181717]"
                  fill="white"
                >
                  <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"></path>
                </svg>
                <p className="text-white font-bold text-base transition duration-400 py-2 group-hover:text-[#171718]">
                  github
                </p>
              </a>
              <a
                lang="en"
                href="https://www.karlancer.com/profile/825958"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-[120px] my-2 shadow-3xl flex items-center justify-center gap-2 rounded-md border-none bg-[#499eff] px-2 py-2 outline-[3px] outline-[#0077ffb2] outline-offset-[-3px] transition duration-400 hover:bg-white cursor-pointer"
              >
                <Image
                  src={karlancerLogo}
                  alt="karlancerLogo"
                  width={24}
                  height={24}
                />
                <p className="text-white  font-bold text-base transition duration-400 py-1 pt-2 pb-2 group-hover:text-[#0076fd]">
                  karancer
                </p>
              </a>
            </div>
          </div>
          <div className="w-7 cursor-pointer">
            {darkMode ? (
              <svg
                onClick={() => setDarkMode(false)}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="1"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
                    fill="#ffffff"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM18.1476 18.1476C18.4405 17.8547 18.9154 17.8547 19.2083 18.1476L19.6011 18.5405C19.894 18.8334 19.894 19.3082 19.6011 19.6011C19.3082 19.894 18.8334 19.894 18.5405 19.6011L18.1476 19.2083C17.8547 18.9154 17.8547 18.4405 18.1476 18.1476ZM5.85211 18.1479C6.145 18.4408 6.145 18.9157 5.85211 19.2086L5.45927 19.6014C5.16638 19.8943 4.6915 19.8943 4.39861 19.6014C4.10572 19.3085 4.10572 18.8336 4.39861 18.5407L4.79145 18.1479C5.08434 17.855 5.55921 17.855 5.85211 18.1479ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z"
                    fill="#ffffff"
                  ></path>{" "}
                </g>
              </svg>
            ) : (
              <svg
                onClick={() => setDarkMode(true)}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="1"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill="#1C274C"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </div>
        </div>
        <div className="sm:hidden z-50">
          <button className="sm:hidden" onClick={() => setNavMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 28 28"
              className={`${darkMode && "fill-white"}`}
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
          </button>
          <div>
            <ul
              className={`sm:hidden fixed ease-in-out right-0 transition-transform duration-300 bg-black w-2/3 text-center gap-14 top-0 bottom-0 ${navMenu ? "translate-x-0 " : "translate-x-full"
                } flex flex-col h-full ${darkMode ? "bg-black/90" : "bg-white/90"
                } `}
            >
              <button className="ml-5 mt-5" onClick={() => setNavMenu(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ff0000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                      fill="#ff0000"
                    />{" "}
                  </g>
                </svg>
              </button>
              <li>
                <Link
                  onClick={() => setNavMenu(false)}
                  className={`pb-1 border-b-2 transition-all duration-300 ease-in-out
                  ${pathName === "/"
                      ? "text-orange-400 border-orange-400"
                      : "border-transparent"
                    }
                  hover:text-orange-400 hover:border-orange-400`}
                  href={"/"}
                >
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavMenu(false)}
                  className={`pb-1 border-b-2 transition-all duration-300 ease-in-out
                  ${pathName === "/about-me"
                      ? "text-orange-400 border-orange-400"
                      : "border-transparent"
                    }
                  hover:text-orange-400 hover:border-orange-400`}
                  href={"/about-me"}
                >
                  درباره من
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavMenu(false)}
                  className={`pb-1 border-b-2 transition-all duration-300 ease-in-out
                  ${pathName === "/projects"
                      ? "text-orange-400 border-orange-400"
                      : "border-transparent"
                    }
                  hover:text-orange-400 hover:border-orange-400`}
                  href={"/projects"}
                >
                  پروژه ها
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavMenu(false)}
                  className={`pb-1 border-b-2 transition-all duration-300 ease-in-out
                  ${pathName === "/contact"
                      ? "text-orange-400 border-orange-400"
                      : "border-transparent"
                    }
                  hover:text-orange-400 hover:border-orange-400`}
                  href={"/contact"}
                >
                  ارتباط با من
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
