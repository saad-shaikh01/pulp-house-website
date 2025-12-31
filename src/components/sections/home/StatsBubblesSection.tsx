"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Users, Clock } from "lucide-react";

export const StatsBubblesSection: FC = () => {
  return (
    // <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
  
      <section
      className="py-16 md:py-24  relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10"
      style={{
        backgroundImage: 'url("/images/pan-bg.webp") center/cover no-repeat',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="eye-brow-primary">
              <Sparkles className="w-4 h-4" />
              At a Quick Glance
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent dark:text-foreground leading-tight">
               The Pulp House Publishing at a Quick Glance
            </h2>

            <p className="text-xl text-muted-foreground">
              The Most Trusted Self-publishing Service for New Authors in the United States
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/get-free-quote"
                className="btn btn-primary"
              >
                Get In Touch
              </Link>
              <a
                href="tel:888-909-9431"
                className="btn btn-outline"
              >
                888-909-9431
              </a>
            </div>
          </motion.div>

          {/* Right: Animated Bubbles */}
          <div className="lg:col-span-7 relative h-[600px]">
            {/* Bubble 1 - Large Center */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl flex flex-col items-center justify-center p-8">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                    5000+
                  </div>
                  <div className="text-center text-sm font-semibold text-foreground">
                    Independent Authors<br />Published
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl -z-10" />
              </motion.div>
            </motion.div>

            {/* Bubble 2 - Top Right */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-12 right-12"
            >
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative group cursor-pointer"
              >
                <div className="w-48 h-48 bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-xl rounded-full border border-white/20 shadow-xl flex flex-col items-center justify-center p-6 hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-green-500 mb-2" />
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-1">
                    1000+
                  </div>
                  <div className="text-center text-xs font-semibold text-foreground">
                    Returning Clients
                  </div>
                  <div className="mt-2 px-3 py-1 bg-green-500/20 rounded-full text-xs font-bold text-green-600 dark:text-green-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +1.27% ▲
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full blur-xl -z-10 group-hover:blur-2xl transition-all" />
              </motion.div>
            </motion.div>

            {/* Bubble 3 - Bottom Right */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-20 right-4"
            >
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative group cursor-pointer"
              >
                <div className="w-44 h-44 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 backdrop-blur-xl rounded-full border border-white/20 shadow-xl flex flex-col items-center justify-center p-6 hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-blue-500 mb-2" />
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-1">
                    100+
                  </div>
                  <div className="text-center text-xs font-semibold text-foreground">
                    Five-Star Reviews
                  </div>
                  <div className="mt-2 px-3 py-1 bg-blue-500/20 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +1.27% ▲
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-cyan-500/30 rounded-full blur-xl -z-10 group-hover:blur-2xl transition-all" />
              </motion.div>
            </motion.div>

            {/* Bubble 4 - Bottom Left */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-4 left-20"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative group cursor-pointer"
              >
                <div className="w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-white/20 shadow-xl flex flex-col items-center justify-center p-6 hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-purple-500 mb-2" />
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-1">
                    24/7
                  </div>
                  <div className="text-center text-xs font-semibold text-foreground">
                    Support Team
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-xl -z-10 group-hover:blur-2xl transition-all" />
              </motion.div>
            </motion.div>

            {/* Decorative floating elements
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-32 left-4 w-16 h-16 border-2 border-primary/30 rounded-lg"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-32 right-24 w-12 h-12 border-2 border-secondary/30 rounded-full"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
