import { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { AboutJourneySection } from "@/components/sections/about/AboutJourneySection";
import { AboutWhoWeAreSection } from "@/components/sections/about/AboutWhoWeAreSection";
import { AboutServicesSection } from "@/components/sections/about/AboutServicesSection";
import { AboutWhyChooseUsSection } from "@/components/sections/about/AboutWhyChooseUsSection";
import { AboutAchievementsSection } from "@/components/sections/about/AboutAchievementsSection";
import { AboutNewsletterSection } from "@/components/sections/about/AboutNewsletterSection";

export const metadata: Metadata = {
  title: "About Us | The Pulp House Publishing",
  description: "The Pulp House Publishing is a full-service publishing company for indie authors. Since 1988, we've helped authors turn their ideas into books that reach every part of the world.",
  keywords: [
    "about pulp house publishing",
    "book publishing company",
    "indie authors",
    "self-publishing",
    "Austin Texas publisher",
    "ghostwriting agency",
    "book marketing",
  ],
  openGraph: {
    title: "About Us | The Pulp House Publishing",
    description: "Full-service publishing company helping indie authors since 1988. We turn your ideas into books that reach readers worldwide.",
    type: "website",
    images: [
      {
        url: "/images/about-us/about-hero.webp",
        width: 1200,
        height: 630,
        alt: "The Pulp House Publishing - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | The Pulp House Publishing",
    description: "Full-service publishing company helping indie authors since 1988.",
  },
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Hero Section - Welcome to Pulp House Publishing */}
      <AboutHeroSection />

      {/* 2. Our Journey Section - Company history with stats */}
      <AboutJourneySection />

      {/* 3. Who We Are Section - Features (Efficient, Reliable, Experienced) */}
      <AboutWhoWeAreSection />

      {/* 4. Services Section - Book Writing, Publishing, Marketing */}
      <AboutServicesSection />

      {/* 5. Why Authors Choose Us - 4 value proposition cards */}
      <AboutWhyChooseUsSection />

      {/* 6. Our Achievements Section - Stats and global presence */}
      <AboutAchievementsSection />

      {/* 7. Newsletter/CTA Section - Final call to action */}
      <AboutNewsletterSection />
    </div>
  );
}
