"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jessica M.",
    title: "Memoir Author, Finding My Way",
    text: "I'd been sitting on my memoir for almost two years because I didn't know where to begin. I wanted it to be written in my voice and to look professional, but I was intimidated by all the publishing steps. But working with The Pulp House Publishing made it easy! My writer was patient, the designer captured the emotion of my story perfectly, and they even helped me set up my Amazon page and market my book. When I held my printed book for the first time, I actually cried. I felt accomplished. 10/10.",
    book: "/images/book1.webp",
  },
  {
    name: "Aaron B.",
    title: `Fantasy Author, "The Shadow Gate"`,
    text: "I had a finished manuscript but no idea what to do next. I tried researching self-publishing on my own, but it was overwhelming. Formats, ISBNs, cover specs, everything. I didn't even know the meaning of most of those things. The team at The Pulp House Publishing took over and handled it all professionally while keeping me involved creatively. My book cover blew me away, and now my novel is available on Amazon and Apple Books. I finally feel like a real author.",
    book: "/images/book2.webp",
  },
  {
    name: "Maya L.",
    title: `Children's Book Author, "The Little Star Who Could"`,
    text: "I had a story and a few sketches, but I wasn't sure if I could actually make a children's book on my own. They paired me with an illustrator who brought my characters to life. Every page looked magical. The writer only had my illustrations to work with, but they knew exactly what I wanted to say. They also handled the layout, printing, and eBook version so it would reach parents and teachers easily. Now I see photos of kids reading my book. It's the most amazing feeling.",
    book: "/images/book3.webp",
  },
  {
    name: "David R.",
    title: `Business Author, "Lead Like You Mean It"`,
    text: "As a corporate trainer, I'd wanted to turn my workshop material into a book for years, but I didn't know how it was possible, especially with my busy schedule. The editorial team helped me turn my scattered notes into a structured, engaging business book. The design looked clean and professional, absolutely perfect for my audience. I had to give them only three revisions, perfectionist that I am, and they catered well. Within weeks of launching, my book became a powerful tool for my speaking engagements. I recommend The Pulp House Publishing.",
    book: "/images/book4.webp",
  },
  {
    name: "Sofia T.",
    title: `Poet, "Echoes Between Lines"`,
    text: "Well, I guess this is it. The book seems to be a hit with my family! I thought self-publishing poetry would be too niche or complicated, but they completely changed my mind. They treated my work like art (as it was), helping me choose typography, layout, and even the paper texture to match the tone of my poems. Ah, couldn't have asked for a better team! The final book felt personal and beautiful, like a piece of me in print. It's now available worldwide, and I'm so proud of it. Thank you, The Pulp House Publishing!",
    book: "/images/book5.webp",
  },
];

export const SuccessStoriesSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-background relative overflow-hidden">
      {/* Background text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[200px] font-black text-primary/5 select-none pointer-events-none">
        SUCCESS STORIES
      </div>

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Testimonial */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm">
                  <Quote className="w-4 h-4" />
                  Success Stories
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    {testimonials[activeIndex].title}
                  </p>
                </div>

                <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                  "{testimonials[activeIndex].text}"
                </blockquote>

                {/* Pagination dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-8 bg-primary"
                          : "w-2 bg-primary/30 hover:bg-primary/50"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Book Carousel */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[600px] flex items-center justify-center">
              {testimonials.map((testimonial, index) => {
                const offset = (index - activeIndex + testimonials.length) % testimonials.length;
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      x: `${(offset - 2) * 30}%`,
                      scale: isActive ? 1.2 : 0.8,
                      opacity: Math.abs(offset - 2) <= 2 ? 1 : 0,
                      rotateY: (offset - 2) * 15,
                      zIndex: isActive ? 10 : Math.max(0, 5 - Math.abs(offset - 2)),
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-64 cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className={`relative aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl ${isActive ? "ring-4 ring-primary" : ""}`}>
                      <Image
                        src={testimonial.book}
                        alt={`Book by ${testimonial.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="btn btn-primary btn-circle"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="btn btn-primary btn-circle"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
