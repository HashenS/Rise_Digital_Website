import React from "react";

export default function ContactSection() {
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
    <section className="my-[10vw] w-full px-[5vw] font-neue">
      <div className="flex flex-col md:flex-row rounded-[1vw] bg-[#101010] p-[4vw] md:p-[2vw] gap-10 md:gap-0">
        
        {/* Left Side: Headline */}
        <div className="w-full md:w-1/3">
          <h2 className="text-5xl md:text-[3vw] w-full md:w-2/3 font-neue font-medium leading-tight md:leading-[0.9] tracking-tighter text-white">
            Ready to <span className="opacity-20">get</span> <br className="hidden md:block" />
            <span className="opacity-20">started?</span>
          </h2>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-2/3">
          <form className="relative flex flex-col justify-between gap-[1vw]">
            <div className="flex flex-col gap-2 md:gap-[1vw] flex-1">
              
              <p className="text-xs md:text-[0.9vw] md:leading-[1.3vw] uppercase text-white/50 mb-4 md:mb-0">
                Fill the form to request a quote:
              </p>

              {/* Name & Email Row */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-[1vw]">
                <div className="relative h-14 md:h-[3.5vw] rounded-lg md:rounded-[0.5vw] border border-white/10 md:border-[0.1vw] w-full bg-[#0D0D0D] transition-colors">
                  <div className="absolute pointer-events-none z-10 text-white/50 top-2 md:top-[0.8vw] left-3 md:left-[0.75vw] text-[10px] md:text-[0.8vw]">
                    Your Name *
                  </div>
                  <input 
                    type="text" 
                    className="absolute z-0 w-full h-8 md:h-[1.75vw] bottom-0 md:bottom-[0.3vw] px-3 md:px-[0.75vw] bg-transparent border-none text-sm md:text-[1vw] text-white focus:outline-none" 
                    required 
                  />
                </div>
                
                <div className="relative h-14 md:h-[3.5vw] rounded-lg md:rounded-[0.5vw] border border-white/10 md:border-[0.1vw] w-full bg-[#0D0D0D] transition-colors">
                  <div className="absolute pointer-events-none z-10 text-white/50 top-2 md:top-[0.8vw] left-3 md:left-[0.75vw] text-[10px] md:text-[0.8vw]">
                    Email *
                  </div>
                  <input 
                    type="email" 
                    className="absolute z-0 w-full h-8 md:h-[1.75vw] bottom-0 md:bottom-[0.3vw] px-3 md:px-[0.75vw] bg-transparent border-none text-sm md:text-[1vw] text-white focus:outline-none" 
                    required 
                  />
                </div>
              </div>

              {/* Phone Row */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-[1vw]">
                <div className="relative h-14 md:h-[3.5vw] rounded-lg md:rounded-[0.5vw] border border-white/10 md:border-[0.1vw] w-full bg-[#0D0D0D] transition-colors">
                  <div className="absolute pointer-events-none z-10 text-white/50 top-2 md:top-[0.8vw] left-3 md:left-[0.75vw] text-[10px] md:text-[0.8vw]">
                    Phone (Optional)
                  </div>
                  <input 
                    type="tel" 
                    className="absolute z-0 w-full h-8 md:h-[1.75vw] bottom-0 md:bottom-[0.3vw] px-3 md:px-[0.75vw] bg-transparent border-none text-sm md:text-[1vw] text-white focus:outline-none" 
                  />
                </div>
              </div>

              {/* Project Textarea */}
              <div className="relative h-32 md:h-[15vw] rounded-lg md:rounded-[0.5vw] border border-white/10 md:border-[0.1vw] w-full bg-[#0D0D0D] transition-colors mt-2 md:mt-0">
                <div className="absolute pointer-events-none z-10 text-white/50 top-3 md:top-[1vw] left-3 md:left-[0.75vw] text-[10px] md:text-[0.8vw]">
                  Tell us about your project *
                </div>
                <textarea 
                  className="absolute z-0 w-full h-[calc(100%-40px)] md:h-[calc(100%-2.5vw)] bottom-0 md:bottom-[0.3vw] px-3 md:px-[0.75vw] py-0 bg-transparent border-none text-sm md:text-[1vw] text-white focus:outline-none resize-none leading-snug md:leading-[1.2vw]" 
                  required
                ></textarea>
              </div>

              {/* Services Section */}
              <div className="my-5 md:my-[1vw] grid grid-cols-1 md:grid-cols-2 gap-y-3">
                <div className="md:col-span-2 mb-2 md:mb-[1vw]">
                  <h3 className="text-xs md:text-[0.9vw] uppercase text-white/50">Services are interested in</h3>
                </div>
                
                {/* Left Column */}
                <div className="flex flex-col gap-3 md:gap-[0.5vw]">
                  {servicesListLeft.map((service, idx) => (
                    <button type="button" key={idx} className="flex items-center gap-3 md:gap-[0.8vw] cursor-pointer group text-left">
                      <div className="w-5 h-5 md:w-[1vw] md:h-[1vw] rounded-full transition-colors duration-300 shrink-0 border border-white/20 md:border-[0.1vw] bg-transparent group-hover:border-white/50"></div>
                      <span className="text-sm md:text-[1vw] text-white opacity-50 group-hover:opacity-80 transition-opacity">
                        {service}
                      </span>
                    </button>
                  ))}
                </div>
                
                {/* Right Column */}
                <div className="flex flex-col gap-3 md:gap-[0.5vw]">
                  {servicesListRight.map((service, idx) => (
                    <button type="button" key={idx} className="flex items-center gap-3 md:gap-[0.8vw] cursor-pointer group text-left">
                      <div className="w-5 h-5 md:w-[1vw] md:h-[1vw] rounded-full transition-colors duration-300 shrink-0 border border-white/20 md:border-[0.1vw] bg-transparent group-hover:border-white/50"></div>
                      <span className="text-sm md:text-[1vw] text-white opacity-50 group-hover:opacity-80 transition-opacity">
                        {service}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center gap-4 mt-4 md:mt-[1vw]">
                <button 
                  type="submit" 
                  className="group cursor-pointer flex w-fit items-center transition-all duration-200 hover:scale-105 bg-white/70 hover:bg-white text-black text-sm md:text-[1vw] rounded-lg md:rounded-[0.5vw] px-6 md:px-[2vw] py-3 md:py-[1vw] font-medium"
                >
                  Send Message
                  <svg 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 100 100" 
                    className="ml-2 md:ml-[1vw] inline-block group-hover:translate-x-[0.3vw] transition-transform duration-300" 
                    width="1.5em" 
                    height="1.5em" 
                    style={{ "--dot-color": "#000000", display: "block" } as React.CSSProperties}
                  >
                    <g transform="translate(-18.375, 6.125)">
                      <rect x="51" y="14.25" width="10.25" height="10.25" rx="5.125" style={{ fill: "var(--dot-color)" }}></rect>
                      <rect x="63.25" y="26.5" width="10.25" height="10.25" rx="5.125" style={{ fill: "var(--dot-color)" }}></rect>
                      <rect x="75.5" y="38.75" width="10.25" height="10.25" rx="5.125" style={{ fill: "var(--dot-color)" }}></rect>
                      <rect x="63.25" y="51" width="10.25" height="10.25" rx="5.125" style={{ fill: "var(--dot-color)" }}></rect>
                      <rect x="51" y="63.25" width="10.25" height="10.25" rx="5.125" style={{ fill: "var(--dot-color)" }}></rect>
                    </g>
                  </svg>
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
