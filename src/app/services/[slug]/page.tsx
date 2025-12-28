import { SERVICES } from "@/lib/data";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/sections/cta-banner";

// This is required for static site generation with dynamic routes
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24">
      <div className="container py-12">
        <h1 className="mb-6 text-4xl font-bold">{service.title}</h1>
        <p className="mb-12 text-xl text-muted-foreground">{service.description}</p>

        <div className="prose max-w-none">
          <p className="text-lg">{service.content}</p>
          {/* In a real migration, we would parse the PHP content and put it here */}
          <p className="mt-8">
            Detailed content for {service.title} will be migrated from the legacy site here.
            This placeholder ensures the route structure exists and is navigatable.
          </p>
        </div>
      </div>

       <CtaBanner
        title={`Ready to start your ${service.title} journey?`}
        description="Contact us today for a free consultation."
        image="/images/home/cta2.webp"
        variant="blue"
      />
    </main>
  );
}
