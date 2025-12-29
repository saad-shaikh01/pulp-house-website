"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/data";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  variant?: "default" | "purple" | "gradient";
}

export const CTASection: FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText = "Get in Touch",
  primaryButtonHref = "/get-free-quote",
  variant = "default",
}) => {
  const bgClass = {
    default: "bg-gradient-to-br from-background to-primary/5",
    purple: "bg-gradient-to-br from-primary to-secondary",
    gradient: "bg-gradient-to-br from-primary/90 to-secondary/90",
  }[variant];

  const textColor = variant === "default" ? "text-foreground" : "text-white";
  const descColor = variant === "default" ? "text-muted-foreground" : "text-white/90";

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${textColor}`}>
                {title}
              </h2>
              {subtitle && (
                <p className={`text-xl md:text-2xl font-semibold ${textColor}`}>{subtitle}</p>
              )}
            </div>

            <p className={`text-lg ${descColor}`}>{description}</p>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link
                href={primaryButtonHref}
                className="px-8 py-4 bg-white hover:bg-gray-100 text-primary rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:scale-105"
              >
                {primaryButtonText}
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-full text-lg font-semibold transition-all duration-200"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
