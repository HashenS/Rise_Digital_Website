"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Rise_logo from "@/assets/Rise Digital(without text).svg";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
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
    <section className="relative h-screen w-full bg-theme-dark text-white overflow-hidden p-6 md:p-[2vw] flex flex-col justify-between">
      {/* 3D Logo Center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="relative w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] lg:w-[35vw] lg:h-[35vw] opacity-90 animate-float">
          <div
            className="relative w-full h-full transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${-rotation.y}deg) rotateY(${rotation.x}deg)`,
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

      {/* Spacer to push content to bottom */}
      <div className="flex-grow"></div>

      {/* Bottom Content Area */}
      <div className="relative z-20 w-full flex flex-col md:flex-row md:items-end justify-between pb-4 md:pb-[1vw]">
        
        {/* Left Side: Headline */}
        <div className="w-full md:w-3/4 max-w-[85vw] md:max-w-[65vw]">
          <p className="text-xs md:text-[0.95vw] uppercase tracking-widest text-zinc-500 font-medium mb-3 ml-7 md:mb-[1vw] font-neue">
            Full-Service Agency
          </p>
          <h1 className="text-4xl md:text-[3.8vw] lg:text-[3vw] font-medium font-neue leading-[1.05] ml-7 mb-9 tracking-tight text-white">
            Rise is a design and technology studio.{" "}
            <span className="text-white/30">
              We deliver holistic brand identity & digital experiences.
            </span>
          </h1>
        </div>

        {/* Center: Scroll Indicator */}
        <div className="absolute left-1/2 bottom-4 md:bottom-[2vw] -translate-x-1/2 flex items-center gap-2 text-zinc-500 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-xs md:text-[0.85vw] font-medium font-inter">Scroll</span>
          <ChevronDown className="w-4 h-4 md:w-[1.2vw] md:h-[1.2vw]" />
        </div>

        {/* Right Side: Static Start Project Button (Matches Global Button) */}
        <div className="hidden md:block">
          <button
            className="group flex h-12 md:h-[3vw] cursor-pointer items-center gap-[0.5vw] rounded-lg md:rounded-[0.5vw] pl-5 pr-4 md:pr-[1vw] md:pl-[1.5vw] text-sm md:text-[0.9vw] text-black bg-[#EBEBEB] transition-all duration-300 hover:bg-white active:scale-[0.98] font-inter font-medium"
          >
            Start a Project
            <ChevronRight className="w-4 h-4 md:w-[1vw] md:h-[1vw] ml-1 md:ml-[0.2vw] text-zinc-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
      </div>
    </section>
  );
}
