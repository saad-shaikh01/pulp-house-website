"use client";

import { FC } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

interface PricingItem {
  title: string;
  price?: string;
  features: string[];
}

const PRICING_ITEMS: PricingItem[] = [
  {
    title: "THE US REVIEW OF BOOKS",
    price: "$2,399.00",
    features: [
      "The US Review of Books is one of the forerunners in the book review industry. They support the entire writing community by giving every book equal and fair consideration, lending all authors visibility.",
    ],
  },
  {
    title: "PACIFIC BOOK REVIEW",
    price: "$2,399.00",
    features: [
      "Pacific Book Review specialize in authoritative, objective book reviews written by specialists selected for their knowledge and expertise in each genre. They review books for well-known and emerging authors.",
    ],
  },
  {
    title: "HOLLYWOOD BOOK REVIEWS",
    price: "$2,399.00",
    features: [
      "If you wish to bring your book to the screen, Hollywood Book Reviews could help you. The Hollywood Book Reviews recommend promising books to producers or production companies on your behalf.",
    ],
  },
  {
    title: "The Pulp House Publishing REVIEW",
    // Price commented out in source, omitting here or could be "Contact for Pricing"
    features: [
      "In a mission to help our writers stand out in a deeply saturated publishing market, The Pulp House Publishing is continuously building partnerships within our local community. Part of this growing community...",
    ],
  },
  {
    title: "IndieReader",
    price: "$3,299.00",
    features: [
      "An IndieReader book review will help set your title apart from the rest, increasing your book’s chance for discoverability. Some authors use their book reviews as a way to improve their writing skills.",
    ],
  },
  {
    title: "Lucky 4-Leaf Clover Review Marketing Bundle",
    price: "$10,649.00",
    features: [
      "Our most premium review bundle is now available exclusively for our most determined and promising authors. Get four professional reviews, plus free republication...",
    ],
  },
];

const BookReviewsPage: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="from-primary/10 to-background bg-linear-to-b px-4 py-20 text-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl space-y-6"
        >
          <h1 className="text-4xl font-bold md:text-6xl">Book Reviews</h1>
          <p className="text-muted-foreground text-xl leading-relaxed md:text-2xl">
            At The Pulp House Publishing, we connect authors with reputable
            reviewers who can provide insightful, impactful critiques. A
            well-placed review not only enhances your book's credibility but
            also helps it reach a wider audience.
          </p>
          <p className="text-primary text-lg font-medium">
            Elevate your book’s reputation with our professional book review
            services.
          </p>
        </motion.div>
      </section>

      {/* Intro Banner */}
      <section className="bg-secondary text-secondary-foreground px-4 py-12 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">BOOK REVIEWS</h2>
          <p className="text-lg font-medium opacity-90 md:text-xl">
            The book publishing world has grown so huge during the past decades.
            While this is a delight to readers and book enthusiasts, this could
            mean tougher competition for writers. If you want to stand out in
            the deeply-saturated literary market, having a professional book
            review is a must. Professional Book Review providers such as The US
            Review of Books, Pacific Book Review, and Hollywood Book Reviews are
            used by the vast majority of customers to decide on their reading
            list.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PRICING_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border-border hover:border-primary/50 flex flex-col overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="bg-muted/30 border-border border-b p-8">
                <h2 className="text-foreground mb-2 text-2xl font-bold">
                  {item.title}
                </h2>
                {item.price && (
                  <div className="text-primary text-3xl font-bold">
                    {item.price}
                  </div>
                )}
              </div>
              <div className="flex-1 p-8">
                <ul className="space-y-4">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      {/* Using a bullet or check based on content, but preserving legacy text structure */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto p-8 pt-0">
                <a
                  href="/get-free-quote"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 block w-full rounded-lg py-4 text-center font-bold transition-colors"
                >
                  GET STARTED
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Banner */}
      <section className="bg-muted/20 border-border border-t py-16">
        <div className="container px-4 text-center">
          <h2 className="mb-10 text-3xl font-bold">
            We’ve Crafted Books For These Talented Authors!
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale transition-all duration-500 hover:grayscale-0 md:gap-12">
            <Image
              src="/images/amazon.svg"
              alt="Amazon"
              width={102}
              height={31}
              className="h-8 w-auto object-contain"
            />
            <Image
              src="/images/kindle.svg"
              alt="Kindle"
              width={102}
              height={36}
              className="h-9 w-auto object-contain"
            />
            <Image
              src="/images/barnes-and-noble.svg"
              alt="Barnes and Noble"
              width={102}
              height={36}
              className="h-9 w-auto object-contain"
            />
            <Image
              src="/images/kobo.svg"
              alt="Kobo"
              width={102}
              height={52}
              className="h-10 w-auto object-contain"
            />
            <Image
              src="/images/apple-book.svg"
              alt="Apple Book"
              width={120}
              height={42}
              className="h-9 w-auto object-contain"
            />
            <Image
              src="/images/google-play-book.svg"
              alt="Google Play Books"
              width={130}
              height={42}
              className="h-9 w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookReviewsPage;
