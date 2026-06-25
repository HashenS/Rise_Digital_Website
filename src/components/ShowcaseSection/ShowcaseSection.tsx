"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import frejaImg from "@/assets/project_freja_mockup.png";
import silenceImg from "@/assets/project_coasters_silence.png";
import indioImg from "@/assets/project_indio_laptop.png";

export default function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // List of images for the automatic slideshow
  const images = [frejaImg, indioImg, silenceImg];
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic slideshow interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale the box container dimensions as we scroll
  const width = useTransform(scrollYProgress, [0.1, 0.6], ["40vw", "90vw"]);
  const height = useTransform(scrollYProgress, [0.1, 0.6], ["52vw", "90vh"]);

  const borderRadius = useTransform(
    scrollYProgress,
    [0.1, 0.6],
    ["24px", "16px"],
  );

  // Fade the surrounding page background from white/grey to black after hitting full size
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    ["#ffffff", "#000000"],
  );

  return (
    <div className="relative h-[250vh] w-full" ref={containerRef}>
      {/* Sticky page wrapper (fades background to black) */}
      <motion.div
        style={{ backgroundColor }}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Scaling card container */}
        <motion.div
          style={{ width, height, borderRadius }}
          className="relative bg-zinc-950 overflow-hidden flex items-center justify-center shadow-2xl"
        >
          {/* Automatic Slideshow Layers */}
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                activeIndex === idx ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Project Showcase ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

