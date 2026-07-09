export default function LatestNews() {
  return (
    <>
      <section className="md:px-25 px-4 py-20 bg-black">
        <div className="mb-12">
          <span className="font-neue text-section-title uppercase tracking-widest text-base font-medium">
            Latest News
          </span>
        </div>

        {/* Container needs a fixed height because children are absolute on desktop */}
        <div className="relative flex flex-col items-center w-full min-h-screen md:min-h-0 md:h-[40vw] gap-8 md:gap-0">
          {/* CARD 1 (LEFT) - EXACT CLASSES */}
          <div className="group relative flex h-125 w-full flex-col gap-[1vw] rounded-[1vw] bg-[#5D5D5D]/20 p-3 transition-transform duration-500 hover:translate-y-[0.5vw] md:absolute md:top-0 md:left-0 md:h-[30vw] md:w-[48vw] md:flex-row md:rounded-[1vw] md:p-[1vw] cursor-pointer">
            <div className="w-full md:w-1/2 p-4 md:p-[1vw] flex flex-col justify-start">
              <h2 className="text-3xl md:text-[2vw] font-neue font-medium text-white leading-tight tracking-tight">
                Building Brands from within
              </h2>
              <span className="text-zinc-500 font-neue text-sm md:text-[0.9vw] font-medium mt-4 md:mt-[1.5vw]">
                April 6
              </span>
            </div>
            {/* Right Image */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden rounded-[1vw]">
              <img
                src="https://images.unsplash.com/photo-1782880958487-621cfcf03ef2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="News Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CARD 2 (RIGHT) - EXACT CLASSES, JUST OFFSET */}
          <div className="group relative flex h-125 w-full flex-col gap-[1vw] rounded-[1vw] bg-[#5D5D5D]/30 backdrop-blur-2xl p-3 transition-transform duration-500 hover:translate-y-[-0.5vw] md:absolute md:top-[8vw] md:right-0 md:h-[30vw] md:w-[48vw] md:flex-row md:rounded-[1vw] md:p-[1vw] cursor-pointer z-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5">
            {/* Left Text Area */}
            <div className="w-full md:w-1/2 p-4 md:p-[1vw] flex flex-col justify-start">
              <h2 className="text-3xl md:text-[2vw] font-neue font-medium text-white leading-tight tracking-tight">
                How to Choose a Brand Name That Lasts
              </h2>
              <span className="text-zinc-500 font-neue text-sm md:text-[0.9vw] font-medium mt-4 md:mt-[1.5vw]">
                April 6
              </span>
            </div>
            {/* Right Image */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden rounded-[1vw]">
              <img
                src="https://images.unsplash.com/photo-1782880958487-621cfcf03ef2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="News Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-24 flex justify-center">
          <button className="bg-white opacity-80 hover:opacity-100 text-black px-8 py-3 font-neue rounded-lg font-medium hover:scale-103 transition-all duration-300 cursor-pointer text-lg">
            View all news
          </button>
        </div>
      </section>
    </>
  );
}
