"use client";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  Phone,
  X,
  Lightbulb,
  Palette,
  Layout,
  Type,
  TrendingUp,
  RefreshCw,
  AlertTriangle,
  Quote,
  ImageIcon,
  Sparkles,
} from "lucide-react";
import { H1, H2, H3 } from "@/components/ui/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/forms/ContactForm";
import { VideoTestimonialsSection } from "@/components/sections/home/VideoTestimonialsSection";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Animated Section Wrapper
const AnimatedSection: FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Service data
const services = [
  {
    icon: Lightbulb,
    title: "Concept Development",
    description:
      "Creating a custom design concept based on your story, target audience, and genre trends.",
  },
  {
    icon: Palette,
    title: "Illustration & Graphic Design",
    description:
      "High-quality artwork, typography, and layout design that match your book's tone.",
  },
  {
    icon: Layout,
    title: "Cover Layout & Formatting",
    description:
      "Designing covers for eBooks, paperback, hardcover, and print-ready formats.",
  },
  {
    icon: Type,
    title: "Typography & Branding",
    description:
      "Font choices and styling that complement your story and strengthen brand identity.",
  },
  {
    icon: TrendingUp,
    title: "Market Research & Trend Analysis",
    description:
      "Designs optimized for genre conventions and current market trends to boost sales.",
  },
  {
    icon: RefreshCw,
    title: "Final Delivery & Revisions",
    description:
      "Multiple revisions and delivery of print-ready and digital files.",
  },
];

const audienceItems = [
  "Indie authors launching their first book",
  "Self-publishing authors aiming for Amazon KDP, IngramSpark, or Barnes & Noble",
  "Authors who want a market-ready eBook or paperback book cover",
  "Fiction writers in competitive genres (Sci-Fi, Fantasy) needing high-quality covers",
  "Authors updating or rebranding existing covers",
  "Authors seeking covers that fit their target audience and market",
  "Nonfiction writers needing covers that establish authority and credibility",
];

const processSteps = [
  {
    number: "1",
    title: "Discovery & Concept Discussion",
    description:
      "We review your book, discuss your vision, genre, audience, and inspirations.",
  },
  {
    number: "2",
    title: "Concept Sketch & Mockups",
    description:
      "We create multiple concept sketches and mockups for your approval.",
  },
  {
    number: "3",
    title: "Design & Revisions",
    description:
      "Our designers create a polished cover, integrating feedback and making revisions until perfect.",
  },
  {
    number: "4",
    title: "Final Delivery",
    description:
      "Receive high-resolution print and digital-ready files, formatted for eBook and print platforms.",
  },
];

const designDonts = [
  "Covers that don't convey the genre",
  "Generic stock images",
  "Poor typography choices",
  "Low-resolution images",
  "Inconsistent branding across series",
  "Misaligned design for eBook vs print",
  "Covers that fail to attract readers",
  "Layouts not optimized for Amazon KDP or other platforms",
];

const whyChooseUs = [
  {
    title: "Expert Designers",
    description: "Skilled in genre-specific, market-driven designs.",
  },
  {
    title: "Professional Quality",
    description: "Covers optimized for print and digital platforms.",
  },
  {
    title: "Author-Centric Collaboration",
    description: "Your feedback shapes the final design.",
  },
  {
    title: "Market Research Backed",
    description: "Covers designed for industry trends and reader expectations.",
  },
  {
    title: "Guaranteed Satisfaction",
    description: "Multiple revisions and high-resolution deliverables.",
  },
];

