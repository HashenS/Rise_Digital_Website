import Image from "next/image";
import brandStrategy from "@/assets/services-img/brand_strategy.webp";
import brandIdentity from "@/assets/services-img/brand_identity.webp";
import uiDesign from "@/assets/services-img/ui_design.webp";
import visualContent from "@/assets/services-img/visual_content.webp";
import webDev from "@/assets/services-img/web_dev.webp";
import eCommerce from "@/assets/services-img/e-commerce.webp";
import webMobileApp from "@/assets/services-img/web_mobile_application.webp";
import embeddedHardware from "@/assets/services-img/embedded-_hardware.webp";

const services = [
  {
    id: "01",
    title: "Brand Strategy",
    count: "/6 services",
    img: brandStrategy,
  },
  {
    id: "02",
    title: "Brand Identity",
    count: "/5 services",
    img: brandIdentity,
  },
  {
    id: "03",
    title: "User Experiance Design",
    count: "/6 services",
    img: uiDesign,
  },
  {
    id: "04",
    title: "Visual Content",
    count: "/3 services",
    img: visualContent,
  },
  { id: "05", title: "Web Development", count: "/7 services", img: webDev },
  {
    id: "06",
    title: "E-commerce Development",
    count: "/4 services",
    img: eCommerce,
  },
  {
    id: "07",
    title: "Web & Mobile Application",
    count: "/6 services",
    img: webMobileApp,
  },
  {
    id: "08",
    title: "Embedded & Hardware",
    count: "/3 services",
    img: embeddedHardware,
  },
];
const getServiceIcon = (id: string) => {
  const r = 1;
  switch (id) {
    case "01":
      return (
        <svg className="w-[1.2vw] h-[1.2vw] text-zinc-300" viewBox="0 0 24 24">
          {[
            [12, 4],
            [12, 20],
            [4, 12],
            [20, 12],
            [8, 8],
            [16, 8],
            [8, 16],
            [16, 16],
            [12, 8],
            [12, 16],
            [8, 12],
            [16, 12],
            [12, 12],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
          ))}
        </svg>
      );
    case "02":
      return (
        <svg className="w-[1.2vw] h-[1.2vw] text-zinc-300" viewBox="0 0 24 24">
          {[
            [6, 6],
            [9, 6],
            [12, 6],
            [15, 6],
            [18, 6],
            [6, 9],
            [18, 9],
            [6, 12],
            [9, 12],
            [12, 12],
            [15, 12],
            [18, 12],
            [4, 15],
            [7, 15],
            [10, 15],
            [14, 15],
            [17, 15],
            [20, 15],
            [12, 17],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
          ))}
        </svg>
      );
    case "03":
      return (
        <svg className="w-[1.2vw] h-[1.2vw] text-zinc-300" viewBox="0 0 24 24">
          {[
            [6, 6],
            [9, 6],
            [6, 9],
            [15, 6],
            [18, 6],
            [18, 9],
            [6, 15],
            [6, 18],
            [9, 18],
            [18, 15],
            [18, 18],
            [15, 18],
            [12, 12],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
          ))}
        </svg>
      );
    case "04":
      return (
        <svg className="w-[1.2vw] h-[1.2vw] text-zinc-300" viewBox="0 0 24 24">
          {[
            [5, 5],
            [5, 8],
            [8, 8],
            [11, 8],
            [14, 8],
            [17, 8],
            [8, 11],
            [11, 11],
            [14, 11],
            [17, 11],
            [8, 14],
            [11, 14],
            [14, 14],
            [9, 17],
            [15, 17],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
          ))}
        </svg>
      );
    case "05":
      return (
        <svg className="w-[1.2vw] h-[1.2vw] text-zinc-300" viewBox="0 0 24 24">
          {[
            [6, 6],
            [9, 6],
            [12, 6],
            [15, 6],
            [18, 6],
            [6, 9],
            [12, 9],
            [18, 9],
            [6, 12],
            [9, 12],
            [12, 12],
            [15, 12],
            [18, 12],
            [12, 15],
            [12, 18],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
          ))}
        </svg>
      );
    case "06":
      return (
        <svg className="w-[1.2vw] h-[1.2vw] text-zinc-300" viewBox="0 0 24 24">
          {[
            [9, 5],
            [12, 5],
            [15, 5],
            [9, 8],
            [15, 8],
            [9, 11],
            [15, 11],
            [9, 14],
            [15, 14],
            [9, 17],
            [12, 17],
            [15, 17],
            [12, 19],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
          ))}
        </svg>
      );
    case "07":
      return (
        <svg className="w-[1.2vw] h-[1.2vw] text-zinc-300" viewBox="0 0 24 24">
          {[
            [6, 6],
            [9, 6],
            [12, 6],
            [15, 6],
            [18, 6],
            [6, 9],
            [9, 9],
            [18, 9],
            [6, 12],
            [18, 12],
            [6, 15],
            [12, 15],
            [18, 15],
            [6, 18],
            [9, 18],
            [12, 18],
            [15, 18],
            [18, 18],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
          ))}
        </svg>
      );
    case "08":
      return (
        <svg className="w-[1.2vw] h-[1.2vw] text-zinc-300" viewBox="0 0 24 24">
          {[
            [8, 8],
            [12, 8],
            [16, 8],
            [8, 12],
            [12, 12],
            [16, 12],
            [8, 16],
            [12, 16],
            [16, 16],
            [12, 4],
            [12, 20],
            [4, 12],
            [20, 12],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
          ))}
        </svg>
      );
    default:
      return null;
  }
};

export default function ServicesSection() {
  return (
    <div className="py-20 px-25 space-y-3 bg-theme-light">
      <h1 className="text-base uppercase text-section-title font-medium font-neue tracking-widest">
        Our Services
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative h-[25vw] rounded-xl overflow-hidden cursor-pointer"
          >
            {/* Image Background */}
            <Image
              src={service.img}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/70 z-10" />

            {/* Content Container */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
              {/* Top: Title & Count */}
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-medium font-neue text-white leading-tight max-w-[70%]">
                  {service.title}
                </h3>
                <span className="text-xs text-zinc-300 font-mono mt-1">
                  {service.count}
                </span>
              </div>

              {/* Bottom: Icon */}
              <div className="mt-auto">{getServiceIcon(service.id)}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-10">
        <button className="bg-black text-white px-8 py-3.5 rounded-lg border border-zinc-800/80 text-sm font-neue font-medium hover:bg-zinc-900 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer">
          Explore All Services
        </button>
      </div>
    </div>
  );
}
