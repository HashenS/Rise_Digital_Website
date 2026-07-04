import Image from "next/image";
import frejaImg from "@/assets/project_freja_mockup.png";
import everydayImg from "@/assets/project_everyday_mockup.webp";
import nymphImg from "@/assets/project_nymph.webp";

export default function LatestWork() {
  const projects = [
    {
      id: 1,
      title: "Duo Nutrition",
      description:
        "DUO NUTRITION is a brand that redefines pet food as a celebration of the equal, unspoken partnership between humans and their dogs. Our challenge was to translate philosophy into a logo that captures the essence of togetherness. The solution lies in the submark: a simple yet powerful oval, split evenly down the middle. This design embodies the concept of a duet: two distinct halves, balanced and complementary, coming together to form a unified whole.",
      location: "Russia",
      industry: "Pets",
      image: frejaImg,
    },
    {
      id: 2,
      title: "Everyday",
      description:
        "Everyday Sea Moss is a premium wellness brand offering natural sea moss, rich in over 92 minerals and vitamins. The product is designed to effortlessly support energy, immunity, and glowing skin every day. Our task was to create a brand identity, packaging design, web design, and photoshoot that bring a fresh perspective to sea moss, a bright yet minimalist visual language that repositions the product as modern, appealing, and seamlessly fitting into everyday life.",
      location: "AUSTRALIA",
      industry: "Suppliments",
      image: everydayImg,
    },
    {
      id: 3,
      title: "Nymph",
      description:
        "Nymph Haircare is a haircare brand that celebrates femininity, free spirit, and our deep connection with nature. Its philosophy is inspired by ancient Greek mythology: nymphs, divine spirits of nature, symbolize grace, beauty, and strength. We created the brand identity and packaging design, capturing its mythological inspiration and the harmony between natural beauty and modern aesthetics.",
      location: "Thailand",
      industry: "Cosmetics",
      image: nymphImg,
    },
  ];
  return (
    <div className="py-10 px-25 space-y-3 bg-black">
      <h1 className="text-base uppercase font-medium font-neue text-section-title">
        Latest Work
      </h1>
      <div className="flex flex-col gap-12 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-[1.5vw] flex flex-col md:flex-row p-4 min-h-[60vh] gap-8"
            style={{
              background:
                "linear-gradient(96deg, rgb(15, 15, 15) 2.75%, rgb(9, 9, 9) 98.47%)",
            }}
          >
            {/* Left Side: Image Area */}
            <div className="w-full md:w-1/2 rounded-xl bg-zinc-600 relative min-h-[40vh] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full md:w-1/2 md:py-6 py-4 pr-4 flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <h2 className="text-white font-neue font-medium text-4xl md:text-6xl">
                  {project.title}
                </h2>
                <p className="text-[#707070] font-medium font-neue text-xl leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-12 mt-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[#707070] font-medium text-base font-neue">
                    Location
                  </span>
                  <span className="text-white text-base font-medium uppercase font-neue">
                    {project.location}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#707070] font-medium text-base font-neue">
                    Industry
                  </span>
                  <span className="text-white text-base font-medium uppercase font-neue">
                    {project.industry}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-12">
        <button className="text-black bg-zinc-300 font-neue px-6 py-4  text-xl font-medium rounded-xl cursor-pointer hover:bg-white transition-all duration-300 hover:scale-105">
          View full portfolio
        </button>
      </div>
    </div>
  );
}
