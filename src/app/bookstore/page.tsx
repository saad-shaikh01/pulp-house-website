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
      <Header />
      <main className="min-h-screen bg-background relative z-40">

        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">Book Store</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Welcome to Book Publishing at Cookstown, BX Mall, and Cumberland Mall, where every book opens a world of possibilities. Join us for author events and be part of our curated collection as we celebrate the joy of reading. Step inside and be the next literary discovery!
            </p>
          </motion.div>
        </section>

        {/* Intro Banner */}
        <section className="py-12 bg-secondary text-secondary-foreground text-center px-4">
            <div className="container max-w-4xl mx-auto">
                 <p className="text-lg md:text-xl font-medium">
                    Welcome to The Pulp House Publishing at Cumberland Mall, where every book opens a world of possibilities. Join us for author events and be part of our curated collection as we celebrate the joy of reading. Step inside and be the next literary discovery!
                 </p>
            </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PRICING_ITEMS.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 flex flex-col"
                    >
                         <div className="p-8 bg-muted/30 border-b border-border">
                             <h2 className="text-2xl font-bold mb-2 text-foreground">{item.title}</h2>
                             <div className="text-3xl font-bold text-primary">{item.price}</div>
                         </div>
                         <div className="p-8 flex-1">
                             <ul className="space-y-4">
                                 {item.features.map((feature, fIdx) => (
                                     <li key={fIdx} className="flex items-start gap-3">
                                         <div className="mt-1 min-w-[20px] h-[20px] rounded-full bg-primary/10 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-primary" />
                                         </div>
                                         <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                                     </li>
                                 ))}
                             </ul>
                         </div>
                         <div className="p-8 pt-0 mt-auto">
                            <a
                                href="/get-free-quote"
                                className="block w-full py-4 bg-primary text-primary-foreground text-center font-bold rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                GET STARTED
                            </a>
                         </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Partners Banner */}
        <section className="py-16 bg-muted/20 border-t border-border">
             <div className="container px-4 text-center">
                 <h2 className="text-3xl font-bold mb-10">We’ve Crafted Books For These Talented Authors!</h2>
                 <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                     {/* Using legacy paths as requested, expecting user to provide assets later or use these paths */}
                     <Image src="/images/bg/amazon.svg" alt="Amazon" width={102} height={31} className="h-8 w-auto object-contain" />
                     <Image src="/images/bg/kindle.svg" alt="Kindle" width={102} height={36} className="h-9 w-auto object-contain" />
                     <Image src="/images/bg/barnes-and-noble.svg" alt="Barnes and Noble" width={102} height={36} className="h-9 w-auto object-contain" />
                     <Image src="/images/bg/kobo.svg" alt="Kobo" width={102} height={52} className="h-10 w-auto object-contain" />
                     <Image src="/images/bg/apple-book.svg" alt="Apple Book" width={120} height={42} className="h-9 w-auto object-contain" />
                     <Image src="/images/bg/google-play-book.svg" alt="Google Play Books" width={130} height={42} className="h-9 w-auto object-contain" />
                 </div>
             </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default BookstorePage;
