"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/contact/ContactSection";

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

  const filteredInsights =
    activeFilter === "All"
      ? insightsData
      : insightsData.filter((item) => item.category === activeFilter);

  return (
    <div className="w-full bg-[#ebebeb] text-black transition-colors duration-300">
      {/* Top Header & Tagline Section */}
      <div className="pt-30 md:pt-[11vw] pb-12 px-5 md:px-[5vw] ">
        <div className="flex flex-col gap-10 md:flex-row font-neue">
          {/* Left Column: Heading */}
          <div className="md:w-1/2">
            <h1 
              className="mst text-3xl md:text-[3vw] font-neue tracking-tight text-black"
              style={{ "--mst-leading-desktop": "-1vw", "--mst-leading-mobile": "-2vw" } as React.CSSProperties}
            >
              <span className="mst__lines block">
                {/* Line 1 */}
                <span className="mst__mask block font-medium" style={{ marginBottom: "var(--mst-leading)", paddingBottom: "0.12em", overflow: "visible" }}>
                  <span className="mst__inner block" style={{ transition: "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)", transform: "translateY(0px)", animationDelay: "0s" }}>
                    <span>A space for ideas, perspective, </span>
                  </span>
                </span>
                {/* Line 2 */}
                <span className="mst__mask block font-medium" style={{ marginBottom: "var(--mst-leading)", paddingBottom: "0.12em", overflow: "visible" }}>
                  <span className="mst__inner block" style={{ transition: "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)", transform: "translateY(0px)", animationDelay: "0.15s" }}>
                    <span>and inspiration on </span><span className="opacity-20 font-medium">brand, design, </span>
                  </span>
                </span>
                {/* Line 3 */}
                <span className="mst__mask block font-medium" style={{ marginBottom: "var(--mst-leading)", paddingBottom: "0.12em", overflow: "visible" }}>
                  <span className="mst__inner block" style={{ transition: "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)", transform: "translateY(0px)", animationDelay: "0.3s" }}>
                    <span className="opacity-20 font-medium">and technology.</span>
                  </span>
                </span>
              </span>
            </h1>
          </div>

          {/* Right Column: Description */}
          <div className="flex md:w-1/2 justify-end">
            <p 
              className="mst text-sm md:text-[1vw] w-full md:w-1/2 opacity-40 leading-relaxed font-neue font-medium md:translate-y-[0.5vw]"
              style={{ "--mst-leading-desktop": "0em", "--mst-leading-mobile": "0em" } as React.CSSProperties}
            >
              <span className="mst__lines block">
                {/* Line 1 */}
                <span className="mst__mask block" style={{ marginBottom: "var(--mst-leading)", paddingBottom: "0.12em", overflow: "visible" }}>
                  <span className="mst__inner block" style={{ transition: "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)", transform: "translateY(0px)", animationDelay: "0.1s" }}>
                    <span>Insights is where we publish perspective on </span>
                  </span>
                </span>
                {/* Line 2 */}
                <span className="mst__mask block" style={{ marginBottom: "var(--mst-leading)", paddingBottom: "0.12em", overflow: "visible" }}>
                  <span className="mst__inner block" style={{ transition: "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)", transform: "translateY(0px)", animationDelay: "0.25s" }}>
                    <span>the subjects that shape our work: strategy, </span>
                  </span>
                </span>
                {/* Line 3 */}
                <span className="mst__mask block" style={{ marginBottom: "var(--mst-leading)", paddingBottom: "0.12em", overflow: "visible" }}>
                  <span className="mst__inner block" style={{ transition: "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)", transform: "translateY(0px)", animationDelay: "0.4s" }}>
                    <span>identity, design systems, digital products, </span>
                  </span>
                </span>
                {/* Line 4 */}
                <span className="mst__mask block" style={{ marginBottom: "var(--mst-leading)", paddingBottom: "0.12em", overflow: "visible" }}>
                  <span className="mst__inner block" style={{ transition: "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)", transform: "translateY(0px)", animationDelay: "0.55s" }}>
                    <span>and the craft of building things that last. </span>
                  </span>
                </span>
                {/* Line 5 */}
                <span className="mst__mask block" style={{ marginBottom: "var(--mst-leading)", paddingBottom: "0.12em", overflow: "visible" }}>
                  <span className="mst__inner block" style={{ transition: "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)", transform: "translateY(0px)", animationDelay: "0.7s" }}>
                    <span>Written by strategists, designers, and </span>
                  </span>
                </span>
                {/* Line 6 */}
                <span className="mst__mask block" style={{ marginBottom: "var(--mst-leading)", paddingBottom: "0.12em", overflow: "visible" }}>
                  <span className="mst__inner block" style={{ transition: "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)", transform: "translateY(0px)", animationDelay: "0.85s" }}>
                    <span>developers from real project experience.</span>
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Grid Content Section */}
      <section className="flex min-h-[50vw] flex-col gap-[1vw] px-5 mt-15 md:px-[5vw] md:pt-[5vw] pb-24 md:pb-[8vw]">
        {/* Category Filters */}
        <div className="flex gap-2 md:gap-[0.5vw] font-neue">
          <button
            onClick={() => setActiveFilter("All")}
            className={`cursor-pointer rounded-lg md:rounded-[0.5vw] px-4 py-1 md:px-[0.75vw] md:py-[0.35vw] text-md md:text-[1vw] transition-colors ${
              activeFilter === "All"
                ? "bg-black text-white"
                : "bg-black/10 text-black hover:bg-black/20"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("Design")}
            className={`cursor-pointer rounded-lg md:rounded-[0.5vw] px-4 py-1 md:px-[0.75vw] md:py-[0.35vw] text-md md:text-[1vw] transition-colors font-medium ${
              activeFilter === "Design"
                ? "bg-black text-white"
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
              className="group block aspect-[9/10] flex flex-col"
            >
              <div className="relative w-full flex-1 rounded-lg md:rounded-[0.5vw] overflow-hidden bg-[#E7E7E7]">
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
                <h5 className="font-neue font-medium leading-5 text-lg px-1 md:px-0 md:text-[1.3vw] text-black  ">
                  {insight.title}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </section>

      

      {/* Dark Background Section: Call to action & Contact Form */}
      <div className="bg-black text-white pt-24 md:pt-[8vw] pb-[2vw] transition-colors duration-300">
        {/* Middle Tagline Section */}
      <div className="flex flex-col items-center h-120 md:h-[40vw] justify-center mt-12 md:mt-0">
        <section className="flex w-full px-3 md:px-0 md:w-4/5 h-full flex-col items-center justify-center gap-5 md:gap-[2vw]">
          <h3 
            className="mst text-3xl md:text-[3vw] text-center md:w-3/4 font-neue text-white"
            style={{ "--mst-leading-desktop": "-0.7vw", "--mst-leading-mobile": "-2vw" } as React.CSSProperties}
          >
            <span className="mst__lines block">
              <span className="mst__mask block" style={{ marginBottom: "var(--mst-leading)", paddingBottom: "0.12em", overflow: "visible" }}>
                <span className="mst__inner block" style={{ transition: "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)", transform: "translateY(0px)", animationDelay: "0s" }}>
                  <span>Crafting Thoughtful Brands and Digital </span>
                </span>
              </span>
              <span className="mst__mask block" style={{ marginBottom: "var(--mst-leading)", paddingBottom: "0.12em", overflow: "visible" }}>
                <span className="mst__inner block" style={{ transition: "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)", transform: "translateY(0px)", animationDelay: "0.15s" }}>
                  <span>Products</span>
                </span>
              </span>
            </span>
          </h3>
          <div className="px-10 md:w-2/3">
            <p 
              className="mst opacity-50 text-md md:text-[1vw] text-center leading-relaxed font-neue font-medium text-white"
              style={{ "--mst-leading-desktop": "-0.5vw", "--mst-leading-mobile": "-1vw" } as React.CSSProperties}
            >
              <span className="mst__lines block">
                <span className="mst__mask block" style={{ marginBottom: "var(--mst-leading)", paddingBottom: "0.12em", overflow: "visible" }}>
                  <span className="mst__inner block" style={{ transition: "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)", transform: "translateY(0px)", animationDelay: "0.2s" }}>
                    <span>Lesse is a design and technology studio. We create digital products and identities defined by strategy, </span>
                  </span>
                </span>
                <span className="mst__mask block" style={{ marginBottom: "var(--mst-leading)", paddingBottom: "0.12em", overflow: "visible" }}>
                  <span className="mst__inner block" style={{ transition: "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)", transform: "translateY(0px)", animationDelay: "0.35s" }}>
                    <span>precision, and vision.</span>
                  </span>
                </span>
              </span>
            </p>
          </div>
        </section>
      </div>
        <ContactSection />
      </div>
    </div>
  );
}
