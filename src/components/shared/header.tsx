"use client";
import React, { useState } from "react";
import Rise_logo from "@/assets/Rise Digital(without text).svg";
import Image from "next/image";

export default function Header() {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    { id: "01", title: "Brand Strategy", count: "/6 services" },
    { id: "02", title: "Web Development", count: "/7 services" },
    { id: "03", title: "Brand Identity", count: "/5 services" },
    { id: "04", title: "eCommerce", count: "/7 services" },
    { id: "05", title: "User Experience Design", count: "/6 services" },
    { id: "06", title: "Web & Mobile Applications", count: "/6 services" },
    { id: "07", title: "Visual Content", count: "/3 services" },
    { id: "08", title: "Embedded & Hardware", count: "/5 services" },
  ];
  const getServiceIcon = (id: string) => {
    const r = 1;
    switch (id) {
      case "01": // Brand Strategy
        return (
          <svg
            className="w-[1.2vw] h-[1.2vw] text-zinc-400 group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
          >
            {[
              [12, 4],
              [12, 20],
              [4, 12],
              [20, 12],
              [8, 8],
              [16, 8],
              [8, 16],
              [16, 16],
              [12, 8],
              [12, 16],
              [8, 12],
              [16, 12],
              [12, 12],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
            ))}
          </svg>
        );
      case "02": // Web Development
        return (
          <svg
            className="w-[1.2vw] h-[1.2vw] text-zinc-400 group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
          >
            {[
              [6, 6],
              [9, 6],
              [12, 6],
              [15, 6],
              [18, 6],
              [6, 9],
              [18, 9],
              [6, 12],
              [9, 12],
              [12, 12],
              [15, 12],
              [18, 12],
              [4, 15],
              [7, 15],
              [10, 15],
              [14, 15],
              [17, 15],
              [20, 15],
              [12, 17],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
            ))}
          </svg>
        );
      case "03": // Brand Identity
        return (
          <svg
            className="w-[1.2vw] h-[1.2vw] text-zinc-400 group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
          >
            {[
              [6, 6],
              [9, 6],
              [6, 9],
              [15, 6],
              [18, 6],
              [18, 9],
              [6, 15],
              [6, 18],
              [9, 18],
              [18, 15],
              [18, 18],
              [15, 18],
              [12, 12],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
            ))}
          </svg>
        );
      case "04": // eCommerce
        return (
          <svg
            className="w-[1.2vw] h-[1.2vw] text-zinc-400 group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
          >
            {[
              [5, 5],
              [5, 8],
              [8, 8],
              [11, 8],
              [14, 8],
              [17, 8],
              [8, 11],
              [11, 11],
              [14, 11],
              [17, 11],
              [8, 14],
              [11, 14],
              [14, 14],
              [9, 17],
              [15, 17],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
            ))}
          </svg>
        );
      case "05": // User Experience Design
        return (
          <svg
            className="w-[1.2vw] h-[1.2vw] text-zinc-400 group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
          >
            {[
              [6, 6],
              [9, 6],
              [12, 6],
              [15, 6],
              [18, 6],
              [6, 9],
              [12, 9],
              [18, 9],
              [6, 12],
              [9, 12],
              [12, 12],
              [15, 12],
              [18, 12],
              [12, 15],
              [12, 18],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
            ))}
          </svg>
        );
      case "06": // Web & Mobile Applications
        return (
          <svg
            className="w-[1.2vw] h-[1.2vw] text-zinc-400 group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
          >
            {[
              [9, 5],
              [12, 5],
              [15, 5],
              [9, 8],
              [15, 8],
              [9, 11],
              [15, 11],
              [9, 14],
              [15, 14],
              [9, 17],
              [12, 17],
              [15, 17],
              [12, 19],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
            ))}
          </svg>
        );
      case "07": // Visual Content
        return (
          <svg
            className="w-[1.2vw] h-[1.2vw] text-zinc-400 group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
          >
            {[
              [6, 6],
              [9, 6],
              [12, 6],
              [15, 6],
              [18, 6],
              [6, 9],
              [9, 9],
              [18, 9],
              [6, 12],
              [18, 12],
              [6, 15],
              [12, 15],
              [18, 15],
              [6, 18],
              [9, 18],
              [12, 18],
              [15, 18],
              [18, 18],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
            ))}
          </svg>
        );
      case "08": // Embedded & Hardware
        return (
          <svg
            className="w-[1.2vw] h-[1.2vw] text-zinc-400 group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
          >
            {[
              [8, 8],
              [12, 8],
              [16, 8],
              [8, 12],
              [12, 12],
              [16, 12],
              [8, 16],
              [12, 16],
              [16, 16],
              [12, 4],
              [12, 20],
              [4, 12],
              [20, 12],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
            ))}
          </svg>
        );
      default:
        return null;
    }
  };

  const getGraphicTransform = (id: string) => {
    switch (id) {
      case "01":
        return "scale(1.7) rotate(15deg) translate(0.5vw, 0.5vw)";
      case "02":
        return "scale(1.6) rotate(80deg) translate(1vw, -0.5vw)";
      case "03":
        return "scale(1.8) rotate(140deg) translate(-0.5vw, 0.5vw)";
      case "04":
        return "scale(1.5) rotate(210deg) translate(1vw, 1vw)";
      case "05":
        return "scale(1.7) rotate(270deg) translate(0.8vw, 0.5vw)";
      case "06":
        return "scale(1.6) rotate(320deg) translate(0.5vw, -0.2vw)";
      case "07":
        return "scale(1.8) rotate(45deg) translate(0.8vw, 0.8vw)";
      case "08":
        return "scale(1.5) rotate(190deg) translate(1vw, 1vw)";
      default:
        return "scale(1.5)";
    }
  };

  const renderServiceCard = (service: (typeof services)[0], index: number) => {
    const isHovered = hoveredIndex === index;
    const isSameColumn = hoveredIndex !== null && (hoveredIndex % 2 === index % 2);
    
    let heightClass = "h-[6.2vw]";

    if (hoveredIndex !== null) {
      if (isHovered) {
        heightClass = "h-[8.4vw]";
      } else if (isSameColumn) {
        heightClass = "h-[5.5vw]";
      }
    }

    return (
      <div
        key={service.id}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className={`group shrink-0 relative flex flex-col ${heightClass} rounded-[0.8vw] bg-zinc-800/30 border-zinc-900/30 px-[1.2vw] py-[0.8vw] transition-all duration-500 ease-in-out hover:bg-zinc-950/20 cursor-pointer overflow-hidden`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Background Graphic */}
        <div
          className="absolute right-0 bottom-0 w-[14vw] h-[14vw] pointer-events-none opacity-0 group-hover:opacity-65 transition-all duration-500 ease-out select-none mix-blend-screen"
          style={{
            transform: getGraphicTransform(service.id),
          }}
        >
          <Image
            src="/logo-s.png"
            alt="Service Graphic"
            fill
            className="object-contain object-right-bottom"
          />
        </div>

        {/* Content Wrapper */}
        <div className="flex items-center justify-between w-full z-10 transition-transform duration-500 ease-in-out">
          {/* Left: Icon + Title */}
          <div className="flex items-center gap-[0.8vw]">
            {getServiceIcon(service.id)}
            <span className="text-[1vw] font-medium text-zinc-300 font-neue group-hover:text-white transition-colors">
              {service.title}
            </span>
          </div>

          {/* Right: Counter */}
          <span className="text-[0.7vw] text-zinc-300 group-hover:text-zinc-400 font-mono font-medium transition-colors">
            {service.count}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 flex items-start justify-between p-6 md:p-4 z-50 ">
        <a
          href="#"
          className=" pl flex items-center justify-center w-16 h-16 rounded-[1vw] bg-[#24242480]  backdrop-blur-md"
        >
          <Image src={Rise_logo} alt="Rise Logo" className="w-12 h-12" />
        </a>
        <nav
          onMouseLeave={() => {
            setIsServiceOpen(false);
            setHoveredIndex(null);
          }}
          className="pointer-events-auto relative hidden md:flex w-[45vw] flex-col gap-[0.1vw] overflow-hidden rounded-[1vw] px-[1vw] py-[0.7vw] bg-[#24242480] text-white backdrop-blur-[3vw] font-inter font-semibold justify-start"
          style={{
            height: isServiceOpen ? "31.5vw" : "3.35vw",
            transition:
              "height 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 1000ms",
          }}
        >
          <div className="relative flex w-full shrink-0 items-center justify-between gap-[0.5vw] text-[0.85vw]">
            <a
              href="#services"
              onMouseEnter={() => setIsServiceOpen(true)}
              className="px-[2vw] py-[0.5vw] text-white hover:bg-zinc-800/30 duration-200 transition rounded-[0.6vw]"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onMouseEnter={() => setIsServiceOpen(false)}
              className="px-[2vw] py-[0.5vw] text-white hover:bg-zinc-800/30 duration-200 transition rounded-[0.6vw]"
            >
              Portfolio
            </a>
            <a
              href="#about"
              onMouseEnter={() => setIsServiceOpen(false)}
              className="px-[2vw] py-[0.5vw] text-white hover:bg-zinc-800/30 duration-200 transition rounded-[0.6vw]"
            >
              About
            </a>
            <a
              href="#insights"
              onMouseEnter={() => setIsServiceOpen(false)}
              className="px-[2vw] py-[0.5vw] text-white hover:bg-zinc-800/30 duration-200 transition rounded-[0.6vw]"
            >
              Insights
            </a>
            <a
              href="#contact"
              onMouseEnter={() => setIsServiceOpen(false)}
              className="px-[2vw] py-[0.5vw] text-white hover:bg-zinc-800/30 duration-200 transition rounded-[0.6vw]"
            >
              Contact
            </a>
          </div>
          <div
            className={`w-full flex gap-[0.8vw] mt-[0.5vw] transition-opacity duration-300 ${
              isServiceOpen
                ? "opacity-100 delay-150 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Left Column (Even indices) */}
            <div className="flex flex-col gap-[0.8vw] w-1/2">
              {services
                .filter((_, idx) => idx % 2 === 0)
                .map((service, idx) => renderServiceCard(service, idx * 2))}
            </div>

            {/* Right Column (Odd indices) */}
            <div className="flex flex-col gap-[0.8vw] w-1/2">
              {services
                .filter((_, idx) => idx % 2 === 1)
                .map((service, idx) => renderServiceCard(service, idx * 2 + 1))}
            </div>
          </div>
        </nav>
        <button className="w-16 h-16 rounded-[1vw] bg-[#24242480] backdrop-blur-md flex items-center justify-center text-white">
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-10 h-10 text-white block opacity-80 hover:opacity-100 transition"
          >
            <g transform="translate(0, -12.25)">
              <rect
                x="14.25"
                y="26.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="26.5"
                y="26.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="38.75"
                y="26.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="51"
                y="26.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="63.25"
                y="26.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="75.5"
                y="26.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />

              <rect
                x="2"
                y="38.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="26.5"
                y="38.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="38.75"
                y="38.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="51"
                y="38.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="63.25"
                y="38.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="87.75"
                y="38.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />

              <rect
                x="2"
                y="51"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="14.25"
                y="51"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="38.75"
                y="51"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="51"
                y="51"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="75.5"
                y="51"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="87.75"
                y="51"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />

              <rect
                x="2"
                y="63.25"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="14.25"
                y="63.25"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="26.5"
                y="63.25"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="63.25"
                y="63.25"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="75.5"
                y="63.25"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="87.75"
                y="63.25"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />

              <rect
                x="2"
                y="75.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="14.25"
                y="75.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="26.5"
                y="75.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="38.75"
                y="75.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="51"
                y="75.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="63.25"
                y="75.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="75.5"
                y="75.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="87.75"
                y="75.5"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />

              <rect
                x="2"
                y="87.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="14.25"
                y="87.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="26.5"
                y="87.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="38.75"
                y="87.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="51"
                y="87.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="63.25"
                y="87.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="75.5"
                y="87.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
              <rect
                x="87.75"
                y="87.75"
                width="10.25"
                height="10.25"
                rx="5.125"
                fill="currentColor"
              />
            </g>
          </svg>
        </button>
      </header>
    </div>
  );
}
