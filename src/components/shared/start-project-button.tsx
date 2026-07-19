"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function StartProjectButton() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (pathname === "/contact") return null;

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const isPastHero = latest > window.innerHeight * 0.8;
      
      let isOverlappingFooter = false;
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        if (footerTop < window.innerHeight) {
          isOverlappingFooter = true;
        }
      }

      if (isPastHero && !isOverlappingFooter) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, x: "-50%" }}
          exit={{ opacity: 0, x: "-50%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="fixed bottom-[1vw] left-1/2 z-50 flex h-12 md:h-[3.35vw] cursor-pointer items-center gap-[0.5vw] rounded-lg md:rounded-[1vw] pl-5 pr-5 md:pr-[1.5vw] md:pl-[2vw] text-md md:text-[1vw] text-white backdrop-blur-[3vw] bg-[#24242480] shadow-lg font-neue font-medium"
        >
          Start a project
          <motion.svg 
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="ml-[0.5vw] inline-block w-6 md:w-[1.5vw] text-white" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-18.375, 6.125)">
              <rect x="51" y="14.25" width="10.25" height="10.25" rx="5.125" fill="currentColor" />
              <rect x="63.25" y="26.5" width="10.25" height="10.25" rx="5.125" fill="currentColor" />
              <rect x="75.5" y="38.75" width="10.25" height="10.25" rx="5.125" fill="currentColor" />
              <rect x="63.25" y="51" width="10.25" height="10.25" rx="5.125" fill="currentColor" />
              <rect x="51" y="63.25" width="10.25" height="10.25" rx="5.125" fill="currentColor" />
            </g>
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence> 
  );
}
