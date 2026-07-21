"use client";
import { motion } from "motion/react";
import Image from "next/image";
import insightBottles from "@/assets/insight_bottles.png";
import insightCurves from "@/assets/insight_curves.png";

export default function LatestNews() {
  return (
    <>
      <section className="latest-news-section md:px-25 px-4 py-20 bg-theme-light transition-colors duration-[1200ms] ease-out">
        <div className="mb-12">
          <span className="font-neue text-section-title uppercase tracking-widest text-base font-medium">
            Latest News
          </span>
        </div>

        {/* Container needs a fixed height because children are absolute on desktop */}
        <div className="relative flex flex-col items-center w-full min-h-screen md:min-h-0 md:h-[40vw] gap-8 md:gap-0">

          {/* CARD 1 (LEFT) */}
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{ rest: { y: 0 }, hover: { y: -8 } }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="latest-news-card-1 group relative flex h-125 w-full flex-col gap-[1vw] rounded-[1vw] p-3 transition-[background-color,border-color] duration-[1200ms] ease-out md:absolute md:top-0 md:left-0 md:h-[30vw] md:w-[48vw] md:flex-row md:rounded-[1vw] md:p-[1vw] cursor-pointer overflow-hidden"
          >
            {/* Shadow deepens on hover */}
            <motion.div
              className="absolute inset-0 rounded-[1vw] pointer-events-none z-0"
              variants={{
                rest: { boxShadow: "0 4px 20px rgba(0,0,0,0.10)" },
                hover: { boxShadow: "0 28px 70px rgba(0,0,0,0.38)" },
              }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="relative z-10 w-full md:w-1/2 p-4 md:p-[1vw] flex flex-col justify-between">
              <div>
                <h2 className="latest-news-title text-3xl md:text-[2vw] font-neue font-medium text-black leading-tight tracking-tight transition-colors duration-[1200ms] ease-out">
                  Building Brands from within
                </h2>
                <span className="text-zinc-500 font-neue text-sm md:text-[0.9vw] font-medium mt-4 md:mt-[1.5vw] block">
                  April 6
                </span>
              </div>
              {/* Circular arrow — fades in on hover */}
              <motion.div
                className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-zinc-700/80"
                variants={{
                  rest: { opacity: 0, scale: 0.7, y: 8 },
                  hover: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </motion.div>
            </div>
            {/* Right Image with zoom */}
            <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden rounded-[1vw]">
              <motion.div
                className="w-full h-full"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.08 },
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={insightBottles}
                  alt="Building Brands from Within"
                  fill
                  sizes="(max-width: 768px) 100vw, 24vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* CARD 2 (RIGHT) */}
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{ rest: { y: 0 }, hover: { y: -8 } }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="latest-news-card-2 relative flex h-125 w-full flex-col gap-[1vw] rounded-[1vw] p-3 transition-[background-color,border-color] duration-[1200ms] ease-out md:absolute md:top-[8vw] md:right-0 md:h-[30vw] md:w-[48vw] md:flex-row md:rounded-[1vw] md:p-[1vw] cursor-pointer z-10 overflow-hidden"
            style={{
              backdropFilter: "blur(22px) saturate(180%)",
              WebkitBackdropFilter: "blur(22px) saturate(180%)",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-[1vw] pointer-events-none z-0"
              variants={{
                rest: { boxShadow: "0 4px 20px rgba(0,0,0,0.15)" },
                hover: { boxShadow: "0 28px 70px rgba(0,0,0,0.50)" },
              }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Left Text Area */}
            <div className="relative z-10 w-full md:w-1/2 p-4 md:p-[1vw] flex flex-col justify-between">
              <div>
                <h2 className="latest-news-title text-3xl md:text-[2vw] font-neue font-medium text-black leading-tight tracking-tight transition-colors duration-[1200ms] ease-out">
                  How to Choose a Brand Name That Lasts
                </h2>
                <span className="text-zinc-500 font-neue text-sm md:text-[0.9vw] font-medium mt-4 md:mt-[1.5vw] block">
                  April 6
                </span>
              </div>
              {/* Circular arrow — fades in on hover */}
              <motion.div
                className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-zinc-700/80"
                variants={{
                  rest: { opacity: 0, scale: 0.7, y: 8 },
                  hover: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </motion.div>
            </div>
            {/* Right Image with zoom */}
            <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden rounded-[1vw]">
              <motion.div
                className="w-full h-full"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.08 },
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={insightCurves}
                  alt="How to Choose a Brand Name That Lasts"
                  fill
                  sizes="(max-width: 768px) 100vw, 24vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>



        <div className="mt-12 md:mt-24 flex justify-center">
          <motion.button
            className="news-btn bg-black text-white px-8 py-3 font-neue rounded-lg font-medium cursor-pointer md:text-[1vw] text-base"
            whileHover={{ scale: 1.04, backgroundColor: "#27272a" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            View all news
          </motion.button>
        </div>
      </section>
    </>
  );
}
