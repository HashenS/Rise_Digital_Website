"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function StartProjectButton() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Listen to window scroll position
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > window.innerHeight * 0.8) {
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
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 50, x: "-50%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-[3vw] left-1/2 z-50 flex items-center gap-2 bg-[#7e7e7e]/90 hover:bg-zinc-800 dark:hover:bg-zinc-700 backdrop-blur px-6 py-3 rounded-full text-white text-sm font-neue font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-lg"
        >
          Start a project
          <ChevronRight className="w-4 h-4 text-white/80" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
