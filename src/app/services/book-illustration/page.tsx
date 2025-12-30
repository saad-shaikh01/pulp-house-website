"use client";

import { FC } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { VideoTestimonialsSection } from "@/components/sections/home/VideoTestimonialsSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Circle } from "lucide-react";

const BookIllustrationPage: FC = () => {
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
                            Give Your Book a Visual Edge with Our Art
                         </h1>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            We’re a USA-based crew dedicated to helping American writers turn their stories into something special with bold, hand-crafted book illustrations. Our artists create images that pull readers in and make your words hit harder. Whether you’re working on a kids’ book, a graphic novel, or a serious novel, our Book Illustration Services are built to make your project pop in the crowded U.S. publishing scene. We focus on quality and originality, ensuring every picture feels like it belongs to your story.
                         </p>

                         <div className="pt-6">
                             <h2 className="text-2xl font-bold mb-4">How We Build Your Book’s Art</h2>
                             <p className="text-muted-foreground mb-4">Our book illustration company teams up with USA authors to make their ideas real. We dig into your story, readers, and style to get it right. Here’s how we do it:</p>
                             <ul className="space-y-4">
                                 {[
                                    "First Chat: We talk about your book’s goals, genre, and look.",
                                    "Rough Sketches: Our illustrators draw early ideas to match your story’s feel.",
                                    "Full Artwork: We create top-notch illustrations, digital or hand-drawn.",
                                    "Your Input: We adjust the art based on your thoughts to nail it."
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
                            <h3 className="text-xl font-bold">Begin With Your Book Illustration!</h3>
                         </div>
                         <ContactForm />
                     </motion.div>
                 </div>
             </div>
        </section>

        {/* Feature Section 1 */}
        <section className="py-20 bg-background text-center px-4">
             <div className="container max-w-5xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Pictures Make Your Story Better</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                    Good illustrations don’t just dress up a book; they bring it to life. For authors in the USA, our custom book illustrations set the mood, stir up feelings, and keep readers hooked. From bright, fun art for children’s stories to detailed drawings for teen novels, our book illustrators shape images that feel like part of your narrative, turning every page into something readers won’t forget.
                 </p>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <div className="relative rounded-xl overflow-hidden border border-border bg-muted">
                         <Image
                            src="/images/simple/professional-book-illustrators.webp"
                            alt="Professional Book Illustrators"
                            width={548}
                            height={325}
                            className="w-full h-auto object-cover"
                         />
                     </div>
                     <div className="text-left space-y-6">
                         <h3 className="text-2xl font-bold">Art Services for Every American Writer</h3>
                         <p className="text-muted-foreground">
                            Whether you’re just starting out or you’ve got a shelf full of books, our Book Illustration Services are made for you. As a USA-based team, we work only with American authors, so our art fits right into the U.S. publishing world. We cover kids’ book art, cover designs, graphic novel drawings, and more, all crafted to make your book impossible to miss.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 pt-2">
                             <a
                                href="/get-free-quote"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                             >
                                Illustrate My Book
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
                         <span className="text-primary font-bold tracking-wide uppercase text-sm">Revenue Sharing? Not Anymore!</span>
                         <h2 className="text-2xl md:text-3xl font-bold">
                            Get in touch today to talk about your project and see how our Book Illustration Services can turn your book into a hit.
                         </h2>
                     </div>
                 </div>
             </div>
        </section>

        {/* Detailed Service List */}
        <section className="py-20 container px-4 mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                 <div className="space-y-8">
                     <h2 className="text-3xl md:text-4xl font-bold">Bright, Fun Art for Kids’ Books</h2>
                     <p className="text-lg text-muted-foreground">
                        Kids’ books need lively, imaginative pictures to grab young readers. Our book illustrators are great at creating colorful, engaging art that brings characters and stories to life. Our children’s Book Illustration Services offer:
                     </p>

                     <ul className="space-y-6">
                         {[
                             { title: "Characters Kids Love:", desc: "We draw figures that stick in kids’ minds and hearts." },
                             { title: "Pictures That Tell the Story:", desc: "Each image moves your tale forward smoothly." },
                             { title: "Right for Their Age:", desc: "Art is shaped for the kids you’re writing for." },
                             { title: "Fun and Engaging:", desc: "We make images that get kids thinking and playing." },
                             { title: "Same Style All Through:", desc: "We keep the look steady for a polished book." },
                             { title: "Ready for Publishing:", desc: "Pictures are set for print or digital formats." }
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
                            Begin Your Book Illustration
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
                         <Image src="/images/simple/book-illustration-sample-1.webp" alt="Book Illustration Sample 1" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/book-illustration-sample-3.webp" alt="Book Illustration Sample 3" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                     </div>
                     <div className="space-y-4 pt-8">
                         <Image src="/images/simple/book-illustration-sample-2.webp" alt="Book Illustration Sample 2" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/book-illustration-sample-4.webp" alt="Book Illustration Sample 4" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
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
                         <span className="font-bold uppercase tracking-wider opacity-80">Break Your Sales Records!</span>
                         <h2 className="text-3xl font-bold">Great Art Without the Crazy Price Tag</h2>
                         <p className="opacity-90 leading-relaxed">
                            We think every author should get awesome book illustrations without emptying their wallet. Our Book Illustration Services are priced to fit different budgets while keeping the quality high. As a USA-based crew, we keep pricing clear and offer packages that work for your project, so you get real bang for your buck.
                         </p>
                     </div>
                     <div className="text-center space-y-4">
                         <div className="flex justify-center gap-4">
                             <Image src="/images/bg/cmi-awards.webp" alt="CMI Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/bg/ipa-awards.webp" alt="IPA Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/bg/the-business-bank-book-awards.webp" alt="The Business Bank Book Awards" width={100} height={100} className="w-24 h-auto" />
                         </div>
                         <p className="text-sm font-medium opacity-80">We’ve been the award-winning agency in Wales for straight 5 years.</p>
                     </div>
                 </div>
             </div>
        </section>

        {/* Process List */}
        <section className="py-20 container px-4 mx-auto text-center border-b border-border">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes Our Artists Different</h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
                Great book illustrators can take your book from solid to unforgettable.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                 {[
                    "All Kinds of Looks: From gentle watercolors to sharp digital designs, we’ve got every style covered.",
                    "Know the U.S. Scene: We get how American publishing works and make art that fits.",
                    "Made Just for You: Every picture is built to match your story’s voice and readers.",
                    "No Detail Missed: We sweat the small stuff to keep things clean and pro.",
                    "On Time, Every Time: We hit your deadlines with work that’s top-notch.",
                    "Love for Stories: Our artists care about making your book’s story stronger."
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
                 <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to make your book look as good as it reads?</h2>
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
                    Clients Sharing Their Experiences
                 </span>
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Book Illustrations Are Shining With 5 Star Reviews In USA</h2>
                 <p className="text-lg text-muted-foreground mb-12">
                    Our dedication is reflected in the words of our clients. Dig to unfold what the fuss is all about.
                 </p>
                 <VideoTestimonialsSection />
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default BookIllustrationPage;
