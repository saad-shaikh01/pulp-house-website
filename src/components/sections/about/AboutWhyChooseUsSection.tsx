"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop",
    title: "Genre-Specific Expertise",
    description: "We know every genre has its quirks. We provide tailored guidance and strategies for every genre so you can find your perfect audience.",
    variant: "dark" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=600&auto=format&fit=crop",
    title: "Custom Services for You",
    description: "Your book is unique. So, we make sure that our services are built around your story, your vision, and YOU.",
    variant: "light" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
    title: "Author Inclusion in Every Step",
    description: "We are the only self-publishing firm that gives you the driver's seat. We guide, support, and make your ideas come to life.",
    variant: "dark" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=600&auto=format&fit=crop",
    title: "Fairest Price in the Market",
    description: "There are no hidden fees and no surprises. Just professional publishing that's fair, transparent, and totally worth it!",
    variant: "light" as const,
  },
];

export const AboutWhyChooseUsSection: FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-primary/20 to-gray-950" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-white/80">Why Authors Choose Us</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Authors{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>

          <p className="text-lg text-white/70 leading-relaxed">
            We know how difficult it is to be a self-published author: difficult platforms, hidden expenses,
            inconsistent quality, and no guidance. That is why we provide individual assistance.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div
                className={`relative h-full rounded-3xl overflow-hidden ${
                  card.variant === "dark"
                    ? "bg-gray-900/80"
                    : "bg-white/10 backdrop-blur-sm"
                } border border-white/10 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20`}
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    // src={card.image}
                    src={'/images/about-us/about-why-choose-us.webp'}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 ${
                    card.variant === "dark"
                      ? "bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
                      : "bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                  }`} />

                  {/* Floating number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <span className="text-lg font-black text-white">0{index + 1}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
