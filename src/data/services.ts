import brandStrategy from "@/assets/services-img/brand_strategy.webp";
import brandIdentity from "@/assets/services-img/brand_identity.webp";
import uiDesign from "@/assets/services-img/ui_design.webp";
import visualContent from "@/assets/services-img/visual_content.webp";
import webDev from "@/assets/services-img/web_dev.webp";
import eCommerce from "@/assets/services-img/e-commerce.webp";
import webMobileApp from "@/assets/services-img/web_mobile_application.webp";
import embeddedHardware from "@/assets/services-img/embedded-_hardware.webp";
import type { StaticImageData } from "next/image";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  count: string;
  img: StaticImageData;
  heroDescription: string;
  aboutHeading: {
    lines: Array<{ text: string; dim: boolean }>;
  };
  aboutBody: string;
  subServices: string[];
  process: ProcessStep[];
}

const SERVICES: ServiceData[] = [
  {
    id: "01",
    slug: "brand-strategy",
    title: "Brand Strategy",
    count: "/6 services",
    img: brandStrategy,
    heroDescription:
      "Develop a comprehensive strategy to position your brand in the market and connect with your audience.",
    aboutHeading: {
      lines: [
        { text: "We help businesses define", dim: false },
        { text: "who they are, where they", dim: false },
        { text: "stand, and where they're", dim: true },
        { text: "going.", dim: true },
      ],
    },
    aboutBody:
      "Brand strategy is the invisible architecture behind every successful brand. It defines why your company exists beyond making money, who your audience really is, how you're different from every competitor in your space, and what you stand for consistently — across every touchpoint, every market, every year.",
    subServices: [
      "Brand Positioning",
      "Competitor & Market Research",
      "Brand Architecture",
      "Brand Audit",
      "Brand Naming & Tagline",
      "Brand Messaging & Tone of Voice",
    ],
    process: [
      { number: "01", title: "Discovery", description: "We dig deep into your business landscape, goals, and competitive environment to understand the full picture." },
      { number: "02", title: "Research", description: "Comprehensive market and audience analysis to uncover hidden opportunities and whitespace." },
      { number: "03", title: "Strategy", description: "Define your brand positioning, architecture, and messaging framework with clarity." },
      { number: "04", title: "Messaging", description: "Craft your tone of voice, narrative, and brand story that resonates with your audience." },
      { number: "05", title: "Validation", description: "Test and refine the strategy with stakeholders and target audience feedback." },
      { number: "06", title: "Delivery", description: "Present a complete brand strategy guide ready for rollout across every channel." },
    ],
  },
  {
    id: "02",
    slug: "brand-identity",
    title: "Brand Identity",
    count: "/5 services",
    img: brandIdentity,
    heroDescription:
      "Create a distinctive visual identity that captures your brand's essence and resonates with your audience.",
    aboutHeading: {
      lines: [
        { text: "We craft visual identities", dim: false },
        { text: "that speak before", dim: false },
        { text: "words do.", dim: true },
      ],
    },
    aboutBody:
      "A brand identity is more than a logo — it's the sum of every visual decision you make. Color, typography, imagery, and layout all work in concert to communicate who you are at a glance. We build identity systems that are both timeless and flexible, designed to scale across every touchpoint.",
    subServices: [
      "Logo Design",
      "Visual Language",
      "Brand Guidelines",
      "Typography & Color",
      "Marketing Materials",
    ],
    process: [
      { number: "01", title: "Immersion", description: "We absorb your brand values, audience insights, and competitive landscape before a single mark is made." },
      { number: "02", title: "Concept", description: "Multiple creative directions explored through mood boards, sketches, and initial concepts." },
      { number: "03", title: "Design", description: "Develop the chosen direction into a full identity system — logo, color, type, and more." },
      { number: "04", title: "Refinement", description: "Iterative refinement based on your feedback until every detail feels right." },
      { number: "05", title: "Guidelines", description: "Comprehensive brand guidelines delivered, ensuring consistency across every application." },
    ],
  },
  {
    id: "03",
    slug: "user-experience-design",
    title: "User Experience Design",
    count: "/6 services",
    img: uiDesign,
    heroDescription:
      "Design intuitive, delightful experiences that guide users effortlessly toward their goals.",
    aboutHeading: {
      lines: [
        { text: "We design experiences", dim: false },
        { text: "that feel effortless", dim: false },
        { text: "and drive real", dim: true },
        { text: "results.", dim: true },
      ],
    },
    aboutBody:
      "Great UX is invisible. It's the absence of friction — the moment a user completes a task and doesn't know how easy it was. We research, prototype, and test until every interaction feels natural, every flow makes sense, and every screen earns its place.",
    subServices: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Information Architecture",
      "Interaction Design",
    ],
    process: [
      { number: "01", title: "Research", description: "User interviews, surveys, and competitive analysis to understand real needs and pain points." },
      { number: "02", title: "Information Architecture", description: "Structure content and flows so users always know where they are and where to go next." },
      { number: "03", title: "Wireframing", description: "Low-fidelity layouts that map out every screen and interaction before visual design begins." },
      { number: "04", title: "Prototyping", description: "High-fidelity, interactive prototypes that simulate the real product experience." },
      { number: "05", title: "Testing", description: "Real user testing to validate decisions and surface issues before development begins." },
      { number: "06", title: "Handoff", description: "Developer-ready design files with full specifications, assets, and interaction documentation." },
    ],
  },
  {
    id: "04",
    slug: "visual-content",
    title: "Visual Content",
    count: "/3 services",
    img: visualContent,
    heroDescription:
      "Create compelling visual stories through photography, video, and motion that captivate your audience.",
    aboutHeading: {
      lines: [
        { text: "We craft visual stories", dim: false },
        { text: "that stop the scroll", dim: false },
        { text: "and inspire", dim: true },
        { text: "action.", dim: true },
      ],
    },
    aboutBody:
      "In a world saturated with content, quality stands apart. Our visual content team creates photography, video, and motion graphics that don't just look beautiful — they carry your brand story and move your audience toward action.",
    subServices: ["Photography", "Videography", "3D Motion Graphics"],
    process: [
      { number: "01", title: "Brief", description: "Understand your campaign goals, audience, and brand guidelines to align creative direction." },
      { number: "02", title: "Pre-Production", description: "Moodboarding, casting, location scouting, and shot-listing before the first frame is captured." },
      { number: "03", title: "Production", description: "Directed shoots with professional equipment and an eye for brand-consistent imagery." },
      { number: "04", title: "Post-Production", description: "Color grading, editing, retouching, and motion work to bring the final assets to life." },
      { number: "05", title: "Delivery", description: "All assets delivered in every format you need, optimized for every platform." },
    ],
  },
  {
    id: "05",
    slug: "web-development",
    title: "Web Development",
    count: "/7 services",
    img: webDev,
    heroDescription:
      "Build fast, scalable, and visually stunning web experiences that perform as beautifully as they look.",
    aboutHeading: {
      lines: [
        { text: "We build digital products", dim: false },
        { text: "that are as fast as", dim: false },
        { text: "they are", dim: true },
        { text: "beautiful.", dim: true },
      ],
    },
    aboutBody:
      "We build websites and web applications that go beyond aesthetics. Performance, accessibility, and scalability are built in from the ground up. Every project is engineered to be fast by default, maintainable by design, and delightful to use.",
    subServices: [
      "Frontend Development",
      "Backend Architecture",
      "CMS Integration",
      "Performance Optimization",
      "E-Commerce Solutions",
      "Web Animation",
      "Maintenance & Support",
    ],
    process: [
      { number: "01", title: "Discovery", description: "Technical requirements gathering, stack decisions, and project scoping." },
      { number: "02", title: "Architecture", description: "System design, database schema, API planning, and infrastructure setup." },
      { number: "03", title: "Development", description: "Iterative development sprints with continuous integration and regular demos." },
      { number: "04", title: "Quality Assurance", description: "Cross-browser testing, performance auditing, and accessibility validation." },
      { number: "05", title: "Launch", description: "Deployment, monitoring setup, and performance baselining on go-live." },
      { number: "06", title: "Support", description: "Ongoing maintenance, updates, and performance optimization post-launch." },
    ],
  },
  {
    id: "06",
    slug: "ecommerce-development",
    title: "E-commerce Development",
    count: "/4 services",
    img: eCommerce,
    heroDescription:
      "Build high-converting online stores that turn visitors into loyal customers.",
    aboutHeading: {
      lines: [
        { text: "We build stores that", dim: false },
        { text: "convert browsers", dim: false },
        { text: "into", dim: true },
        { text: "buyers.", dim: true },
      ],
    },
    aboutBody:
      "A great e-commerce experience removes every obstacle between intent and purchase. We build stores that are fast, beautiful, and engineered to convert — from the first product impression to the post-purchase experience that turns a buyer into a repeat customer.",
    subServices: [
      "Shopify Development",
      "Custom Storefronts",
      "Payment Gateways",
      "Inventory Management",
      "Conversion Optimization",
      "Subscription Models",
      "Platform Migration",
    ],
    process: [
      { number: "01", title: "Strategy", description: "Define conversion goals, user journeys, and the technical platform that best serves your needs." },
      { number: "02", title: "Design", description: "Product-first design focused on trust, clarity, and seamless checkout flows." },
      { number: "03", title: "Development", description: "Platform setup, custom theme development, and third-party integrations." },
      { number: "04", title: "Optimization", description: "A/B testing, page speed optimization, and conversion rate improvements." },
      { number: "05", title: "Launch", description: "Staged rollout with monitoring, inventory sync checks, and payment gateway validation." },
    ],
  },
  {
    id: "07",
    slug: "web-mobile-application",
    title: "Web & Mobile Application",
    count: "/6 services",
    img: webMobileApp,
    heroDescription:
      "Engineer cross-platform applications that users love to open every single day.",
    aboutHeading: {
      lines: [
        { text: "We engineer apps that", dim: false },
        { text: "users love to open", dim: false },
        { text: "every", dim: true },
        { text: "day.", dim: true },
      ],
    },
    aboutBody:
      "The best apps are the ones you don't think about — they just work, beautifully. We design and engineer web and mobile applications that balance technical excellence with a user experience so polished it becomes a competitive advantage.",
    subServices: [
      "iOS Development",
      "Android Development",
      "React Native",
      "Progressive Web Apps",
      "App Store Optimization",
      "Post-Launch Support",
    ],
    process: [
      { number: "01", title: "Discovery", description: "Define core features, user personas, and the technical requirements of your application." },
      { number: "02", title: "UX Design", description: "Information architecture, wireframes, and prototypes validated with real users." },
      { number: "03", title: "Development", description: "Agile sprints with continuous delivery, code reviews, and progress demos." },
      { number: "04", title: "Testing", description: "Device testing, performance profiling, and edge-case coverage across platforms." },
      { number: "05", title: "Launch", description: "App Store submission, CI/CD pipeline setup, and monitoring integration." },
      { number: "06", title: "Growth", description: "Post-launch analytics review, performance tuning, and feature iteration." },
    ],
  },
  {
    id: "08",
    slug: "embedded-hardware",
    title: "Embedded & Hardware",
    count: "/3 services",
    img: embeddedHardware,
    heroDescription:
      "Bridge the gap between software intelligence and the physical world with precision hardware solutions.",
    aboutHeading: {
      lines: [
        { text: "We bridge software", dim: false },
        { text: "intelligence and the", dim: false },
        { text: "physical", dim: true },
        { text: "world.", dim: true },
      ],
    },
    aboutBody:
      "Hardware is hard — and that's exactly why we love it. We design and develop embedded systems, IoT solutions, and hardware prototypes that bring digital intelligence into the physical world. From circuit design to firmware, we handle the full stack.",
    subServices: [
      "IoT Solutions",
      "Firmware Development",
      "Hardware Prototyping",
      "Circuit Design",
      "Testing & Validation",
    ],
    process: [
      { number: "01", title: "Requirements", description: "Define electrical, mechanical, and firmware requirements alongside performance targets." },
      { number: "02", title: "Architecture", description: "Component selection, schematic design, and system architecture planning." },
      { number: "03", title: "Prototype", description: "Build and test initial hardware prototypes, iterate on design issues quickly." },
      { number: "04", title: "Firmware", description: "Develop and optimize embedded firmware with reliability and power efficiency in mind." },
      { number: "05", title: "Validation", description: "Rigorous testing across edge conditions, environmental factors, and failure modes." },
    ],
  },
];

export function getAllServices(): ServiceData[] {
  return SERVICES;
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
