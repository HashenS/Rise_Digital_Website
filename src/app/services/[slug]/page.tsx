import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Rise Digital`,
    description: service.heroDescription,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
