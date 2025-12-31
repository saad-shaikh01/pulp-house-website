"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp, Users, Globe, Sparkles } from "lucide-react";
import { PremiumButton, PhoneButton } from "@/components/ui/premium-button";
import { SITE_CONFIG } from "@/lib/data";

const features = [
  {
    title: "Driven Strategies",
    description: "Data-driven approaches that maximize your book's reach and impact in the market.",
    icon: Target,
  },
  {
    title: "Digital Solution",
    description: "Cutting-edge digital publishing tools and platforms for modern authors.",
    icon: Lightbulb,
  },
];

const stats = [
  { number: "172+", label: "Drive Engagement", icon: TrendingUp },
  { number: "283+", label: "Digital Presence", icon: Globe },
  { number: "453+", label: "Creating Impactful", icon: Users },
];

export const AboutAchievementsSection: FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-background" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-secondary/10 rounded-full"
        />
      </div>

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Our Achievements</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Trusted Digital Publishing for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Authors Globally
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              During the last thirty years, we have been honored to publish, market,
              and sell books of thousands of authors worldwide. It is because of our commitment that we are
              now ranked among the best book publishing companies in the United States.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer text */}
            <p className="text-muted-foreground">
              At Pulp House Publishing, we provide authors with a reliable,
              streamlined, and innovative digital publishing experience.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <PremiumButton variant="gradient" icon href="/get-free-quote">
                Get In Touch
              </PremiumButton>
              <PhoneButton phone={SITE_CONFIG.phone} variant="outline" className="text-foreground border-border hover:border-primary hover:text-primary" />
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 rounded-[3rem] blur-3xl" />

              {/* Main image */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-us/achievement.webp"
                  alt="Achievements visual with target and cubes"
                  fill
                  className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>

              {/* Stats Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-8 right-8 md:-left-12 md:right-12"
              >
                <div className="backdrop-blur-xl bg-card/90 rounded-2xl p-4 md:p-6 shadow-2xl border border-border">
                  <div className="grid grid-cols-3 gap-4 md:gap-6">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                          className="text-center"
                        >
                          <div className="flex justify-center mb-2">
                            <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                          <div className="text-2xl md:text-3xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                            {stat.number}
                          </div>
                          <div className="text-xs text-muted-foreground font-medium">
                            {stat.label}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Floating decoration */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl shadow-xl flex items-center justify-center"
              >
                <Target className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
