"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PenTool, BookOpen, Globe, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Book Writing",
    icon: PenTool,
    href: "/services/ghostwriting-services",
    gradient: "from-violet-600 to-purple-600",
    bgGradient: "from-violet-600/10 to-purple-600/10",
  },
  {
    number: "02",
    title: "Book Publishing",
    icon: BookOpen,
    href: "/services/ebook-publishing",
    gradient: "from-primary to-secondary",
    bgGradient: "from-primary/10 to-secondary/10",
  },
  {
    number: "03",
    title: "Book Marketing",
    icon: Globe,
    href: "/services/book-marketing",
    gradient: "from-emerald-600 to-teal-600",
    bgGradient: "from-emerald-600/10 to-teal-600/10",
  },
];

export const AboutServicesSection: FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      </div>

      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            We provide the{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              best services
            </span>{" "}
            for you.
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <Link href={service.href} className="block h-full">
                  <div className="relative h-full rounded-3xl overflow-hidden">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Border glow on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                    {/* Card content */}
                    <div className="relative h-full backdrop-blur-sm bg-white/60 dark:bg-gray-900/60 border border-border group-hover:border-primary/30 rounded-3xl p-8 transition-all duration-500 group-hover:shadow-2xl">
                      {/* Badge number */}
                      <div className={`absolute top-6 right-6 text-5xl font-black bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity`}>
                        {service.number}
                      </div>

                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      {/* Learn more link */}
                      <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                        <span className="font-medium">Learn more</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>

                      {/* Bottom gradient line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
