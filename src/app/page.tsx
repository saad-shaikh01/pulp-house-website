import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { TrustedPartners } from "@/components/sections/trusted-partners";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Process } from "@/components/sections/process";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ContactFormSection } from "@/components/sections/contact-form-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Stats />

      {/* "The Premium Self-Publishing Partner..." CTA */}
      <CtaBanner
        title="The Premium Self-Publishing Partner for U.S. and International Markets"
        description="You poured your effort into writing the book. Now, leave the publishing to our professional staff, with great attention, and global coverage. We ensure you have a shining project and have the ultimate benefit: 100% of the royalties are yours. Every single time."
        image="/images/home/cta1.webp"
        variant="dark"
      />

      <TrustedPartners />
      <ServicesGrid />

      {/* "Your Book Deserves the Best..." CTA */}
      <CtaBanner
        title="Your Book Deserves the Best Publishing Support"
        description="We understand that every author’s journey is unique. Contact us to learn how our personalized book publishing services can help you achieve your publishing goals with ease."
        image="/images/home/cta-right.webp"
        // Note: The PHP site had left/right images, simplifying to one for cleaner mobile/desktop
        variant="default"
      />

      <Process />

      {/* "Your e-Book Deserves to Be Read" CTA */}
      <CtaBanner
        title="Your e-Book Deserves to Be Read"
        description="You’ve put your heart into writing your story now let us help you share it with the world. From expert editing to eye-catching design and global distribution, we make publishing simple, smooth, and stress-free."
        image="/images/home/cta-1.webp"
        variant="dark"
        reversed
      />

      <WhyChooseUs />
      <Testimonials />

      {/* "Still Not Sure?" CTA */}
      <CtaBanner
        title="Still Not Sure?"
        subtitle="Let Our Clients Change Your Mind."
        image="/images/home/cta-3.webp"
        variant="dark"
      />

      <ContactFormSection />
    </main>
  );
}
