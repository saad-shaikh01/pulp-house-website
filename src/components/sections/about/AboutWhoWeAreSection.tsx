"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Shield, Trophy, Sparkles } from "lucide-react";

const features = [
  {
    number: "1",
    title: "Efficient & Professional",
    description: "We provide high-quality services with a quick turnaround time.",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "2",
    title: "Reliable & Trustworthy",
    description: "Our team is dedicated to your success and respecting your intellectual property.",
    icon: Shield,
    gradient: "from-primary to-secondary",
  },
  {
    number: "3",
    title: "Experienced & Skilled",
    description: "Our experts have years of experience in the publishing industry.",
    icon: Trophy,
    gradient: "from-amber-500 to-orange-500",
  },
];

export const AboutWhoWeAreSection: FC = () => {
  return (
    <section id="who-we-are" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background" />

      {/* Animated mesh gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-secondary/5 to-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Who are we?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              We are the best{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ghostwriting & publishing
              </span>{" "}
              agency.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a team of industry-leading editors, ghostwriters, publishers, and marketers. We specialize
              in all things books: from writing and editing to publishing and marketing.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 rounded-[2rem] blur-2xl" />

              {/* Main image container */}
              <div className="relative aspect-[6/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/who-we-are.webp"
                  alt="Person reading a book"
                  fill
                  className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-2xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-foreground">35+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                    {/* Number/Icon */}
                    <div className="relative flex-shrink-0">
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />

                      <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <span className="text-2xl font-black text-white">{feature.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Icon on hover */}
                    <div className="hidden md:flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon className={`w-8 h-8 text-primary`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
