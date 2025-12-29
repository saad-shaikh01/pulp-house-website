"use client";

import { FC, useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/data";
import Link from "next/link";

interface PromoTickerProps {
  className?: string;
}

export const PromoTicker: FC<PromoTickerProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [tickerHeight, setTickerHeight] = useState(0);

  useEffect(() => {
    // Check if ticker was previously dismissed
    const isDismissed = localStorage.getItem("promo-ticker-dismissed");
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    // Update body padding when ticker visibility changes
    const ticker = document.getElementById("promo-ticker");
    if (ticker) {
      const height = isVisible ? ticker.offsetHeight : 0;
      setTickerHeight(height);
      document.body.style.paddingTop = `${height}px`;
    }
  }, [isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("promo-ticker-dismissed", "true");
  };

  if (!isVisible) return null;

  const tickerMessage = (
    <>
      <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 border border-white/30 rounded-full text-xs font-bold">
        CHRISTMAS SPECIAL
      </span>
      <span>
        Limited Time Offer — Flat <strong>50% OFF</strong> on Publishing Packages. Call Now:{" "}
        <a href={`tel:${SITE_CONFIG.phone}`} className="font-bold hover:underline">
          {SITE_CONFIG.phone}
        </a>
        .
      </span>
      <span className="opacity-70">•</span>
      <span>
        Get your book published & marketed with experts — <strong>Save 50%</strong> today!
      </span>
      <span className="opacity-70">•</span>
      <span>Offer Ends Soon — Book Your Slot Now.</span>
    </>
  );

  return (
    <div
      id="promo-ticker"
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[hsl(var(--ticker-bg))] to-[hsl(var(--ticker-bg-2))] text-white overflow-hidden border-b border-white/20",
        className
      )}
      role="region"
      aria-label="Promotional Announcement"
    >
      <div className="flex items-center gap-3 px-3 py-2.5">
        {/* Marquee Container */}
        <div className="flex-1 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Duplicate content for seamless loop */}
            <div className="flex items-center gap-3 pr-10 text-sm font-semibold">
              {tickerMessage}
            </div>
            <div className="flex items-center gap-3 pr-10 text-sm font-semibold">
              {tickerMessage}
            </div>
          </div>
        </div>

        {/* CTA Button - Hidden on mobile */}
        <Link
          href="/get-free-quote"
          className="hidden md:inline-flex items-center px-6 py-2 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 rounded-full text-sm font-semibold transition-all duration-200 backdrop-blur-sm"
        >
          Get Free Quote
        </Link>

        {/* Close Button - Commented out for now
        <button
          onClick={handleDismiss}
          className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close announcement"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
        */}
      </div>
    </div>
  );
};
