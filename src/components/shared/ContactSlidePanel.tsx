"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ─── Sub-components ───────────────────────────────────────────────────────────

function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div
      className="relative h-12 md:h-[3.5vw] rounded-lg md:rounded-[0.5vw] border md:border-[0.1vw] w-full hover:cursor-text outline-none transition-colors duration-1000 bg-black border-[#9F9F9F]/30 font-neue"
    >
      <div className="absolute pointer-events-none z-[2] text-white/50 text-xs md:text-[0.7vw] left-2.5 md:left-[0.75vw] top-2 md:top-[0.5vw]">
        <span>{label}</span>
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="absolute z-[1] w-full h-8 md:h-[1.75vw] bottom-0 md:bottom-[0.3vw] px-2.5 md:px-[0.75vw] py-0 bg-transparent border-none text-sm md:text-[1vw] focus:outline-none focus:ring-0 focus:shadow-none text-white"
      />
    </div>
  );
}

function FloatingTextarea({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="relative flex-1 min-h-[7.5rem] md:min-h-[3.5vw] rounded-lg md:rounded-[0.5vw] border md:border-[0.1vw] w-full hover:cursor-text outline-none transition-colors duration-1000 bg-black border-[#9F9F9F]/30">
      <div className="absolute pointer-events-none z-[2] text-white/50 text-xs md:text-[0.7vw] left-2.5 md:left-[0.75vw] top-2 md:top-[0.5vw] font-neue">
        <span>{label}</span>
      </div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="absolute z-[1] w-full h-[calc(100%-20px)] md:h-[calc(100%-1.75vw)] top-5 md:top-[1.75vw] px-2.5 md:px-[0.75vw] py-0 bg-transparent border-none text-sm md:text-[1vw] focus:outline-none focus:ring-0 focus:shadow-none resize-none leading-snug md:leading-[1.2vw] text-white font-neue"
      />
    </div>
  );
}

function ServiceButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 md:gap-[0.8vw] cursor-pointer group text-left"
    >
      <div
        className={`w-6 h-6 md:w-[1vw] md:h-[1vw] rounded-full transition-colors duration-300 shrink-0 border md:border-[0.1vw] ${
          active
            ? "border-white bg-white"
            : "border-[#9F9F9F]/50 bg-transparent"
        }`}
      />
      <span
        className={`text-sm md:text-[1vw] text-white transition-opacity duration-200 ${
          active ? "opacity-100" : "opacity-50 hover:opacity-80"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const SERVICES_LEFT = [
  "Brand Strategy",
  "Brand Identity",
  "User Experience Design",
  "Visual Content",
];
const SERVICES_RIGHT = [
  "Web Development",
  "eCommerce",
  "Web & Mobile Applications",
  "Embedded & Hardware",
];

interface ContactSlidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactSlidePanel({
  isOpen,
  onClose,
}: ContactSlidePanelProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleService = (s: string) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Slide panel */}
          <motion.div
            key="panel"
            initial={{ x: "110%" }}
            animate={{ x: 0 }}
            exit={{ x: "110%" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-4 right-4 bottom-4 z-[70] w-full md:w-[45vw] bg-black rounded-[1vw] overflow-y-auto shadow-2xl"
          >
            <div className="flex h-full w-full flex-col gap-[1vw] p-5 md:p-[2vw] text-white">

              {/* ── Header ── */}
              <div className="flex w-full justify-between mb-3 md:mb-[1vw]">
                <h2 className="text-3xl md:text-[2.5vw] leading-8 md:leading-[2.5vw] font-neue font-medium">
                  Ready to{" "}
                  <span className="opacity-40">
                    get <br /> started?
                  </span>
                </h2>

                {/* Dot-grid × close button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="group h-fit cursor-pointer"
                >
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-10 md:w-[2vw] text-white block opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <g transform="translate(18.375, -18.375)">
                      {[
                        [2, 38.75],
                        [51, 38.75],
                        [14.25, 51],
                        [38.75, 51],
                        [26.5, 63.25],
                        [14.25, 75.5],
                        [38.75, 75.5],
                        [2, 87.75],
                        [51, 87.75],
                      ].map(([x, y], i) => (
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
                    </g>
                  </svg>
                </button>
              </div>

              {/* ── Form ── */}
              <form className="relative flex flex-col justify-between gap-[1vw] flex-1">
                <div className="flex flex-col gap-2 md:gap-[1vw] flex-1">

                  {/* Name + Email */}
                  <div className="flex flex-col mt-5 md:mt-0 md:flex-row gap-2 md:gap-[1vw]">
                    <FloatingInput
                      label="Your Name *"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    <FloatingInput
                      label="Email *"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-[1vw]">
                    <FloatingInput
                      label="Phone (Optional)"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message */}
                  <FloatingTextarea
                    label="Tell us about your project *"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />

                  {/* Services */}
                  <div className="my-5 gap-y-3 md:my-[1vw] grid grid-cols-1 md:grid-cols-2">
                    <div className="md:col-span-2 mb-[1vw]">
                      <h3 className="text-sm md:text-[1vw] uppercase text-white font-neue font-medium">
                        Services are interested in
                      </h3>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-[0.5vw] font-neue font-medium">
                      {SERVICES_LEFT.map((s) => (
                        <ServiceButton
                          key={s}
                          label={s}
                          active={selected.includes(s)}
                          onClick={() => toggleService(s)}
                        />
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 md:gap-[0.5vw] font-neue font-medium">
                      {SERVICES_RIGHT.map((s) => (
                        <ServiceButton
                          key={s}
                          label={s}
                          active={selected.includes(s)}
                          onClick={() => toggleService(s)}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Submit ── */}
                <div>
                  <button
                    type="submit"
                    className="group cursor-pointer flex w-fit items-center transition-all duration-200 hover:scale-[1.02] bg-white/70 text-black hover:bg-white text-base md:text-[1vw] font-neue font-medium rounded-lg md:rounded-[0.5vw] px-8 md:px-[2vw] py-4 md:py-[1vw] mt-5"
                  >
                    Send Message
                    {/* Dot-grid → arrow */}
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      className="ml-[1vw] inline-block group-hover:translate-x-[0.3vw] transition-transform duration-300"
                      width="1.5em"
                      height="1.5em"
                    >
                      <g transform="translate(-18.375, 6.125)">
                        {[
                          [51, 14.25],
                          [63.25, 26.5],
                          [75.5, 38.75],
                          [63.25, 51],
                          [51, 63.25],
                        ].map(([x, y], i) => (
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
                      </g>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
