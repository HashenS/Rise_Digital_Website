"use client";

import React, { useState } from "react";
import AnimatedArrowButton from "@/components/shared/animated-arrow-button";

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const servicesListLeft = [
    "Brand Strategy",
    "Brand Identity",
    "User Experience Design",
    "Visual Content",
  ];

  const servicesListRight = [
    "Web Development",
    "eCommerce",
    "Web & Mobile Applications",
    "Embedded & Hardware",
  ];

  return (
    <div className="w-full md:h-screen md:overflow-hidden bg-[#ebebeb] text-black transition-colors duration-300 font-neue flex flex-col justify-between">
      {/* Main Container */}
      <div className="pt-32 md:pt-[1vw] pb-12 md:pb-[1vw] px-5 md:px-[5vw] flex-1 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row gap-12 md:gap-[1vw] justify-between items-start">
          {/* Left Column: Heading and Social Links */}
          <div className="flex md:w-1/2 md:min-h-[42vw] flex-col justify-between">
            <div>
              <h3
                className="service-title mb-[1vw] font-serif text-6xl md:text-[6vw] text-[#c7c7c7] tracking-tight leading-[1] mst"
                style={
                  {
                    "--mst-leading-desktop": "-1.5vw",
                    "--mst-leading-mobile": "-2vw",
                    willChange: "auto",
                    opacity: 1,
                    pointerEvents: "auto",
                  } as React.CSSProperties
                }
              >
                <span className="mst__lines">
                  <span
                    className="mst__mask block"
                    style={{
                      marginBottom: "var(--mst-leading)",
                      paddingBottom: "0.12em",
                      overflow: "visible",
                    }}
                  >
                    <span
                      className="mst__inner block font-medium font-neue"
                      style={{
                        transition:
                          "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)",
                        transform: "translateY(0px)",
                        animationDelay: "0s",
                      }}
                    >
                      Get in Touch
                    </span>
                  </span>
                </span>
              </h3>
            </div>

            {/* Social Links */}
            <div className="flex w-full gap-2 mt-2 md:mt-0 md:gap-[0.5vw]">
              <a
                href="mailto:contact@lessestudio.com"
                className="rounded-lg md:rounded-[0.5vw] bg-black/5 px-3 py-1 text-sm md:px-[0.9vw] md:py-[0.3vw] md:text-[0.9vw] text-black/60 hover:bg-black/15 transition-colors duration-200"
                style={{
                  willChange: "auto",
                  opacity: 1,
                  pointerEvents: "auto",
                }}
              >
                <span className="hidden md:inline font-medium">
                  contact@lessestudio.com
                </span>
                <span className="md:hidden font-medium">Mail</span>
              </a>
              <a
                href="https://www.instagram.com/lesse.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg md:rounded-[0.5vw] bg-black/5 px-3 py-1 text-sm md:px-[0.9vw] md:py-[0.3vw] md:text-[0.9vw] text-black/60 hover:bg-black/15 transition-colors duration-200 font-medium"
                style={{
                  willChange: "auto",
                  opacity: 1,
                  pointerEvents: "auto",
                }}
              >
                Instagram
              </a>
              <a
                href="https://dribbble.com/lesse-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg md:rounded-[0.5vw] bg-black/5 px-3 py-1 text-sm md:px-[0.9vw] md:py-[0.3vw] md:text-[0.9vw] text-black/60 hover:bg-black/15 transition-colors duration-200 font-medium"
                style={{
                  willChange: "auto",
                  opacity: 1,
                  pointerEvents: "auto",
                }}
              >
                Dribble
              </a>
              <a
                href="https://www.linkedin.com/company/lesse-studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg md:rounded-[0.5vw] bg-black/5 px-3 py-1 text-sm md:px-[0.9vw] md:py-[0.3vw] md:text-[0.9vw] text-black/60 hover:bg-black/15 transition-colors duration-200 font-medium"
                style={{
                  willChange: "auto",
                  opacity: 1,
                  pointerEvents: "auto",
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full md:w-1/2 md:min-h-[42vw] flex flex-col pt-12 md:pt-[2vw]">
            <form className="relative flex flex-col justify-between h-full flex-1 gap-4 md:gap-[1vw]">
              <div className="flex flex-col gap-2 md:gap-[0.8vw]">
                <p className="text-xs md:text-[0.9vw] md:leading-[1.3vw] uppercase text-black tracking-wider mb-1 transition-colors ease-in-out">
                  Fill the form to request a quote:
                </p>

                {/* Name & Email Row */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-[1vw]">
                  <div className="relative h-14 md:h-[3.8vw] rounded-lg md:rounded-[0.5vw] border border-black/10 md:border-[0.1vw] w-full bg-black/5 hover:cursor-text outline-none transition-colors">
                    <input
                      type="text"
                      placeholder=" "
                      className="peer absolute z-0 w-full h-8 md:h-[1.8vw] bottom-0 md:bottom-[0.3vw] px-3 md:px-[0.75vw] bg-transparent border-none text-sm md:text-[1vw] text-black focus:outline-none focus:ring-0 focus:shadow-none"
                      required
                    />
                    <div className="absolute pointer-events-none z-10 text-black/35 peer-focus:text-black/30 peer-not-placeholder-shown:text-black/30 transition-all duration-300 font-medium peer-focus:font-normal peer-not-placeholder-shown:font-normal left-3 md:left-[0.75vw] top-1/2 -translate-y-1/2 text-sm md:text-[1vw] peer-focus:top-1.5 peer-focus:md:top-[0.4vw] peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:md:text-[0.7vw] peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:md:top-[0.4vw] peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:md:text-[0.7vw]">
                      Your Name *
                    </div>
                  </div>

                  <div className="relative h-14 md:h-[3.8vw] rounded-lg md:rounded-[0.5vw] border border-black/10 md:border-[0.1vw] w-full bg-black/5 hover:cursor-text outline-none transition-colors">
                    <input
                      type="email"
                      placeholder=" "
                      className="peer absolute z-0 w-full h-8 md:h-[1.8vw] bottom-0 md:bottom-[0.3vw] px-3 md:px-[0.75vw] bg-transparent border-none text-sm md:text-[1vw] text-black focus:outline-none focus:ring-0 focus:shadow-none"
                      required
                    />
                    <div className="absolute pointer-events-none z-10 text-black/35 peer-focus:text-black/30 peer-not-placeholder-shown:text-black/30 transition-all duration-300 font-medium peer-focus:font-normal peer-not-placeholder-shown:font-normal left-3 md:left-[0.75vw] top-1/2 -translate-y-1/2 text-sm md:text-[1vw] peer-focus:top-1.5 peer-focus:md:top-[0.4vw] peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:md:text-[0.7vw] peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:md:top-[0.4vw] peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:md:text-[0.7vw]">
                      Email *
                    </div>
                  </div>
                </div>

                {/* Phone Row */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-[1vw]">
                  <div className="relative h-14 md:h-[3.8vw] rounded-lg md:rounded-[0.5vw] border border-black/10 md:border-[0.1vw] w-full bg-black/5 hover:cursor-text outline-none transition-colors">
                    <input
                      type="tel"
                      placeholder=" "
                      className="peer absolute z-0 w-full h-8 md:h-[1.8vw] bottom-0 md:bottom-[0.3vw] px-3 md:px-[0.75vw] bg-transparent border-none text-sm md:text-[1vw] text-black focus:outline-none focus:ring-0 focus:shadow-none"
                    />
                    <div className="absolute pointer-events-none z-10 text-black/35 peer-focus:text-black/30 peer-not-placeholder-shown:text-black/30 transition-all duration-300 font-medium peer-focus:font-normal peer-not-placeholder-shown:font-normal left-3 md:left-[0.75vw] top-1/2 -translate-y-1/2 text-sm md:text-[1vw] peer-focus:top-1.5 peer-focus:md:top-[0.4vw] peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:md:text-[0.7vw] peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:md:top-[0.4vw] peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:md:text-[0.7vw]">
                      Phone (Optional)
                    </div>
                  </div>
                </div>

                {/* Project Textarea */}
                <div className="relative h-32 md:h-[12vw] rounded-lg md:rounded-[0.5vw] border border-black/10 md:border-[0.1vw] w-full bg-black/5 hover:cursor-text outline-none transition-colors mt-2 md:mt-0">
                  <textarea
                    placeholder=" "
                    className="peer absolute z-0 w-full h-[calc(100%-40px)] md:h-[calc(100%-2.5vw)] bottom-0 md:bottom-[0.3vw] px-3 md:px-[0.75vw] py-0 bg-transparent border-none text-sm md:text-[1vw] text-black focus:outline-none focus:ring-0 focus:shadow-none resize-none leading-snug md:leading-[1.2vw]"
                    required
                  ></textarea>
                  <div className="absolute pointer-events-none z-10 text-black/35 peer-focus:text-black/30 peer-not-placeholder-shown:text-black/30 transition-all duration-300 font-medium peer-focus:font-normal peer-not-placeholder-shown:font-normal left-3 md:left-[0.75vw] top-4 md:top-[1.2vw] text-sm md:text-[1vw] peer-focus:top-1.5 peer-focus:md:top-[0.4vw] peer-focus:text-[10px] peer-focus:md:text-[0.7vw] peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:md:top-[0.4vw] peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:md:text-[0.7vw]">
                    Tell us about your project *
                  </div>
                </div>

                {/* Services Selection Grid */}
                <div className="mt-6 md:mt-[1.5vw]">
                  <h3 className="text-xs md:text-[0.9vw] uppercase text-black tracking-wider mb-4 font-medium">
                    Services are interested in
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[1vw]">
                    <div className="flex flex-col gap-3 md:gap-[0.8vw]">
                      {servicesListLeft.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className="flex items-center gap-3 md:gap-[0.8vw] cursor-pointer group text-left"
                        >
                          <div
                            className={`w-5 h-5 md:w-[1vw] md:h-[1vw] rounded-full transition-all duration-300 shrink-0 border md:border-[0.1vw] flex items-center justify-center ${
                              selectedServices.includes(service)
                                ? "border-black bg-black"
                                : "border-black/20 bg-transparent hover:border-black/40"
                            }`}
                          >
                            {selectedServices.includes(service) && (
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                          </div>
                          <span
                            className={`text-sm md:text-[1vw] transition-opacity duration-300 ${
                              selectedServices.includes(service)
                                ? "opacity-100 font-medium"
                                : "opacity-50 hover:opacity-80"
                            }`}
                          >
                            {service}
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 md:gap-[0.8vw]">
                      {servicesListRight.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className="flex items-center gap-3 md:gap-[0.8vw] cursor-pointer group text-left"
                        >
                          <div
                            className={`w-5 h-5 md:w-[1vw] md:h-[1vw] rounded-full transition-all duration-300 shrink-0 border md:border-[0.1vw] flex items-center justify-center ${
                              selectedServices.includes(service)
                                ? "border-black bg-black"
                                : "border-black/20 bg-transparent hover:border-black/40"
                            }`}
                          >
                            {selectedServices.includes(service) && (
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                          </div>
                          <span
                            className={`text-sm md:text-[1vw] transition-opacity duration-300 ${
                              selectedServices.includes(service)
                                ? "opacity-100 font-medium"
                                : "opacity-50 hover:opacity-80"
                            }`}
                          >
                            {service}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <AnimatedArrowButton
                  type="submit"
                  className="bg-black text-white text-md md:text-[1vw] rounded-lg md:rounded-[0.5vw] px-8 md:px-[2vw] py-3 md:py-[0.8vw] mt-3"
                  arrowColor="#ffffff"
                  hoverBg="#27272a"
                  hoverScale={1.02}
                >
                  Send Message
                </AnimatedArrowButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
