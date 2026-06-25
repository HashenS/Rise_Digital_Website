"use client";
import react, { useState, useEffect } from "react";
import Image from "next/image";
import Rise_logo from "@/assets/Rise Digital(without text).svg";
import ShinyText from "../Effects/shiny-text";
export default function HeroSection() {
  const [rotaion, setRotation] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (e.clientX - centerX) / centerX;
      const moveY = (e.clientY - centerY) / centerY;

      setRotation({ x: moveX * 15, y: moveY * 15 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden p-6 md:p-8 flex flex-col justify-between pl-30">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="relative flex items-center justify-center h-full w-full">
          <div className="absolute z-0 flex items-center justify-center w-full select-none">
            <ShinyText
              text="Rise                Digital"
              
              speed={5}
              delay={0}
              color="#000000"
              shineColor="#00148a"
              spread={135}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="text-5xl sm:text-7xl md:text-[140px] font-extrabold uppercase font-neue leading-none text-center opacity-40 tracking-wider whitespace-pre [-webkit-text-stroke:1.5px_rgba(255,255,255,0.2)]"
            />
          </div>
          <div className="relative w-150 h-150 opacity-90 animate-float">
            <div
              className="relative w-full h-full transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${-rotaion.y}deg) rotateY(${rotaion.x}deg)`,
              }}
            >
              <Image
                src={Rise_logo}
                alt="Rise 3D Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 mt-auto pb-12 pl-15">
        <div className="max-w-5xl">
          <p className="text-base uppercase tracking-widest text-zinc-500 font-base mb-4 font-neue">
            Full-Service Agency
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-[65px] font-medium font-neue leading-[1.05] tracking-tight text-white mb-8">
            Rise is a design and technology studio.{" "}
            <span className="text-zinc-500">
              We deliver holistic brand identity & digital experiences.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
