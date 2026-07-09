export default function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-10 px-4 md:px-25 mt-20 rounded-t-[2vw]">
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center gap-12">
        {/* Big Heading */}
        <h1 className="text-6xl md:text-[8vw] font-neue font-medium leading-[0.9] tracking-tight">
          Let's create <br />
          <span className="text-zinc-600">something together.</span>
        </h1>
        
        {/* Email CTA */}
        <a 
          href="mailto:hello@risedigital.com" 
          className="text-2xl md:text-[2vw] font-neue border-b border-white/30 pb-2 hover:border-white transition-colors duration-300 mt-8"
        >
          hello@risedigital.com
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="mt-32 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 font-neue text-sm text-zinc-500 gap-6 md:gap-0">
        <div>
          © 2026 Rise Digital. All rights reserved.
        </div>
        
        <div className="flex gap-8 uppercase tracking-widest text-xs font-medium">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}