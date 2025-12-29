import { HeroSection } from "@/components/sections/home/HeroSection";
import { TrustedPublishersSection } from "@/components/sections/home/TrustedPublishersSection";
import { QuoteSection } from "@/components/sections/home/QuoteSection";
import { StatsBubblesSection } from "@/components/sections/home/StatsBubblesSection";
import { PublishingJourneySection } from "@/components/sections/home/PublishingJourneySection";
import { ContactFormSection } from "@/components/sections/home/ContactFormSection";
import { RoadblocksSection } from "@/components/sections/home/RoadblocksSection";
import { CTASection } from "@/components/sections/home/CTASection";
import { TrustedPlatformsSection } from "@/components/sections/home/TrustedPlatformsSection";
import { ServiceCardsSection } from "@/components/sections/home/ServiceCardsSection";
import { HowItWorksSection } from "@/components/sections/home/HowItWorksSection";
import { WhyChooseUsSection } from "@/components/sections/home/WhyChooseUsSection";
import { VideoTestimonialsSection } from "@/components/sections/home/VideoTestimonialsSection";
import { SuccessStoriesSection } from "@/components/sections/home/SuccessStoriesSection";
import { FAQSection } from "@/components/sections/home/FAQSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Hero Section with Video Background & Stats Counter */}
      <HeroSection />

      {/* 2. Trusted Publishers Section */}
      <TrustedPublishersSection />

      {/* 3. Maya Angelou Quote Section */}
      <QuoteSection />

      {/* 4. Stats Bubbles Section - Animated Statistics */}
      <StatsBubblesSection />

      {/* 5. Publishing Journey - 5 Steps */}
      <PublishingJourneySection />

      {/* 6. Contact Form - Horizontal Layout */}
      <ContactFormSection />

      {/* 7. Roadblocks Section - 10 Problems & Solutions */}
      <RoadblocksSection />

      {/* 8. CTA - Premium Self-Publishing Partner (SPOTLIGHT VARIANT) */}
      {/* Dark dramatic design with animated particles & glowing effects */}
      <CTASection
        title="The Premium Self-Publishing Partner for U.S. and International Markets"
        description="You poured your effort into writing the book. Now, leave the publishing to our professional staff, with great attention, and global coverage. We ensure you have a shining project and have the ultimate benefit: 100% of the royalties are yours. Every single time."
        imageSrc="/images/cta1.webp"
        imageAlt="Professional publishing services"
        primaryButtonText="Book Free Consultation"
        variant="spotlight"
      />

      {/* 9. Trusted Platforms Slider */}
      <TrustedPlatformsSection />

      {/* 10. Service Cards Grid - 5 Main Services */}
      <ServiceCardsSection />

      {/* 11. CTA - Support Section (DIAGONAL VARIANT) */}
      {/* Bold diagonal split with asymmetric layout & animated lines */}
      <CTASection
        title="Your Book Deserves the Best Publishing Support"
        description="We understand that every author's journey is unique. Contact us to learn how our personalized book publishing services can help you achieve your publishing goals with ease."
        imageSrc="/images/cta-left.webp"
        imageAlt="Book marketing experts"
        primaryButtonText="Get Started Now"
        variant="diagonal"
      />

      {/* 12. How It Works Section - 5 Detailed Steps */}
      <HowItWorksSection />

      {/* 13. CTA - Your eBook Deserves to Be Read (FLOATING VARIANT) */}
      {/* 3D floating card effect with parallax & floating decorations */}
      <CTASection
        title="Your e-Book Deserves to Be Read"
        description="You've put your heart into writing your story now let us help you share it with the world. From expert editing to eye-catching design and global distribution, we make publishing simple, smooth, and stress-free."
        imageSrc="/images/cta-1.webp"
        imageAlt="Person reading book"
        primaryButtonText="Start Your Journey"
        variant="floating"
      />

      {/* 14. Why Authors Choose Us - 6 Reasons */}
      <WhyChooseUsSection />

      {/* 15. Video Testimonials Grid - 6 Videos */}
      <VideoTestimonialsSection />

      {/* 16. CTA - Still Not Sure? (CINEMATIC VARIANT) */}
      {/* Full-width cinematic style with dramatic lighting & light beams */}
      <CTASection
        title="Still Not Sure?"
        subtitle="Let Our Clients Change Your Mind."
        description="Real authors. Real results. Professional publishing services that deliver exceptional quality and measurable success for your literary dreams."
        imageSrc="/images/cta-3.webp"
        imageAlt="Typewriter with STORY text"
        primaryButtonText="See Our Success Stories"
        variant="cinematic"
      />

      {/* 17. Success Stories - Testimonial Carousel with Books */}
      <SuccessStoriesSection />

      {/* 18. CTA - Schedule a Free Consultation (SPLIT VARIANT) */}
      {/* Bold half-and-half design with contrasting dark/image sides */}
      <CTASection
        title="Schedule a Free Consultation"
        description="Connect with our publishing specialists to explore customized strategies for editing, design, and distribution crafted to help your eBook succeed."
        imageSrc="/images/cta2.webp"
        imageAlt="Consultation meeting"
        primaryButtonText="Book Your Call"
        variant="split"
      />

      {/* 19. FAQ Section - 10 Questions with Accordion */}
      <FAQSection />

      {/* 20. Final CTA - Ready to See Your Story on Shelves (MINIMAL VARIANT) */}
      {/* Clean, sophisticated minimal design with elegant framing */}
      <CTASection
        title="Ready to see your story on shelves?"
        subtitle="Let's make it happen."
        description="Avail the Best Self-Publishing Tools for Indie Authors in USA. Transform your manuscript into a professionally published book that reaches readers worldwide."
        imageSrc="/images/cta4.webp"
        imageAlt="Reading on armchair"
        primaryButtonText="Request a Quote"
        variant="minimal"
      />
    </div>
  );
}
