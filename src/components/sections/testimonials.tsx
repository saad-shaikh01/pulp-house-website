"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Jessica M.",
    role: "Memoir Author, “Finding My Way”",
    content:
      "I’d been sitting on my memoir for almost two years because I didn’t know where to begin. I wanted it to be written in my voice and to look professional, but I was intimidated by all the publishing steps. But working with The Pulp House Publishing made it easy! My writer was patient, the designer captured the emotion of my story perfectly, and they even helped me set up my Amazon page and market my book.",
    cover: "/images/home/book1.webp",
  },
  {
    name: "Aaron B.",
    role: "Fantasy Author, “The Shadow Gate”",
    content:
      "I had a finished manuscript but no idea what to do next. I tried researching self-publishing on my own, but it was overwhelming. Formats, ISBNs, cover specs, everything. The team at The Pulp House Publishing took over and handled it all professionally while keeping me involved creatively. My book cover blew me away, and now my novel is available on Amazon and Apple Books.",
    cover: "/images/home/book2.webp",
  },
  {
    name: "Maya L.",
    role: "Children’s Book Author, “The Little Star Who Could”",
    content:
      "I had a story and a few sketches, but I wasn’t sure if I could actually make a children’s book on my own. They paired me with an illustrator who brought my characters to life. Every page looked magical. The writer only had my illustrations to work with, but they knew exactly what I wanted to say. They also handled the layout, printing, and eBook version so it would reach parents and teachers easily.",
    cover: "/images/home/book3.webp",
  },
  {
    name: "David R.",
    role: "Business Author, “Lead Like You Mean It”",
    content:
      "As a corporate trainer, I’d wanted to turn my workshop material into a book for years, but I didn’t know how it was possible. The editorial team helped me turn my scattered notes into a structured, engaging business book. The design looked clean and professional, absolutely perfect for my audience. Within weeks of launching, my book became a powerful tool for my speaking engagements.",
    cover: "/images/home/book4.webp",
  },
  {
    name: "Sofia T.",
    role: "Poet, “Echoes Between Lines”",
    content:
      "Well, I guess this is it. The book seems to be a hit with my family! I thought self-publishing poetry would be too niche or complicated, but they completely changed my mind. They treated my work like art (as it was), helping me choose typography, layout, and even the paper texture to match the tone of my poems. The final book felt personal and beautiful, like a piece of me in print.",
    cover: "/images/home/book5.webp",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="bg-[#1a0a2e] py-16 text-white md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-purple-400">
            Success Stories
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Real Authors. Real Stories.
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                       {/* Mobile view book cover */}
                       <div className="md:hidden mb-4">
                         <img src={testimonial.cover} alt="" className="h-48 w-32 object-cover rounded-md shadow-lg mx-auto"/>
                       </div>
                    </div>
                    <blockquote className="text-lg leading-relaxed text-gray-300 md:text-xl">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="mt-8">
                      <cite className="not-italic">
                        <span className="block text-lg font-bold text-white">{testimonial.name}</span>
                        <span className="block text-sm text-purple-300">{testimonial.role}</span>
                      </cite>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8">
             <button onClick={scrollPrev} className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
                <ChevronLeft className="h-6 w-6" />
             </button>

             {/* Book Navigation (Desktop) */}
             <div className="hidden md:flex items-end justify-center gap-4 h-40">
                {TESTIMONIALS.map((testimonial, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={cn(
                            "relative transition-all duration-300 ease-in-out hover:-translate-y-2",
                            selectedIndex === index ? "z-10 scale-110 -translate-y-4" : "z-0 scale-90 opacity-60 grayscale"
                        )}
                    >
                         <img src={testimonial.cover} alt={testimonial.name} className="h-32 w-auto rounded shadow-lg object-contain bg-gray-800" />
                    </button>
                ))}
             </div>

             <button onClick={scrollNext} className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
                <ChevronRight className="h-6 w-6" />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
