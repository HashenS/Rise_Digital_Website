"use client";
import React from "react";
import Image from "next/image";
import ContactSection from "@/components/contact/ContactSection";
import { motion, useMotionValue, animate } from "motion/react";

// Import all project images
import duoNutritionImg from "@/assets/project_duo_nutrition.png";
import veraImg from "@/assets/project_vora.png";
import frejaImg from "@/assets/project_freja_mockup.png";
import czekuImg from "@/assets/project_esaku.png";
import toucheImg from "@/assets/project_touche.png";
import everydayImg from "@/assets/project_everyday_mockup.webp";
import mollierImg from "@/assets/project_motter.png";
import nymphImg from "@/assets/project_nymph.webp";
import nemoJujuImg from "@/assets/project_nevaspa.png";
import lorceImg from "@/assets/project_omoi.png";
import indioImg from "@/assets/project_indio_laptop.png";
import valveSynergyImg from "@/assets/project_vivve_synergy.png";
import withinOurHomeImg from "@/assets/project_within_our_home.png";

const projects = [
  {
    id: 1,
    title: "Duo Nutrition",
    location: "Russia",
    image: duoNutritionImg,
  },
  {
    id: 2,
    title: "Vera",
    location: "Germany",
    image: veraImg,
  },
  {
    id: 3,
    title: "Freja",
    location: "Sweden",
    image: frejaImg,
  },
  {
    id: 4,
    title: "Czeku",
    location: "Japan",
    image: czekuImg,
  },
  {
    id: 5,
    title: "Touché",
    location: "France",
    image: toucheImg,
  },
  {
    id: 6,
    title: "Everyday",
    location: "United Kingdom",
    image: everydayImg,
  },
  {
    id: 7,
    title: "Mollier",
    location: "Canada",
    image: mollierImg,
  },
  {
    id: 8,
    title: "Nymph",
    location: "Australia",
    image: nymphImg,
  },
  {
    id: 9,
    title: "Nemo Juju",
    location: "Brazil",
    image: nemoJujuImg,
  },
  {
    id: 10,
    title: "L'ORCÉ",
    location: "Italy",
    image: lorceImg,
    isCarousel: true,
  },
  {
    id: 11,
    title: "Indio White",
    location: "Spain",
    image: indioImg,
  },
  {
    id: 12,
    title: "Valve Synergy",
    location: "Netherlands",
    image: valveSynergyImg,
  },
  {
    id: 13,
    title: "Within Our Home",
    location: "Switzerland",
    image: withinOurHomeImg,
  },
];

export default function PortfolioPage() {
  const textRef = React.useRef<HTMLHeadingElement>(null);
  
  // Use Framer Motion values for smooth, reliable color interpolation in both directions
  const bgColor = useMotionValue("#ebebeb");
  const textColor = useMotionValue("#000000");
  
  // Track current state for text classes
  const [isBlack, setIsBlack] = React.useState(false);
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
      // Delay body class removal to match animation duration
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

  return (
    <motion.div
      className="w-full"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Light Background Section: Heading & Projects Grid */}
      <div className="pt-28 md:pt-[10vw] pb-24 md:pb-[8vw] px-6 md:px-[5vw]">
        {/* Intro Header Section */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start mb-16 md:mb-[6vw]">
          <div className="col-span-12 md:col-span-8">
            <h1
              className={`text-2xl md:text-[3vw] font-medium font-neue leading-[1.1] tracking-tight transition-colors duration-[2500ms] ease-in-out ${isBlack ? "text-white" : "text-black"}`}
            >
              More than one hundred projects <br />
              delivered. A selection of the work <br />
              <span
                className={`font-medium transition-opacity duration-[1500ms] ${isBlack ? "opacity-40" : "opacity-20"}`}
              >
                we are most proud of, across <br />
                strategy, design, and technology.
              </span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 mt-6 md:mt-2">
            <p
              className={`text-sm md:text-[1vw] font-medium leading-relaxed font-neue transition-colors duration-[2500ms] ease-in-out ${isBlack ? "text-white/50" : "text-black/35"}`}
            >
              A curated selection of project outcomes across strategy, brand
              identity, and design development. Each work is chosen from
              projects that successfully captured the clients&apos; needs,
              goals, and target audience.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-[6vw] mt-12 md:mt-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col relative cursor-pointer"
            >
              {/* Image Card Container */}
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-[1.2vw] bg-[#e0e0e0] shadow-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority={project.id <= 2}
                />

                {/* L'ORCÉ Carousel Arrows Overlay */}
                {project.isCarousel && (
                  <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-black/60 transition pointer-events-auto cursor-pointer">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] md:text-xs font-mono tracking-widest text-white uppercase select-none">
                      L&apos;ORCÉ Fine Jewelry Collection
                    </span>
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-black/60 transition pointer-events-auto cursor-pointer">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Project Metadata */}
              <div className="flex justify-between items-start mt-[0.8vw] px-1 font-neue">
                <h3
                  className={`text-lg md:text-[2vw] -mt-4 font-medium transition-colors duration-[2500ms] ease-in-out ${isBlack ? "text-white" : "text-black"}`}
                >
                  {project.title}
                </h3>
                <div className="flex flex-col items-start text-left pr-25">
                  <span
                    className={`text-[10px] md:text-[0.95vw] font-medium leading-none font-neue transition-colors duration-[2500ms] ease-in-out ${isBlack ? "text-white/40" : "text-black/35"}`}
                  >
                    Location:
                  </span>
                  <span
                    className={`text-xs md:text-[0.9vw] font-medium uppercase tracking-wider mt-1 font-neue transition-colors duration-[2500ms] ease-in-out ${isBlack ? "text-white" : "text-black"}`}
                  >
                    {project.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="md:px-[6.25vw] px-4 pt-[10vw] pb-[4vw] border-t border-zinc-200/20 flex flex-col items-center text-center">
        {/* Line-mask reveal heading */}
        <motion.h2
          ref={textRef}
          className="font-neue text-[7vw] md:text-[3vw] font-medium leading-tight tracking-tight"
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
                className="block"
                style={{ color: textColor }}
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
        </motion.h2>

        <motion.p
          style={{ color: textColor }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          viewport={{ once: true, amount: "some" }}
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
