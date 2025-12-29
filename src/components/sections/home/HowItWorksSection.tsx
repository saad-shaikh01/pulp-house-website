"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, FileEdit, Palette, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Talk to Us",
    description: "We begin with a conversation about your goals and your book. This includes an editorial review and critical evaluation of your manuscript, followed by further discussions until we achieve the desired outcome for your book.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileEdit,
    title: "Refine Your Manuscript",
    description: "Our experienced book editors and ghostwriters will enhance your story in whatever way you require. This process takes a few months and is entirely human-generated. Perfection cannot be rushed.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "Design & Format",
    description: "We provide your book with a professional visual identity. This includes eye-catching covers, visuals (such as maps and illustrations), and precise formatting that is nothing less than traditional book publishing service.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Rocket,
    title: "Publish & Launch Your Book",
    description: "We expertly prepare your book for all major platforms, including Amazon, Barnes & Noble, IngramSpark, and more! Our services include providing ISBNs, protecting your rights, and distributing to both online platforms and physical bookstores. After your book is published, you can collaborate with us for audiobook production and scriptwriting for screen adaptation!",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Promote & Grow",
    description: "We focus on marketing, branding, and publicity to expand your readership. From a website and press releases to author social media manager, we provide everything.",
    color: "from-indigo-500 to-purple-500",
  },
];

export const HowItWorksSection: FC = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_100%)]" />

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Steps */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Here's How It{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Works
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Every step is transparent, collaborative, and tailored to your goals.
              </p>
            </motion.div>

            {/* Steps */}
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="flex gap-6 items-start">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative flex-shrink-0"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting line (except last) */}
                  {index < steps.length - 1 && (
                    <div className="ml-8 mt-4 mb-4 h-12 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 sticky top-24"
          >
            <div className="relative">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/how-work.webp"
                  alt="How it works"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative gradient */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
