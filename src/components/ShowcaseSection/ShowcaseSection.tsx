"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import frejaImg from "@/assets/project_freja_mockup.png";
import silenceImg from "@/assets/project_coasters_silence.png";

export default function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-[250vh] w-full" ref={containerRef}>
      <div className="sticky top-0 h-screen w-full  flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950"></div>
    </div>
  );
}
