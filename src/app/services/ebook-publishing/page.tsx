"use client";

import { FC } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { VideoTestimonialsSection } from "@/components/sections/home/VideoTestimonialsSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Circle } from "lucide-react";

const EbookPublishingPage: FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background relative z-40">

        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
             <div className="container px-4">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                     <motion.div
                         initial={{ opacity: 0, x: -20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8 }}
                         className="space-y-6"
                     >
                         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Fast, Affordable Ebook Publishing Services
                         </h1>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            Reach millions of readers worldwide with professional ebook conversion and distribution. The digital reading revolution is here, and your book belongs on every screen. We transform your manuscript into high-quality ebook formats (ePub, Mobi, PDF) compatible with Kindle, Apple Books, Kobo, and more.
                         </p>

                         <div className="pt-6">
                             <h2 className="text-2xl font-bold mb-4">Ebook Publishing Benefits</h2>
                             <ul className="space-y-4">
                                 {[
                                    "Global Reach: Distribute to readers in every corner of the world instantly.",
                                    "Cost-Effective: Lower production costs mean higher potential royalties.",
                                    "Speed to Market: Get your book published and for sale in a fraction of the time.",
                                    "Dynamic Features: Include links, images, and interactive elements."
                                 ].map((item, idx) => (
                                     <li key={idx} className="flex items-start gap-3">
                                         <div className="mt-1 min-w-[20px] h-[20px] rounded-full bg-primary/10 flex items-center justify-center">
                                             <Check className="w-4 h-4 text-primary" />
                                         </div>
                                         <span className="text-muted-foreground text-sm">
                                             {item}
                                         </span>
                                     </li>
                                 ))}
                             </ul>
                         </div>
                     </motion.div>

                     <motion.div
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                         className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl"
                     >
                         <div className="mb-6">
                            <h3 className="text-xl font-bold">Go Digital with Your Book Today!</h3>
                         </div>
                         <ContactForm />
                     </motion.div>
                 </div>
             </div>
        </section>

        {/* Feature Section 1 */}
        <section className="py-20 bg-background text-center px-4">
             <div className="container max-w-5xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Ebook Conversion & Formatting</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                    Don't let poor formatting ruin your reader's experience. We manually convert and format your book to ensure it looks perfect on every device, from smartphones to dedicated e-readers. Our experts handle complex layouts, images, and special characters with precision.
                 </p>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <div className="relative rounded-xl overflow-hidden border border-border bg-muted">
                         <Image
                            src="/images/simple/ebook-publishing-services.webp"
                            alt="Ebook Publishing Services"
                            width={548}
                            height={325}
                            className="w-full h-auto object-cover"
                         />
                     </div>
                     <div className="text-left space-y-6">
                         <h3 className="text-2xl font-bold">Maximize Your Readership</h3>
                         <p className="text-muted-foreground">
                            Ebooks allow you to tap into a vast market of digital readers. We help you navigate the various platforms and choose the best distribution strategy for your genre. With our help, your book will be available on Amazon, Apple Books, Barnes & Noble, Google Play, and many other online retailers.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 pt-2">
                             <a
                                href="/get-free-quote"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                             >
                                Publish My Ebook
                             </a>
                             <a
                                href="tel:(888)909-9431"
                                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground gap-2"
                             >
                                <Phone className="w-4 h-4" />
                                (888) 909-9431
                             </a>
                         </div>
                     </div>
                 </div>
             </div>
        </section>

        {/* Banner */}
        <section className="py-16 bg-muted/10 border-y border-border">
             <div className="container px-4">
                 <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
                     <div className="flex-shrink-0">
                         <Image
                            src="/images/simple/satisfaction-guarantee.webp"
                            alt="Satisfaction Guarantee"
                            width={280}
                            height={281}
                            className="w-48 h-auto mx-auto"
                         />
                     </div>
                     <div className="text-center lg:text-left space-y-4 max-w-2xl">
                         <span className="text-primary font-bold tracking-wide uppercase text-sm">Quality Assurance</span>
                         <h2 className="text-2xl md:text-3xl font-bold">
                            We guarantee an error-free reading experience. Our team rigorously tests your ebook on multiple devices before release.
                         </h2>
                     </div>
                 </div>
             </div>
        </section>

        {/* Detailed Service List */}
        <section className="py-20 container px-4 mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                 <div className="space-y-8">
                     <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Ebook Solutions</h2>
                     <p className="text-lg text-muted-foreground">
                        From manuscript to marketplace, we handle it all:
                     </p>

                     <ul className="space-y-6">
                         {[
                             { title: "Standard & Fixed Layouts:", desc: "Choose the best format for your content, whether it's a novel or a graphic-heavy textbook." },
                             { title: "Cover Optimization:", desc: "Ebook covers need to pop at thumbnail size. We ensure yours does." },
                             { title: "Metadata Optimization:", desc: "We help potential readers find your book through effective keywords and categories." },
                             { title: "DRM Protection:", desc: "Optionally protect your content from unauthorized copying and sharing." }
                         ].map((item, idx) => (
                             <li key={idx} className="flex gap-4">
                                 <Circle className="w-3 h-3 mt-2 text-primary fill-current flex-shrink-0" />
                                 <span className="text-muted-foreground">
                                     <strong className="text-foreground">{item.title}</strong> {item.desc}
                                 </span>
                             </li>
                         ))}
                     </ul>

                     <div className="flex flex-col sm:flex-row gap-4 pt-4">
                         <a
                            href="/get-free-quote"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                         >
                            Get Ebook Quote
                         </a>
                         <a
                            href="tel:(888)909-9431"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground gap-2"
                         >
                            <Phone className="w-4 h-4" />
                            (888) 909-9431
                         </a>
                     </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-4">
                         <Image src="/images/simple/ebook-publishing-sample-1.webp" alt="Ebook Publishing Sample 1" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/ebook-publishing-sample-3.webp" alt="Ebook Publishing Sample 3" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                     </div>
                     <div className="space-y-4 pt-8">
                         <Image src="/images/simple/ebook-publishing-sample-2.webp" alt="Ebook Publishing Sample 2" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/ebook-publishing-sample-4.webp" alt="Ebook Publishing Sample 4" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                     </div>
                     <div className="col-span-2 pt-4">
                          <Image src="/images/simple/british-book-authors.webp" alt="The Pulp House Publishing" width={301} height={85} className="mx-auto" />
                     </div>
                 </div>
             </div>
        </section>

        {/* Awards */}
        <section className="py-20 bg-secondary text-secondary-foreground text-center px-4">
             <div className="container max-w-4xl mx-auto">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                     <div className="text-left space-y-4">
                         <span className="font-bold uppercase tracking-wider opacity-80">Digital Excellence</span>
                         <h2 className="text-3xl font-bold">Leading the Ebook Revolution</h2>
                         <p className="opacity-90 leading-relaxed">
                            Join the ranks of successful digital authors. Our ebook publishing services are rated among the best in the industry.
                         </p>
                     </div>
                     <div className="text-center space-y-4">
                         <div className="flex justify-center gap-4">
                             <Image src="/images/bg/cmi-awards.webp" alt="CMI Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/bg/ipa-awards.webp" alt="IPA Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/bg/the-business-bank-book-awards.webp" alt="The Business Bank Book Awards" width={100} height={100} className="w-24 h-auto" />
                         </div>
                         <p className="text-sm font-medium opacity-80">Recognized for innovation in digital publishing.</p>
                     </div>
                 </div>
             </div>
        </section>

        {/* Process List */}
        <section className="py-20 container px-4 mx-auto text-center border-b border-border">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Publish Your Ebook</h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
                A seamless process designed for speed and quality.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                 {[
                    "File Assessment: We evaluate your manuscript for conversion readiness.",
                    "Conversion: We convert your file to standard ebook formats.",
                    "Formatting: We manually adjust styling for optimal reading experience.",
                    "Quality Check: Rigorous testing on various devices.",
                    "Distribution: We upload your book to your chosen platforms."
                 ].map((item, idx) => (
                     <div key={idx} className="flex gap-3 p-4 bg-muted/20 rounded-lg border border-border/50">
                         <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                         <span className="text-sm font-medium text-foreground">{item}</span>
                     </div>
                 ))}
             </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-muted/20">
             <div className="container px-4 text-center">
                 <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Distribution Network</h2>
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

        {/* Testimonials */}
        <section className="py-20 text-center bg-background">
            <div className="container px-4">
                 <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    Author Success Stories
                 </span>
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">See Why Authors Choose Us for Ebooks</h2>
                 <p className="text-lg text-muted-foreground mb-12">
                    Our authors are thriving in the digital marketplace.
                 </p>
                 <VideoTestimonialsSection />
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default EbookPublishingPage;
