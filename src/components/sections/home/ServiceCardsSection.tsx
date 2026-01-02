"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { ButtonV2 } from "@/components/ui/button-v2";
import { PhoneButtonV2 } from "@/components/ui/phone-button-v2";

const services = [
  {
    title: "Book Production",
    subtitle: "Blank Pages into a Polished Manuscript",
    description: "Our ghostwriting, editorial development, and professional book editing services help you write and refine your story, strengthen your message, and perfect your voice.",
    image: "/images/book-production.webp",
    color: "from-purple-500 to-indigo-600",
    btnColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    title: "Book Design",
    subtitle: "Beautiful Books That Captivate",
    description: "Our design team specializes in stunning book covers, elegant page layouts, and creative illustrations. We craft visuals that make your story irresistible.",
    image: "/images/book-design.webp",
    color: "from-pink-500 to-rose-600",
    btnColor: "bg-pink-600 hover:bg-pink-700",
  },
  {
    title: "Digital & Physical Production",
    subtitle: "Your Book Available Everywhere Readers Are",
    description: "We convert, format, and produce your book for print, eBook, and audiobook. Explore our publishing packages to find what suits your requirements.",
    image: "/images/digital-physical.webp",
    color: "from-blue-500 to-cyan-600",
    btnColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "Marketing & Author Branding",
    subtitle: "Get Noticed and Build Your Author Brand",
    description: "We manage launch campaigns, social media, SEO, author websites, and more so readers find (and remember) you.",
    image: "/images/marketing.webp",
    color: "from-indigo-600 to-purple-700",
    btnColor: "bg-indigo-700 hover:bg-indigo-800",
  },
  {
    title: "Global Distribution",
    subtitle: "Reach Readers Worldwide",
    description: "We facilitate book distribution for self-published authors through Amazon, Apple Books, Kobo, IngramSpark, and more. Focus on your next masterpiece while we handle the setup and global reach.",
    image: "/images/global-distribution.webp",
    color: "from-gray-700 to-gray-900",
    btnColor: "bg-gray-800 hover:bg-gray-900",
  },
];

export const ServiceCardsSection: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="container px-4 relative z-10">
        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-primary-light p-12 md:p-16 text-center shadow-2xl">
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Our Book Publishing<br />Services for Indie Authors
                </h2>
              </motion.div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <ButtonV2
                  href="/get-free-quote"
                  variant="primary"
                  size="lg"
                  iconRight={ArrowRight}
                  className="bg-white text-primary hover:bg-white/90 shadow-2xl"
                >
                  Request a Quote
                </ButtonV2>
                <PhoneButtonV2
                  phone={SITE_CONFIG.phone}
                  size="lg"
                />
              </div>
            </div>

            {/* Animated background elements */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

                  {/* Floating badge */}
                  <motion.div
                    animate={hoveredIndex === index ? { y: [0, -10, 0] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4"
                  >
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-semibold flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Popular
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm font-semibold text-primary">
                    {service.subtitle}
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    href="/start-now"
                    className={`inline-flex items-center gap-2 px-6 py-3 ${service.btnColor} text-white rounded-full font-semibold transition-all duration-300 hover:gap-4 hover:shadow-lg group/btn mt-4`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 blur-2xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
