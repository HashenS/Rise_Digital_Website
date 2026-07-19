"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "motion/react";
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

// ─── Dot-grid icon (matches existing site style) ───────────────────────────────

function ServiceDotIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5 shrink-0 text-zinc-400"
    >
      {[
        [6, 6],[9, 6],[12, 6],[15, 6],[18, 6],
        [6, 9],[18, 9],
        [6, 12],[9, 12],[12, 12],[15, 12],[18, 12],
        [12, 15],[12, 18],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={1.2} fill="currentColor" />
      ))}
    </svg>
  );
}

// ─── Service accordion row ─────────────────────────────────────────────────────

function ServiceRow({
  service,
  isOpen,
  onToggle,
}: {
  service: { id: string; title: string; subServices: string[] };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-zinc-200/60">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-4 text-left group cursor-pointer"
      >
        <ServiceDotIcon />
        <span className="flex-1 font-neue text-base md:text-[1.1vw] font-medium text-black group-hover:text-zinc-500 transition-colors duration-200">
          {service.title}
        </span>
        {/* expand toggle */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 text-zinc-400"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="sub"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="pb-4 pl-9 space-y-2">
              {service.subServices.map((sub, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.035,
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-zinc-500 font-neue text-sm md:text-[0.95vw] flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-zinc-300 shrink-0" />
                  {sub}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Category section ──────────────────────────────────────────────────────────

function CategorySection({
  category,
}: {
  category: (typeof categories)[0];
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="md:px-[6.25vw] px-4 pt-[4vw] pb-[5vw]">
      {/* Top row: huge label + count badge | description */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-[2vw] gap-4">
        {/* Label + count */}
        <div className="flex items-end gap-3">
          <h2 className="font-neue font-medium text-[12vw] md:text-[7vw] leading-none tracking-tight text-black">
            {category.label}
          </h2>
          <span className="mb-[1vw] inline-flex items-center justify-center w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-neue text-xs font-semibold shrink-0">
            {category.serviceCount}
          </span>
        </div>
        {/* Description — right-aligned on desktop */}
        <p className="md:max-w-[30vw] text-zinc-500 font-neue text-sm md:text-[0.9vw] leading-relaxed md:text-right md:mt-[2vw]">
          {category.description}
        </p>
      </div>

      {/* Bottom row: wide image | service accordion */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-[2vw]">
        {/* Image — left, ~55% */}
        <div className="relative h-[60vw] md:h-[28vw] md:w-[55%] rounded-[1.2vw] overflow-hidden shrink-0">
          <Image
            src={category.img}
            alt={category.label}
            fill
            sizes="(max-width: 768px) 90vw, 55vw"
            className="object-cover"
          />
          {/* subtle dark overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Service rows — right, ~45% */}
        <div className="md:w-[45%] flex flex-col justify-start pt-1">
          {category.services.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              isOpen={openId === service.id}
              onToggle={() =>
                setOpenId(openId === service.id ? null : service.id)
              }
            />
          ))}
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
          500
        );
      }
    },
    [bgColor, textColor]
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
          document.documentElement.scrollHeight - 150 &&
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
    <motion.main style={{ backgroundColor: bgColor }} className="min-h-screen">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="md:px-[6.25vw] px-4 pt-[12vw] pb-[8vw]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[4vw]">
          {/* Left: small label */}
          <div className="md:w-[18%] shrink-0 pt-1">
            <span className="font-neue text-xs uppercase tracking-widest text-zinc-500 font-medium">
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
              <AnimatedArrowButton
                className="bg-black text-white px-7 py-3.5 rounded-lg font-neue text-sm font-medium"
              >
                Discuss The Project
              </AnimatedArrowButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Service categories ────────────────────────────────────────── */}
      {categories.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}

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
