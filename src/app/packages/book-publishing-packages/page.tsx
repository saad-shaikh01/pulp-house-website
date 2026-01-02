"use client";

import { FC, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/home/CTASection";
import { VideoTestimonialsSection } from "@/components/sections/home/VideoTestimonialsSection";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// --- Types ---
interface PackageFeature {
  text: string;
  included: boolean;
}

interface Package {
  title: string;
  price: string;
  features: (string | { title: string; items: string[] })[];
  isPopular?: boolean;
}

// --- Data ---

const PACKAGES_GROUP_1: Package[] = [
  {
    title: "Basic Package",
    price: "$700 USD",
    features: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Basic Formatting",
          "2 Revisions Per Draft",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Kindle",
          "eBook Format",
        ],
      },
      {
        title: "Guarantees",
        items: [
          "No Royalties Share",
          "100% Ownership Rights",
          "100% Satisfaction",
        ],
      },
    ],
  },
  {
    title: "Start Up Package",
    price: "$2,000 USD",
    features: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "3 Revisions Per Draft",
        ],
      },
      {
        title: "Designing your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "eBook Format",
          "Paperback Format",
        ],
      },
      {
        title: "Guarantees",
        items: [
          "No Royalties Share",
          "100% Ownership Rights",
          "100% Satisfaction",
        ],
      },
    ],
  },
  {
    title: "Standard Package",
    price: "$3,000 USD",
    isPopular: true,
    features: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "5 Revisions Per Draft",
        ],
      },
      {
        title: "Designing your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode (2X)",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "Available on Barnes & Noble",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
        ],
      },
      {
        title: "Guarantees",
        items: [
          "No Royalties Share",
          "100% Ownership Rights",
          "100% Satisfaction",
        ],
      },
    ],
  },
];

const PACKAGES_GROUP_2: Package[] = [
  {
    title: "Expert Package",
    price: "$7,000 USD",
    features: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "5 Revisions Per Draft",
        ],
      },
      {
        title: "Designing your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode (2X)",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "Available on Barnes & Noble",
          "Available on Google Books",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
        ],
      },
      {
        title: "Online Presence",
        items: [
          "3 - 5 Page Authors Website",
          "1 - Year Domain & Hosting",
          "30 - 60 Seconds Book Trailer",
        ],
      },
      {
        title: "Guarantees",
        items: [
          "No Royalties Share",
          "100% Ownership Rights",
          "100% Satisfaction",
        ],
      },
    ],
  },
  {
    title: "Premium Package",
    price: "$15,000 USD",
    isPopular: true,
    features: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "5 Revisions Per Draft",
        ],
      },
      {
        title: "Designing your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode (2X)",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "Available on Barnes & Noble",
          "Available on Google Books",
          "Available on Smashwords",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
        ],
      },
      {
        title: "12 Months Brand Marketing",
        items: [
          "Logo Design (Complimentary)",
          "3 - 5 Page Authors Website",
          "1 - Year Domain & Hosting",
          "30 - 60 Seconds Book Trailer",
          "Organic Google Marketing",
          "Social Media Marketing (FB, Insta, Twitter)",
        ],
      },
      {
        title: "Guarantees",
        items: [
          "No Royalties Share",
          "100% Ownership Rights",
          "100% Satisfaction",
        ],
      },
    ],
  },
  {
    title: "Enterprise Package",
    price: "$25,000 USD",
    features: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "5 Revisions Per Draft",
        ],
      },
      {
        title: "Designing your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode (2X)",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "Available on Barnes & Noble",
          "Available on Google Books",
          "Available on Smashwords",
          "Available on Draft2Digital",
          "Available on ACX",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
          "Audiobook Format",
        ],
      },
      {
        title: "24 Months Brand Marketing",
        items: [
          "Logo Design (Complimentary)",
          "3 - 5 Page Authors Website",
          "2 - Year Domain & Hosting",
          "60 - 90 Seconds Video Trailer",
          "Organic Google Marketing",
          "Blogs & Article Postings",
          "Press Releases (150+ Platforms)",
          "Social Media Marketing (All Platforms)",
        ],
      },
      {
        title: "Guarantees",
        items: [
          "No Royalties Share",
          "100% Ownership Rights",
          "100% Satisfaction",
        ],
      },
    ],
  },
];

// --- Sub Components ---

