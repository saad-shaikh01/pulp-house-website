"use client";

import { FC } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { VideoTestimonialsSection } from "@/components/sections/home/VideoTestimonialsSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Circle } from "lucide-react";

const AudiobookPublishingPage: FC = () => {
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
                            Leading Self-Audiobook Publisher Based in the US
                         </h1>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            Want your book to be more accessible than ever? Audiobook Publishing helps you reach a massive new audience. We provide customized services to authors. Publish your audiobook with us and have it expertly narrated and edited. Or rely on us to take you through the complete process of self-publishing. We guarantee that your audiobook is professionally created and dispatched to all major platforms and assist in making a difference in the crowd.
                         </p>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            New to audiobooks? No problem. Our experienced team handles the entire process, providing expert recording, editing, and mastering to produce your audiobook from scratch.
                         </p>

                         <div className="pt-6">
                             <h2 className="text-2xl font-bold mb-4">Quick and Easy Audiobook Publishing Process</h2>
                             <ul className="space-y-4">
                                 {[
                                    "Submit Your Draft. Send us the manuscript you want converted to audio. We'll quickly review the material and provide any necessary formatting or content suggestions.",
                                    "Approve Final Edits. Once you approve our recommended edits and formatting changes, we will finalize the manuscript for the recording studio.",
                                    "Review the Final Audio. Your professionally recorded and edited audiobook will be sent to you for a final quality check before it moves to distribution.",
                                    "Go Live Fast. Your audiobook is published at your final permission and made accessible on all major platforms within a matter of only six days."
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
                            <h3 className="text-xl font-bold">Let Your Story Be Heard with Expert Audiobook Publishing!</h3>
                         </div>
                         <ContactForm />
                     </motion.div>
                 </div>
             </div>
        </section>

        {/* Feature Section 1 */}
        <section className="py-20 bg-background text-center px-4">
             <div className="container max-w-5xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">We Publish Where It Counts: Audible, Spotify, ACX, Kobo, and Beyond.</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                    We guarantee your audiobook will be heard far and wide. As America's premier publishing partner, our experts use a comprehensive strategy to get your book on all major global channels, from Audible and ACX to Spotify and Kobo. More platforms equal more listeners. We maximize your exposure, ensuring your audiobook reaches your audience wherever they are.
                 </p>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <div className="relative rounded-xl overflow-hidden border border-border bg-muted">
                         <Image
                            src="/images/simple/uk-audio-book-publishers.webp"
                            alt="USA Audiobook Publishers"
                            width={548}
                            height={325}
                            className="w-full h-auto object-cover"
                         />
                     </div>
                     <div className="text-left space-y-6">
                         <h3 className="text-2xl font-bold">Guaranteed Platform-Ready Quality</h3>
                         <p className="text-muted-foreground">
                            Ready to give your book a voice? Our audiobook publishing company makes it easy and exciting. We start with a warm chat to get your story, goals, and audience.
                         </p>
                         <p className="text-muted-foreground">
                            Then, we guide you through voice casting, sound creation, and global sharing, keeping you in the know with clear updates. Our mission is to craft an audiobook that captures your tale’s essence while hitting industry benchmarks. Drop us a line today for a free consultation.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 pt-2">
                             <a
                                href="/get-free-quote"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                             >
                                Publish My Audiobook
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
                         <span className="text-primary font-bold tracking-wide uppercase text-sm">100% Professional Quality</span>
                         <h2 className="text-2xl md:text-3xl font-bold">
                            We’ll craft an audiobook that grabs listeners’ hearts and lifts your career to new peaks.
                         </h2>
                     </div>
                 </div>
             </div>
        </section>

        {/* Detailed Service List */}
        <section className="py-20 container px-4 mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                 <div className="space-y-8">
                     <h2 className="text-3xl md:text-4xl font-bold">Complete Audiobook Production and Publishing</h2>
                     <p className="text-lg text-muted-foreground">
                        At The Pulp House Publishing, we manage every technical and creative detail to ensure your audiobook meets or exceeds industry standards on the very first attempt. Here's exactly what our full-service production includes:
                     </p>

                     <ul className="space-y-6">
                         {[
                             { title: "Manuscript Polish & Review:", desc: "We thoroughly review your manuscript for clarity and language issues. If needed, we guide corrections or rerecord sections to guarantee quality narration." },
                             { title: "Audio Quality Certified:", desc: "We pride ourselves on audio quality, and insist on using 44.1 kHz CBR as the minimum standard for all of our audio, even streaming." },
                             { title: "Platform-Specific Formatting:", desc: "Forget complex technical requirements. We handle all file conversions and formatting to ensure seamless distribution everywhere." },
                             { title: "Custom Audiobook Covers:", desc: "Have a professionally-designed cover created to match your genre, and discuss ideas to make sure it’s not only attention-grabbing but meets all guidelines of the platform as well." }
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
                            Avail Extra Features
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
                         <Image src="/images/simple/audio-book-publishing-sample-1.webp" alt="Audio Book Publishing Sample 1" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/audio-book-publishing-sample-3.webp" alt="Audio Book Publishing Sample 3" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                     </div>
                     <div className="space-y-4 pt-8">
                         <Image src="/images/simple/audio-book-publishing-sample-2.webp" alt="Audio Book Publishing Sample 2" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
                         <Image src="/images/simple/audio-book-publishing-sample-4.webp" alt="Audio Book Publishing Sample 4" width={244} height={250} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border" />
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
                         <span className="font-bold uppercase tracking-wider opacity-80">Keep 100% Royalties US Audiobook Publishing</span>
                         <h2 className="text-3xl font-bold">Expand your reach globally and keep 100% of your royalties.</h2>
                         <p className="opacity-90 leading-relaxed">
                            We provide an easy and straightforward pricing model for authors. There are absolutely no hidden fees and no royalty sharing—ever. Once your audiobook is published through us, 100% of all future earnings are yours to keep. This is how we ensure you maintain complete financial and creative control over your entire publishing journey.
                         </p>
                     </div>
                     <div className="text-center space-y-4">
                         <div className="flex justify-center gap-4">
                             <Image src="/images/bg/cmi-awards.webp" alt="CMI Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/bg/ipa-awards.webp" alt="IPA Awards" width={100} height={100} className="w-24 h-auto" />
                             <Image src="/images/bg/the-business-bank-book-awards.webp" alt="The Business Bank Book Awards" width={100} height={100} className="w-24 h-auto" />
                         </div>
                         <p className="text-sm font-medium opacity-80">A USA-based publishing house with a collection brimming with bestsellers.</p>
                     </div>
                 </div>
             </div>
        </section>

        {/* Process List */}
        <section className="py-20 container px-4 mx-auto text-center border-b border-border">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Trust Us With Your US Audiobook Publishing?</h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
                Dedicated to author success, The Pulp House Publishing makes your audiobook a reality. Here’s exactly why we’re the perfect partner for your project:
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                 {[
                    "Experienced US-Based Specialists: Communicate directly with experienced audiobook producers in the USA, ensuring your project benefits from deep market contacts and a professional, efficient execution.",
                    "Rapid Market Launch: Utilize our self-publishing service for a fast route to market, with a typical turnaround of just 6 days (and often faster) to get your book live.",
                    "Author-Centric Control: You are in command. Our self-publishing platform gives you complete control and easy tracking, keeping you fully informed throughout your audiobook's progress.",
                    "Guaranteed Confidentiality: Your data and information are our top priority. We are committed to 100% confidentiality and secure data handling across your entire project.",
                    "Support for Every Author: We support a diverse range of voices, partnering with new authors, established writers, and creators across all genres to bring their stories to life.",
                    "100% Satisfaction Guarantee: We are committed to your success. Our service guarantees 100% client satisfaction and we continue making edits until you are completely pleased with the final audio.",
                    "Maintain 100% Royalties & Rights: You do not share with us any profits from your writing but retain all the rights instead of giving them to traditional service providers.",
                    "Complete End-to-End Service: Our expert team provides total support; from manuscript conversion and professional editing to correct formatting and high-quality recording; every step of the way."
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
                 <h2 className="text-2xl md:text-3xl font-bold mb-4">A Proven Track Record: Our Audiobooks Consistently Hit Bestseller Lists</h2>
                 <p className="text-muted-foreground mb-10">Join our track record of success: many of the audiobooks we publish consistently earn "New York Times Bestseller" status.</p>
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
                    Authors Share Their Stories
                 </span>
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a bit more confidence? Check out genuine feedback from our customers:</h2>
                 <VideoTestimonialsSection />
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default AudiobookPublishingPage;
