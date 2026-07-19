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
  const SLIDESHOW_DURATION = 300;

  // Automatic slideshow interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, SLIDESHOW_DURATION);
    return () => clearInterval(interval);
  }, [images.length, SLIDESHOW_DURATION]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isBlack, setIsBlack] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.15) {
        setIsBlack(true);
      } else {
        setIsBlack(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    if (isBlack) {
      document.body.classList.add("bg-black-active");
    } else {
      document.body.classList.remove("bg-black-active");
    }
    return () => {
      document.body.classList.remove("bg-black-active");
    };
  }, [isBlack]);

  // Scale the box container dimensions as we scroll
  const width = useTransform(scrollYProgress, [0.1, 0.6], ["40vw", "90vw"]);
  const height = useTransform(scrollYProgress, [0.1, 0.6], ["62vw", "90vh"]);

  const borderRadius = useTransform(
    scrollYProgress,
    [0.1, 0.6],
    ["24px", "16px"],
  );

  return (
    <div
      className={`relative h-[250vh] w-full transition-colors duration-1200 ease-out ${
        isBlack ? "bg-black" : "bg-[#ebebeb]"
      }`}
      ref={containerRef}
    >
      {/* Sticky page wrapper (fades background to black) */}
      <div
        className={`sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-1200 ease-out ${
          isBlack ? "bg-black" : "bg-[#ebebeb]"
        }`}
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
              className={`absolute inset-0 w-full h-full  ${
                activeIndex === idx ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Project Showcase ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
