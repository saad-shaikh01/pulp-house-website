"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, BookOpen, Award } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";

const stats = [
  {
    number: "8M+",
    label: "Strengthen Readership",
    icon: Users,
  },
  {
    number: "15k+",
    label: "Broaden Book Reach",
    icon: BookOpen,
  },
  {
    number: "453+",
    label: "Creating Lasting Stories",
    icon: Award,
  },
];

export const AboutJourneySection: FC = () => {
  return (
    <section id="our-journey" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-secondary/5" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container px-4 relative z-10">
        {/* Main Journey Content */}
        <div className="relative backdrop-blur-sm bg-card/50 rounded-[2.5rem] border border-border shadow-2xl overflow-hidden">
          {/* Inner gradient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4"
            >
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl" />

                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/our-journey.webp"
                    alt="Our Journey Handshake"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                </div>

                {/* Floating accent */}
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <span className="text-4xl font-black text-white">35+</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8 flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  The Pulp House Publishing is a full-service publishing company for indie authors. It
                  all began in 1988, in the heart of Austin, Texas, with a simple mission: to help
                  authors turn their ideas into books that reach every part of the world.
                </p>
                <p>
                  We learned that writing a book is not the end of the road. We know it because of the
                  first manuscript that we took through the publishing process. Although it is full of
                  excitement, it comes with challenges and decisions that would overwhelm even the
                  most enthusiastic authors. This is where we come to help!
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <PremiumButton variant="shimmer" icon href="#who-we-are">
                  Learn More
                </PremiumButton>
                <Link
                  href="/get-free-quote"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold border-2 border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Cards - Positioned below */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative -mt-8 mx-4 md:mx-12 lg:mx-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 shadow-xl overflow-hidden">
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <div className="relative flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl md:text-4xl font-black text-white">
                          {stat.number}
                        </div>
                        <div className="text-sm text-white/80 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
