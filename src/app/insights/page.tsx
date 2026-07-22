"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/contact/ContactSection";
import { motion, useMotionValue, animate } from "motion/react";

// Import generated mockup images
import insightBottles from "@/assets/insight_bottles.png";
import insightCurves from "@/assets/insight_curves.png";

const insightsData = [
  {
    id: 1,
    title: "Building Brands from Within",
    category: "Design",
    date: "06/04/2026",
    image: insightBottles,
    slug: "building-brands-from-within",
  },
  {
    id: 2,
    title: "How to Choose a Brand Name That Lasts",
    category: "", // Date badge only in the design
    date: "06/04/2026",
    image: insightCurves,
    slug: "how-to-choose-a-brand-name-that-lasts",
  },
];

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isBlack, setIsBlack] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLHeadingElement>(null);

  // Use Framer Motion values for smooth, reliable color interpolation in both directions
  const bgColor = useMotionValue("#ebebeb");
  const textColor = useMotionValue("#000000");
  const isBlackRef = React.useRef(false);

  const animateTo = React.useCallback((black: boolean) => {
    if (isBlackRef.current === black) return; // already in this state, skip
    isBlackRef.current = black;
    setIsBlack(black);
    animate(bgColor, black ? "#000000" : "#ebebeb", { duration: 0.5, ease: "easeInOut" });
    animate(textColor, black ? "#ffffff" : "#000000", { duration: 0.5, ease: "easeInOut" });
    if (black) {
      document.body.classList.add("bg-black-active");
    } else {
      setTimeout(() => document.body.classList.remove("bg-black-active"), 500);
    }
  }, [bgColor, textColor]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        animateTo(false);
        return;
      }

      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 150 && window.scrollY > 50;

      if (rect.top <= window.innerHeight || isAtBottom) {
        animateTo(true);
      } else {
        animateTo(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("bg-black-active");
    };
  }, [animateTo]);

  const filteredInsights =
    activeFilter === "All"
      ? insightsData
      : insightsData.filter((item) => item.category === activeFilter);

  return (
    <motion.div
      className="w-full"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Top Header & Tagline Section */}
      <div className="pt-30 md:pt-[11vw] pb-12 px-5 md:px-[5vw] ">
        <div className="flex flex-col gap-10 md:flex-row font-neue">
          {/* Left Column: Heading */}
          <div className="md:w-1/2">
            <h1
              className={`mst text-3xl md:text-[3vw] font-neue tracking-normal transition-colors duration-[2500ms] ease-in-out ${
                isBlack ? "text-white" : "text-black"
              }`}
              style={
                {
                  "--mst-leading-desktop": "-1vw",
                  "--mst-leading-mobile": "-2vw",
                } as React.CSSProperties
              }
            >
              <span className="mst__lines block">
                {/* Line 1 */}
                <span
                  className="mst__mask block font-medium"
                  style={{
                    marginBottom: "var(--mst-leading)",
                    paddingBottom: "0.12em",
                    overflow: "visible",
                  }}
                >
                  <span
                    className="mst__inner block"
                    style={{
                      transition:
                        "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)",
                      transform: "translateY(0px)",
                      animationDelay: "0s",
                    }}
                  >
                    <span>A space for ideas, perspective, </span>
                  </span>
                </span>
                {/* Line 2 */}
                <span
                  className="mst__mask block font-medium"
                  style={{
                    marginBottom: "var(--mst-leading)",
                    paddingBottom: "0.12em",
                    overflow: "visible",
                  }}
                >
                  <span
                    className="mst__inner block"
                    style={{
                      transition:
                        "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)",
                      transform: "translateY(0px)",
                      animationDelay: "0.15s",
                    }}
                  >
                    <span>and inspiration on </span>
                    <span className="opacity-20 font-medium">
                      brand, design,{" "}
                    </span>
                  </span>
                </span>
                {/* Line 3 */}
                <span
                  className="mst__mask block font-medium"
                  style={{
                    marginBottom: "var(--mst-leading)",
                    paddingBottom: "0.12em",
                    overflow: "visible",
                  }}
                >
                  <span
                    className="mst__inner block"
                    style={{
                      transition:
                        "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)",
                      transform: "translateY(0px)",
                      animationDelay: "0.3s",
                    }}
                  >
                    <span className="opacity-20 font-medium">
                      and technology.
                    </span>
                  </span>
                </span>
              </span>
            </h1>
          </div>

          {/* Right Column: Description */}
          <div className="flex md:w-1/2 justify-end">
            <p
              className="mst text-sm md:text-[1vw] w-full md:w-1/2 opacity-40 leading-relaxed font-neue font-medium md:translate-y-[0.5vw]"
              style={
                {
                  "--mst-leading-desktop": "0em",
                  "--mst-leading-mobile": "0em",
                } as React.CSSProperties
              }
            >
              <span className="mst__lines block">
                {/* Line 1 */}
                <span
                  className="mst__mask block"
                  style={{
                    marginBottom: "var(--mst-leading)",
                    paddingBottom: "0.12em",
                    overflow: "visible",
                  }}
                >
                  <span
                    className="mst__inner block"
                    style={{
                      transition:
                        "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)",
                      transform: "translateY(0px)",
                      animationDelay: "0.1s",
                    }}
                  >
                    <span>Insights is where we publish perspective on </span>
                  </span>
                </span>
                {/* Line 2 */}
                <span
                  className="mst__mask block"
                  style={{
                    marginBottom: "var(--mst-leading)",
                    paddingBottom: "0.12em",
                    overflow: "visible",
                  }}
                >
                  <span
                    className="mst__inner block"
                    style={{
                      transition:
                        "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)",
                      transform: "translateY(0px)",
                      animationDelay: "0.25s",
                    }}
                  >
                    <span>the subjects that shape our work: strategy, </span>
                  </span>
                </span>
                {/* Line 3 */}
                <span
                  className="mst__mask block"
                  style={{
                    marginBottom: "var(--mst-leading)",
                    paddingBottom: "0.12em",
                    overflow: "visible",
                  }}
                >
                  <span
                    className="mst__inner block"
                    style={{
                      transition:
                        "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)",
                      transform: "translateY(0px)",
                      animationDelay: "0.4s",
                    }}
                  >
                    <span>identity, design systems, digital products, </span>
                  </span>
                </span>
                {/* Line 4 */}
                <span
                  className="mst__mask block"
                  style={{
                    marginBottom: "var(--mst-leading)",
                    paddingBottom: "0.12em",
                    overflow: "visible",
                  }}
                >
                  <span
                    className="mst__inner block"
                    style={{
                      transition:
                        "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)",
                      transform: "translateY(0px)",
                      animationDelay: "0.55s",
                    }}
                  >
                    <span>and the craft of building things that last. </span>
                  </span>
                </span>
                {/* Line 5 */}
                <span
                  className="mst__mask block"
                  style={{
                    marginBottom: "var(--mst-leading)",
                    paddingBottom: "0.12em",
                    overflow: "visible",
                  }}
                >
                  <span
                    className="mst__inner block"
                    style={{
                      transition:
                        "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)",
                      transform: "translateY(0px)",
                      animationDelay: "0.7s",
                    }}
                  >
                    <span>Written by strategists, designers, and </span>
                  </span>
                </span>
                {/* Line 6 */}
                <span
                  className="mst__mask block"
                  style={{
                    marginBottom: "var(--mst-leading)",
                    paddingBottom: "0.12em",
                    overflow: "visible",
                  }}
                >
                  <span
                    className="mst__inner block"
                    style={{
                      transition:
                        "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)",
                      transform: "translateY(0px)",
                      animationDelay: "0.85s",
                    }}
                  >
                    <span>developers from real project experience.</span>
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Grid Content Section */}
      <section className="flex flex-col gap-[1vw] px-5 mt-15 md:px-[5vw] md:pt-[3vw] pb-12 md:pb-[5vw]">
        {/* Category Filters */}
        <div className="flex gap-2 md:gap-[0.5vw] font-neue">
          <button
            onClick={() => setActiveFilter("All")}
            className={`cursor-pointer rounded-lg md:rounded-[0.5vw] px-4 py-1 md:px-[0.75vw] md:py-[0.35vw] text-md md:text-[1vw] transition-all duration-[2500ms] ease-in-out ${
              activeFilter === "All"
                ? isBlack
                  ? "bg-white text-black"
                  : "bg-black text-white"
                : isBlack
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-black/10 text-black hover:bg-black/20"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("Design")}
            className={`cursor-pointer rounded-lg md:rounded-[0.5vw] px-4 py-1 md:px-[0.75vw] md:py-[0.35vw] text-md md:text-[1vw] transition-all duration-[2500ms] ease-in-out font-medium ${
              activeFilter === "Design"
                ? isBlack
                  ? "bg-white text-black"
                  : "bg-black text-white"
                : isBlack
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-black/10 text-black hover:bg-black/20"
            }`}
          >
            Design
          </button>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-4 md:mt-0 gap-2 md:gap-[1vw]">
          {filteredInsights.map((insight) => (
            <Link
              key={insight.id}
              href={`/insights/${insight.slug}`}
              className="group block aspect-[3/4] flex flex-col"
            >
              <div
                className={`relative w-full flex-1 rounded-lg md:rounded-[0.5vw] overflow-hidden transition-colors duration-[2500ms] ease-in-out ${
                  isBlack ? "bg-zinc-900" : "bg-[#E7E7E7]"
                }`}
              >
                {/* Badges overlay top left */}
                <div className="absolute top-2 left-2 md:top-[1vw] md:left-[1vw] flex gap-[0.5vw] z-10">
                  {insight.category && (
                    <span className="rounded-md md:rounded-[0.5vw] bg-black/40 px-2 md:px-[0.75vw] py-1 md:py-[0.25vw] text-xs md:text-[0.75vw] text-white backdrop-blur-sm font-neue">
                      {insight.category}
                    </span>
                  )}
                  <span className="rounded-md md:rounded-[0.5vw] bg-black/40 px-2 md:px-[0.75vw] py-1 md:py-[0.25vw] text-xs md:text-[0.75vw] text-white backdrop-blur-sm font-neue">
                    {insight.date}
                  </span>
                </div>

                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>

              {/* Title below card */}
              <div className="mt-2 md:mt-[0.5vw]">
                <h5
                  className={`font-neue font-medium leading-5 text-lg px-1 md:px-0 md:text-[1.3vw] transition-colors duration-[2500ms] ease-in-out ${
                    isBlack ? "text-white" : "text-black"
                  }`}
                >
                  {insight.title}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Dark Background Section: Call to action & Contact Form */}
      <div
        ref={containerRef}
        className="pt-24 md:pt-[8vw] pb-[2vw]"
      >
        {/* Middle Tagline Section */}
        <div className="flex flex-col items-center py-16 md:pt-[15vw] justify-center">
          <section className="flex w-full px-3 md:px-0 md:w-4/5 flex-col items-center justify-center gap-5 md:gap-[2vw]">
            <motion.h3
              ref={textRef}
              className={`mst text-3xl md:text-[3vw] text-center md:w-3/4 font-neue font-medium tracking-normal transition-colors duration-[2500ms] ease-in-out ${
                isBlack ? "text-white" : "text-black"
              }`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: "some" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {[
                "Crafting Thoughtful Brands and Digital",
                "Products",
              ].map((line, i) => (
                <span
                  key={i}
                  className="block"
                  style={{ paddingBottom: "0.12em", overflow: "hidden" }}
                >
                  <motion.span
                    className="block font-medium"
                    variants={{
                      hidden: { y: "105%" },
                      show: { y: 0 },
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h3>
            <div className="px-10 md:w-2/3">
              <motion.div
                className={`mst text-md md:text-[1vw] text-center leading-relaxed font-neue font-medium transition-colors duration-[2500ms] ease-in-out ${
                  isBlack ? "text-white/50" : "text-black/50"
                }`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: "some" }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {[
                  "Rise Digital is a design and technology studio. We create digital products and identities defined by strategy,",
                  "precision, and vision.",
                ].map((line, i) => (
                  <span
                    key={i}
                    className="block"
                    style={{ paddingBottom: "0.12em", overflow: "hidden" }}
                  >
                    <motion.span
                      className="block font-medium"
                      variants={{
                        hidden: { y: "105%" },
                        show: { y: 0 },
                      }}
                      transition={{
                        duration: 1,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
        <ContactSection />
      </div>
    </motion.div>
  );
}
