"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, animate } from "motion/react";
import ContactSection from "@/components/contact/ContactSection";
import AnimatedArrowButton from "@/components/shared/animated-arrow-button";

import brandStrategyImg from "@/assets/services-img/brand_strategy.webp";
import brandIdentityImg from "@/assets/services-img/brand_identity.webp";
import uiDesignImg from "@/assets/services-img/ui_design.webp";
import visualContentImg from "@/assets/services-img/visual_content.webp";
import webDevImg from "@/assets/services-img/web_dev.webp";
import eCommerceImg from "@/assets/services-img/e-commerce.webp";
import webMobileImg from "@/assets/services-img/web_mobile_application.webp";
import embeddedHardwareImg from "@/assets/services-img/embedded-_hardware.webp";

// ─── Data ──────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "strategy",
    label: "Strategy",
    serviceCount: 6,
    description:
      "Strategy defines the foundation of a brand. Through research, analysis, and strategic thinking, we clarify positioning, messaging, and long-term direction.",
    img: brandStrategyImg,
    services: [
      {
        id: "01",
        title: "Brand Strategy",
        subServices: [
          "Brand Positioning",
          "Competitor & Market Research",
          "Brand Architecture",
          "Brand Audit",
          "Brand Naming & Tagline",
          "Brand Messaging & Tone of Voice",
        ],
      },
      {
        id: "02",
        title: "Brand Identity",
        subServices: [
          "Logo Design",
          "Visual Language",
          "Brand Guidelines",
          "Typography & Color",
          "Marketing Materials",
        ],
      },
    ],
  },
  {
    id: "visual",
    label: "Visual",
    serviceCount: 9,
    description:
      "Visual craft is how your brand earns attention and trust. We create systems and assets that are as thoughtful as they are beautiful.",
    img: uiDesignImg,
    services: [
      {
        id: "03",
        title: "User Experience Design",
        subServices: [
          "User Research",
          "Wireframing",
          "Prototyping",
          "Usability Testing",
          "Information Architecture",
          "Interaction Design",
        ],
      },
      {
        id: "04",
        title: "Visual Content",
        subServices: ["Photography", "Videography", "3D Motion Graphics"],
      },
    ],
  },
  {
    id: "technology",
    label: "Technology",
    serviceCount: 20,
    description:
      "We engineer scalable, high-performance digital products — from storefronts to complex web applications and embedded systems.",
    img: webDevImg,
    services: [
      {
        id: "05",
        title: "Web Development",
        subServices: [
          "Frontend Development",
          "Backend Architecture",
          "CMS Integration",
          "Performance Optimization",
          "Web Animation",
          "Maintenance & Support",
        ],
      },
      {
        id: "06",
        title: "E-Commerce Development",
        subServices: [
          "Shopify Development",
          "Custom Storefronts",
          "Payment Gateways",
          "Conversion Optimization",
          "Subscription Models",
          "Platform Migration",
        ],
      },
      {
        id: "07",
        title: "Web & Mobile Application",
        subServices: [
          "iOS Development",
          "Android Development",
          "React Native",
          "Progressive Web Apps",
          "App Store Optimization",
          "Post-Launch Support",
        ],
      },
      {
        id: "08",
        title: "Embedded & Hardware",
        subServices: [
          "IoT Solutions",
          "Firmware Development",
          "Hardware Prototyping",
          "Circuit Design",
          "Testing & Validation",
        ],
      },
    ],
  },
];

// ─── Dot-grid icon ─────────────────────────────────────────────────────────────

const DOT_GRID_RECTS: [number, number][] = [
  [38.75, 2],     [51, 2],
  [38.75, 14.25], [51, 14.25],
  [26.5,  26.5],  [63.25, 26.5],
  [2,     38.75], [14.25, 38.75], [38.75, 38.75], [51, 38.75], [75.5, 38.75], [87.75, 38.75],
  [2,     51],    [14.25, 51],    [38.75, 51],    [51, 51],    [75.5, 51],    [87.75, 51],
  [26.5,  63.25], [63.25, 63.25],
  [38.75, 75.5],  [51, 75.5],
  [38.75, 87.75], [51, 87.75],
];

