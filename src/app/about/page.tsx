"use client";
import React from "react";
import { motion, useMotionValue, animate } from "motion/react";
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
  const textRef = React.useRef<HTMLHeadingElement>(null);
  const isBlackRef = React.useRef(false);
  const bgColor = useMotionValue("#ebebeb");
  const textColor = useMotionValue("#000000");

  const animateTo = React.useCallback(
    (black: boolean) => {
      if (isBlackRef.current === black) return;
      isBlackRef.current = black;
      animate(bgColor, black ? "#000000" : "#ebebeb", { duration: 0.5, ease: "easeInOut" });
      animate(textColor, black ? "#ffffff" : "#000000", { duration: 0.5, ease: "easeInOut" });
      if (black) {
        document.body.classList.add("bg-black-active");
      } else {
        setTimeout(() => document.body.classList.remove("bg-black-active"), 500);
      }
    },
    [bgColor, textColor],
  );

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) { animateTo(false); return; }
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const textCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150 &&
        window.scrollY > 50;
      if (textCenter <= viewportCenter || isAtBottom) animateTo(true);
      else animateTo(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("bg-black-active");
    };
  }, [animateTo]);

  return (
    <motion.div className="w-full" style={{ backgroundColor: bgColor }}>
      {/* Light Background Section: Intro Header & Stats */}
      <div className="pt-28 md:pt-[10vw] pb-24 md:pb-[8vw] px-6 md:px-[5vw]">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Heading and Start Button */}
          <div className="col-span-12 md:col-span-7 flex flex-col items-start">
            <h1 className="text-3xl md:text-[3.5vw] font-medium font-neue leading-[1.1] tracking-tight text-black max-w-[90%]">
              Rise is a full-service branding <br />
              and digital studio helping <br />
              <span className="opacity-20 font-medium">
                businesses build brands that are <br />
                clear, distinctive, and built for <br />
                growth.
              </span>
            </h1>
          </div>

          {/* Right Column: Description and Statistics Grid */}
          <div className="col-span-12 md:col-span-5 mt-12 md:mt-0 flex flex-col">
            <p className="opacity-40 text-sm md:text-[1vw] leading-relaxed font-neue mb-12 md:mb-[6vw] max-w-full md:max-w-full font-medium md:pl-[15vw]">
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
                  className="service-title font-mono text-8xl md:text-[10vw] md:leading-[8vw] select-none"
                  style={{
                    background:
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
                  className="service-title text-8xl md:text-[10vw] md:leading-[8vw] select-none"
                  style={{
                    background:
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
                  className="service-title text-8xl md:text-[10vw] md:leading-[8vw] select-none"
                  style={{
                    background:
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

      <ShowcaseSection />

      {/* Our Values Section */}
      <div className="bg-black text-white py-24 md:py-[10vw] px-6 md:px-[5vw] transition-colors duration-300">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Title */}
          <div className="col-span-12 md:col-span-5">
            <h2 className="text-white text-xs md:text-[1vw] font-medium font-neue uppercase">
              OUR VALUES
            </h2>
          </div>

          {/* Right Column: Values list */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-12 md:gap-[4vw]">
            {values.map((val, idx) => (
              <div key={idx} className="flex flex-col items-start ml-32">
                <h3 className="text-2xl md:text-[1.5vw] font-medium font-neue mb-3 md:mb-[1vw] text-white">
                  {val.title}
                </h3>
                <p className="text-lg md:text-[1vw] text-white/30 font-neue font-medium">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="md:px-[6.25vw] px-4 pt-[10vw] pb-[4vw] border-t border-zinc-200/20 flex flex-col items-center text-center">
        {/* Line-mask reveal heading */}
        <h2
          ref={textRef}
          className="font-neue text-[7vw] md:text-[3vw] font-medium leading-tight tracking-tight"
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
                {line}
              </motion.span>
            </span>
          ))}
        </h2>

        <motion.p
          style={{ color: textColor }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
          className="mt-6 md:mt-[2vw] font-neue text-sm md:text-[1vw] max-w-[42ch] leading-relaxed font-medium"
        >
          Rise Digital is a design and technology studio. We create digital
          products and identities defined by strategy, precision, and vision.
        </motion.p>
      </section>
      {/* ── Contact ──────────────────────────────────────────────────── */}
      <ContactSection />
    </motion.div>
  );
}
