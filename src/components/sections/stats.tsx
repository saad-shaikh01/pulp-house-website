"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Stats() {
  return (
    <section className="bg-background py-16 md:py-24" id="page2">
      <div className="container">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The Pulp House Publishing at a Quick Glance
            </h2>
            <p className="text-lg text-muted-foreground">
              The Most Trusted Self-publishing Service for New Authors in the United States
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="/get-free-quote"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Get In Touch
              </a>
              <a
                href="tel:888-909-9431"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                888-909-9431
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[400px] flex-1 items-center justify-center lg:h-[500px]">
            {/* Visual representation of bubbles using CSS/Tailwind */}
            <StatBubble
              className="absolute left-[10%] top-[10%] animate-float bg-purple-100 p-6 text-purple-900 shadow-xl"
              number="5000+"
              label="Independent Authors Published"
            />
             <StatBubble
              className="absolute right-[10%] top-[20%] animate-float-delayed bg-pink-100 p-6 text-pink-900 shadow-xl"
              number="1000+"
              label="Returning Clients"
              badge="+1.27% ▲"
            />
             <StatBubble
              className="absolute bottom-[10%] left-[20%] animate-float-more-delayed bg-blue-100 p-6 text-blue-900 shadow-xl"
              number="100+"
              label="Five-Star Reviews"
              badge="+1.27% ▲"
            />
             <StatBubble
              className="absolute bottom-[20%] right-[15%] animate-float bg-amber-100 p-6 text-amber-900 shadow-xl"
              number="24/7"
              label="Support Team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBubble({
  className,
  number,
  label,
  badge,
}: {
  className?: string;
  number: string;
  label: string;
  badge?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center rounded-full text-center aspect-square w-40 sm:w-48 z-10", className)}>
      <div className="text-3xl font-bold sm:text-4xl">{number}</div>
      <div className="mt-1 text-xs font-medium leading-tight sm:text-sm">{label}</div>
      {badge && (
        <div className="mt-2 rounded-full bg-white px-2 py-0.5 text-[10px] font-bold shadow-sm">
          {badge}
        </div>
      )}
    </div>
  );
}