const comparisons = [
  {
    competitor: "Freelancers",
    competitorPoints: [
      "Skill varies, may miss design trends",
      "Limited genre experience",
      "Often generic stock imagery",
      "Inconsistent quality",
      "Long revision cycles",
    ],
    ourPoints: [
      "Professional designers with genre expertise",
      "Custom, market-aware cover concepts",
      "High-resolution print & digital files",
      "Fast, reliable revisions",
      "Author-first collaboration",
    ],
  },
  {
    competitor: "AI Tools",
    competitorPoints: [
      "Generic and unfinished designs",
      "Use common fonts available on the internet",
      "No real understanding of story or audience",
      "Cannot ensure print-ready formatting",
      "Considered art theft",
    ],
    ourPoints: [
      "Human designers understand story and genre.",
      "Custom artwork, typography, and layouts",
      "Multiple revision rounds for perfection",
      "Covers optimized for eBook and print",
      "Rights and confidentiality guaranteed",
    ],
  },
  {
    competitor: "Agencies",
    competitorPoints: [
      "Author often removed from design decisions",
      "Standardized templates",
      "Slow turnaround time",
      "Generic branding for multiple projects",
    ],
    ourPoints: [
      "Author-focused collaboration",
      "Tailored covers for every book and genre",
      "Fast and transparent process",
      "Unique, professional design for your book",
    ],
  },
];

const faqs = [
  {
    question: "Can you design covers for all genres?",
    answer:
      "Yes! We specialize in fiction, nonfiction, romance, thriller, fantasy, self-help, and more.",
  },
  {
    question: "Do you provide eBook and print-ready covers?",
    answer:
      "Absolutely. We deliver high-resolution files optimized for all platforms including Amazon KDP, IngramSpark, and other print-on-demand services.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "We offer multiple revision rounds to ensure your cover perfectly matches your vision.",
  },
  {
    question: "Can you redesign my existing book cover?",
    answer:
      "Yes! We can modernize, rebrand, or update existing covers to attract more readers.",
  },
];

const testimonials = [
  {
    quote:
      "Working with The Pulp House Publishing transformed my book. The cover design perfectly captured my story's mood and genre. Couldn't be happier.",
    author: "Michael Tom",
  },
  {
    quote:
      "Their designers understood my vision immediately and delivered a professional, eye-catching cover. Sales increased the moment I uploaded it!",
    author: "Jenny S.",
  },
  {
    quote:
      "I was amazed at the quality of the final cover. The collaboration was smooth, and the team listened to every suggestion. Highly recommend!",
    author: "Daniel Reed",
  },
];

