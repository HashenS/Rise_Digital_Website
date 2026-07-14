"use client";
import React from "react";
import Image from "next/image";
import ContactSection from "@/components/contact/ContactSection";

// Import all project images
import duoNutritionImg from "@/assets/project_duo_nutrition.png";
import veraImg from "@/assets/project_vera.png";
import frejaImg from "@/assets/project_freja_mockup.png";
import czekuImg from "@/assets/project_czeku.png";
import toucheImg from "@/assets/project_touche.png";
import everydayImg from "@/assets/project_everyday_mockup.webp";
import mollierImg from "@/assets/project_mollier.png";
import nymphImg from "@/assets/project_nymph.webp";
import nemoJujuImg from "@/assets/project_nemojuju.png";
import lorceImg from "@/assets/project_lorce.png";
import indioImg from "@/assets/project_indio_laptop.png";
import valveSynergyImg from "@/assets/project_valve_synergy.png";
import withinOurHomeImg from "@/assets/project_within_our_home.png";

const projects = [
  {
    id: 1,
    title: "Duo Nutrition",
    categories: ["Branding", "Website"],
    image: duoNutritionImg,
  },
  {
    id: 2,
    title: "Vera",
    categories: ["Branding", "Website"],
    image: veraImg,
  },
  {
    id: 3,
    title: "Freja",
    categories: ["Strategy", "Design"],
    image: frejaImg,
  },
  {
    id: 4,
    title: "Czeku",
    categories: ["Development"],
    image: czekuImg,
  },
  {
    id: 5,
    title: "Touché",
    categories: ["Design"],
    image: toucheImg,
  },
  {
    id: 6,
    title: "Everyday",
    categories: ["Strategy"],
    image: everydayImg,
  },
  {
    id: 7,
    title: "Mollier",
    categories: ["Design"],
    image: mollierImg,
  },
  {
    id: 8,
    title: "Nymph",
    categories: ["Design"],
    image: nymphImg,
  },
  {
    id: 9,
    title: "Nemo Juju",
    categories: ["Strategy", "Design"],
    image: nemoJujuImg,
  },
  {
    id: 10,
    title: "L'ORCÉ",
    categories: ["Branding", "Development"],
    image: lorceImg,
    isCarousel: true,
  },
  {
    id: 11,
    title: "Indio White",
    categories: ["Website"],
    image: indioImg,
  },
  {
    id: 12,
    title: "Valve Synergy",
    categories: ["Website"],
    image: valveSynergyImg,
  },
  {
    id: 13,
    title: "Within Our Home",
    categories: ["Branding", "Website"],
    image: withinOurHomeImg,
  },
];

export default function PortfolioPage() {
  return (
    <div className="w-full bg-theme-light text-black transition-colors duration-300">
      {/* Light Background Section: Heading & Projects Grid */}
      <div className="pt-28 md:pt-[10vw] pb-24 md:pb-[8vw] px-6 md:px-[5vw]">
        
        {/* Intro Header Section */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start mb-16 md:mb-[6vw]">
          <div className="col-span-12 md:col-span-8">
            <h1 className="text-3xl md:text-[3.6vw] font-medium font-neue leading-[1.1] tracking-tight text-black">
              More than one hundred projects delivered.{" "}
              <span className="text-[#a0a0a0] font-normal">
                A selection of the work we are most proud of, across strategy, design, and technology.
              </span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 mt-6 md:mt-2">
            <p className="text-sm md:text-[1.15vw] text-zinc-600 font-medium leading-relaxed font-neue">
              A curated selection of project outcomes across strategy, brand identity, and design development. Each work is chosen from projects that successfully captured the clients&apos; needs, goals, and target audience.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-[6vw] mt-12 md:mt-20">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col relative cursor-pointer">
              
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
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] md:text-xs font-mono tracking-widest text-white uppercase select-none">
                      L&apos;ORCÉ Fine Jewelry Collection
                    </span>
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-black/60 transition pointer-events-auto cursor-pointer">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Project Metadata */}
              <div className="flex justify-between items-start mt-[1.2vw] px-1 font-neue">
                <h3 className="text-lg md:text-[1.5vw] font-medium text-black transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex flex-col items-end text-right">
                  {project.categories.map((cat, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] md:text-[0.75vw] text-zinc-500 uppercase tracking-widest font-medium leading-tight"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Dark Background Section: Call to action & Contact Form */}
      <div className="bg-black text-white pt-24 md:pt-[8vw] pb-[2vw] transition-colors duration-300">
        
        {/* Pitch / Headline Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 mb-8 md:mb-12">
          <h2 className="text-3xl md:text-[3.8vw] md:leading-[1.1] font-medium font-neue max-w-[80vw] md:max-w-[50vw] mb-4 md:mb-6 tracking-tight text-white">
            Crafting Thoughtful Brands and Digital Products
          </h2>
          <p className="text-zinc-500 text-sm md:text-[1vw] max-w-[90vw] md:max-w-[32vw] leading-relaxed font-neue">
            Rise is a design and technology studio. We create digital products that are intuitive, beautiful, and built to perform.
          </p>
        </div>

        {/* Reusing existing Contact Form Component */}
        <ContactSection />

      </div>
    </div>
  );
}
