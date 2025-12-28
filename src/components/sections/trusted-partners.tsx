"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const LOGOS = [
  "/images/bg/amazon.svg",
  "/images/bg/ingram-spark.png",
  "/images/bg/google-play-book.png",
  "/images/bg/kindle.svg",
  "/images/bg/acx.png",
  "/images/home/pub_logo_8.webp", // Apple Books
  "/images/bg/kobo.svg",
  "/images/home/pub_logo_5.webp", // iBooks
];

export function TrustedPartners() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false }),
  ]);

  return (
    <section className="border-b bg-white py-12">
      <div className="container mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Trusted by Leading Self Publishing Platforms
        </h2>
        <p className="mt-2 text-gray-600">
          We collaborate with world-class publishing partners and global distribution networks.
        </p>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {LOGOS.map((logo, index) => (
            <div key={index} className="flex min-w-[150px] flex-[0_0_auto] items-center justify-center px-8 sm:min-w-[200px]">
              <img src={logo} alt="" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0" />
            </div>
          ))}
           {/* Duplicate for seamless loop if needed, though Embla AutoScroll handles it */}
           {LOGOS.map((logo, index) => (
            <div key={`dup-${index}`} className="flex min-w-[150px] flex-[0_0_auto] items-center justify-center px-8 sm:min-w-[200px]">
              <img src={logo} alt="" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