const BookCoverDesignPage: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="hero-shape shape-1" />
        <div className="hero-shape shape-2" />
        <div className="hero-shape shape-3" />
        <div className="hero-overlay-gradient" />

        <div className="container relative z-10 px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <span className="eyebrow">Expert Book Cover Design Services</span>

              <H1 size="h1Sm" className="!leading-tight">
                Are You an Indie Author Looking for{" "}
                <span className="gradient-text-primary">Genre-Specific Book Cover Design?</span>
              </H1>

              <p className="text-xl md:text-2xl font-semibold text-foreground">
                We Have Got Your Back!
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Access our expert designers for high-quality book cover illustrations for self-publishing authors so your book has a polished, professional look.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/get-free-quote" className="btn btn-primary btn-lg">
                  Design My Book Cover
                </Link>
                <a
                  href="tel:888-909-9431"
                  className="btn btn-outline-primary btn-lg btn-icon"
                >
                  <Phone className="w-5 h-5" />
                  888-909-9431
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-8 md:p-10 shadow-2xl">
                <div className="mb-6">
                  <H3 size="h4Sm">Get a Cover That Sells!</H3>
                  <p className="text-muted-foreground mt-2">
                    Request a free consultation today
                  </p>
                </div>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <AnimatedSection className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent" />
        <div className="container relative z-10 px-4">
          <div className="text-center mb-12">
            <H2 size="h2Sm" align="center">
              Problem and Solution Breakdown
            </H2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem Card */}
            <motion.div variants={fadeInLeft} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-destructive/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative glass-card rounded-3xl p-8 md:p-10 border-destructive/20 h-full">
                <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                  <X className="w-8 h-8 text-destructive" />
                </div>
                <H3 size="h4Sm" className="mb-4">
                  Don't Let a Bad Book Cover Be the Reason Your Great Story Gets Lost.
                </H3>
                <p className="text-muted-foreground leading-relaxed">
                  Many indie authors have powerful stories but lose potential readers due to generic, unprofessional, or mismatched book illustrations. Because unfortunately, a lot of readers do judge a book by its cover!
                </p>
              </div>
            </motion.div>

            {/* Solution Card */}
            <motion.div variants={fadeInRight} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative glass-card rounded-3xl p-8 md:p-10 border-primary/20 h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <H3 size="h4Sm" className="mb-4">
                  We Create Custom Book Cover Designs to Help Your Book Stand Out!
                </H3>
                <p className="text-muted-foreground leading-relaxed">
                  Our professional book cover illustrators ensure your book is as visually-appealing as it is to read. We combine creativity and genre research to create book cover art that captivates readers instantly.
                </p>
                <div className="mt-6">
                  <Link href="/get-free-quote" className="btn btn-primary">
                    Connect with Our Book Cover Designers
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Banner 1 */}
      <AnimatedSection className="py-16 md:py-20 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-background-shine">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <H2 size="h3Sm" className="text-white mb-4">
                High-Quality Book Cover Art in the U.S. Customized for Each specific Genre
              </H2>
              <p className="text-white/80 text-lg mb-6">
                At The Pulp House Publishing, we provide genre-focused, professional cover designs that boost discoverability, credibility, and sales.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/contact-us" className="btn btn-white btn-lg">
                  Contact Us Today!
                </Link>
                <a
                  href="tel:888-909-9431"
                  className="btn btn-outline-primary btn-lg !border-white !text-white hover:!bg-white/10"
                >
                  888-909-9431
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 hidden lg:block">
              <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Palette className="w-24 h-24 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Service Overview */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container px-4">
          <div className="text-center mb-16">
            <H2 size="h2Sm" align="center" className="mb-4">
              What Our Book Cover Designers Provide
            </H2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Book cover design is the first impression your readers get. A professionally designed print or eBook cover grabs attention, communicates your genre, and signals quality.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative glass-card rounded-2xl p-6 md:p-8 h-full hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <H3 size="h4Sm" className="mb-3">
                    {service.title}
                  </H3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Who This Is For */}
      <AnimatedSection className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <H2 size="h2Sm">Who Our Book Cover Design Services Are For</H2>
              <p className="text-lg text-muted-foreground">
                Our Book cover artists create attention-grabbing illustrations for:
              </p>
              <Link href="/get-free-quote" className="btn btn-primary">
                Consult with a Book Cover Artist
              </Link>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {audienceItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/30 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container relative z-10 px-4">
          <div className="text-center mb-16">
            <H2 size="h2Sm" align="center">
              How We Create Book Cover Illustrations and Typography
            </H2>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex gap-6 md:gap-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {idx !== processSteps.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20" />
                )}

                {/* Step number */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                  <span className="text-white font-bold text-lg">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 glass-card rounded-2xl p-6 hover:border-primary/30 transition-all">
                  <H3 size="h4Sm" className="mb-2">
                    {step.title}
                  </H3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Design Don'ts We Avoid */}
      <AnimatedSection className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 text-center">
          <H2 size="h2Sm" align="center" className="mb-4">
            Design Don'ts We Absolutely Avoid
          </H2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            We ensure your book cover never falls into these common traps.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {designDonts.map((item, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="flex items-center gap-3 px-6 py-4 glass-card rounded-full hover:border-destructive/30 hover:-translate-y-1 transition-all"
              >
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Before / After Transformation */}
      <AnimatedSection className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <H2 size="h2Sm" align="center" variant="inverse" className="mb-4">
              The Power of Professional Art. Only with The Pulp House Publishing!
            </H2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              We take your story and breathe life into it. Our visually striking, market-ready cover image grabs attention and communicates your book's story instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[4/3] rounded-2xl bg-slate-700/50 backdrop-blur-sm border border-white/10 overflow-hidden flex items-center justify-center p-8">
                <div className="text-center">
                  <ImageIcon className="w-16 h-16 text-white/30 mx-auto mb-4" />
                  <p className="text-white/50 text-sm">Generic, uninspiring cover that fails to capture your story</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 py-2 px-4 bg-slate-600/80 backdrop-blur-sm rounded-lg text-center text-sm">
                Before Expert Book Cover Design
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-sm border border-primary/30 overflow-hidden flex items-center justify-center p-8">
                <div className="text-center">
                  <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-white/80 text-sm">Professional, genre-specific cover that captivates readers</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 py-2 px-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-center text-sm font-medium">
                After Expert Book Cover Design
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container px-4">
          <div className="text-center mb-16">
            <H2 size="h2Sm" align="center">
              Why Authors Choose Our Book Cover Design Services
            </H2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="text-center p-6 glass-card rounded-2xl hover:border-primary/30 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-base font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/get-free-quote" className="btn btn-primary btn-lg">
              Hire Our Book Cover Illustrator
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Banner 2 */}
      <AnimatedSection className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border-primary/20">
            <H2 size="h3Sm" className="mb-4">
              Visually Compelling Covers That 10x Your Sales & Reader Engagement
            </H2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We create book covers that not only look professional but are strategically designed to attract readers and boost discoverability.
            </p>
            <Link href="/get-free-quote" className="btn btn-primary btn-lg">
              Design Your Book Cover
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Comparison Section */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container px-4">
          <div className="text-center mb-16">
            <H2 size="h2Sm" align="center">
              Compare Our Value
            </H2>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {comparisons.map((comparison, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Competitor */}
                <div className="glass-card rounded-2xl overflow-hidden border-destructive/20">
                  <div className="bg-slate-800 text-white px-6 py-4 text-center font-bold">
                    {comparison.competitor}
                  </div>
                  <ul className="p-6 space-y-3">
                    {comparison.competitorPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Us */}
                <div className="glass-card rounded-2xl overflow-hidden border-primary/30">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 text-center font-bold">
                    The Pulp House Publishing
                  </div>
                  <ul className="p-6 space-y-3">
                    {comparison.ourPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Banner 3 - 100% Human */}
      <AnimatedSection className="py-16 md:py-20 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-background-shine">
        <div className="container px-4 text-center">
          <H2 size="h3Sm" className="text-white mb-4">
            100% Human, Custom Book Cover Design – No Shortcuts, No Templates
          </H2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Every designer carefully illustrates your book cover art for romantic novels, science fiction, mystery tales, Business books, and more.
          </p>
          <Link href="/get-free-quote" className="btn btn-white btn-lg">
            Start Your Custom Design
          </Link>
        </div>
      </AnimatedSection>

      {/* FAQs */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container px-4">
          <div className="text-center mb-12">
            <H2 size="h2Sm" align="center">
              Frequently Asked Questions
            </H2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="glass-card rounded-xl mb-4 px-6 border-border/50 hover:border-primary/30 transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </AnimatedSection>

      {/* Client Testimonials */}
      <AnimatedSection className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <span className="eye-brow-primary mb-4">Client Testimonials</span>
            <H2 size="h2Sm" align="center" className="mb-4">
              What Authors Say About Our Cover Designs
            </H2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all"
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-primary font-semibold">— {testimonial.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Video Testimonials */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4 text-center">
          <span className="eye-brow-primary mb-4">
            More Success Stories
          </span>
          <H2 size="h2Sm" align="center" className="mb-4">
            Our Cover Designs Are Trusted by Authors Nationwide
          </H2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hear directly from authors who transformed their books with our professional cover designs.
          </p>
          <VideoTestimonialsSection />
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted/20">
        <div className="container px-4 text-center">
          <h3 className="text-xl font-bold mb-8 text-muted-foreground">Optimized for All Major Platforms</h3>
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

      {/* Sticky CTA - Desktop Only */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-4 glass-card rounded-full px-6 py-3 shadow-2xl border-primary/20"
      >
        <span className="font-medium">Ready for a stunning book cover?</span>
        <Link href="/get-free-quote" className="btn btn-primary btn-sm">
          Design Now
        </Link>
      </motion.div>
    </>
  );
};

export default BookCoverDesignPage;
