"use client";

import { FC } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { VideoTestimonialsSection } from "@/components/sections/home/VideoTestimonialsSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Circle } from "lucide-react";

const BusinessBookPublishingPage: FC = () => {
  return (
    <>
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
                            Bringing Your Business Ideas to Life Through Print
                         </h1>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            Your knowledge deserves a spotlight, and a book is the way to make it happen. At our business book publishing company, we help entrepreneurs, leaders, and innovators share their stories with impact. From first draft to bookstore shelves, we’re with you every step, ensuring your ideas hit home. Our Business Book Publishing services are built to make your voice bold, clear, and impossible to ignore.
                         </p>

                         <div className="pt-6">
                             <h2 className="text-2xl font-bold mb-4">Turning Your Expertise into a Page-Turner</h2>
                             <ul className="space-y-4">
                                 {[
                                    "Personalized Editing: We sharpen your manuscript, keeping your style front and center.",
                                    "Bold Cover Design: Our artists create covers that reflect your brand and draw eyes.",
                                    "We get your manuscript ready for publishing and make all the arrangements so it can be launched successfully on your desired platform.",
                                    "Reader Research: We dig into your audience to ensure your book speaks their language."
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
                            <h3 className="text-xl font-bold">Turn Your Vision Into a Published Book</h3>
                         </div>
                         <ContactForm />
                     </motion.div>
                 </div>
             </div>
        </section>

        {/* Feature Section */}
        <section className="py-20 bg-background text-center px-4">
             <div className="container max-w-5xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Establishing Your Name in the Business World</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    A strong business book does more than share knowledge. It builds your reputation and opens doors. Our Business Book Publishing services help you claim your spot as a leader in your field. Whether you’re writing about innovation, management, or growth, we ensure your book makes waves.
                 </p>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                    In a world fueled by ideas, Business Book Publishers helps spread game-changing insights. A book can draw in clients, boost your credibility, and create opportunities. Our Book Publishing Services guide you through the process, from crafting a story that sticks to reaching your readers. With us, your book becomes a key part of your professional legacy.
                 </p>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <div className="relative rounded-xl overflow-hidden border border-border bg-muted">
                         <Image
                            src="/images/simple/business-book-publishers-uk.webp"
                            alt="Business Book Publishers In UK"
                            width={548}
                            height={325}
                            className="w-full h-auto object-cover"
                         />
                     </div>
                     <div className="text-left space-y-6">
                         <h3 className="text-2xl font-bold">Ready to Get Your Business Book Out There?</h3>
                         <p className="text-muted-foreground">
                            At our business book publishing company, we’re passionate about helping authors like you make a mark. Our Business Book Publishing services make the process smooth, professional, and exciting. Whether you’re aiming for print, business eBook publishing, or both, we’ve got the expertise to bring your ideas to life. Get in touch today to start your publishing journey and amplify your influence.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 pt-2">
                             <a
                                href="/get-free-quote"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                             >
                                Hire A Publisher
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
                         <span className="text-primary font-bold tracking-wide uppercase text-sm">Take the Next Step to Publish Your Business Book</span>
                         <h2 className="text-2xl md:text-3xl font-bold">
                            Contact us now to discuss your book idea and get a personalized plan.
                         </h2>
                     </div>
                 </div>
             </div>
        </section>

        {/* Detailed Service List */}
        <section className="py-20 container px-4 mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                 <div className="space-y-8">
                     <h2 className="text-3xl md:text-4xl font-bold">From Rough Idea to Published Book: How We Work</h2>
                     <p className="text-lg text-muted-foreground">
                        Our Book Publishing Services make the path from concept to finished book clear and rewarding. As a leading business book publishing company, we mix creativity, strategy, and tech to create a book that informs and inspires. Here’s our approach:
                     </p>

                     <ul className="space-y-6">
                         {[
                             { title: "Step 1: Building Your Concept", desc: "We start by getting to know your goals and readers. Together, we shape your book’s idea to match your business aims and connect with your audience." },
                             { title: "Step 2: Crafting Your Manuscript", desc: "Our editors team up with you to write a manuscript that’s clear and engaging. Whether you need help drafting or just a final polish, we deliver top-notch support." },
                             { title: "Step 3: Designing Your Book", desc: "From a standout cover to a clean layout, we design a book that screams your brand. Our production team ensures high-quality print and digital versions." },
                             { title: "Step 4: Spreading the Word", desc: "We use our global network to get your book everywhere. Our marketing team creates campaigns with social media, email, and events to boost your book’s reach." }
                         ].map((item, idx) => (
                             <li key={idx} className="flex gap-4">
                                 <Circle className="w-3 h-3 mt-2 text-primary fill-current flex-shrink-0" />
                                 <span className="text-muted-foreground">
                                     <strong className="text-foreground">{item.title}</strong><br/>{item.desc}
                                 </span>
                             </li>
                         ))}
                     </ul>

                     <div className="flex flex-col sm:flex-row gap-4 pt-4">
                         <a
                            href="/get-free-quote"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                         >
                            Publish My Business Book
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
                         <Image src="/images/simple/business-book-sample-1.webp" alt="Business Book Sample 1" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/business-book-sample-3.webp" alt="Business Book Sample 3" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                     </div>
                     <div className="space-y-4 pt-8">
                         <Image src="/images/simple/business-book-sample-2.webp" alt="Business Book Sample 2" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/business-book-sample-4.webp" alt="Business Book Sample 4" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
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
                         <span className="font-bold uppercase tracking-wider opacity-80">Your Literary Glory Awaits</span>
                         <h2 className="text-3xl font-bold">Breaking Ground with Business eBook Publishing</h2>
                         <p className="opacity-90 leading-relaxed">
                            In today’s digital world, business eBook publishing puts your ideas in readers’ hands instantly. We craft eBooks that bring your expertise to life in a format that’s easy to read anywhere. Whether you’re sharing leadership tips or startup strategies, our business eBook publishing services ensure your content shines on platforms like Kindle and Apple Books.
                         </p>
                     </div>
                     <div className="text-center space-y-4">
                         <div className="flex justify-center gap-4">
                             <Image src="/images/cmi-awards.webp" alt="CMI Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/ipa-awards.webp" alt="IPA Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/the-business-bank-book-awards.webp" alt="The Business Bank Book Awards" width={100} height={100} className="w-24 h-auto" />
                         </div>
                         <p className="text-sm font-medium opacity-80">Lead the business category with the USA’s most trusted book publishing company!</p>
                     </div>
                 </div>
             </div>
        </section>

        {/* Why Us List */}
        <section className="py-20 container px-4 mx-auto text-center border-b border-border">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We’re Your Go-To Business Book Publishers</h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
                As dedicated Business Book Publishers, we’re all about quality and teamwork. A business book isn’t just pages; it’s a way to grow your name and influence. Our full-service approach ensures your book, from text to look, matches your goals. With years of experience in Business Book Publishing, we’ve guided authors to create books that spark conversations and top charts.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                 {[
                    "Business Smarts: Our team knows the business world, making your book relevant and strong.",
                    "Complete Support: From writing to promotion, we handle every piece of the puzzle.",
                    "High-End Production: We use top tools to create books that feel and look professional.",
                    "Flexible Options: We tailor our work to your timeline, budget, and vision.",
                    "Author-Driven Process: Your goals lead, with clear communication throughout.",
                    "Proven Results: Our authors have earned praise in major outlets and industry circles."
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
                 <h2 className="text-2xl md:text-3xl font-bold mb-10">Serving America’s Leading Brands with Ebook Publishing Excellence</h2>
                 <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                     <Image src="/images/amazon.svg" alt="Amazon" width={102} height={31} className="h-8 w-auto object-contain" />
                     <Image src="/images/kindle.svg" alt="Kindle" width={102} height={36} className="h-9 w-auto object-contain" />
                     <Image src="/images/barnes-and-noble.svg" alt="Barnes and Noble" width={102} height={36} className="h-9 w-auto object-contain" />
                     <Image src="/images/kobo.svg" alt="Kobo" width={102} height={52} className="h-10 w-auto object-contain" />
                     <Image src="/images/apple-book.svg" alt="Apple Book" width={120} height={42} className="h-9 w-auto object-contain" />
                     <Image src="/images/google-play-book.svg" alt="Google Play Books" width={130} height={42} className="h-9 w-auto object-contain" />
                 </div>
             </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 text-center bg-background">
            <div className="container px-4">
                 <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    What Our Clients Say About Us
                 </span>
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Book Publishing Reviews from Authors Across the USA</h2>
                 <p className="text-lg text-muted-foreground mb-12">
                    Hear directly from entrepreneurs, executives, and industry leaders who’ve published with us — and discover <br className="hidden md:block"/> why we’re America’s trusted choice for business book publishing.
                 </p>
                 <VideoTestimonialsSection />
            </div>
        </section>
    </>
  );
};

export default BusinessBookPublishingPage;
