"use client";

import { FC } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { VideoTestimonialsSection } from "@/components/sections/home/VideoTestimonialsSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Circle } from "lucide-react";

const BookPrintingPage: FC = () => {
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
                            High-Quality Book Printing Services
                         </h1>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            We manage the entire printing process for high-quality physical copies of your book. From short runs for independent authors to large-scale offset printing for bestsellers, we deliver professional results every time. Our advanced printing technology ensures crisp text, vibrant images, and durable binding.
                         </p>

                         <div className="pt-6">
                             <h2 className="text-2xl font-bold mb-4">Why Choose Our Printing Service?</h2>
                             <ul className="space-y-4">
                                 {[
                                    "Premium Materials: High-quality paper stocks and cover finishes.",
                                    "Flexible Quantities: Print one book or one thousand.",
                                    "Custom Options: Choose from various trim sizes and binding types.",
                                    "Fast Turnaround: Get your books in hand when you need them."
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
                            <h3 className="text-xl font-bold">Print Your Masterpiece!</h3>
                         </div>
                         <ContactForm />
                     </motion.div>
                 </div>
             </div>
        </section>

        {/* Feature Section 1 */}
        <section className="py-20 bg-background text-center px-4">
             <div className="container max-w-5xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Book Printing Solutions</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                    The quality of your printed book reflects the quality of your writing. We don't compromise. We use industry-leading equipment to produce books that look and feel like they belong on a bookstore shelf.
                 </p>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <div className="relative rounded-xl overflow-hidden border border-border bg-muted">
                         <Image
                            src="/images/simple/book-printing-services.webp"
                            alt="Book Printing Services"
                            width={548}
                            height={325}
                            className="w-full h-auto object-cover"
                         />
                     </div>
                     <div className="text-left space-y-6">
                         <h3 className="text-2xl font-bold">Print on Demand & Offset Printing</h3>
                         <p className="text-muted-foreground">
                            We offer both Print on Demand (POD) for efficiency and Offset Printing for bulk cost savings. POD is perfect for testing the market or managing inventory without risk. Offset printing provides the lowest cost per unit for larger orders and offers the highest possible quality for image-heavy books.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 pt-2">
                             <a
                                href="/get-free-quote"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                             >
                                Get Printing Quote
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
                         <span className="text-primary font-bold tracking-wide uppercase text-sm">Print Perfection</span>
                         <h2 className="text-2xl md:text-3xl font-bold">
                            We stand behind every book we print. If there's a manufacturing defect, we'll replace it.
                         </h2>
                     </div>
                 </div>
             </div>
        </section>

        {/* Detailed Service List */}
        <section className="py-20 container px-4 mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                 <div className="space-y-8">
                     <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Printing Options</h2>
                     <p className="text-lg text-muted-foreground">
                        Customize your book to your exact specifications:
                     </p>

                     <ul className="space-y-6">
                         {[
                             { title: "Binding Styles:", desc: "Perfect bound (paperback), case bound (hardcover), saddle stitch, and spiral." },
                             { title: "Paper Types:", desc: "Cream or white paper, standard or premium weight." },
                             { title: "Cover Finishes:", desc: "Glossy, matte, or soft-touch lamination." },
                             { title: "Trim Sizes:", desc: "All standard industry sizes plus custom options." }
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
                            Start Printing
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
                         <Image src="/images/simple/book-printing-sample-1.webp" alt="Book Printing Sample 1" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/book-printing-sample-3.webp" alt="Book Printing Sample 3" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                     </div>
                     <div className="space-y-4 pt-8">
                         <Image src="/images/simple/book-printing-sample-2.webp" alt="Book Printing Sample 2" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/book-printing-sample-4.webp" alt="Book Printing Sample 4" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
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
                         <span className="font-bold uppercase tracking-wider opacity-80">Top Quality</span>
                         <h2 className="text-3xl font-bold">America's Choice for Book Printing</h2>
                         <p className="opacity-90 leading-relaxed">
                            We are proud to print books for authors and publishers across the USA. Our commitment to quality has earned us a reputation for excellence.
                         </p>
                     </div>
                     <div className="text-center space-y-4">
                         <div className="flex justify-center gap-4">
                             <Image src="/images/bg/cmi-awards.webp" alt="CMI Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/bg/ipa-awards.webp" alt="IPA Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/bg/the-business-bank-book-awards.webp" alt="The Business Bank Book Awards" width={100} height={100} className="w-24 h-auto" />
                         </div>
                         <p className="text-sm font-medium opacity-80">Award-winning printing services.</p>
                     </div>
                 </div>
             </div>
        </section>

        {/* Process List */}
        <section className="py-20 container px-4 mx-auto text-center border-b border-border">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Printing Process</h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
                From file to final product, we ensure perfection.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                 {[
                    "File Check: We review your print-ready PDF for any potential issues.",
                    "Proofing: You receive a digital or physical proof to approve before the full run.",
                    "Printing: We use the latest digital or offset technology for superior results.",
                    "Binding: Professional binding ensures your book holds up to reading.",
                    "Shipping: We package your books carefully and ship them to your door."
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
                 <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted By</h2>
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
                    Client Reviews
                 </span>
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">What Authors Think of Our Printing</h2>
                 <p className="text-lg text-muted-foreground mb-12">
                    See why authors love the quality of our printed books.
                 </p>
                 <VideoTestimonialsSection />
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default BookPrintingPage;
