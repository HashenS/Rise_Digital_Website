"use client";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ContactSection from "@/components/contact/ContactSection";
import ShowcaseSection from "@/components/ShowcaseSection/ShowcaseSection";

const values = [
  {
    title: "Meaningful Design",
    description:
      "Designs that carry meaning. Before shaping a brand's visual identity, we take the time to understand its character, values, and purpose. These insights become the foundation for a visual language that communicates the brand clearly and authentically.",
  },
  {
    title: "Strategic Thinking",
    description:
      "Creative solutions guided by strategy. We analyze a brand's goals, audience, and market context to ensure every design decision has purpose and drives tangible results.",
  },
  {
    title: "Integrated Expertise",
    description:
      "A seamless blend of skills. By combining branding, UX, web development, and product design, we deliver cohesive experiences that work beautifully across all touchpoints.",
  },
  {
    title: "Long-Term Vision",
    description:
      "Designs built to last. We create with growth and evolution in mind, ensuring brands remain relevant, flexible, and strong over time.",
  },
];

export default function AboutPage() {
  // Ref wrapping the ShowcaseSection — drives the whole-page color
  const showcaseRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start start", "end end"],
  });

  // Proportional to scroll position — no delay, reverses perfectly on scroll up
  // 0% – 10%  : light (#ebebeb)
  // 10% – 50% : smooth white → black (completes before image fully expands at 60%)
  // 50% – 100%: stays black
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1],
    ["#ebebeb", "#ebebeb", "#000000", "#000000"],
  );
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1],
    ["#000000", "#000000", "#ffffff", "#ffffff"],
  );

  return (
    <motion.div className="w-full" style={{ backgroundColor: bgColor }}>
      {/* Light Background Section: Intro Header & Stats */}
      <div className="pt-28 md:pt-[10vw] pb-24 md:pb-[8vw] px-6 md:px-[5vw]">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Heading and Start Button */}
          <div className="col-span-12 md:col-span-7 flex flex-col items-start">
            <h1 className="text-3xl md:text-[3.5vw] font-medium font-neue leading-[1.1] tracking-tight max-w-[90%]">
              {[
                { text: "Rise is a full-service branding", dim: false },
                { text: "and digital studio helping", dim: false },
                { text: "businesses build brands that are", dim: true },
                { text: "clear, distinctive, and built for", dim: true },
                { text: "growth.", dim: true },
              ].map((line, i) => (
                <span
                  key={i}
                  className="block"
                  style={{ paddingBottom: "0.12em", overflow: "hidden" }}
                >
                  <motion.span
                    className="block"
                    style={{ color: textColor }}
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: i * 0.1,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  >
                    <span className={line.dim ? "opacity-20" : undefined}>
                      {line.text}
                    </span>
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          {/* Right Column: Description and Statistics Grid */}
          <div className="col-span-12 md:col-span-5 mt-12 md:mt-0 flex flex-col">
            <p className="text-sm md:text-[1vw] leading-relaxed font-neue mb-12 md:mb-[6vw] max-w-full md:max-w-full font-medium md:pl-[15vw] text-black/35">
              We combine brand strategy, visual identity design, UX/UI design,
              web development, and visual content production to create cohesive
              brand experiences across every touchpoint.
            </p>

            {/* Stats Cards */}
            <div
              className="hidden-reveal grid aspect-square w-full md:w-full grid-cols-2 grid-rows-2 gap-2 md:gap-[1vw]"
              style={{ willChange: "auto", opacity: 1, pointerEvents: "auto" }}
            >
              {/* 100+ Card */}
              <div className="col-span-2 flex flex-col items-start justify-between rounded-lg md:rounded-[1vw] border md:border-[0.1vw] border-[#DCDCDC] bg-[#E7E7E7] p-3 md:p-[2vw]">
                <p
                  className="service-title text-8xl md:text-[10vw] md:leading-[8vw] select-none font-neue"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #a0a0a0 25%, #E7E7E7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <span
                    style={{ display: "inline-flex", alignItems: "baseline" }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        minWidth: "3ch",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      100
                    </span>
                    +
                  </span>
                </p>
                <p className="text-lg md:text-[1vw] text-black/30 font-medium font-neue">
                  Project Delivered
                </p>
              </div>

              {/* 8+ Card */}
              <div className="flex flex-col items-start justify-between rounded-lg md:rounded-[1vw] border md:border-[0.1vw] border-[#DCDCDC] bg-[#E7E7E7] p-3 md:p-[2vw]">
                <span
                  className="service-title text-8xl md:text-[10vw] md:leading-[8vw] select-none font-neue"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #a0a0a0 25%, #E7E7E7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <span
                    style={{ display: "inline-flex", alignItems: "baseline" }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        minWidth: "1ch",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      8
                    </span>
                    +
                  </span>
                </span>
                <p className="text-lg md:text-[1vw] text-black/30 font-medium font-neue">
                  Years in Industry
                </p>
              </div>

              {/* 4+ Card */}
              <div className="flex flex-col items-start justify-between rounded-lg md:rounded-[1vw] border md:border-[0.1vw] border-[#DCDCDC] bg-[#E7E7E7] p-3 md:p-[2vw]">
                <span
                  className="service-title text-8xl md:text-[10vw] md:leading-[8vw] select-none font-neue"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #a0a0a0 25%, #E7E7E7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <span
                    style={{ display: "inline-flex", alignItems: "baseline" }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        minWidth: "1ch",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      4
                    </span>
                    +
                  </span>
                </span>
                <p className="text-lg md:text-[1vw] text-black/30 font-medium font-neue">
                  Disciplines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showcase wrapper — useScroll target for page color transition */}
      <div ref={showcaseRef}>
        <ShowcaseSection />
      </div>

      {/* Our Values Section */}
      <div className="py-24 md:py-[10vw] px-6 md:px-[5vw]">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Title */}
          <div className="col-span-12 md:col-span-5">
            <motion.h2 style={{ color: textColor }} className="text-xs md:text-[1vw] font-medium font-neue uppercase opacity-50">
              OUR VALUES
            </motion.h2>
          </div>

          {/* Right Column: Values list */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-12 md:gap-[4vw]">
            {values.map((val, idx) => (
              <div key={idx} className="flex flex-col items-start ml-32">
                <motion.h3 style={{ color: textColor }} className="text-2xl md:text-[1.5vw] font-medium font-neue mb-3 md:mb-[1vw]">
                  {val.title}
                </motion.h3>
                <motion.p style={{ color: textColor }} className="text-lg md:text-[1vw] font-neue font-medium opacity-30">
                  {val.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <div className="overflow-hidden">
        <ContactSection />
      </div>
    </motion.div>
  );
}
