"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import frejaImg from "@/assets/project_freja_mockup.png";
import silenceImg from "@/assets/project_coasters_silence.png";
import indioImg from "@/assets/project_indio_laptop.png";

export default function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [frejaImg, indioImg, silenceImg];
  const [activeIndex, setActiveIndex] = useState(0);
  const SLIDESHOW_DURATION = 300;

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

  // Drive bg-black-active for the entire page background — triggers after AandV has scrolled off-screen
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.18) {
        document.body.classList.add("bg-black-active");
      } else {
        document.body.classList.remove("bg-black-active");
      }
    });
    return () => {
      unsubscribe();
      document.body.classList.remove("bg-black-active");
    };
  }, [scrollYProgress]);

  // Card scale animation during sticky pin
  const width = useTransform(scrollYProgress, [0.18, 0.60], ["40vw", "90vw"]);
  const height = useTransform(scrollYProgress, [0.18, 0.60], ["62vw", "90vh"]);
  const borderRadius = useTransform(scrollYProgress, [0.18, 0.60], ["24px", "16px"]);

  return (
    <div
      ref={containerRef}
      className="relative h-[250vh] w-full bg-theme-light transition-colors duration-[1200ms] ease-out"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ width, height, borderRadius }}
          className="relative bg-zinc-950 overflow-hidden flex items-center justify-center shadow-2xl"
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
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
