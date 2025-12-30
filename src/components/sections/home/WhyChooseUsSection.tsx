"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "100% Creative Control",
    image: "/images/home/choose1.webp",
  },
  {
    title: "Retain All Your Rights & Royalties",
    image: "/images/home/choose2.webp",
  },
  {
    title: "Personalized Communication Throughout the Publishing Process",
    image: "/images/home/choose3.webp",
  },
  {
    title: "Comprehensive Services All in One Place",
    image: "/images/home/choose4.webp",
  },
  {
    title: "World-class Publishing Make Your Book Stand Out",
    image: "/images/home/choose5.webp",
  },
  {
    title: "Transparent Pricing — No Hidden Fees, No Surprise Costs",
    image: "/images/home/choose6.webp",
  },
];

export const WhyChooseUsSection: FC = () => {
  return (
        <section
      className="py-16 md:py-24  relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10"
      style={{
        backgroundImage: 'url("/images/home/pan-bg.webp") center/cover no-repeat',
      }}
    >
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold !bg-gradient-to-br !from-foreground !to-foreground/60 !bg-clip-text !text-transparent">
            Why Authors Choose Us
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-gray-600/30 shadow-lg">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex flex-col items-center text-center space-y-6 p-8  bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                {/* Icon */}
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={reason.image}
                    alt=""
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                  {reason.title}
                </h3>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
