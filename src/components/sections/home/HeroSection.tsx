"use client";

import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SITE_CONFIG } from "@/lib/data";

export const HeroSection: FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });
  const [counters, setCounters] = useState({ authors: 0, reviews: 0, clients: 0 });

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
    <section className="relative  flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=60"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* <source src="/videos/hero-video.webm" type="video/webm" /> */}
          {/* <source src="/videos/hero-video.mp4" type="video/mp4" /> */}
        </video>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        {/* Animated Shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm font-semibold text-white backdrop-blur-sm">
              Trusted Full-Service Book Publishing • USA
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold !text-[#fff] leading-tight"
          >
            Get Your Manuscript <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">
              Ready
            </span>{" "}
            to Sell
          </motion.h1>

          {/* Lead Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Ghostwriting • Editing • Design • Global Distribution • Marketing — we do the heavy
            lifting while you create.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/get-free-quote"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-primary/50 hover:scale-105"
            >
              Book Free Consultation
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white rounded-full text-lg font-semibold transition-all duration-200 backdrop-blur-sm flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              {SITE_CONFIG.phone}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counters.authors.toLocaleString()}+
              </div>
              <div className="text-sm text-gray-300">Authors Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counters.reviews.toLocaleString()}+
              </div>
              <div className="text-sm text-gray-300">Five-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counters.clients.toLocaleString()}+
              </div>
              <div className="text-sm text-gray-300">Returning Clients</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};