const HeroSection: FC = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Publish Your Work with Confidence at{" "}
              <span className="text-primary">The Pulp House Publishing</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-secondary">
              Affordable Packages for Every Author!
            </p>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                At The Pulp House Publishing, we make publishing your book a
                smooth and affordable experience. Whether you're a first-time
                author or a seasoned writer, our tailored publishing packages
                offer everything you need to get your work into the world.
              </p>
              <p>
                With expert support every step of the way, we’re here to help
                your story reach its full potential. Explore our packages and
                choose the one that’s right for you today!
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
             <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-muted flex items-center justify-center">
                {/* Placeholder for the certificate image if it exists, or a relevant illustration */}
                <div className="text-center p-8">
                   <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-10 h-10 text-primary" />
                   </div>
                   <h3 className="text-xl font-bold mb-2">Verified Process</h3>
                   <p className="text-sm text-muted-foreground">We ensure quality at every step.</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PricingCard: FC<{ packageData: Package }> = ({ packageData }) => {
  return (
    <motion.div
      className="flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 relative group"
    >
      {packageData.isPopular && (
        <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
          BEST VALUE
        </div>
      )}
      <div className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-b border-border">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {packageData.title}
        </h3>
        <div className="text-3xl font-bold text-primary">
          {packageData.price}
        </div>
      </div>
      <div className="p-6 flex-1 overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
        <div className="space-y-6">
          {packageData.features.map((feature, idx) => {
            if (typeof feature === "string") {
              return (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[18px] h-[18px] rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              );
            } else {
              return (
                <div key={idx}>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-1 h-4 bg-secondary rounded-full" />
                    {feature.title}
                  </h4>
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                         <div className="mt-1 min-w-[18px] h-[18px] rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                         </div>
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="p-6 border-t border-border bg-muted/20">
        <a
          href="/get-free-quote"
          className="block w-full py-3 px-4 bg-primary text-primary-foreground text-center font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Get A Quote
        </a>
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <a href="tel:(888)909-9431" className="hover:text-foreground transition-colors">
            (888) 909-9431
          </a>
          <button className="hover:text-foreground transition-colors">
            Live Chat Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ComparisonTable: FC<{
  title: string;
  packages: Package[];
  data: {
    category: string;
    rows: { label: string; values: (boolean | string)[] }[];
  }[];
}> = ({ title, packages, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-12 w-full max-w-5xl mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        data-testid="compare-btn"
        className="w-full flex items-center justify-center gap-2 py-4 bg-secondary/10 hover:bg-secondary/20 text-secondary font-bold rounded-xl transition-colors mb-6"
      >
        {title}
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="overflow-x-auto border border-border rounded-xl bg-card shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/50 text-xs uppercase">
                  <tr>
                    <th className="px-6 py-4 font-bold text-muted-foreground">Features</th>
                    {packages.map((pkg, idx) => (
                      <th key={idx} className="px-6 py-4 font-bold text-center text-foreground">
                        {pkg.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((category, catIdx) => (
                    <TableSection key={catIdx}>
                      <tr className="bg-primary/5">
                        <td
                          colSpan={packages.length + 1}
                          className="px-6 py-3 font-bold text-primary"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.rows.map((row, rowIdx) => (
                        <tr
                          key={rowIdx}
                          className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                        >
                          <td className="px-6 py-3 font-medium text-foreground">
                            {row.label}
                          </td>
                          {row.values.map((val, valIdx) => (
                            <td key={valIdx} className="px-6 py-3 text-center">
                              {val === true ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : val === false ? (
                                <X className="w-5 h-5 text-red-400 mx-auto" />
                              ) : (
                                <span className="text-foreground font-medium">{val}</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </TableSection>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Fragment helper for table mapping
const TableSection: FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;


const PackagesPage: FC = () => {
  // Comparison Data Group 1
  const comparisonData1 = [
    {
      category: "Preparing Your Manuscript",
      rows: [
        { label: "Editorial Support", values: [true, true, true] },
        { label: "Proofreading", values: [true, true, true] },
        { label: "Typesetting", values: [true, true, true] },
        { label: "Layout Adjustment", values: [true, true, true] },
        { label: "Basic Formatting", values: [true, true, true] },
        { label: "Publishing Standard Formatting", values: [false, true, true] },
        { label: "Revisions Per Draft", values: ["2", "3", "5"] },
      ],
    },
    {
      category: "Preparing your Book Cover",
      rows: [
        { label: "Graphic OR Illustrated Design", values: [false, true, true] },
        { label: "Cover Layout", values: [false, true, true] },
        { label: "Cover Formatting", values: [false, true, true] },
        { label: "Front, Back & Spine", values: [false, true, true] },
        { label: "ISBN + Barcode (2X)", values: [false, false, true] },
      ],
    },
    {
        category: "Preparing for Print and Distribution",
        rows: [
            { label: "Account Creation", values: [true, true, true] },
            { label: "Account Verification", values: [true, true, true] },
            { label: "Account Optimization", values: [true, true, true] },
            { label: "Kindle", values: [true, true, true] },
            { label: "Amazon", values: [false, true, true] },
            { label: "Barnes and Noble", values: [false, false, true] },
            { label: "eBook Format", values: [true, true, true] },
            { label: "Paperback Format", values: [false, true, true] },
            { label: "Hardcover Format", values: [false, false, true] },
        ]
    },
    {
        category: "Guarantees",
        rows: [
            { label: "No Royalties Share", values: [true, true, true] },
            { label: "100% Ownership Rights", values: [true, true, true] },
            { label: "100% Satisfaction", values: [true, true, true] },
        ]
    }
  ];

  // Comparison Data Group 2
  const comparisonData2 = [
    {
      category: "Preparing Your Manuscript",
      rows: [
        { label: "Editorial Support", values: [true, true, true] },
        { label: "Proofreading", values: [true, true, true] },
        { label: "Typesetting", values: [true, true, true] },
        { label: "Layout Adjustment", values: [true, true, true] },
        { label: "Publishing Standard Formatting", values: [true, true, true] },
        { label: "Revisions Per Draft", values: ["5", "5", "5"] },
      ],
    },
     {
      category: "Preparing your Book Cover",
      rows: [
        { label: "Graphic OR Illustrated Design", values: [true, true, true] },
        { label: "Cover Layout", values: [true, true, true] },
        { label: "Cover Formatting", values: [true, true, true] },
        { label: "Front, Back & Spine", values: [true, true, true] },
        { label: "ISBN + Barcode (2X)", values: [true, true, true] },
      ],
    },
    {
        category: "Preparing for Print and Distribution",
        rows: [
            { label: "Account Creation", values: [true, true, true] },
            { label: "Account Verification", values: [true, true, true] },
            { label: "Account Optimization", values: [true, true, true] },
            { label: "Kindle", values: [true, true, true] },
            { label: "Amazon", values: [true, true, true] },
            { label: "Barnes and Noble", values: [true, true, true] },
            { label: "Google Books", values: [true, true, true] },
            { label: "Smashwords", values: [false, true, true] },
            { label: "Draft2Digital", values: [false, false, true] },
            { label: "ACX", values: [false, false, true] },
            { label: "eBook Format", values: [true, true, true] },
            { label: "Paperback Format", values: [true, true, true] },
            { label: "Hardcover Format", values: [true, true, true] },
            { label: "Audiobook Format", values: [false, false, true] },
        ]
    },
    {
        category: "Online Presence",
        rows: [
            { label: "Authors Website", values: ["3-5 Pages", "3-5 Pages", "3-5 Pages"] },
            { label: "Domain & Hosting", values: ["1 Year", "1 Year", "2 Year"] },
        ]
    },
     {
        category: "Marketing & Branding",
        rows: [
            { label: "Book Trailer", values: ["30-60 Seconds", "30-60 Seconds", "60-90 Seconds"] },
            { label: "Social Media Marketing", values: [false, "3 Platforms", "6 Platforms"] },
            { label: "Organic Google Marketing", values: [false, "6 Months", "12 Months"] },
            { label: "Blogs & Article Postings", values: [false, false, true] },
            { label: "Press Releases", values: [false, false, "150+ Platforms"] },
        ]
    },
    {
        category: "Guarantees",
        rows: [
            { label: "100% Royalties", values: [true, true, true] },
            { label: "100% Ownership Rights", values: [true, true, true] },
        ]
    }
  ];

  return (
    <>
        <div>
          <HeroSection />
        </div>

        {/* Group 1 */}
        <section className="py-16 md:py-24 px-4 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Packages</h2>
             <p className="text-muted-foreground text-lg">Perfect for getting started with your publishing journey.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES_GROUP_1.map((pkg, idx) => (
              <PricingCard key={idx} packageData={pkg} />
            ))}
          </div>
          <ComparisonTable packages={PACKAGES_GROUP_1} data={comparisonData1} title="Compare Core Packages" />
        </section>

        {/* Group 2 */}
        <section className="py-16 md:py-24 px-4 container mx-auto bg-muted/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-5xl font-bold mb-4">Advanced Packages</h2>
             <p className="text-muted-foreground text-lg">Comprehensive solutions for serious authors.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES_GROUP_2.map((pkg, idx) => (
              <PricingCard key={idx} packageData={pkg} />
            ))}
          </div>
          <ComparisonTable packages={PACKAGES_GROUP_2} data={comparisonData2} title="Compare Advanced Packages" />
        </section>

        {/* Call to Action */}
        <CTASection
          title="Still unsure?"
          subtitle="Let's talk."
          description="Click below to chat with our award‑winning experts – no pushy sales, just answers. We'll answer everything – like process, pricing, perks, and growth."
          imageSrc="/images/cta-3.webp"
          imageAlt="Consultation"
          primaryButtonText="Get Free Consultation"
          primaryButtonHref="/contact-us"
          variant="cinematic"
        />

        {/* Testimonials */}
        <VideoTestimonialsSection />
    </>
  );
};

export default PackagesPage;