function DotGridIcon({ className }: { className?: string }) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
    >
      {DOT_GRID_RECTS.map(([x, y], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="10.25"
          height="10.25"
          rx="5.125"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

// ─── Service row ───────────────────────────────────────────────────────────────

function ServiceRow({
  service,
}: {
  service: { id: string; title: string; subServices: string[] };
}) {
  return (
    <div className="mb-[1.5vw] last:mb-0">
      {/* Service title header */}
      <div className="group flex items-center gap-3 mb-[0.6vw]">
        <DotGridIcon className="w-[3.2vw] min-w-[18px] shrink-0 text-black/20 group-hover:text-black transition-colors duration-500" />
        <span className="font-neue text-base md:text-[2vw] font-medium text-black group-hover:text-black transition-colors duration-300">
          {service.title}
        </span>
      </div>

      {/* Sub-service rows */}
      <div className="flex flex-col">
        {service.subServices.map((sub, i) => (
          <div
            key={i}
            className="group/row flex items-center justify-between px-4 py-[0.7vw] rounded-lg cursor-pointer hover:bg-black transition-all duration-200 border-t border-zinc-100 first:border-0 font-medium"
          >
            <span className="font-neue text-sm md:text-[1vw] text-zinc-800 group-hover/row:text-white transition-colors duration-200 tracking-[0.02vw]">
              {sub}
            </span>
            {/* Dotted chevron › icon */}
            <svg
              viewBox="0 0 8 14"
              fill="none"
              className="w-2.5 h-3.5 shrink-0 text-black/40 group-hover/row:text-white transition-colors duration-200"
            >
              <circle cx="2" cy="2" r="1.3" fill="currentColor" />
              <circle cx="6" cy="7" r="1.3" fill="currentColor" />
              <circle cx="2" cy="12" r="1.3" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Category section ──────────────────────────────────────────────────────────

function CategorySection({
  category,
  index,
}: {
  category: (typeof categories)[0];
  index: number;
}) {
  return (
    <section className="md:px-[6.25vw] px-4 border-t border-zinc-200 py-[4vw]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[3vw]">

        {/* ── Left col: index + title + image ── */}
        <div className="md:w-[52%] shrink-0 flex flex-col gap-[1.5vw]">
          <div className="flex items-start gap-3">
            <span className="font-neue text-xs md:text-[0.7vw] text-zinc-400 mt-[1vw] shrink-0 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex items-end gap-2.5">
              <h2
                className="font-neue font-medium text-[12vw] md:text-[5.5vw] leading-none tracking-tight select-none"
                style={{
                  background:
                    "linear-gradient(rgb(200 200 200) 20%, rgb(232 232 232) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {category.label}
              </h2>
              <span className="mb-[2vw] inline-flex items-center justify-center w-7 h-7 rounded-md border border-zinc-200 text-black/50 font-neue text-[14px] font-medium shrink-0 bg-black/15">
                {category.serviceCount}
              </span>
            </div>
          </div>

          <div className="relative h-[60vw] md:h-[26vw] rounded-[1vw] overflow-hidden">
            <Image
              src={category.img}
              alt={category.label}
              fill
              sizes="(max-width: 768px) 90vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>

        {/* ── Right col: description + services ── */}
        <div className="md:flex-1 flex flex-col">
          <p className="md:max-w-[38vw] md:pl-[15vw] text-black/25 font-neue text-base md:text-[1vw] leading-[1.25] tracking-[0.04em] font-medium md:mb-[2.5vw] md:mt-[0.5vw]">
            {category.description}
          </p>

          <div className="flex flex-col mt-6 md:mt-auto">
            {category.services.map((service) => (
              <ServiceRow key={service.id} service={service} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const isBlackRef = useRef(false);
  const bgColor = useMotionValue("#ebebeb");
  const textColor = useMotionValue("#000000");

  const animateTo = React.useCallback(
    (black: boolean) => {
      if (isBlackRef.current === black) return;
      isBlackRef.current = black;
      animate(bgColor, black ? "#000000" : "#ebebeb", {
        duration: 0.5,
        ease: "easeInOut",
      });
      animate(textColor, black ? "#ffffff" : "#000000", {
        duration: 0.5,
        ease: "easeInOut",
      });
      if (black) {
        document.body.classList.add("bg-black-active");
      } else {
        setTimeout(
          () => document.body.classList.remove("bg-black-active"),
          500,
        );
      }
    },
    [bgColor, textColor],
  );

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        animateTo(false);
        return;
      }
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const textCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const isAtBottom =
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 150 && window.scrollY > 50;
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
    <motion.main style={{ backgroundColor: bgColor }} className="min-h-screen">
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="md:px-[6.25vw] px-4 pt-[12vw] pb-[8vw]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[4vw]">
          {/* Left: small label */}
          <div className="md:w-[31%] shrink-0 pt-1">
            <span className="text-base uppercase text-section-title font-medium font-neue tracking-widest">
              Our Services
            </span>
          </div>

          {/* Right: big text + button */}
          <div className="md:flex-1">
            <motion.h1
              style={{ color: textColor }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-neue font-medium text-[6.5vw] md:text-[3.2vw] leading-tight tracking-tight max-w-[90vw] md:max-w-[55vw]"
            >
              Rise Digital is a design and technology studio. We build digital
              products,{" "}
              <span className="text-zinc-400">from concept to production.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-10 md:mt-[3vw]"
            >
              <button className="bg-black text-white px-7 py-3.5 rounded-lg font-neue text-base font-medium">
                Discuss The Project
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Service categories ────────────────────────────────────────── */}
      {categories.map((category, index) => (
        <CategorySection key={category.id} category={category} index={index} />
      ))}

      {/* ── Start a project pill ───────────────────────────────────────── */}
      <div className="flex justify-center py-[4vw]">
        <button className="group flex items-center gap-3 bg-black text-white font-neue font-medium text-base md:text-[1vw] px-8 py-4 rounded-full hover:bg-zinc-800 transition-colors duration-300">
          Start a project
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200">
            <circle cx="4" cy="4" r="1.4" fill="currentColor" />
            <circle cx="10" cy="8" r="1.4" fill="currentColor" />
            <circle cx="4" cy="12" r="1.4" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* ── Tagline — triggers dark bg ────────────────────────────────── */}
      <section className="md:px-[6.25vw] px-4 py-[10vw] border-t border-zinc-200/20">
        <motion.h2
          ref={textRef}
          style={{ color: textColor }}
          className="font-neue text-[7vw] md:text-[4.5vw] font-medium leading-tight tracking-tight max-w-[70vw]"
        >
          Crafting Thoughtful Brands and Digital Products
        </motion.h2>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <ContactSection />
    </motion.main>
  );
}
