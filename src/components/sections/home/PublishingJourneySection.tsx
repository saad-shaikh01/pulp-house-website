"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/data";
import { ButtonV2 } from "@/components/ui/button-v2";
import { PhoneButtonV2 } from "@/components/ui/phone-button-v2";

const journeySteps = [
  { number: "01", title: "Submissions", image: "/images/one.webp" },
  { number: "02", title: "Production & Design", image: "/images/two.webp" },
  { number: "03", title: "Marketing", image: "/images/three.webp" },
  { number: "04", title: "Distribution", image: "/images/four.webp" },
  { number: "05", title: "Royalties", image: "/images/five.webp" },
];

export const PublishingJourneySection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
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
              <h3 className="text-base md:text-lg font-bold text-foreground">
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
          <ButtonV2
            href="/get-free-quote"
            variant="primary"
            size="lg"
          >
            Request a Quote
          </ButtonV2>
          <PhoneButtonV2
            phone={SITE_CONFIG.phone}
            variant="outline"
            size="lg"
            className=""
          />
        </motion.div>
      </div>
    </section>
  );
};
