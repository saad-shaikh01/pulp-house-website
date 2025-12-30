"use client";

import { FC } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { VideoTestimonialsSection } from "@/components/sections/home/VideoTestimonialsSection";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactPage: FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background relative z-40">

        {/* Contact Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background overflow-hidden relative">
            {/* Background elements if needed */}
            <div className="container px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left: Form */}
                    <motion.div
                         initial={{ opacity: 0, x: -20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8 }}
                         className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl"
                    >
                         <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                Got a project? Let's look into your options!
                            </h1>
                            <p className="text-muted-foreground text-lg">
                                Are you prepared to publish your book on all the major platforms? Get in touch with us, and we'll make success your future.
                            </p>
                         </div>
                         <ContactForm />
                    </motion.div>

                    {/* Right: Image/Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center lg:h-full"
                    >
                         <div className="relative w-full max-w-[500px]">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-50 -z-10" />
                            <Image
                                src="/images/certificate.webp"
                                alt="Getting Started Steps Illustration"
                                width={490}
                                height={600}
                                className="w-full h-auto rounded-xl shadow-2xl border border-border bg-card"
                            />
                         </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Video Testimonials */}
        {/* Using specific videos from legacy site */}
        <VideoTestimonialsSection
            title="What Our Clients Say"
            subtitle=""
            videos={[
                "https://video.thepulphousepublishing.com/Marketing/7.webm",
                "https://video.thepulphousepublishing.com/book-publishing/8.webm",
                "https://video.thepulphousepublishing.com/ghostwriting/4.webm",
                "https://video.thepulphousepublishing.com/Marketing/10.webm",
                "https://video.thepulphousepublishing.com/ghostwriting/8.webm",
                "https://video.thepulphousepublishing.com/Marketing/5.webm"
            ]}
        />

        {/* Features / Results Section */}
        <section className="py-20 bg-muted/20 border-t border-border">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                         <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                             <Image
                                src="/images/icons/royalty-free.svg"
                                alt="Royalty Free Publishing"
                                width={40}
                                height={40}
                                className="w-10 h-10 text-primary"
                             />
                         </div>
                         <h3 className="text-xl font-bold">100% Royalty-Free Publishing</h3>
                         <p className="text-muted-foreground">You get to keep all the earnings, because we will never ask you to share the earnings.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4"
                    >
                         <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                             <Image
                                src="/images/icons/top-publishers.svg"
                                alt="Top Publishers"
                                width={40}
                                height={40}
                                className="w-10 h-10"
                             />
                         </div>
                         <h3 className="text-xl font-bold">Top Publishers at Your Fingertips</h3>
                         <p className="text-muted-foreground">Over 45+ publishers have their hands raised to publish your dream with no issue.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                         <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                             <Image
                                src="/images/icons/millions-copies.svg"
                                alt="Sell Millions of Copies"
                                width={40}
                                height={40}
                                className="w-10 h-10"
                             />
                         </div>
                         <h3 className="text-xl font-bold">Sell Millions of Books faster</h3>
                         <p className="text-muted-foreground">Awesome results and 2x sales for the instant!</p>
                    </motion.div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
