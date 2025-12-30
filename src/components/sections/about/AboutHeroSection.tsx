"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { ButtonV2 } from "@/components/ui/button-v2";

export const AboutHeroSection: FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with mesh gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">About us</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                the Pulp House Publishing
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              We will help you publish your book independently!
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <PremiumButton variant="gradient" icon href="#our-journey">
                Read More
              </PremiumButton>
              <ButtonV2
                href="/contact-us"
                variant="outline"
                size="lg"
                rounded="2xl"
                animation="scaleLift"
                className="border-2"
              >
                Contact Us
              </ButtonV2>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/about-us/about-hero.webp"
                    alt="Reading on tablet"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 md:-left-12 w-[90%] max-w-sm"
              >
                <div className="relative backdrop-blur-xl bg-card/90 rounded-2xl p-6 shadow-2xl border border-border">
                  {/* Decorative top border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-t-2xl" />

                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Dedicated to publishing exceptional works that inspire
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                    <Star className="w-5 h-5 text-border" />
                  </div>

                  {/* Score */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                      9.6
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Bringing powerful stories to life and connecting readers with unforgettable books.
                    </p>
                  </div>

                  {/* Client avatars */}
                  <div className="relative h-10">
                    <Image
                      src="/images/about-us/about-client.webp"
                      alt="Our clients"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Decorative floating element */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl shadow-xl flex items-center justify-center"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
