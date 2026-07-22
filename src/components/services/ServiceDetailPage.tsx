"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { ServiceData } from "@/data/services";
import ContactSection from "@/components/contact/ContactSection";

// ─── Dot-grid arrow SVG (→) ─────────────────────────────────────────────────
function ArrowIcon({
  className = "",
  color = "#000000",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ ["--dot-color" as string]: color, display: "block" }}
    >
      <g transform="translate(-18.375, 6.125)">
        {(
          [
            [51, 14.25],
            [63.25, 26.5],
            [75.5, 38.75],
            [63.25, 51],
            [51, 63.25],
          ] as [number, number][]
        ).map(([x, y], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width="10.25"
            height="10.25"
            rx="5.125"
            fill={color}
          />
        ))}
      </g>
    </svg>
  );
}

// ─── Mask-reveal text line ───────────────────────────────────────────────────
function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span
      className={`block ${className}`}
      style={{ paddingBottom: "0.12em", overflow: "hidden" }}
    >
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function MaskLineInView({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span
      className={`block ${className}`}
      style={{ paddingBottom: "0.12em", overflow: "hidden" }}
    >
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// ─── Sub-service list row ────────────────────────────────────────────────────
function SubServiceRow({ label }: { label: string }) {
  return (
    <div className="group relative flex items-center justify-between gap-2 md:gap-[1vw] overflow-hidden border-b border-black/10 p-2 md:p-[0.6vw] transition-all duration-200 cursor-pointer">
      {/* Fill from bottom on hover */}
      <span className="hidden md:block absolute inset-0 origin-bottom scale-y-0 rounded-[0.5vw] bg-black transition-transform duration-200 ease-in-out group-hover:scale-y-100" />
      <p className="relative z-10 text-base py-3 md:py-0 md:text-[1vw] font-neue font-medium transition-all duration-100 md:group-hover:translate-x-[1vw] group-hover:text-white ease-in-out  text-black">
        {label}
      </p>
      <div className="relative z-10 transition-transform duration-300 md:group-hover:-translate-x-[1vw] ">
        <ArrowIcon
          className="w-5 md:w-[2vw] transition-[filter] duration-300 group-hover:invert"
          color="#000000"
        />
      </div>
    </div>
  );
}

// ─── Process dot grid icon ──────────────────────────────────────────────────
function ProcessDotGridIcon({ index }: { index: number }) {
  const patternIndex = index % 6;
  const gradientId = `dot-gradient-process-${index}`;

  const patterns = [
    // Pattern 0 (Discovery)
    {
      transform: "translate(0, 0)",
      dots: [
        [38.75, 2], [51, 2], [63.25, 2], [75.5, 2],
        [26.5, 14.25], [38.75, 14.25], [51, 14.25], [63.25, 14.25], [75.5, 14.25], [87.75, 14.25],
        [26.5, 26.5], [38.75, 26.5], [75.5, 26.5], [87.75, 26.5],
        [26.5, 38.75], [38.75, 38.75], [75.5, 38.75], [87.75, 38.75],
        [26.5, 51], [38.75, 51], [51, 51], [63.25, 51], [75.5, 51], [87.75, 51],
        [14.25, 63.25], [26.5, 63.25], [38.75, 63.25], [51, 63.25], [63.25, 63.25], [75.5, 63.25],
        [2, 75.5], [14.25, 75.5], [26.5, 75.5],
        [2, 87.75], [14.25, 87.75],
      ],
    },
    // Pattern 1 (Platform Strategy)
    {
      transform: "translate(0, 0)",
      dots: [
        [2, 2], [14.25, 2],
        [14.25, 14.25],
        [14.25, 26.5], [26.5, 26.5], [38.75, 26.5], [51, 26.5], [63.25, 26.5], [75.5, 26.5], [87.75, 26.5],
        [14.25, 38.75], [87.75, 38.75],
        [14.25, 51], [87.75, 51],
        [14.25, 63.25], [26.5, 63.25], [38.75, 63.25], [51, 63.25], [63.25, 63.25], [75.5, 63.25], [87.75, 63.25],
        [26.5, 75.5], [38.75, 75.5], [63.25, 75.5], [75.5, 75.5],
        [26.5, 87.75], [38.75, 87.75], [63.25, 87.75], [75.5, 87.75],
      ],
    },
    // Pattern 2 (UX & Store Design)
    {
      transform: "translate(0, 0)",
      dots: [
        [14.25, 14.25], [26.5, 14.25], [38.75, 14.25], [51, 14.25], [63.25, 14.25], [75.5, 14.25],
        [14.25, 26.5], [75.5, 26.5],
        [14.25, 38.75], [75.5, 38.75],
        [14.25, 51], [75.5, 51],
        [2, 63.25], [14.25, 63.25], [26.5, 63.25], [38.75, 63.25], [51, 63.25], [63.25, 63.25], [75.5, 63.25], [87.75, 63.25],
        [2, 75.5], [14.25, 75.5], [26.5, 75.5], [38.75, 75.5], [51, 75.5], [63.25, 75.5], [75.5, 75.5], [87.75, 75.5],
      ],
    },
    // Pattern 3 (Development)
    {
      transform: "translate(0, 0)",
      dots: [
        [26.5, 2], [63.25, 2],
        [14.25, 14.25], [26.5, 14.25], [63.25, 14.25], [75.5, 14.25],
        [14.25, 26.5], [75.5, 26.5],
        [2, 38.75], [14.25, 38.75], [75.5, 38.75], [87.75, 38.75],
        [2, 51], [14.25, 51], [75.5, 51], [87.75, 51],
        [14.25, 63.25], [75.5, 63.25],
        [14.25, 75.5], [26.5, 75.5], [63.25, 75.5], [75.5, 75.5],
        [26.5, 87.75], [63.25, 87.75],
      ],
    },
    // Pattern 4 (Testing & Optimization)
    {
      transform: "translate(0, 0)",
      dots: [
        [2, 2], [14.25, 2], [26.5, 2], [38.75, 2], [51, 2], [63.25, 2], [75.5, 2], [87.75, 2],
        [2, 14.25], [87.75, 14.25],
        [2, 26.5], [26.5, 26.5], [38.75, 26.5], [51, 26.5], [63.25, 26.5], [87.75, 26.5],
        [2, 38.75], [26.5, 38.75], [38.75, 38.75], [51, 38.75], [63.25, 38.75], [87.75, 38.75],
        [2, 51], [14.25, 51], [38.75, 51], [51, 51], [75.5, 51], [87.75, 51],
        [14.25, 63.25], [26.5, 63.25], [63.25, 63.25], [75.5, 63.25],
        [26.5, 75.5], [38.75, 75.5], [51, 75.5], [63.25, 75.5],
        [38.75, 87.75], [51, 87.75],
      ],
    },
    // Pattern 5 (Launch & Growth)
    {
      transform: "translate(0, -6.125)",
      dots: [
        [75.5, 14.25], [87.75, 14.25],
        [75.5, 26.5], [87.75, 26.5],
        [38.75, 38.75], [51, 38.75], [75.5, 38.75], [87.75, 38.75],
        [38.75, 51], [51, 51], [75.5, 51], [87.75, 51],
        [2, 63.25], [14.25, 63.25], [38.75, 63.25], [51, 63.25], [75.5, 63.25], [87.75, 63.25],
        [2, 75.5], [14.25, 75.5], [38.75, 75.5], [51, 75.5], [75.5, 75.5], [87.75, 75.5],
        [2, 87.75], [14.25, 87.75], [38.75, 87.75], [51, 87.75], [75.5, 87.75], [87.75, 87.75],
      ],
    },
  ];

  const currentPattern = patterns[patternIndex];

  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-20 h-20 md:w-[6vw] md:h-[6vw] my-2 md:my-0 flex-shrink-0"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="0"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#BBBBBB" />
          <stop offset="100%" stopColor="#D8D8D8" />
        </linearGradient>
      </defs>
      <g transform={currentPattern.transform}>
        {currentPattern.dots.map(([x, y], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width="10.25"
            height="10.25"
            rx="5.125"
            fill={`url(#${gradientId})`}
          />
        ))}
      </g>
    </svg>
  );
}

// ─── Process card ────────────────────────────────────────────────────────────
function ProcessCard({
  step,
  index,
}: {
  step: { number: string; title: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.76, 0, 0.24, 1] }}
      className="service-process-card flex aspect-[2/3] h-full flex-col items-center justify-between gap-4 rounded-2xl md:rounded-[1vw] border border-[#DCDCDC] bg-[#E7E7E7] p-5 md:p-[1vw]"
    >
      <div className="flex w-full justify-between items-center">
        <h4 className="w-full text-left text-sm md:text-[1vw] text-[#606060] uppercase font-neue font-medium">
          {step.title}
        </h4>
        <span className="text-sm md:text-[1vw] text-[#606060] font-neue">
          {step.number}
        </span>
      </div>

      <ProcessDotGridIcon index={index} />

      <p className="w-full text-xs md:text-[0.9vw] leading-relaxed md:leading-[1.2vw] text-[#8D8D8D] font-neue">
        {step.description}
      </p>
    </motion.div>
  );
}

