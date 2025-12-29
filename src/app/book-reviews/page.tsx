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
            <h1 className="text-4xl md:text-6xl font-bold">Book Reviews</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              At The Pulp House Publishing, we connect authors with reputable reviewers who can provide insightful, impactful critiques. A well-placed review not only enhances your book's credibility but also helps it reach a wider audience.
            </p>
            <p className="text-lg text-primary font-medium">
               Elevate your book’s reputation with our professional book review services.
            </p>
          </motion.div>
        </section>

        {/* Intro Banner */}
        <section className="py-12 bg-secondary text-secondary-foreground text-center px-4">
            <div className="container max-w-4xl mx-auto">
                 <h2 className="text-2xl md:text-3xl font-bold mb-4">BOOK REVIEWS</h2>
                 <p className="text-lg md:text-xl font-medium opacity-90">
                    The book publishing world has grown so huge during the past decades. While this is a delight to readers and book enthusiasts, this could mean tougher competition for writers. If you want to stand out in the deeply-saturated literary market, having a professional book review is a must. Professional Book Review providers such as The US Review of Books, Pacific Book Review, and Hollywood Book Reviews are used by the vast majority of customers to decide on their reading list.
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
                             {item.price && <div className="text-3xl font-bold text-primary">{item.price}</div>}
                         </div>
                         <div className="p-8 flex-1">
                             <ul className="space-y-4">
                                 {item.features.map((feature, fIdx) => (
                                     <li key={fIdx} className="flex items-start gap-3">
                                         {/* Using a bullet or check based on content, but preserving legacy text structure */}
                                         <p className="text-muted-foreground text-sm leading-relaxed">{feature}</p>
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

export default BookReviewsPage;
