import { SERVICES } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | The Pulp House Publishing`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
      <p className="text-xl text-muted-foreground">{service.description}</p>
      {/* Add more service details here */}
    </div>
  );
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}
