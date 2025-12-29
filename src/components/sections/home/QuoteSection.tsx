"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const QuoteSection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto relative"
        >
          {/* Left Quote Icon */}
          <div className="absolute -top-8 -left-4 md:-left-12 opacity-30">
            <Image
              src="/images/qright.webp"
              alt=""
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>

          {/* Quote Text */}
          <blockquote className="text-center space-y-6 px-4 md:px-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-foreground/90 leading-relaxed">
              "There is no greater agony than bearing an untold story inside you."
            </p>
            <footer className="text-lg md:text-xl text-muted-foreground font-semibold">
              — Maya Angelou
            </footer>
          </blockquote>

          {/* Right Quote Icon */}
          <div className="absolute -bottom-8 -right-4 md:-right-12 opacity-30">
            <Image
              src="/images/qleft.webp"
              alt=""
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