// ─── Studio Statement Section ──────────────────────────────────────────────
function StudioStatementSection() {
  return (
    <div className="flex flex-col items-center min-h-[300px] h-120 md:h-[35vw] justify-center text-black py-16 md:py-0 font-neue">
      <section className="flex w-full px-5 md:px-0 md:w-4/5 h-full flex-col items-center justify-center gap-5 md:gap-[2vw]">
        <h2 className="text-3xl md:text-[3vw] text-center md:w-3/4 font-medium leading-tight md:leading-[3.4vw] tracking-tight">
          <MaskLineInView delay={0.1}>
            Crafting Thoughtful Brands and Digital
          </MaskLineInView>
          <MaskLineInView delay={0.2}>
            Products
          </MaskLineInView>
        </h2>
        <div className="px-5 md:px-10 md:w-2/3">
          <div className="text-sm md:text-[1vw] md:leading-[1.5vw] text-center opacity-50 font-medium">
            <MaskLineInView delay={0.3}>
              Rise Digital is a design and technology studio. We create digital products and identities defined by strategy,
            </MaskLineInView>
            <MaskLineInView delay={0.4}>
              precision, and vision.
            </MaskLineInView>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function ServiceDetailPage({
  service,
}: {
  service: ServiceData;
}) {
  return (
    <main className="bg-[#f0f0f0] min-h-screen">
      {/* ── SECTION 1: Hero ── */}
      <section className="relative h-[80vh] md:h-[70vh] w-screen overflow-hidden">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        <div className="absolute inset-0 flex flex-col-reverse md:flex-row gap-5 md:gap-0 px-5 pb-5 md:px-[5vw] md:pb-[3vw]">
          {/* Bottom-left: Back button */}
          <div className="flex md:w-1/2 flex-col justify-end">
            <Link
              href="/services"
              className="group flex w-fit items-center gap-3 md:gap-[1vw] rounded-lg md:rounded-[0.5vw] bg-white/40 px-5 py-3.5 md:px-[1.5vw] md:py-[0.8vw] text-sm md:text-[1vw] font-neue font-medium backdrop-blur-[1vw] transition-all duration-300 hover:scale-[1.02] hover:bg-white text-black"
            >
              <ArrowIcon
                className="rotate-180 w-5 md:w-[1.5vw]"
                color="#000000"
              />
              View all services
            </Link>
          </div>

          {/* Bottom-right: Title + description */}
          <div className="flex md:w-1/2 flex-col justify-end gap-[2vw]">
            <h1 className="text-6xl md:text-[7vw] font-medium font-neue leading-none tracking-tight text-white">
              <MaskLine delay={0.1}>{service.title}</MaskLine>
            </h1>
            <div className="hidden md:flex justify-end">
              <p className="w-1/2 text-sm md:text-[1vw] md:leading-[1.4vw] text-white font-neue">
                {service.heroDescription
                  .split(" ")
                  .reduce<string[][]>((lines, word) => {
                    // Split into ~8 word lines
                    if (!lines.length || lines[lines.length - 1].length >= 8)
                      lines.push([]);
                    lines[lines.length - 1].push(word);
                    return lines;
                  }, [])
                  .map((words, i) => (
                    <MaskLine key={i} delay={0.2 + i * 0.08}>
                      {words.join(" ")}
                    </MaskLine>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: About ── */}
      <section className="px-5 pt-10 md:px-[5vw] md:pt-[5vw]">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row">
          {/* Left: large heading */}
          <div className="md:w-1/2 md:pr-[5vw]">
            <h2 className="text-3xl md:text-[3vw] font-medium font-neue leading-tight md:-translate-y-[1vw] tracking-tight text-black">
              {service.aboutHeading.lines.map((line, i) => (
                <MaskLineInView key={i} delay={i * 0.1}>
                  <span className={line.dim ? "opacity-20" : undefined}>
                    {line.text}
                  </span>
                </MaskLineInView>
              ))}
            </h2>
          </div>
          {/* Right: body text */}
          <div className="md:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-base md:text-[1vw] text-black/30 md:leading-[1.6vw] opacity-40 font-neue font-medium"
            >
              {service.aboutBody}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: What We Do ── */}
      <section className="flex px-5 pt-10 md:px-[5vw] md:pt-[8vw]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 mt-5 w-full">
          {/* Left: label */}
          <div className="md:w-1/2 md:pr-[5vw]">
            <h3
              className="text-xs md:text-[1vw] secondary-text uppercase tracking-widest font-neue font-medium text-[#606060] overflow-hidden"
              style={{ paddingBottom: "0.12em" }}
            >
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                What we do
              </motion.span>
            </h3>
          </div>
          {/* Right: sub-service rows */}
          <div className="w-full md:w-1/2">
            {service.subServices.map((sub) => (
              <SubServiceRow key={sub} label={sub} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Our Process ── */}
      <section className="mt-10 md:mt-0 flex w-full flex-col pt-10 md:pt-[8vw] px-5 md:px-[5vw] pb-16 md:pb-[4vw]">
        <h3
          className="text-xs md:text-[1vw] secondary-text uppercase tracking-widest font-neue font-medium text-[#606060] mb-8 md:mb-[3vw] overflow-hidden"
          style={{ paddingBottom: "0.12em" }}
        >
          <motion.span
            className="block"
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            Our Process
          </motion.span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-[1vw] mt-[1vw]">
          {service.process.map((step, index) => (
            <ProcessCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </section>

      {/* ── SECTION 5: Studio Statement ── */}
      <StudioStatementSection />

      {/* ── SECTION 6: Contact ── */}
      <ContactSection />
    </main>
  );
}
