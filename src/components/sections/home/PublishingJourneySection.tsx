"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const journeySteps = [
  { number: "01", title: "Submissions", image: "/images/home/one.webp" },
  { number: "02", title: "Production & Design", image: "/images/home/two.webp" },
  { number: "03", title: "Marketing", image: "/images/home/three.webp" },
  { number: "04", title: "Distribution", image: "/images/home/four.webp" },
  { number: "05", title: "Royalties", image: "/images/home/five.webp" },
];

export const PublishingJourneySection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold !bg-gradient-to-br !from-foreground !to-foreground/60 !bg-clip-text !text-transparent"
          >
            Your Publishing Journey Starts Here.
          </motion.h2>
        </div>

        {/* Journey Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold dark:text-foreground">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/get-free-quote"
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-primary/50 hover:scale-105"
          >
            Request a Quote
          </Link>
          <a
            href="tel:888-909-9431"
            className="px-8 py-4 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border-2 border-primary text-primary dark:text-white rounded-full text-lg font-semibold transition-all duration-200"
          >
            888-909-9431
          </a>
        </motion.div>
      </div>
    </section>
  );
};
