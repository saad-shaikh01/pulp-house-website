"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SERVICES } from "@/lib/data";

export function ServicesPreview() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h2 className="text-3xl font-bold text-center mt-20 mb-10 dark:text-white">
        Our Book Publishing Services for Indie Authors
      </h2>
      <HoverEffect items={SERVICES.map(s => ({
          title: s.title,
          description: s.description,
          link: `/services/${s.slug}`
      }))} />
    </div>
  );
}
