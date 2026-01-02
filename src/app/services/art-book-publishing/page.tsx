"use client";

import { FC } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { VideoTestimonialsSection } from "@/components/sections/home/VideoTestimonialsSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Circle } from "lucide-react";

const ArtBookPublishingPage: FC = () => {
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
                            Top Art Book Publishers in the USA.
                         </h1>
                         <h4 className="text-xl font-semibold text-primary">Frame Your Vision: Expert Art Book Publishing</h4>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            The Pulp House Publishing is the professional agency artists’ trust to elevate their work. We specialize in turning paintings, photography, and illustrations into museum-quality art books designed to capture attention. Our service focuses on crafting your book to feel like your art, not just printing images. With a team of 50+ experts and over 10 years in the industry, we deliver exceptional Art Book Publishing results.
                         </p>

                         <div className="pt-6">
                             <h2 className="text-2xl font-bold mb-4">Why Choose Our Art Book Publishing Service</h2>
                             <p className="text-muted-foreground mb-6">
                                We are dedicated to making your art book a standout success. Artists choose us for these key reasons:
                             </p>
                             <ul className="space-y-4">
                                 {[
                                    "Unrivaled Print Precision: We master the technical details of art book publishing, from optimizing image quality to guaranteeing print precision, ensuring your artwork looks absolutely flawless on every page.",
                                    "Collaborative, Custom Process: The entire publishing journey is shaped around your creative vision. We will guide you individually in the process so that the end product is a genuine continuation of your artwork, keeping you involved in the process.",
                                    "Exceptional Value: Get professional, high-quality results without a premium price tag. Our publishing packages deliver superior art book quality that respects your budget.",
                                    "Proven Success: With a long history of successful books and happy artists, we bring the expertise and track record necessary to make your art book a highly sought-after hit."
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
                            <h3 className="text-xl font-bold">Bring Your Art to Life with Stunning Book Publishing!</h3>
                         </div>
                         <ContactForm />
                     </motion.div>
                 </div>
             </div>
        </section>

        {/* Feature Section 1 */}
        <section className="py-20 bg-background text-center px-4">
             <div className="container max-w-5xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Art Self-Publishing That Puts You on the Bestseller List</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                    We know that an art book is your creative legacy in print, not just a collection of images. We do Art Book Self-Publishing, whether it is the glamour of the rainbow in watercolors or the roughness of street photography. We understand that your business needs professional skills such as good images and customized designs. Our dedicated Art Book Publishers craft every detail to ensure your book accurately reflects your vision, moving your art from the studio directly into the hands of a global audience.
                 </p>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <div className="relative rounded-xl overflow-hidden border border-border bg-muted">
                         <Image
                            src="/images/simple/art-book-publishers-uks.webp"
                            alt="Art Book Publishers USA"
                            width={548}
                            height={325}
                            className="w-full h-auto object-cover"
                         />
                     </div>
                     <div className="text-left space-y-6">
                         <h3 className="text-2xl font-bold">Your Art deserves the Perfect Print!</h3>
                         <p className="text-muted-foreground">
                            With Art Book Self-Publishing, you are the boss and the sole owner of your art. Our agency empowers you with total creative control and lets you keep 100% of your royalties. We skip the traditional publisher nonsense; we won't claim your work or push you to change your vision. You decide the cover, the layout, and the platforms. We bring the professional expertise; your vision rules. Besides, our simplified system takes your book to Amazon, Kobo, and other bookstores around the world within a short period.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 pt-2">
                             <a
                                href="/get-free-quote"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                             >
                                Launch My Art Book Today
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
                         <span className="text-primary font-bold tracking-wide uppercase text-sm">Build a Stunning Virtual Gallery!</span>
                         <h2 className="text-2xl md:text-3xl font-bold">
                            Your best artwork deserves a premium presentation, even without the expense of a paperback. Let our art book publishing agency transform your collection into an irresistible online book that readers can't ignore. Publish your virtual gallery now!
                         </h2>
                     </div>
                 </div>
             </div>
        </section>

        {/* Detailed Service List */}
        <section className="py-20 container px-4 mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                 <div className="space-y-8">
                     <h2 className="text-3xl md:text-4xl font-bold">From Studio to Global Success with The Pulp House Publishing</h2>
                     <p className="text-lg text-muted-foreground">
                        Our art book publishing service is specifically built to match your creative spark with our professional know-how. Here is what you gain by working with us:
                     </p>

                     <ul className="space-y-6">
                         {[
                             { title: "Custom Publishing Strategy.", desc: "Every artist's work is unique. We collaborate closely to understand your distinct style, whether bold abstracts or delicate sketches, and craft a book that perfectly represents you. Your ideas are the driving force behind every project decision." },
                             { title: "Top-Tier Print Quality.", desc: "Your art deserves to be seen flawlessly. To make sure we have vivid color reproduction and strict detail reproduction we employ high end printing technology and quality paper. From substantial hard covers to elegant soft covers, your finished book will be as tactile and impressive as your artwork." },
                             { title: "Targeted Market Visibility.", desc: "A fantastic book cannot just rest on a shelf. We develop tailored marketing programs, such as social media, press releases, and targeted advertising to create a true buzz around your work, launch it into the correct audience, and initiate a conversation with the people who matter." }
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
                            Let’s Begin Publishing
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
                         <Image src="/images/simple/art-book-publishing-sample-1.webp" alt="Art Book Publishing Sample 1" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/art-book-publishing-sample-3.webp" alt="Art Book Publishing Sample 3" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                     </div>
                     <div className="space-y-4 pt-8">
                         <Image src="/images/simple/art-book-publishing-sample-2.webp" alt="Art Book Publishing Sample 2" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/art-book-publishing-sample-4.webp" alt="Art Book Publishing Sample 4" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
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
                         <span className="font-bold uppercase tracking-wider opacity-80">Launch Your Bestseller Now</span>
                         <h2 className="text-3xl font-bold">The Most Trusted Art Book Publishing Service in the U.S.</h2>
                         <p className="opacity-90 leading-relaxed">
                            Ready to transform your art? Share your vision and book your free consultation today.
                         </p>
                     </div>
                     <div className="text-center space-y-4">
                         <div className="flex justify-center gap-4">
                             <Image src="/images/cmi-awards.webp" alt="CMI Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/ipa-awards.webp" alt="IPA Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/the-business-bank-book-awards.webp" alt="The Business Bank Book Awards" width={100} height={100} className="w-24 h-auto" />
                         </div>
                         <p className="text-sm font-medium opacity-80">Flawlessly Delivering Exceptional Art to Their Global Audience</p>
                     </div>
                 </div>
             </div>
        </section>

        {/* Process List */}
        <section className="py-20 container px-4 mx-auto text-center border-b border-border">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Bringing Your Art Book Vision to Life</h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
                Creating an art book is an expert task and our Art Book Publishers accompany you throughout the entire process. We take care of all the details so that you could dedicate your time to creating. This is the way we make your master piece:
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                 {[
                    "We help you sort and arrange your artwork to tell a cohesive narrative, whether it is a themed collection or a career retrospective.",
                    "We do not fix only the main text, but all the supporting text as well including captions and statements, and make them understandable and without typos without losing your authentic voice.",
                    "Our professional designers make beautiful, dramatic designs, harmonizing images, and text, which make your artwork the central focus.",
                    "Choose from various formats, including oversized coffee table books, sleek portfolios, eBooks, or audiobooks, to fit your vision.",
                    "Our premium packages provide high level of publishing to both new and established artists without spending a fortune."
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
                 <h2 className="text-2xl md:text-3xl font-bold mb-10">Our Book Publishing Partners</h2>
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
                    Their Words, Their Journey
                 </span>
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Verified Reviews of Our Publishing Services</h2>
                 <p className="text-lg text-muted-foreground mb-12">
                    Don't just take our word for it. Read the candid reviews from authors, just like you, across the country that experienced the <br className="hidden md:block" /> quality and great commitment of Pulp House Publishing.
                 </p>
                 <VideoTestimonialsSection />
            </div>
        </section>

    </>
  );
};

export default ArtBookPublishingPage;
