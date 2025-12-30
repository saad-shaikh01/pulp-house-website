"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/data";
import { PremiumButton, PhoneButton } from "@/components/ui/premium-button";
import { Sparkles, ArrowRight, Phone, BookOpen, Star, Zap } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  variant?: "spotlight" | "diagonal" | "floating" | "split" | "cinematic" | "minimal";
}

// ==================== VARIANT 1: SPOTLIGHT ====================
// Dark background with dramatic spotlight effect and glowing elements
const SpotlightCTA: FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText = "Get in Touch",
  primaryButtonHref = "/get-free-quote",
}) => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-background via-primary/20 to-background overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-secondary/30 via-primary/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-foreground/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Premium Publishing</span>
            </motion.div>

            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  {subtitle}
                </p>
              )}
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PremiumButton variant="glow" icon href={primaryButtonHref}>
                {primaryButtonText}
              </PremiumButton>
              <PhoneButton phone={SITE_CONFIG.phone} variant="neon" />
            </div>
          </motion.div>

          {/* Image with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-primary/30 to-transparent rounded-3xl blur-3xl scale-110" />

            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 border-2 border-secondary/30 rounded-3xl"
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(158,39,169,0.5)] rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== VARIANT 2: DIAGONAL ====================
// Bold diagonal split design with asymmetric layout
const DiagonalCTA: FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText = "Get in Touch",
  primaryButtonHref = "/get-free-quote",
}) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Diagonal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0.1)_60%,transparent_60%)]" />

      {/* Animated diagonal lines */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)",
        }}
        animate={{ backgroundPositionX: [0, 100] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image - Takes 5 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-4 border-white/20 rounded-[2rem] transform -rotate-3" />
              <div className="absolute -inset-4 border-4 border-white/10 rounded-[2rem] transform rotate-3" />

              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content - Takes 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              {title}
              {subtitle && (
                <span className="block mt-2 text-3xl md:text-4xl font-bold text-white/80">
                  {subtitle}
                </span>
              )}
            </h2>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <PremiumButton variant="liquid" icon href={primaryButtonHref}>
                {primaryButtonText}
              </PremiumButton>
              <PhoneButton phone={SITE_CONFIG.phone} variant="glass" />
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 justify-center lg:justify-start pt-4"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 font-medium">500+ Happy Authors</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== VARIANT 3: FLOATING ====================
// 3D floating card effect with parallax
const FloatingCTA: FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText = "Get in Touch",
  primaryButtonHref = "/get-free-quote",
}) => {
  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        {/* Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Card shadow layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2.5rem] blur-2xl translate-y-4" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[2.5rem] blur-xl translate-y-8 scale-95" />

          {/* Main card */}
          <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-900/70 backdrop-blur-xl rounded-[2.5rem] border border-white/20 dark:border-gray-800/50 shadow-2xl overflow-hidden">
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16">
              {/* Content */}
              <div className="space-y-6 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Publishing Excellence</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="text-xl md:text-2xl font-semibold text-secondary">
                      {subtitle}
                    </p>
                  )}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <PremiumButton variant="gradient" icon href={primaryButtonHref}>
                    {primaryButtonText}
                  </PremiumButton>
                  <motion.a
                    href={`tel:${SITE_CONFIG.phone}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-foreground bg-card hover:bg-card/80 border border-border transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {SITE_CONFIG.phone}
                  </motion.a>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Floating elements around image */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl shadow-lg flex items-center justify-center"
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg flex items-center justify-center"
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </motion.div>

                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== VARIANT 4: SPLIT ====================
// Bold half-and-half design with contrasting colors
const SplitCTA: FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText = "Get in Touch",
  primaryButtonHref = "/get-free-quote",
}) => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[inherit]">
        {/* Left side - Dark with content */}
        <div className="relative bg-background py-16 lg:py-24 flex items-center">
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/20"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-8 md:px-12 lg:px-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <div className="w-12 h-1 bg-secondary rounded-full" />
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Featured</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                {subtitle}
              </p>
            )}

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <PremiumButton variant="shimmer" icon href={primaryButtonHref}>
                {primaryButtonText}
              </PremiumButton>
              <PhoneButton phone={SITE_CONFIG.phone} variant="outline" />
            </div>
          </motion.div>
        </div>

        {/* Right side - Image with overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative min-h-[400px] lg:min-h-full"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent lg:from-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-primary/20" />

          {/* Decorative corner element */}
          <div className="absolute bottom-0 right-0 w-32 h-32 lg:w-48 lg:h-48">
            <div className="absolute inset-0 bg-gradient-to-tl from-secondary to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== VARIANT 5: CINEMATIC ====================
// Full-width cinematic style with dramatic lighting
const CinematicCTA: FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText = "Get in Touch",
  primaryButtonHref = "/get-free-quote",
}) => {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      {/* Full background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-secondary/30" />
      </div>

      {/* Animated light beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/30 to-transparent"
        animate={{ opacity: [0, 1, 0], scaleY: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        animate={{ opacity: [0, 1, 0], scaleY: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-secondary" />
              <Sparkles className="w-6 h-6 text-secondary" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-secondary" />
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight">
              {title}
            </h2>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-secondary"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <PremiumButton variant="magnetic" icon href={primaryButtonHref}>
                {primaryButtonText}
              </PremiumButton>
              <PhoneButton phone={SITE_CONFIG.phone} variant="glass" />
            </motion.div>

            {/* Bottom decorative element */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-48 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== VARIANT 6: MINIMAL ====================
// Clean, sophisticated minimal design
const MinimalCTA: FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText = "Get in Touch",
  primaryButtonHref = "/get-free-quote",
}) => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at center, currentColor 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Minimal accent line */}
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />

            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-4 text-2xl font-medium text-secondary">
                  {subtitle}
                </p>
              )}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.a
                href={primaryButtonHref}
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-3 text-lg font-semibold text-primary hover:text-secondary transition-colors group"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <span className="text-muted-foreground hidden sm:inline">|</span>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </motion.div>

          {/* Image with elegant frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Elegant border frame */}
              <div className="absolute -inset-3 border border-border rounded-2xl" />
              <div className="absolute -inset-6 border border-border/50 rounded-3xl" />

              {/* Accent corner */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-secondary rounded-br-lg" />

              <div className="relative h-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== MAIN EXPORT ====================
export const CTASection: FC<CTASectionProps> = (props) => {
  const { variant = "spotlight" } = props;

  const variants = {
    spotlight: SpotlightCTA,
    diagonal: DiagonalCTA,
    floating: FloatingCTA,
    split: SplitCTA,
    cinematic: CinematicCTA,
    minimal: MinimalCTA,
  };

  const Component = variants[variant];
  return <Component {...props} />;
};
