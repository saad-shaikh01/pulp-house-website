import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

const DISPLAY_SERVICES = [
  {
    ...SERVICES.find(s => s.slug === "ebook-publishing"),
    subtitle: "Blank Pages into a Polished Manuscript",
    image: "/images/home/book-production.webp",
    color: "bg-purple-600",
    wide: false
  },
  {
    ...SERVICES.find(s => s.slug === "book-cover-design"),
    subtitle: "Beautiful Books That Captivate",
    image: "/images/home/book-design.webp",
    color: "bg-pink-600",
    wide: false
  },
  {
    ...SERVICES.find(s => s.slug === "book-printing"),
    subtitle: "Your Book Available Everywhere Readers Are",
    image: "/images/home/digital-physical.webp",
    color: "bg-blue-600",
    wide: false
  },
  {
    ...SERVICES.find(s => s.slug === "book-marketing"),
    subtitle: "Get Noticed and Build Your Author Brand",
    image: "/images/home/marketing.webp",
    color: "bg-indigo-900",
    wide: false
  },
  {
    ...SERVICES.find(s => s.slug === "ebook-publishing"), // Fallback as global distribution
    title: "Global Distribution",
    subtitle: "Reach Readers Worldwide",
    description: "We facilitate book distribution for self-published authors through Amazon, Apple Books, Kobo, IngramSpark, and more.",
    image: "/images/home/global-distribution.webp",
    color: "bg-slate-800",
    wide: true
  }
];

export function ServicesGrid() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center md:text-left">
           <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Our Book Publishing<br />Services for Indie Authors
           </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DISPLAY_SERVICES.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl ${
                service.wide ? "md:col-span-2 lg:col-span-3 lg:flex" : ""
              }`}
            >
              <div className={`aspect-video overflow-hidden ${service.wide ? "lg:w-1/2 lg:aspect-auto" : ""}`}>
                <img
                  src={service.image}
                  alt={service.title || "Service"}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className={`p-8 ${service.wide ? "lg:w-1/2 lg:p-12" : ""}`}>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{service.title}</h3>
                <div className="mb-4 text-sm font-semibold text-primary">{service.subtitle}</div>
                <p className="mb-6 text-gray-600 line-clamp-3">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 ${service.color}`}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
