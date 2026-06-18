import React from "react";
import Rise_logo from "@/assets/Rise Digital(without text).svg";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-6 md:p-8 z-50">
        <a
          href="#"
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md hover:border-zinc-700 transition"
        >
          <Image src={Rise_logo} alt="Rise Logo" className="w-10 h-10" />
        </a>
        <nav className="flex items-center gap-3 px-4 sm:gap-6 sm:px-6 md:gap-8 md:px-8 py-3 rounded-full bg-[#121212] border  border-zinc-800/80 backdrop-blur-md font-elms font-semibold">
          <a
            href="#services"
            className="text-xs sm:text-sm text-zinc-400 hover:text-white transition"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-xs sm:text-sm text-zinc-400 hover:text-white transition"
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="text-xs sm:text-sm text-zinc-400 hover:text-white transition"
          >
            About
          </a>
          <a
            href="#insights"
            className="text-xs sm:text-sm text-zinc-400 hover:text-white transition"
          >
            Insights
          </a>

          <a
            href="#contact"
            className="text-xs sm:text-sm text-zinc-400 hover:text-white transition"
          >
            Contact
          </a>
        </nav>
        <button className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md hover:border-zinc-700 transition flex items-center justify-center text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white opacity-80 hover:opacity-100 transition"
          >
            <path
              d="M1.25,3.75h1.5v1.5h-1.5z M3.75,3.75h1.5v1.5h-1.5z M6.25,3.75h1.5v1.5h-1.5z M8.75,3.75h1.5v1.5h-1.5z M11.25,3.75h1.5v1.5h-1.5z M13.75,3.75h1.5v1.5h-1.5z M16.25,3.75h1.5v1.5h-1.5z M18.75,3.75h1.5v1.5h-1.5z M21.25,3.75h1.5v1.5h-1.5z M1.25,6.25h1.5v1.5h-1.5z M3.75,6.25h1.5v1.5h-1.5z M18.75,6.25h1.5v1.5h-1.5z M21.25,6.25h1.5v1.5h-1.5z M1.25,8.75h1.5v1.5h-1.5z M6.25,8.75h1.5v1.5h-1.5z M16.25,8.75h1.5v1.5h-1.5z M21.25,8.75h1.5v1.5h-1.5z M1.25,11.25h1.5v1.5h-1.5z M8.75,11.25h1.5v1.5h-1.5z M11.25,11.25h1.5v1.5h-1.5z M13.75,11.25h1.5v1.5h-1.5z M21.25,11.25h1.5v1.5h-1.5z M1.25,13.75h1.5v1.5h-1.5z M21.25,13.75h1.5v1.5h-1.5z M1.25,16.25h1.5v1.5h-1.5z M21.25,16.25h1.5v1.5h-1.5z M1.25,18.75h1.5v1.5h-1.5z M3.75,18.75h1.5v1.5h-1.5z M6.25,18.75h1.5v1.5h-1.5z M8.75,18.75h1.5v1.5h-1.5z M11.25,18.75h1.5v1.5h-1.5z M13.75,18.75h1.5v1.5h-1.5z M16.25,18.75h1.5v1.5h-1.5z M18.75,18.75h1.5v1.5h-1.5z M21.25,18.75h1.5v1.5h-1.5z"
              fill="currentColor"
            />
          </svg>
        </button>
      </header>
    </div>
  );
}
