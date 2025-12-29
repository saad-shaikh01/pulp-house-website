"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, TrendingUp } from "lucide-react";

const results = [
  {
    icon: Award,
    title: "100% Royalty-Free Publishing",
    description: "You get to keep all the earnings, because we will never ask you to share the earnings.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: BookOpen,
    title: "Top Publishers at Your Fingertips",
    description: "Over 45+ publishers have their hands raised to publish your dream with no issue.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: TrendingUp,
    title: "Sell Millions of Books faster",
    description: "Awesome results and 2x sales for the instant!",
    gradient: "from-primary to-secondary",
  },
];

export const ContactResultsSection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 via-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      </div>

      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !bg-gradient-to-br !from-primary !via-secondary !to-primary !bg-clip-text !text-transparent mb-4">
            Our Results Speak for Themselves
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of successful authors who chose The Pulp House Publishing
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border border-white/20 dark:border-gray-800/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${result.gradient} shadow-lg`}>
                      <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Animated ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${result.gradient} opacity-30`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {result.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {result.description}
                  </p>

                  {/* Bottom border gradient */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${result.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${result.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact_form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/50"
          >
            Start Your Publishing Journey
            <TrendingUp className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
