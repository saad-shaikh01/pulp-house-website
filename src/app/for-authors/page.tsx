"use client";

import { FC } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";

// Types for the steps
interface Step {
    step: string;
    title: string;
    description: string;
    image: string;
}

const STEPS: Step[] = [
    {
        step: "01",
        title: "Choose a package & Sign up",
        description: "With Art Book Self-Publishing, you’re the boss. Our art book publishing agency lets you keep every penny of your royalties and all creative control. No traditional publisher nonsense here because we don’t claim your work or push you to change it. You decide the cover, the layout, and even the platforms. We bring the expertise, but your vision rules. Our process is quick: getting your book on Amazon or Kobo in just 6-10 days, so your art can start reaching fans worldwide without delay.",
        image: "/images/simple/thepulphousepublishing.webp"
    },
    {
        step: "02",
        title: "Meet Your Expert Publishing Team",
        description: "Meet your expert publishing team — a dedicated Project Manager and Senior Publishing Consultant committed to your book’s success. From start to finish, you’ll receive personalized guidance, weekly strategy calls, and clear communication to ensure every detail aligns with your vision. Our experienced professionals bring industry insight, creative direction, and a hands-on approach, treating your manuscript with the same care and precision reserved for our most distinguished legacy titles.",
        image: "/images/simple/Meet Your Expert Publishing Team.webp"
    },
    {
        step: "03",
        title: "Manuscript Development & Editing",
        description: "Receive comprehensive developmental editing to strengthen your story’s structure, flow, and clarity. Our editors refine every chapter to enhance pacing, tone, and reader engagement while ensuring your manuscript is error-free and publication-ready. From basic corrections to advanced stylistic improvements, we tailor our approach to your book’s unique voice. If you need additional support, our expert ghostwriters can transform your concepts and drafts into a powerful, polished manuscript that captivates readers from start to finish.",
        image: "/images/simple/manuscript-development.webp"
    },
    {
        step: "04",
        title: "Book Cover Design & Layout",
        description: "Select from professionally designed book cover concepts customized to reflect your genre and creative vision. Collaborate closely with experienced designers to finalize a captivating cover that captures your story’s essence and appeals to your target audience. Your manuscript will then be expertly formatted for both print and digital editions, ensuring flawless layout, readability, and compliance with industry publishing standards—delivering a polished, bookstore-ready finish that enhances your book’s visual and professional appeal.",
        image: "/images/simple/book-cover-design.webp"
    },
    {
        step: "05",
        title: "Proofreading & Quality Assurance",
        description: "Undergo a meticulous final proofreading to catch any lingering errors, typos, or inconsistencies before publication. Our editorial team conducts a comprehensive quality check to ensure your book aligns with traditional publishing standards in both accuracy and presentation. Once refined, you’ll review and approve the final proof—your opportunity to make any last adjustments. This final stage ensures your manuscript is flawlessly polished, professionally formatted, and fully ready to make a lasting impression on readers.",
        image: "/images/simple/proofreading.webp"
    },
    {
        step: "06",
        title: "Publishing & Distribution",
        description: "We publish your book on leading global platforms, including Amazon Kindle, Barnes & Noble, and IngramSpark, ensuring maximum visibility and accessibility. Our team manages every technical detail—account setup, metadata optimization, and file formatting—so your publishing process is seamless. Once complete, your book is distributed worldwide in both digital and print formats, allowing readers everywhere to discover and purchase your work across trusted online bookstores and retail channels.",
        image: "/images/simple/publishing-distribution.webp"
    },
    {
        step: "07",
        title: "Royalties & Earnings",
        description: "Retain full ownership and creative control of your intellectual property while enjoying the benefits of professional publishing support. You’ll earn competitive royalties from every sale as our team manages all backend operations, from distribution to platform management. We also provide expert guidance on pricing strategies, sales positioning, and global distribution channels to help you maximize visibility and revenue, ensuring your book reaches the widest possible audience while keeping you in complete control.",
        image: "/images/simple/royalties-earnings.webp"
    },
    {
        step: "08",
        title: "Success",
        description: "Join a growing community of authors who’ve achieved their publishing dreams with The Pulp House Publishing. Our legacy of excellence ensures your work receives the professional care and exposure it deserves. Take advantage of optional post-publication marketing, audiobook production, and promotional opportunities to extend your book’s reach. With expert support and proven strategies, watch your story make a lasting impact in the literary world and beyond—backed by trusted publishing experience.",
        image: "/images/simple/success-books.webp"
    }
];

const ForAuthorsPage: FC = () => {
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
            <span className="text-xl font-black text-primary uppercase tracking-wider">For Author</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Empowering Authors. Elevating Stories.</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Partner with The Pulp House Publishing to bring your story to life—from concept to global distribution. We help authors write, publish, and promote their books with expert guidance and personalized support every step of the way.
            </p>
          </motion.div>
        </section>

        {/* Process Intro */}
        <section className="py-12 bg-secondary/5 border-y border-border">
            <div className="container px-4 text-center max-w-4xl mx-auto">
                 <h2 className="text-3xl font-bold mb-4">Our Publishing Process – How We Take You from Manuscript to Market</h2>
                 <p className="text-lg text-muted-foreground">
                    Experience a seamless publishing journey with The Pulp House Publishing — from expert editing and design to global distribution, we transform your manuscript into a professionally published, market-ready book.
                 </p>
            </div>
        </section>

        {/* Steps */}
        <div className="space-y-0">
            {STEPS.map((item, idx) => (
                <section key={idx} className={`py-20 md:py-28 px-4 container mx-auto ${idx % 2 === 1 ? 'bg-muted/10' : ''}`}>
                    <div className={`flex flex-col lg:gap-16 gap-12 items-center ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                         {/* Image Side */}
                         <motion.div
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 w-full"
                         >
                             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                                 <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={548}
                                    height={325}
                                    className="w-full h-auto object-cover"
                                 />
                             </div>
                         </motion.div>

                         {/* Content Side */}
                         <motion.div
                            initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 space-y-6"
                         >
                             <div className="flex items-center gap-4">
                                <span className="text-5xl font-black text-primary/20">{item.step}</span>
                                <h2 className="text-3xl md:text-4xl font-bold">{item.title}</h2>
                             </div>
                             <p className="text-lg text-muted-foreground leading-relaxed">
                                {item.description}
                             </p>

                             <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                 <a
                                    href="/get-free-quote"
                                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                 >
                                    {idx === 0 ? "Publish My Art Book Today" : "Let’s Begin Publishing"}
                                 </a>
                                 <a
                                    href="tel:(888)909-9431"
                                    className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2"
                                 >
                                    <Phone className="w-4 h-4" />
                                    (888) 909-9431
                                 </a>
                             </div>
                         </motion.div>
                    </div>
                </section>
            ))}
        </div>

        {/* Partners Banner */}
        <section className="py-16 bg-muted/20 border-t border-border">
             <div className="container px-4 text-center">
                 <h2 className="text-3xl font-bold mb-10">Our Book Publishing Partners</h2>
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

export default ForAuthorsPage;
