export default function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      quote:
        '"Every element of the design reflects a genuine love for animals and a high level of professionalism. Everything has been thought through down to the smallest detail and contributes to creating a strong emotional response from the consumer. We\'re truly happy we had the opportunity to work with you on this project and hope to collaborate again in the future on new projects."',
      name: "DUO NUTRITION",
      title: "Team, DUO Nutrtion",
    },
    {
      id: 2,
      quote:
        "\"We're glad we found you and waited for your availability, i'm sure we'll work together again soon. The process was smooth and you understood what we wanted to achieve, so we're really happy.\"",
      name: "MIGUEL",
      title: "Founder, Lunna",
    },
  ];
  return (
    <section className="testimonials-section py-20 px-4 md:px-25 bg-theme-light transition-colors duration-[1200ms] ease-out">
      <div className="testimonials-inner bg-[#0a0a0a] rounded-[1vw] p-8 md:p-12 flex flex-col md:flex-row gap-12 h-auto md:h-[85vh] overflow-hidden text-white transition-all duration-[1200ms] ease-out">
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <div>
              {/* Top: Badge */}
              <span className="inline-block px-4 bg-black py-2 rounded-md font-neue uppercase text-zinc-400 text-xs md:text-lg font-medium">
                Testimonials
              </span>
            </div>
            {/* Middle: Large Heading */}
            <div className="mt-12 md:mt-0">
              <h2 className="text-5xl md:text-[3.2vw] leading-[0.9] font-neue font-medium tracking-tight">
                <span className="testimonials-title text-black block transition-colors duration-[1200ms] ease-out">What our clients say</span>
                <span className="opacity-20 block">about working with</span>
                <span className="opacity-20 block">us.</span>
              </h2>
            </div>
          </div>
          {/* Bottom: Button */}
          <div className="mt-12 md:mt-0">
            <button className="flex items-center gap-3  bg-zinc-300 text-black py-4 px-7 rounded-md font-neue text-xl font-medium hover:bg-white transition-all hover:scale-105 duration-300 cursor-pointer">
              Let's work together{" "}
              <svg
                className="ml-[0.5vw] inline-block w-6 md:w-[1.5vw] group-hover:translate-x-[0.3vw] transition-transform duration-300 text-black"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(-18.375, 6.125)">
                  <rect
                    x="51"
                    y="14.25"
                    width="10.25"
                    height="10.25"
                    rx="5.125"
                    fill="currentColor"
                  />
                  <rect
                    x="63.25"
                    y="26.5"
                    width="10.25"
                    height="10.25"
                    rx="5.125"
                    fill="currentColor"
                  />
                  <rect
                    x="75.5"
                    y="38.75"
                    width="10.25"
                    height="10.25"
                    rx="5.125"
                    fill="currentColor"
                  />
                  <rect
                    x="63.25"
                    y="51"
                    width="10.25"
                    height="10.25"
                    rx="5.125"
                    fill="currentColor"
                  />
                  <rect
                    x="51"
                    y="63.25"
                    width="10.25"
                    height="10.25"
                    rx="5.125"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        {/* Right Side: Scrolling Reviews Container */}
        <div className="w-full md:w-1/2 overflow-hidden relative h-full mask-[linear-gradient(to_bottom,transparent,black_5%,black_90%,transparent)]">
          {/* We will animate this wrapper in the next step! */}
          <div className="flex flex-col animate-marquee-vertical">
            {/* FIRST SET OF CARDS */}
            <div className="flex flex-col gap-6 pb-6">
              {[...reviews, ...reviews].map((review, index) => (
                <div
                  key={`first-${index}`}
                  className="testimonial-card p-6 md:p-8 rounded-[1vw] flex flex-col gap-10 transition-all duration-[1200ms] ease-out"
                >
                  <p className="text-zinc-500 text-base md:text-[0.9vw] font-neue leading-relaxed text-center transition-colors duration-[1200ms] ease-out">
                    {review.quote}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 shrink-0"></div>
                    <div className="flex flex-col text-left">
                      <span className="testimonial-name text-black font-medium font-neue uppercase tracking-wide transition-colors duration-[1200ms] ease-out">
                        {review.name}
                      </span>
                      <span className="text-zinc-500 text-sm font-neue">
                        {review.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SECOND SET OF CARDS (DUPLICATE FOR SEAMLESS LOOP) */}
            <div className="flex flex-col gap-6 pb-6">
              {[...reviews, ...reviews].map((review, index) => (
                <div
                  key={`second-${index}`}
                  className="testimonial-card p-6 md:p-8 rounded-[1vw] flex flex-col gap-10 transition-all duration-[1200ms] ease-out"
                >
                  <p className="text-zinc-500 text-base md:text-[0.9vw] font-neue leading-relaxed text-center transition-colors duration-[1200ms] ease-out">
                    {review.quote}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 shrink-0"></div>
                    <div className="flex flex-col text-left">
                      <span className="testimonial-name text-black font-medium font-neue uppercase tracking-wide transition-colors duration-[1200ms] ease-out">
                        {review.name}
                      </span>
                      <span className="text-zinc-500 text-sm font-neue">
                        {review.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
