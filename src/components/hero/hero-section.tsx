import Image from "next/image";
import Rise_logo from "@/assets/Rise Digital(without text).svg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden p-6 md:p-8 flex flex-col justify-between">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="relative w-75 h-75 md:w-125 md:h-125 opacity-90">
          <Image
            src={Rise_logo}
            alt="Rise 3D Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="relative z-20 mt-auto pb-12 pl-20">
        <div className="max-w-3xl">
          <p className="text-base uppercase tracking-widest text-zinc-500 font-semibold mb-4">
            Full-Service Agency
          </p>
          <h1 className="text-3xl md:text-5xl font-bold font-elms tracking-tight text-white mb-8">
            Rise is a design and technology studio.{" "}
            <span className="text-zinc-500">
              We deliver holistic brand identity & digital experiences.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
