"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/functions";
import type { LucideIcon } from "lucide-react";

/**
 * Unified Button component system (v2)
 *
 * Consolidates all button variants into a single component while running
 * parallel to existing button.tsx and premium-button.tsx.
 *
 * Features:
 * - 15+ variants (standard, premium, specialized)
 * - Icon support (left/right)
 * - Link support (href prop)
 * - Motion animations (opt-in)
 * - Fully theme-aware
 *
 * Usage:
 * ```tsx
 * <ButtonV2 variant="cta" size="lg" rounded="full">Get Started</ButtonV2>
 * <ButtonV2 href="/about" variant="gradient" iconRight={ArrowRight}>Learn More</ButtonV2>
 * <ButtonV2 variant="glow" motion>Animated</ButtonV2>
 * ```
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        // Standard variants
        default: "bg-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-90 shadow-lg",
        outline: "border-2 dark:bg-white/10 border-[#c938d6] bg-[#fff] !text-[#c938d6] dark:text-white  ",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        // Premium variants (from PremiumButton)
        glow: "bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] text-white shadow-[0_0_20px_rgba(158,39,169,0.5)] hover:shadow-[0_0_40px_rgba(158,39,169,0.8)] relative overflow-hidden",
        gradient: "bg-gradient-to-br from-primary via-secondary to-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-secondary/30",
        shimmer: "bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-2xl relative overflow-hidden",
        neon: "bg-transparent border-2 border-secondary text-white shadow-[0_0_15px_rgba(158,39,169,0.5)] hover:shadow-[0_0_30px_rgba(158,39,169,0.8)]",
        glass: "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/40",
        magnetic: "bg-gradient-to-br from-primary via-secondary to-primary text-white shadow-xl hover:shadow-2xl hover:shadow-secondary/40",
        liquid: "bg-gradient-to-br from-primary to-secondary text-white shadow-2xl hover:shadow-[0_20px_50px_rgba(158,39,169,0.5)] relative overflow-hidden",

        // Specialized variants
        phone: "bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:border-white/50 text-white",
        // cta: "bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/50",
        cta: "btn-primary",
      },

      size: {
        sm: "h-9 px-4 py-2 text-sm",
        default: "h-11 px-6 py-3 text-base",
        lg: "h-12 px-8 py-4 text-lg",
        xl: "h-14 px-10 py-5 text-xl",
        icon: "h-10 w-10 p-0",
        iconSm: "h-8 w-8 p-0",
        iconLg: "h-12 w-12 p-0",
      },

      rounded: {
        default: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-[12px]",
      },

      animation: {
        none: "",
        scale: "",
        lift: "",
        scaleLift: "",
        // scale: "hover:scale-105 active:scale-95",
        // lift: "hover:-translate-y-1 active:translate-y-0",
        // scaleLift: "hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      animation: "scale",
    },
  }
);

export interface ButtonV2Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Use Slot component for composition */
  asChild?: boolean;
  /** Make button a link (uses Next.js Link) */
  href?: string;
  /** Icon to display on the left */
  iconLeft?: React.ReactNode | LucideIcon;
  /** Icon to display on the right */
  iconRight?: React.ReactNode | LucideIcon;
  /** Enable Framer Motion animations */
  motion?: boolean;
  /** Show loading state */
  loading?: boolean;
}

const ButtonV2 = React.forwardRef<HTMLButtonElement, ButtonV2Props>(
  (
    {
      className,
      variant,
      size,
      rounded,
      animation,
      asChild = false,
      href,
      iconLeft,
      iconRight,
      motion: enableMotion = false,
      loading = false,
      children,
      ...props
    },
    ref
  ) => {
    // Determine component type
    const Comp = asChild
      ? Slot
      : href
        ? Link
        : enableMotion
          ? motion.button
          : "button";

    // Render icon helper
    const renderIcon = (icon: React.ReactNode | LucideIcon, side: "left" | "right") => {
      if (!icon) return null;
      if (React.isValidElement(icon)) return icon;

      const IconComponent = icon as LucideIcon;
      return (
        <IconComponent
          className={cn(
            "h-5 w-5",
            side === "right" && "group-hover:translate-x-1 transition-transform"
          )}
        />
      );
    };

    const content = (
      <>
        {loading && <LoadingSpinner />}
        {!loading && iconLeft && renderIcon(iconLeft, "left")}
        {children}
        {!loading && iconRight && renderIcon(iconRight, "right")}
      </>
    );

    const baseClassName = cn(
      buttonVariants({ variant, size, rounded, animation }),
      "group btn",
      className
    );

    const baseProps = {
      className: baseClassName,
      ...(href && !asChild ? { href } : {}),
      ...props,
    };

    // Motion-specific props
    if (enableMotion && !asChild && !href) {
      return (
        <motion.button
          ref={ref as any}
          whileHover={animation !== "none" ? { scale: 1.05 } : undefined}
          whileTap={animation !== "none" ? { scale: 0.95 } : undefined}
          transition={{ duration: 0.2 }}
          {...baseProps}
        >
          {content}
        </motion.button>
      );
    }

    return (
      <Comp ref={ref as any} {...baseProps}>
        {content}
      </Comp>
    );
  }
);

ButtonV2.displayName = "ButtonV2";

/** Loading spinner component */
const LoadingSpinner = () => (
  <svg
    className="animate-spin h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export { ButtonV2, buttonVariants };
