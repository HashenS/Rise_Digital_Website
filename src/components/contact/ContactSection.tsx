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
    <section className="text-white mt-20 px-4 md:px-25">
      <div className="bg-[#111] rounded-[2vw] p-8 md:p-24 flex flex-col md:flex-row gap-20">
        
        {/* Left Side: Headline */}
        <div className="w-full md:w-1/3">
          <h2 className="text-5xl md:text-[4vw] font-neue font-medium leading-[1.1] tracking-tight sticky top-32">
            Ready to <span className="text-zinc-600">get started?</span>
          </h2>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-2/3">
          <form className="flex flex-col w-full font-neue">
            
            <span className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-8">
              Fill the form to request a quote:
            </span>

            {/* Inputs Grid */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <input 
                type="text" 
                placeholder="Your Name *" 
                className="w-full md:w-1/2 bg-transparent border border-white/10 rounded-lg p-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
                required
              />
              <input 
                type="email" 
                placeholder="Email *" 
                className="w-full md:w-1/2 bg-transparent border border-white/10 rounded-lg p-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
                required
              />
            </div>

            <input 
              type="tel" 
              placeholder="Phone (Optional)" 
              className="w-full bg-transparent border border-white/10 rounded-lg p-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors mb-6"
            />

            <textarea 
              placeholder="Tell us about your project *" 
              rows={5}
              className="w-full bg-transparent border border-white/10 rounded-lg p-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors mb-16 resize-none"
              required
            ></textarea>

            {/* Services Checkboxes */}
            <span className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-8">
              Services are interested in
            </span>

            <div className="flex flex-col md:flex-row gap-6 md:gap-20 mb-12">
              {/* Left Column */}
              <div className="flex flex-col gap-4">
                {servicesListLeft.map((service, idx) => (
                  <label key={`left-${idx}`} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded-full border border-zinc-600 group-hover:border-zinc-400 flex items-center justify-center transition-colors">
                      <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-zinc-400 transition-colors"></div>
                    </div>
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors text-sm">
                      {service}
                    </span>
                  </label>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4">
                {servicesListRight.map((service, idx) => (
                  <label key={`right-${idx}`} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded-full border border-zinc-600 group-hover:border-zinc-400 flex items-center justify-center transition-colors">
                      <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-zinc-400 transition-colors"></div>
                    </div>
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors text-sm">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button 
                type="submit" 
                className="bg-[#D9D9D9] text-black px-8 py-3 rounded-lg font-medium hover:bg-white transition-colors flex items-center gap-2 group"
              >
                Send Message
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </section>
  );
}
