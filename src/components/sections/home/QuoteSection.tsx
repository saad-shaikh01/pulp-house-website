"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const QuoteSection: FC = () => {
  return (
    <section
      className="py-16 md:py-24 "
      style={{
        background: 'url("/images/quote.webp") center/cover no-repeat',
      }}
    >
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl bg-white/10 backdrop-blur-sm rounded-lg py-12 md:py-16 px-6 md:px-12"
        >
          {/* Left Quote Icon */}
          <div className="absolute -top-8 -left-4  md:-left-12">
            <Image
              src="/images/qright.webp"
              alt=""
              width={80}
              height={80}
              className="h-16 w-16 md:h-20 md:w-20"
            />
          </div>

          {/* Quote Text */}
          <blockquote className="space-y-6 px-4 text-center md:px-12">
            <p className="text-[#ffff] font-serif text-2xl leading-relaxed italic md:text-3xl lg:text-5xl">
              "There is no greater agony than bearing an untold story inside
              you."
            </p>
            <footer className="text-muted text-lg font-semibold md:text-xl">
              — Maya Angelou
            </footer>
          </blockquote>

          {/* Right Quote Icon */}
          <div className="absolute -right-4 -bottom-8  md:-right-12">
            <Image
              src="/images/qleft.webp"
              alt=""
              width={80}
              height={80}
              className="h-16 w-16 md:h-20 md:w-20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
