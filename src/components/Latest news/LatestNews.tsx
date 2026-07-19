export default function LatestNews() {
  return (
    <>
      <section className="latest-news-section md:px-25 px-4 py-20 bg-theme-light transition-colors duration-[1200ms] ease-out">
        <div className="mb-12">
          <span className="font-neue text-section-title uppercase tracking-widest text-base font-medium">
            Latest News
          </span>
        </div>

        {/* Container needs a fixed height because children are absolute on desktop */}
        <div className="relative flex flex-col items-center w-full min-h-screen md:min-h-0 md:h-[40vw] gap-8 md:gap-0">
          {/* CARD 1 (LEFT) */}
          <div className="latest-news-card-1 group relative flex h-125 w-full flex-col gap-[1vw] rounded-[1vw] p-3 transition-[background-color,border-color] duration-[1200ms] ease-out hover:translate-y-[0.5vw] hover:duration-500 md:absolute md:top-0 md:left-0 md:h-[30vw] md:w-[48vw] md:flex-row md:rounded-[1vw] md:p-[1vw] cursor-pointer">
            <div className="w-full md:w-1/2 p-4 md:p-[1vw] flex flex-col justify-start">
              <h2 className="latest-news-title text-3xl md:text-[2vw] font-neue font-medium text-black leading-tight tracking-tight transition-colors duration-[1200ms] ease-out">
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

          {/* CARD 2 (RIGHT) */}
          <div className="latest-news-card-2 group relative flex h-125 w-full flex-col gap-[1vw] rounded-[1vw] p-3 transition-[background-color,border-color] duration-[1200ms] ease-out hover:translate-y-[-0.5vw] hover:duration-500 md:absolute md:top-[8vw] md:right-0 md:h-[30vw] md:w-[48vw] md:flex-row md:rounded-[1vw] md:p-[1vw] cursor-pointer z-10">
            {/* Left Text Area */}
            <div className="w-full md:w-1/2 p-4 md:p-[1vw] flex flex-col justify-start">
              <h2 className="latest-news-title text-3xl md:text-[2vw] font-neue font-medium text-black leading-tight tracking-tight transition-colors duration-[1200ms] ease-out">
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
          <button className="news-btn bg-black text-white px-8 py-3 font-neue rounded-lg font-medium hover:bg-zinc-800 hover:scale-103 transition-all duration-300 cursor-pointer text-lg">
            View all news
          </button>
        </div>
      </section>
    </>
  );
}
