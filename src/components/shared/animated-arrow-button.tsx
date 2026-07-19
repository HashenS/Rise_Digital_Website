"use client";

import { useState } from "react";
import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;
const DURATION = 0.5;

// The dot-grid arrow SVG used throughout the site
function ArrowDots({ color = "currentColor" }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", width: "1.5em", height: "1.5em" }}
    >
      <g transform="translate(-18.375, 6.125)">
        <rect x="51" y="14.25" width="10.25" height="10.25" rx="5.125" fill={color} />
        <rect x="63.25" y="26.5" width="10.25" height="10.25" rx="5.125" fill={color} />
        <rect x="75.5" y="38.75" width="10.25" height="10.25" rx="5.125" fill={color} />
        <rect x="63.25" y="51" width="10.25" height="10.25" rx="5.125" fill={color} />
        <rect x="51" y="63.25" width="10.25" height="10.25" rx="5.125" fill={color} />
      </g>
    </svg>
  );
}

interface AnimatedArrowButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  arrowColor?: string;
  hoverBg?: string;
  // Extra framer-motion whileHover overrides
  hoverScale?: number;
}

export default function AnimatedArrowButton({
  children,
  className = "",
  type = "button",
  onClick,
  arrowColor = "currentColor",
  hoverBg,
  hoverScale = 1.03,
}: AnimatedArrowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps = hoverBg
    ? { scale: hoverScale, backgroundColor: hoverBg }
    : { scale: hoverScale };

  return (
    <motion.button
      type={type}
      className={`flex items-center gap-3 cursor-pointer font-medium ${className}`}
      whileHover={hoverProps}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: DURATION, ease: EASE }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
      <motion.span
        className="inline-flex items-center"
        animate={{ x: isHovered ? 5 : 0 }}
        transition={{ duration: DURATION, ease: EASE }}
        style={{ marginLeft: "0.4em" }}
      >
        <ArrowDots color={arrowColor} />
      </motion.span>
    </motion.button>
  );
}
