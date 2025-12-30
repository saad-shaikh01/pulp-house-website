"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/data";
import { ModeToggle } from "@/components/global/mode-toggle";

interface TopBarProps {
  className?: string;
}

export const TopBar: FC<TopBarProps> = ({ className }) => {
  return (
    <div className={cn("bg-primary text-primary-foreground px-5", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center py-6">
          {/* Logo + Tagline - Left Side */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex-shrink-0" aria-label="navigate to home page">
                <Image
                  src="/images/logo-white.webp"
                  alt={SITE_CONFIG.name}
                  title={SITE_CONFIG.name}
                  width={231}
                  height={66}
                  priority
                  className="h-auto w-[180px] lg:w-[231px]"
                />
              </Link>
              <div className="hidden sm:block h-12 w-px bg-white/30" />
              <p className="hidden sm:block text-sm lg:text-base font-semibold leading-tight max-w-[285px]">
                {SITE_CONFIG.description}
              </p>
            </div>
          </div>

          {/* Contact Info - Center */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-sm font-semibold hover:text-primary-foreground/80 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call Us: {SITE_CONFIG.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-sm font-semibold hover:text-primary-foreground/80 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="truncate">{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>

          {/* CTA Buttons - Right Side */}
          <div className="lg:col-span-3 flex items-center justify-start lg:justify-end gap-3">
            <ModeToggle />
            <Link
              href="/get-free-quote"
              className="inline-flex items-center px-5 py-2 bg-white text-primary hover:bg-white/90 border-2 border-secondary rounded-full text-sm font-semibold transition-all duration-200"
            >
              Submission
            </Link>
            {/* Optional: Start Live Chat Button - Hidden by default */}
            {/* <button
              className="hidden xl:inline-flex items-center px-5 py-2 bg-transparent hover:bg-white/10 border-2 border-white rounded-full text-sm font-semibold transition-all duration-200"
              type="button"
            >
              Start Live Chat
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
