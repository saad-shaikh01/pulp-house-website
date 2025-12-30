"use client";

import { FC } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

interface PricingItem {
  title: string;
  price: string;
  features: string[];
}

const PRICING_ITEMS: PricingItem[] = [
  {
    title: "AUTHOR SIGNING",
    price: "$8599.00",
    features: [
      "2-3 hour signing session",
      "25 book copies for signing",
      "Guaranteed Royalty",
      "Printed Marketing Materials",
      "6-month Bookstore Consignment and Display",
      "Online Availability at WB and RGB sites",
      "Facebook and Email Marketing Promotions",
    ],
  },
  {
    title: "AUTHOR OF THE MONTH",
    price: "$5,399.00",
    features: [
      "Prime Glass Display",
      "1 Retractable Banner",
      "10 book copies for display",
      "6-month Bookstore Consignment",
      "Online Availability at WB and RGB sites",
      "Weekly Facebook and Email Marketing Promotions",
    ],
  },
  {
    title: "AUTHOR OF THE WEEK",
    price: "$4,399.00",
    features: [
      "Prime Glass Display",
      "1 Retractable Banner",
      "10 book copies for display",
      "6-month Bookstore Consignment",
      "Online Availability at WB and RGB sites",
      "One-Time Facebook and Email Marketing Promotions",
    ],
  },
  {
    title: "CUMBERLAND BOOK LAUNCHING",
    price: "$7,599.00",
    features: [
      "Prime Glass Display",
      "1 Poster",
      "50 book copies",
      "6-month Bookstore Consignment",
      "Online Availability at WB and RGB sites",
      "One-Time Facebook and Email Marketing Promotions",
    ],
  },
  {
    title: "1-YEAR BOOKSTORE CONSIGNMENT",
    price: "$2,199.00",
    features: [
      "1-year consignment at Cookstown, BX Mall, and Cumberland Mall",
      "Author will initially send 30 copies to Cookstown and will be evenly distributed to the three locations, to be replenished accordingly within the consigned term. One author can consign multiple titles published under his name.",
      "Online Availability at WB and RGB sites",
      "Collective Facebook promotion/s",
    ],
  },
  {
    title: "6-MONTH BOOKSTORE CONSIGNMENT",
    price: "$1,599.00",
    features: [
      "6-month consignment at Cookstown, BX Mall, and Cumberland Mall",
      "Author will initially send 30 copies to Cookstown and will be evenly distributed to the three locations, to be replenished accordingly within the consigned term. One author can consign multiple titles published under his name.",
      "Online Availability at WB and RGB sites",
      "Collective Facebook promotion/s",
    ],
  },
];

const BookstorePage: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="from-primary/10 to-background bg-gradient-to-b px-4 py-20 text-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl space-y-6"
        >
          <h1 className="text-4xl font-bold md:text-6xl">Book Store</h1>
          <p className="text-muted-foreground text-xl leading-relaxed md:text-2xl">
            Welcome to Book Publishing at Cookstown, BX Mall, and Cumberland
            Mall, where every book opens a world of possibilities. Join us for
            author events and be part of our curated collection as we celebrate
            the joy of reading. Step inside and be the next literary discovery!
          </p>
        </motion.div>
      </section>

      {/* Intro Banner */}
      <section className="bg-secondary text-secondary-foreground px-4 py-12 text-center">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg font-medium md:text-xl">
            Welcome to The Pulp House Publishing at Cumberland Mall, where every
            book opens a world of possibilities. Join us for author events and
            be part of our curated collection as we celebrate the joy of
            reading. Step inside and be the next literary discovery!
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
                <div className="text-primary text-3xl font-bold">
                  {item.price}
                </div>
              </div>
              <div className="flex-1 p-8">
                <ul className="space-y-4">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="bg-primary/10 mt-1 flex h-[20px] min-w-[20px] items-center justify-center rounded-full">
                        <Check className="text-primary h-4 w-4" />
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {feature}
                      </span>
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
            {/* Using legacy paths as requested, expecting user to provide assets later or use these paths */}
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

export default BookstorePage;
