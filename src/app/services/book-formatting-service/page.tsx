"use client";

import { FC } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { VideoTestimonialsSection } from "@/components/sections/home/VideoTestimonialsSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Circle } from "lucide-react";

const BookFormattingServicePage: FC = () => {
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
                            Flawless Book Formatting Services
                         </h1>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            Our layout and formatting experts provide your book with a clean, bookstore-quality finish both inside and out. Formatting is the invisible art that makes reading a pleasure. We ensure your book looks professional, whether it's a complex textbook or a simple novel.
                         </p>

                         <div className="pt-6">
                             <h2 className="text-2xl font-bold mb-4">Why Formatting Matters</h2>
                             <ul className="space-y-4">
                                 {[
                                    "Professionalism: Signals to readers that your book is high quality.",
                                    "Readability: Proper margins and spacing reduce eye fatigue.",
                                    "Compliance: Meets the technical requirements of printers and ebook platforms.",
                                    "Consistency: Ensures a uniform look throughout the book."
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
                            <h3 className="text-xl font-bold">Format Your Book Today!</h3>
                         </div>
                         <ContactForm />
                     </motion.div>
                 </div>
             </div>
        </section>

        {/* Feature Section 1 */}
        <section className="py-20 bg-background text-center px-4">
             <div className="container max-w-5xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Print and Digital Formatting</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                    We specialize in formatting for both physical books and ebooks. Print formatting involves setting margins, headers, footers, and page numbers. Ebook formatting requires creating a reflowable file that adapts to different screen sizes. We handle both with precision.
                 </p>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <div className="relative rounded-xl overflow-hidden border border-border bg-muted">
                         <Image
                            src="/images/simple/book-formatting-service.webp"
                            alt="Book Formatting Service"
                            width={548}
                            height={325}
                            className="w-full h-auto object-cover"
                         />
                     </div>
                     <div className="text-left space-y-6">
                         <h3 className="text-2xl font-bold">Attention to Detail</h3>
                         <p className="text-muted-foreground">
                            We pay attention to the smallest details, from the copyright page to the back matter. We ensure that chapter headings are styled consistently, images are placed correctly, and fonts are embedded properly.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 pt-2">
                             <a
                                href="/get-free-quote"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                             >
                                Get Formatting Quote
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
                         <span className="text-primary font-bold tracking-wide uppercase text-sm">Perfect Presentation</span>
                         <h2 className="text-2xl md:text-3xl font-bold">
                            We guarantee your book will meet the technical standards of major distribution platforms like Amazon, IngramSpark, and Smashwords.
                         </h2>
                     </div>
                 </div>
             </div>
        </section>

        {/* Detailed Service List */}
        <section className="py-20 container px-4 mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                 <div className="space-y-8">
                     <h2 className="text-3xl md:text-4xl font-bold">Our Formatting Solutions</h2>
                     <p className="text-lg text-muted-foreground">
                        Customized to your book's needs:
                     </p>

                     <ul className="space-y-6">
                         {[
                             { title: "Standard Text:", desc: "Perfect for novels and memoirs." },
                             { title: "Image-Heavy:", desc: "Ideal for cookbooks, children's books, and photography books." },
                             { title: "Academic:", desc: "Handling footnotes, endnotes, and bibliographies." },
                             { title: "Complex Layouts:", desc: "Tables, charts, and graphs formatted for clarity." }
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
                            Start Formatting
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
                         <Image src="/images/simple/book-formatting-service-sample-1.webp" alt="Book Formatting Sample 1" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/book-formatting-service-sample-3.webp" alt="Book Formatting Sample 3" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                     </div>
                     <div className="space-y-4 pt-8">
                         <Image src="/images/simple/book-formatting-service-sample-2.webp" alt="Book Formatting Sample 2" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/book-formatting-service-sample-4.webp" alt="Book Formatting Sample 4" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
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
                         <span className="font-bold uppercase tracking-wider opacity-80">Technical Excellence</span>
                         <h2 className="text-3xl font-bold">Standard-Setting Quality</h2>
                         <p className="opacity-90 leading-relaxed">
                            We set the standard for book formatting. Our files are clean, error-free, and ready for publication.
                         </p>
                     </div>
                     <div className="text-center space-y-4">
                         <div className="flex justify-center gap-4">
                             <Image src="/images/cmi-awards.webp" alt="CMI Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/ipa-awards.webp" alt="IPA Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/the-business-bank-book-awards.webp" alt="The Business Bank Book Awards" width={100} height={100} className="w-24 h-auto" />
                         </div>
                         <p className="text-sm font-medium opacity-80">Recognized for technical proficiency.</p>
                     </div>
                 </div>
             </div>
        </section>

        {/* Process List */}
        <section className="py-20 container px-4 mx-auto text-center border-b border-border">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Formatting Process</h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
                Transforming your manuscript into a book.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                 {[
                    "Analysis: We check your manuscript for consistency.",
                    "Cleanup: We remove unnecessary formatting codes.",
                    "Styling: We apply professional styles to headings and text.",
                    "Layout: We format the pages according to industry standards.",
                    "Delivery: You receive print-ready and ebook files."
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
                 <h2 className="text-2xl md:text-3xl font-bold mb-4">Compatible Platforms</h2>
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
                    Author Reviews
                 </span>
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
                 <p className="text-lg text-muted-foreground mb-12">
                    Our clients love the professional look of their formatted books.
                 </p>
                 <VideoTestimonialsSection />
            </div>
        </section>
    </>
  );
};

export default BookFormattingServicePage;
