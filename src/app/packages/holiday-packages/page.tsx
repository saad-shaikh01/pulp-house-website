"use client";

import { FC } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoTestimonialsSection } from "@/components/sections/home/VideoTestimonialsSection";
import { motion } from "framer-motion";
import { Check, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

const HolidayPackagesPage: FC = () => {
  return (
    <>

        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background overflow-hidden relative">
             {/* Snow Effect can be implemented here with CSS or a library if needed, simpler for now */}
             <div className="container px-4 text-center relative z-10">
                 <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     className="max-w-4xl mx-auto space-y-6"
                 >
                     <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Exclusive Holiday Publishing Packages
                     </h1>
                     <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Gift yourself the dream of becoming a published author this season! Our limited-time holiday packages offer everything you need to get your book out into the world at unbeatable prices.
                     </p>
                 </motion.div>
             </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20 bg-background px-4">
             <div className="container mx-auto">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                     {/* Package 1 */}
                     <div className="border border-border rounded-xl overflow-hidden shadow-lg bg-card flex flex-col hover:shadow-xl transition-shadow duration-300">
                         <div className="bg-primary/5 p-6 border-b border-border text-center">
                             <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
                             <div className="text-3xl font-bold text-primary">$699 <span className="text-sm font-normal text-muted-foreground">USD</span></div>
                         </div>
                         <div className="p-6 flex-grow">
                             <ul className="space-y-4">
                                 {[
                                    "Research",
                                    "Editing",
                                    "Proofreading",
                                    "Typesetting",
                                    "Layout Adjustment",
                                    "Formatting",
                                    "100% Ownership Rights",
                                    "Book Cover Design",
                                    "ISBN",
                                    "Publication on Amazon Kindle (KDP)",
                                    "EBook & Paperback Formats"
                                 ].map((item, idx) => (
                                     <li key={idx} className="flex items-start gap-3">
                                         <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                         <span className="text-sm text-foreground">{item}</span>
                                     </li>
                                 ))}
                             </ul>
                         </div>
                         <div className="p-6 border-t border-border bg-muted/20">
                             <div className="flex flex-col gap-3">
                                 <Link href="/get-free-quote" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 w-full">
                                    Get Started
                                 </Link>
                                 <div className="flex justify-between items-center text-sm text-muted-foreground">
                                     <a href="tel:8889099431" className="hover:text-primary flex items-center gap-1"><Phone className="w-3 h-3"/> (888) 909-9431</a>
                                     <button className="hover:text-primary flex items-center gap-1"><MessageCircle className="w-3 h-3"/> Live Chat</button>
                                 </div>
                             </div>
                         </div>
                     </div>

                     {/* Package 2 */}
                     <div className="border-2 border-primary rounded-xl overflow-hidden shadow-xl bg-card flex flex-col relative transform scale-105 z-10">
                         <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                             BEST VALUE
                         </div>
                         <div className="bg-primary/10 p-6 border-b border-primary/20 text-center">
                             <h3 className="text-2xl font-bold mb-2">Professional Package</h3>
                             <div className="text-3xl font-bold text-primary">$899 <span className="text-sm font-normal text-muted-foreground">USD</span></div>
                         </div>
                         <div className="p-6 flex-grow">
                             <ul className="space-y-4">
                                 {[
                                    "Research",
                                    "Editing",
                                    "Proofreading",
                                    "Typesetting",
                                    "Layout Adjustment",
                                    "Formatting",
                                    "100% Ownership Rights",
                                    "Book Cover Design",
                                    "ISBN",
                                    "Publication on Amazon, Barnes & Noble, Apple Books, Kobo, etc.",
                                    "EBook, Paperback & Hardcover Formats"
                                 ].map((item, idx) => (
                                     <li key={idx} className="flex items-start gap-3">
                                         <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                         <span className="text-sm text-foreground">{item}</span>
                                     </li>
                                 ))}
                             </ul>
                         </div>
                         <div className="p-6 border-t border-border bg-muted/20">
                             <div className="flex flex-col gap-3">
                                 <Link href="/get-free-quote" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 w-full">
                                    Get Started
                                 </Link>
                                 <div className="flex justify-between items-center text-sm text-muted-foreground">
                                     <a href="tel:8889099431" className="hover:text-primary flex items-center gap-1"><Phone className="w-3 h-3"/> (888) 909-9431</a>
                                     <button className="hover:text-primary flex items-center gap-1"><MessageCircle className="w-3 h-3"/> Live Chat</button>
                                 </div>
                             </div>
                         </div>
                     </div>

                     {/* Package 3 */}
                     <div className="border border-border rounded-xl overflow-hidden shadow-lg bg-card flex flex-col hover:shadow-xl transition-shadow duration-300">
                         <div className="bg-primary/5 p-6 border-b border-border text-center">
                             <h3 className="text-2xl font-bold mb-2">Global Publishing</h3>
                             <div className="text-3xl font-bold text-primary">$1099 <span className="text-sm font-normal text-muted-foreground">USD</span></div>
                         </div>
                         <div className="p-6 flex-grow">
                             <ul className="space-y-4">
                                 {[
                                    "Research",
                                    "Editing",
                                    "Proofreading",
                                    "Typesetting",
                                    "Layout Adjustment",
                                    "Formatting",
                                    "100% Ownership Rights",
                                    "Book Cover Design",
                                    "ISBN",
                                    "Publication on all Major Platforms (Amazon, B&N, Apple, etc.)",
                                    "Global Distribution to 40,000+ Retailers",
                                    "EBook, Paperback & Hardcover Formats"
                                 ].map((item, idx) => (
                                     <li key={idx} className="flex items-start gap-3">
                                         <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                         <span className="text-sm text-foreground">{item}</span>
                                     </li>
                                 ))}
                             </ul>
                         </div>
                         <div className="p-6 border-t border-border bg-muted/20">
                             <div className="flex flex-col gap-3">
                                 <Link href="/get-free-quote" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 w-full">
                                    Get Started
                                 </Link>
                                 <div className="flex justify-between items-center text-sm text-muted-foreground">
                                     <a href="tel:8889099431" className="hover:text-primary flex items-center gap-1"><Phone className="w-3 h-3"/> (888) 909-9431</a>
                                     <button className="hover:text-primary flex items-center gap-1"><MessageCircle className="w-3 h-3"/> Live Chat</button>
                                 </div>
                             </div>
                         </div>
                     </div>

                 </div>
             </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-muted/20 border-y border-border text-center px-4">
             <div className="container mx-auto max-w-3xl space-y-6">
                 <h2 className="text-3xl font-bold">Still unsure?</h2>
                 <p className="text-lg text-muted-foreground">
                    Let's talk. Click below to chat with our award‑winning experts – no pushy sales, just answers. We'll answer everything – like process, pricing, perks, and growth.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link href="/contact-us" className="inline-flex h-12 items-center justify-center rounded-md bg-foreground text-background px-8 text-sm font-medium shadow hover:bg-foreground/90 transition-colors">
                        Get Free Consultation
                     </Link>
                 </div>
             </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 text-center bg-background">
            <div className="container px-4">
                 <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
                 <VideoTestimonialsSection />
            </div>
        </section>

    </>
  );
};

export default HolidayPackagesPage;
