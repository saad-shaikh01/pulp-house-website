import { Metadata } from "next";
import { ContactHeroSection } from "@/components/sections/contact/ContactHeroSection";
import { ContactTestimonialsSection } from "@/components/sections/contact/ContactTestimonialsSection";
import { ContactResultsSection } from "@/components/sections/contact/ContactResultsSection";

export const metadata: Metadata = {
  title: "Contact Us | The Pulp House Publishing",
  description: "Get in touch with The Pulp House Publishing. We're ready to help you publish your book on all major platforms and make success your future.",
  keywords: ["contact", "book publishing", "get in touch", "publishing services", "author support"],
  openGraph: {
    title: "Contact Us | The Pulp House Publishing",
    description: "Get in touch with The Pulp House Publishing. We're ready to help you publish your book on all major platforms.",
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Hero Section with Contact Form */}
      <ContactHeroSection />

      {/* 2. Video Testimonials - What Our Clients Say */}
      <ContactTestimonialsSection />

      {/* 3. Our Results Section - 3 Key Benefits */}
      <ContactResultsSection />
    </div>
  );
}
