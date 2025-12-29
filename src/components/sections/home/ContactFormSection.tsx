"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

export const ContactFormSection: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("fullPageUrl", window.location.href);
    formData.append("companyName", "The Pulp House Publishing");
    formData.append("brand_id", "20");
    formData.append("url", "redrockbookpublishers.com/lp/");

    const object: Record<string, any> = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    try {
      const response = await fetch("https://americanseohub.com/api/v1/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
      });

      if (response.ok) {
        e.currentTarget.reset();
        window.location.href = "https://thepulphousepublishing.com/thankyou.php";
      } else {
        alert("Form submission failed: " + (response.statusText || "Unknown error"));
      }
    } catch (error: any) {
      alert("Form submission failed: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-4">
              <Sparkles className="w-4 h-4" />
              Get Started Today
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !bg-gradient-to-br !from-primary !via-secondary !to-primary-light !bg-clip-text !text-transparent">
              LET'S GET STARTED
            </h2>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="relative backdrop-blur-xl bg-white/50 dark:bg-gray-900/50 border border-white/20 dark:border-gray-800/50 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Name Input */}
              <div className="group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-white/80 dark:bg-gray-800/80 border-2 border-border focus:border-primary rounded-xl text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:ring-4 focus:ring-primary/20 group-hover:border-primary/50"
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-white/80 dark:bg-gray-800/80 border-2 border-border focus:border-primary rounded-xl text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:ring-4 focus:ring-primary/20 group-hover:border-primary/50"
                />
              </div>

              {/* Phone Input */}
              <div className="group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  required
                  className="w-full px-6 py-4 bg-white/80 dark:bg-gray-800/80 border-2 border-border focus:border-primary rounded-xl text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:ring-4 focus:ring-primary/20 group-hover:border-primary/50"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-2xl pointer-events-none" />
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};
