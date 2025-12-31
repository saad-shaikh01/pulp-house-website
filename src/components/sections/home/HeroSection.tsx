"use client";

import { FC, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SITE_CONFIG } from "@/lib/data";
import { ButtonV2 } from "@/components/ui/button-v2";
import { PhoneButtonV2 } from "@/components/ui/phone-button-v2";
import { Sparkles } from "lucide-react";

export const HeroSection: FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });
  const [counters, setCounters] = useState({
    authors: 0,
    reviews: 0,
    clients: 0,
  });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = { authors: 5000, reviews: 100, clients: 1000 };
    const increments = {
      authors: targets.authors / steps,
      reviews: targets.reviews / steps,
      clients: targets.clients / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCounters({
          authors: Math.floor(increments.authors * currentStep),
          reviews: Math.floor(increments.reviews * currentStep),
          clients: Math.floor(increments.clients * currentStep),
        });
      } else {
        setCounters(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=60"
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        >
          {/* <source src="/videos/hero-video.webm" type="video/webm" /> */}
          {/* <source src="/videos/hero-video.mp4" type="video/mp4" /> */}
        </video>
        <div className="hero-overlay-gradient"></div>
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Glass Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow Effect Behind Container */}
            <div className="from-primary via-secondary to-primary absolute -inset-1 rounded-3xl bg-gradient-to-r opacity-20 blur-2xl" />

            {/* Glass Morphism Container */}
            <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-8 shadow-2xl md:p-12 lg:p-16 dark:from-white/5 dark:via-white/[0.02] dark:to-white/5">
              {/* Top Glass Reflection */}
              <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              {/* Inner Glow Lines */}
              <div className="via-primary/30 absolute top-4 right-4 left-4 h-px bg-gradient-to-r from-transparent to-transparent" />

              <div className="space-y-8">
                {/* Eyebrow with Enhanced Glass Effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative inline-block"
                >
                  {/* <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-30 blur-md rounded-full" /> */}
                  {/* <span className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full text-sm font-semibold text-foreground shadow-lg">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Trusted Full-Service Book Publishing • USA
                  </span> */}
                  <span className="eyebrow">
                    <Sparkles className="text-yellow-400 h-4 w-4" />
                    Trusted Full-Service Book Publishing • USA
                  </span>
                </motion.div>

                {/* Main Heading with Glass Text Effect */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl leading-tight font-bold md:text-6xl lg:text-7xl"
                >
                  <span className="relative inline-block">
                    <span className="text-[#ffff] drop-shadow-lg">
                      Get Your Manuscript
                    </span>
                  </span>
                  <br />
                  <span className="relative inline-block">
                    {/* <span className="from-primary-light to-secondary absolute -inset-1 bg-gradient-to-r opacity-50 blur-lg" /> */}
                    <span className="gradient-text-primary">
                      Ready
                    </span>
                  </span>{" "}
                  <span className="text-[#ffff] drop-shadow-lg">
                    to Sell
                  </span>
                </motion.h1>

                {/* Lead Text with Glass Panel */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative mx-auto max-w-3xl"
                >
                  <div className="from-primary/5 via-secondary/5 to-primary/5 absolute -inset-2 rounded-2xl bg-linear-to-r blur-md" />
                  <p className="text-[#ffff] relative rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-lg backdrop-blur-sm md:text-xl ">
                    Ghostwriting • Editing • Design • Global Distribution •
                    Marketing — we do the heavy lifting while you create.
                  </p>
                </motion.div>

                {/* CTA Buttons with Enhanced Glass */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ButtonV2
                      href="/get-free-quote"
                      variant="cta"
                      size="lg"
                      rounded="full"
                      animation="scaleLift"
                      className="shadow-primary/50 shadow-2xl"
                    >
                      Book Free Consultation
                    </ButtonV2>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PhoneButtonV2
                      phone={SITE_CONFIG.phone}
                      variant="glass"
                      size="lg"
                      rounded="full"
                      className="shadow-xl"
                    />
                  </motion.div>
                </motion.div>

                {/* Stats with Floating Glass Cards */}
                <motion.div
                  ref={statsRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-3"
                >
                  {[
                    {
                      value: counters.authors,
                      label: "Authors Published",
                      delay: 0,
                    },
                    {
                      value: counters.reviews,
                      label: "Five-Star Reviews",
                      delay: 0.1,
                    },
                    {
                      value: counters.clients,
                      label: "Returning Clients",
                      delay: 0.2,
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + stat.delay }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="group relative"
                    >
                      {/* Glow on Hover */}
                      <div className="from-primary to-secondary absolute -inset-0.5 rounded-2xl bg-linear-to-r opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30" />

                      {/* Glass Card */}
                      
                      <div className="relative rounded-2xl    p-6 shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-white/5 glass-card">
                        {/* Inner Shine */}
                        <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

                        <div className="space-y-2 text-center">
                          <div className="text-4xl font-bold md:text-5xl">
                            {/* <span className="relative"> */}
                              {/* <span className="from-primary to-secondary absolute -inset-1 bg-linear-to-r opacity-30 blur-md" /> */}
                              <span className="gradient-text-primary relative">
                                {stat.value.toLocaleString()}+
                              </span>
                            {/* </span> */}
                          </div>
                          <div className="text-background text-sm font-medium ">
                            {stat.label}
                          </div>
                        </div>

                        {/* Corner Accents */}
                        {/* <div className="bg-primary/50 absolute top-2 right-2 h-2 w-2 rounded-full" /> */}
                        {/* <div className="bg-secondary/50 absolute bottom-2 left-2 h-2 w-2 rounded-full" /> */}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="relative">
          <div className="from-primary/30 to-secondary/30 absolute -inset-2 rounded-full bg-gradient-to-b blur-lg" />
          <div className="relative h-10 w-6 rounded-full border-2 border-white/30 bg-white/10 p-1 shadow-xl backdrop-blur-xl">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="from-primary to-secondary mx-auto h-1.5 w-1.5 rounded-full bg-gradient-to-b shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
