"use client";
import React, { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const FooterList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="flex flex-col">
    <h3 className="text-zinc-500 font-medium text-[15px] md:text-[1vw] mb-4 md:mb-[1.5vw] flex items-center gap-1 group cursor-pointer w-fit">
      {title}{" "}
      <span className="text-[12px] md:text-[0.8vw] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
        ↗
      </span>
    </h3>
    <ul className="flex flex-col gap-3 md:gap-[0.8vw]">
      {items.map((item, idx) => (
        <li key={idx}>
          <a
            href="#"
            className="text-zinc-400 hover:text-white transition-colors duration-300 text-[14px] md:text-[0.9vw]"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const targetMousePos = useRef({ x: 0, y: 0 });
  const currentMousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      targetMousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      // Lerp (linear interpolation) for smooth following effect
      const easing = 0.08;
      currentMousePos.current.x += (targetMousePos.current.x - currentMousePos.current.x) * easing;
      currentMousePos.current.y += (targetMousePos.current.y - currentMousePos.current.y) * easing;
      
      if (textRef.current) {
        const mask = `radial-gradient(15% 50% at ${currentMousePos.current.x}px ${currentMousePos.current.y}px, black, transparent)`;
        textRef.current.style.maskImage = mask;
        textRef.current.style.webkitMaskImage = mask;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <footer className="bg-theme-dark pt-20 md:pt-[8vw] px-6 md:px-[4vw] font-inter relative overflow-hidden flex flex-col">
      {/* Visual & Marketing Row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 mb-20 md:mb-[6vw] relative z-10">
        <div className="col-span-1">
          <h2 className="text-white font-medium uppercase text-[13px] md:text-[0.85vw] tracking-wider">
            Visual and Marketing
          </h2>
        </div>
        <FooterList
          title="Brand Strategy"
          items={[
            "Brand Positioning",
            "Competitor & Market Research",
            "Brand Architecture",
            "Brand Audit",
            "Brand Naming & Tagline",
            "Brand Messaging & Tone of Voice",
          ]}
        />
        <FooterList
          title="Brand Identity"
          items={[
            "Brand Identity Design",
            "Logo Design",
            "Visual Language & Design System",
            "Rebranding",
            "Packaging Design",
          ]}
        />
        <FooterList
          title="User Experience Design"
          items={[
            "UX / UI Design",
            "Web Design",
            "Mobile App Design",
            "UX Research",
            "Wireframing & Prototyping",
            "Design System & UI Kit",
          ]}
        />
        <FooterList
          title="Visual Content"
          items={[
            "Product Photography",
            "Lifestyle & Campaign Shoot",
            "E-commerce Shoot",
          ]}
        />
      </div>

      {/* Technology Row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
        <div className="col-span-1 flex flex-col justify-between">
          <h2 className="text-white font-medium uppercase text-[13px] md:text-[0.85vw] tracking-wider mb-10 md:mb-0">
            Technology
          </h2>
          {/* Shopify Badge */}
          <div className="mt-auto hidden md:block">
            <div className="inline-flex items-center gap-2 bg-[#121212] px-4 py-2.5 rounded-lg border border-zinc-900/50 w-fit">
              <svg viewBox="0 0 30 35" className="w-5 h-5 text-white">
                <path
                  fill="currentColor"
                  d="M22.9,9.9c-0.1-2.9-2.4-5.3-5.3-5.5c-0.2,0-0.5,0-0.7,0C16,4,15.1,3.4,14.1,2.8C12.3,1.8,10.2,1,8.1,0.5 C7.9,0.4,7.7,0.6,7.7,0.8c0,0.1,0,0.2,0,0.3c0.1,1.1,0.2,2.3,0.5,3.4C6,5.3,4,6.4,2.3,7.9C2.1,8,2,8.2,2,8.4c0,0.4,0,0.8,0.1,1.3 c0.5,4.7,2.2,16.5,2.6,18.8c0.2,1.3,1,2.3,2.2,2.8c4.3,1.8,9,3,13.8,3.5c0.6,0.1,1.1,0,1.5-0.3c0.7-0.4,1.1-1.1,1.2-1.9 c0.7-5.5,1.7-13.8,2.1-18C25.6,12.7,24.6,11.1,22.9,9.9z M16.7,11c0-0.1,0-0.2,0-0.2c-0.1-1.3-1.1-2.4-2.5-2.6c-0.1,0-0.3,0-0.4,0 c-0.6,0.1-1.1,0.4-1.4,0.9c-0.4,0.6-0.5,1.4-0.4,2.1C12,12.2,12,13.2,12,14.2c0,0.4,0,0.8,0,1.2c-0.1,1.3,0.4,2.5,1.3,3.3 c0.9,0.8,2.1,1.1,3.3,0.8C17,19.3,17,19.3,17,19.3c0-0.5,0-1,0-1.6c0-1.8,0-3.5,0-5.3c0-0.5,0-0.9,0-1.4C16.8,11,16.7,11,16.7,11z"
                />
              </svg>
              <div className="flex font-sans">
                <span className="text-white font-bold text-[15px] tracking-tight">
                  shopify
                </span>
                <span className="text-zinc-400 text-[15px] font-light ml-1">
                  experts
                </span>
              </div>
            </div>
          </div>
        </div>
        <FooterList
          title="Web Development"
          items={[
            "Website Development",
            "Web Applications",
            "SaaS Platforms",
            "Content Platforms",
            "API Integrations",
            "Maintenance & Support",
            "Scaling & Performance",
          ]}
        />
        <FooterList
          title="eCommerce"
          items={[
            "Shopify Stores",
            "Custom eCommerce",
            "Platform Migration & Scaling",
            "Conversion Rate Optimization",
            "B2B & Enterprise Portals",
            "Multi-Vendor Marketplaces",
            "Membership Platforms",
          ]}
        />
        <FooterList
          title="Web & Mobile Applications"
          items={[
            "iOS & Android Apps",
            "Internal Business Tools",
            "API Development",
            "Booking & Scheduling",
            "LMS & Education Platforms",
            "Payments Systems",
          ]}
        />
        <FooterList
          title="Embedded & Hardware"
          items={[
            "Consumer Electronics UI",
            "Touch & Display Systems",
            "Custom Interaction Layers",
            "Smart Firmware & Sensors",
            "Industrial HMI & Control",
          ]}
        />
      </div>

      {/* Giant Background Text & Social Links */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="mt-10 md:mt-[4vw] flex flex-col w-full select-none relative group"
      >
        {/* Base Dark Text */}
        <h1 className="text-[35vw] leading-[0.8] font-neue font-medium tracking-tighter text-theme-text-dark text-center w-full mb-4 md:mb-[2vw]">
          RISE
        </h1>

        {/* Illuminated Overlay Text */}
        <h1 
          ref={textRef}
          className="absolute top-0 left-0 text-[35vw] leading-[0.8] font-neue font-medium tracking-tighter text-zinc-700 text-center w-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          RISE
        </h1>
        
        {/* Bottom Links */}
        <div className="flex justify-between items-center w-full pb-8 md:pb-[2vw] text-[10px] md:text-[0.7vw] tracking-widest text-zinc-500 uppercase font-medium relative z-20">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          <a href="#" className="hover:text-white transition-colors">Mail</a>
        </div>
      </div>
    </footer>
  );
}