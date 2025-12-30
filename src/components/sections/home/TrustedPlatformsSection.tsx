"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const platforms = [
  { name: "Amazon Kindle", logo: "/images/amazon.svg" },
  { name: "IngramSpark", logo: "/images/ingram-spark.png" },
  { name: "Google Play Books", logo: "/images/google-play-book.png" },
  { name: "Kindle", logo: "/images/kindle.svg" },
  { name: "ACX", logo: "/images/acx.png" },
  { name: "Apple Books", logo: "/images/pub_logo_8.webp" },
  { name: "Kobo", logo: "/images/kobo.svg" },
  { name: "iBooks", logo: "/images/pub_logo_5.webp" },
];

export const TrustedPlatformsSection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-primary/5 relative overflow-hidden">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !bg-gradient-to-br !from-foreground !to-foreground/60 !bg-clip-text !text-transparent mb-4">
            Trusted by Leading Self Publishing Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with world-class publishing partners and global distribution networks to give your book professional reach and credibility.
          </p>
        </motion.div>

        {/* Infinite Scroll Logos */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-16 items-center py-8"
            >
              {/* Duplicate platforms for seamless loop */}
              {[...platforms, ...platforms, ...platforms].map((platform, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center group"
                >
                  <div className="relative w-full h-full flex items-center justify-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-110">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={120}
                      height={60}
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
