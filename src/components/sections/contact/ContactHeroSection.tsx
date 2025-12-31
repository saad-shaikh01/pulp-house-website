"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, Mail, User, Phone, MessageSquare } from "lucide-react";
import Image from "next/image";

export const ContactHeroSection: FC = () => {
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
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/5 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-4">
                <Sparkles className="w-4 h-4" />
                Get in Touch
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !bg-gradient-to-br !from-primary !via-secondary !to-primary !bg-clip-text !text-transparent mb-4">
                Got a project? Let's look into your options!
              </h1>
              <p className="text-lg text-muted-foreground">
                Are you prepared to publish your book on all the major platforms? Get in touch with us, and we'll make success your future.
              </p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="relative backdrop-blur-xl bg-card/70 border border-border rounded-3xl p-6 md:p-8 shadow-2xl"
            >
              <div className="space-y-6">
                {/* Name Input */}
                <div className="group relative">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className="w-full px-6 py-4 bg-card/80 border-2 border-border focus:border-primary rounded-xl text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:ring-4 focus:ring-primary/20 group-hover:border-primary/50"
                  />
                </div>

                {/* Email Input */}
                <div className="group relative">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 bg-card/80 border-2 border-border focus:border-primary rounded-xl text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:ring-4 focus:ring-primary/20 group-hover:border-primary/50"
                  />
                </div>

                {/* Phone Input */}
                <div className="group relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone No:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    className="w-full px-6 py-4 bg-card/80 border-2 border-border focus:border-primary rounded-xl text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:ring-4 focus:ring-primary/20 group-hover:border-primary/50"
                  />
                </div>

                {/* Message Textarea */}
                <div className="group relative">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Tell Us About Your Project:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Describe your project..."
                    rows={4}
                    maxLength={1200}
                    required
                    className="w-full px-6 py-4 bg-white/80 dark:bg-gray-800/80 border-2 border-border focus:border-primary rounded-xl text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:ring-4 focus:ring-primary/20 group-hover:border-primary/50 resize-none"
                  />
                </div>

                {/* SMS Consent Checkbox */}
                <div className="bg-muted/50 dark:bg-gray-800/30 rounded-xl p-4 border border-border">
                  <label className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    <input
                      type="checkbox"
                      name="sms_consent"
                      required
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                    />
                    <span>
                      By checking this box, you agree to receive SMS text messages from The Pulp House Publishing regarding customer questions, order updates, promotional offers, newsletter updates, and other support inquiries. Reply STOP to opt-out at any time. Reply HELP for customer care information. Message and data rates may apply. Message frequency may vary.
                      You may review our{" "}
                      <a href="/privacy-policy" target="_blank" className="text-primary hover:underline font-medium">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="/terms-of-service" target="_blank" className="text-primary hover:underline font-medium">
                        Terms of Service
                      </a>{" "}
                      to learn how your data is used.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Let's Begin
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-2xl pointer-events-none" />
            </motion.form>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-gray-800/50">
                <Image
                  src="/images/certificate.png"
                  alt="Publishing Certificates"
                  width={490}
                  height={490}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-xl flex items-center justify-center"
              >
                <Sparkles className="w-12 h-12 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full shadow-xl flex items-center justify-center"
              >
                <Mail className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
