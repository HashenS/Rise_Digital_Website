"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import frejaImg from "@/assets/project_freja_mockup.png";
import silenceImg from "@/assets/project_coasters_silence.png";

export default function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
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

  // Crossfade images between 40% and 60% scroll progress
  const img1Opacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
  const img2Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    ["#ffffff", "#000000"],
  );

  return (
    <div className="relative h-[250vh] w-full" ref={containerRef}>
      <motion.div style={{ backgroundColor }} className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden ">
        <motion.div 
          style={{ width, height, borderRadius }}
          className="relative bg-zinc-950 overflow-hidden flex items-center justify-center shadow-2xl"
        >
          {/* Project 1 Image Layer */}
          <motion.div
            style={{ opacity: img1Opacity }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={frejaImg}
              alt="Freja Bag Project"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Project 2 Image Layer */}
          <motion.div
            style={{ opacity: img2Opacity }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={silenceImg}
              alt="Silence Ceramic Project"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
