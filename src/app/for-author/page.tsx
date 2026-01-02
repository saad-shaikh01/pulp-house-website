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
    description:
      "With Art Book Self-Publishing, you’re the boss. Our art book publishing agency lets you keep every penny of your royalties and all creative control. No traditional publisher nonsense here because we don’t claim your work or push you to change it. You decide the cover, the layout, and even the platforms. We bring the expertise, but your vision rules. Our process is quick: getting your book on Amazon or Kobo in just 6-10 days, so your art can start reaching fans worldwide without delay.",
    image: "/images/simple/thepulphousepublishing.webp",
  },
  {
    step: "02",
    title: "Meet Your Expert Publishing Team",
    description:
      "Meet your expert publishing team — a dedicated Project Manager and Senior Publishing Consultant committed to your book’s success. From start to finish, you’ll receive personalized guidance, weekly strategy calls, and clear communication to ensure every detail aligns with your vision. Our experienced professionals bring industry insight, creative direction, and a hands-on approach, treating your manuscript with the same care and precision reserved for our most distinguished legacy titles.",
    image: "/images/simple/Meet Your Expert Publishing Team.webp",
  },
  {
    step: "03",
    title: "Manuscript Development & Editing",
    description:
      "Receive comprehensive developmental editing to strengthen your story’s structure, flow, and clarity. Our editors refine every chapter to enhance pacing, tone, and reader engagement while ensuring your manuscript is error-free and publication-ready. From basic corrections to advanced stylistic improvements, we tailor our approach to your book’s unique voice. If you need additional support, our expert ghostwriters can transform your concepts and drafts into a powerful, polished manuscript that captivates readers from start to finish.",
    image: "/images/simple/manuscript-development.webp",
  },
  {
    step: "04",
    title: "Book Cover Design & Layout",
    description:
      "Select from professionally designed book cover concepts customized to reflect your genre and creative vision. Collaborate closely with experienced designers to finalize a captivating cover that captures your story’s essence and appeals to your target audience. Your manuscript will then be expertly formatted for both print and digital editions, ensuring flawless layout, readability, and compliance with industry publishing standards—delivering a polished, bookstore-ready finish that enhances your book’s visual and professional appeal.",
    image: "/images/simple/book-cover-design.webp",
  },
  {
    step: "05",
    title: "Proofreading & Quality Assurance",
    description:
      "Undergo a meticulous final proofreading to catch any lingering errors, typos, or inconsistencies before publication. Our editorial team conducts a comprehensive quality check to ensure your book aligns with traditional publishing standards in both accuracy and presentation. Once refined, you’ll review and approve the final proof—your opportunity to make any last adjustments. This final stage ensures your manuscript is flawlessly polished, professionally formatted, and fully ready to make a lasting impression on readers.",
    image: "/images/simple/proofreading.webp",
  },
  {
    step: "06",
    title: "Publishing & Distribution",
    description:
      "We publish your book on leading global platforms, including Amazon Kindle, Barnes & Noble, and IngramSpark, ensuring maximum visibility and accessibility. Our team manages every technical detail—account setup, metadata optimization, and file formatting—so your publishing process is seamless. Once complete, your book is distributed worldwide in both digital and print formats, allowing readers everywhere to discover and purchase your work across trusted online bookstores and retail channels.",
    image: "/images/simple/publishing-distribution.webp",
  },
  {
    step: "07",
    title: "Royalties & Earnings",
    description:
      "Retain full ownership and creative control of your intellectual property while enjoying the benefits of professional publishing support. You’ll earn competitive royalties from every sale as our team manages all backend operations, from distribution to platform management. We also provide expert guidance on pricing strategies, sales positioning, and global distribution channels to help you maximize visibility and revenue, ensuring your book reaches the widest possible audience while keeping you in complete control.",
    image: "/images/simple/royalties-earnings.webp",
  },
  {
    step: "08",
    title: "Success",
    description:
      "Join a growing community of authors who’ve achieved their publishing dreams with The Pulp House Publishing. Our legacy of excellence ensures your work receives the professional care and exposure it deserves. Take advantage of optional post-publication marketing, audiobook production, and promotional opportunities to extend your book’s reach. With expert support and proven strategies, watch your story make a lasting impact in the literary world and beyond—backed by trusted publishing experience.",
    image: "/images/simple/success-books.webp",
  },
];

const ForAuthorsPage: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="from-primary/10 to-background bg-gradient-to-b px-4 py-20 text-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl space-y-6"
        >
          <span className="text-primary text-xl font-black tracking-wider uppercase">
            For Author
          </span>
          <h1 className="text-4xl leading-tight font-bold md:text-6xl">
            Empowering Authors. Elevating Stories.
          </h1>
          <p className="text-muted-foreground text-xl leading-relaxed md:text-2xl">
            Partner with The Pulp House Publishing to bring your story to
            life—from concept to global distribution. We help authors write,
            publish, and promote their books with expert guidance and
            personalized support every step of the way.
          </p>
        </motion.div>
      </section>

      {/* Process Intro */}
      <section className="bg-secondary/5 border-border border-y py-12">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Our Publishing Process – How We Take You from Manuscript to Market
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience a seamless publishing journey with The Pulp House
            Publishing — from expert editing and design to global distribution,
            we transform your manuscript into a professionally published,
            market-ready book.
          </p>
        </div>
      </section>

      {/* Steps */}
      <div className="space-y-0">
        {STEPS.map((item, idx) => (
          <section
            key={idx}
            className={`container mx-auto px-4 py-20 md:py-28 ${idx % 2 === 1 ? "bg-muted/10" : ""}`}
          >
            <div
              className={`flex flex-col items-center gap-12 lg:gap-16 ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full flex-1"
              >
                <div className="border-border bg-card relative overflow-hidden rounded-2xl border shadow-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={548}
                    height={325}
                    className="h-auto w-full object-cover"
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
                  <span className="text-primary/20 text-5xl font-black">
                    {item.step}
                  </span>
                  <h2 className="text-3xl font-bold md:text-4xl">
                    {item.title}
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                  <a
                    href="/get-free-quote"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {idx === 0
                      ? "Publish My Art Book Today"
                      : "Let’s Begin Publishing"}
                  </a>
                  <a
                    href="tel:(888)909-9431"
                    className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border px-8 text-sm font-medium shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Phone className="h-4 w-4" />
                    (888) 909-9431
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Partners Banner */}
      <section className="bg-muted/20 border-border border-t py-16">
        <div className="container px-4 text-center">
          <h2 className="mb-10 text-3xl font-bold">
            Our Book Publishing Partners
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale transition-all duration-500 hover:grayscale-0 md:gap-12">
            <Image
              src="/images/amazon.svg"
              alt="Amazon"
              width={102}
              height={31}
              className="h-8 w-auto object-contain"
            />
            <Image
              src="/images/kindle.svg"
              alt="Kindle"
              width={102}
              height={36}
              className="h-9 w-auto object-contain"
            />
            <Image
              src="/images/barnes-and-noble.svg"
              alt="Barnes and Noble"
              width={102}
              height={36}
              className="h-9 w-auto object-contain"
            />
            <Image
              src="/images/kobo.svg"
              alt="Kobo"
              width={102}
              height={52}
              className="h-10 w-auto object-contain"
            />
            <Image
              src="/images/apple-book.svg"
              alt="Apple Book"
              width={120}
              height={42}
              className="h-9 w-auto object-contain"
            />
            <Image
              src="/images/google-play-book.svg"
              alt="Google Play Books"
              width={130}
              height={42}
              className="h-9 w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ForAuthorsPage;
