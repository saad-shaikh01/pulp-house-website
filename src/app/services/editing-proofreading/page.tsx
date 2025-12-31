"use client";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Check,
  Phone,
  X,
  FileEdit,
  SpellCheck,
  Eye,
  Mic2,
  AlignLeft,
  ShieldCheck,
  AlertCircle,
  Quote,
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
    icon: FileEdit,
    title: "Line Editing",
    description:
      "Fine-tuning sentences for clarity, tone, flow, and readability.",
  },
  {
    icon: SpellCheck,
    title: "Copyediting",
    description:
      "Correcting grammar, punctuation, spelling, syntax, and consistency.",
  },
  {
    icon: Eye,
    title: "Proofreading",
    description:
      "Final layer of polish to eliminate typos, errors, and formatting issues.",
  },
  {
    icon: Mic2,
    title: "Style & Voice Alignment",
    description:
      "Ensuring your narrative voice stays consistent and engaging throughout.",
  },
  {
    icon: AlignLeft,
    title: "Formatting Consistency",
    description:
      "Fixing spacing, headings, chapter alignment, and manuscript formatting errors.",
  },
  {
    icon: ShieldCheck,
    title: "Final Quality Check",
    description:
      "A complete manuscript review to ensure error-free and professional presentation.",
  },
];

const audienceItems = [
  "Authors who are blind to typos after endless rereads",
  "Novelists who are done with their draft, needing clarity check.",
  "Authors ready to submit manuscripts to agents.",
  "Indie writers aiming for books polished like major publisher releases.",
  "Anyone who demands professional quality control.",
  "Debut authors who want to make the best first impression.",
  "Professional authors who are too busy to proofread.",
];

const processSteps = [
  {
    number: "1",
    title: "Discovery & Manuscript Review",
    description: "We understand your goals, genre, audience, and concerns.",
  },
  {
    number: "2",
    title: "Detailed Editing Pass",
    description:
      "Our editors refine grammar, flow, voice, clarity, and line-level structure.",
  },
  {
    number: "3",
    title: "Proofreading Pass",
    description:
      "A final sweep to eliminate typos, punctuation errors, and formatting issues.",
  },
  {
    number: "4",
    title: "Edited Manuscript Handoff",
    description:
      "You receive a clean, error-free manuscript ready for publishing, printing, or pitching.",
  },
];

const commonProblems = [
  "Grammar mistakes",
  "Typos & punctuation errors",
  "Repetitive sentences",
  "Awkward phrasing",
  "Inconsistent tone",
  "Wrong word usage",
  "Formatting issues",
  "Spelling inconsistencies",
  "Misplaced commas & run-on sentences",
];

const whyChooseUs = [
  {
    title: "Human-First Editors",
    description: "Skilled editors with real publishing experience.",
  },
  {
    title: "Market-Aware Improvements",
    description: "Edits that help you appeal to today's readers.",
  },
  {
    title: "Voice-Preserving Approach",
    description: "We improve your writing without altering your style.",
  },
  {
    title: "Complete Transparency",
    description: "Clear editing reports, revisions, and tracking notes.",
  },
  {
    title: "Fast & Reliable Delivery",
    description: "On-time every time every time. No delays, no hassle.",
  },
];

const comparisons = [
  {
    competitor: "Freelancers",
    competitorPoints: [
      "Skills vary widely",
      "May miss subtle errors",
      "No style consistency",
      "Limited communication",
      "Unpredictable timelines",
      "Informal agreements",
    ],
    ourPoints: [
      "Professional editors with genre expertise",
      "Detailed, multi-level editing",
      "Clear notes and tracked changes",
      "Consistent availability & support",
      "Guaranteed delivery timeline",
      "Transparent NDAs & work-for-hire protection",
    ],
  },
  {
    competitor: "AI Tools",
    competitorPoints: [
      "Algorithm-based corrections",
      "May distort tone or voice",
      "Cannot understand nuance",
      "Limited grammar detection",
      "Uses your work for database",
    ],
    ourPoints: [
      "Human editors with years of experience",
      "Natural, audience-aligned corrections",
      "Full understanding of tone & style",
      "Thorough grammar, clarity, and formatting checks",
      "Complete confidentiality & rights protection",
    ],
  },
  {
    competitor: "Agencies",
    competitorPoints: [
      "Detached workflow",
      "Generic editing",
      "No personalized attention",
      "Complex contracts",
      "Rigid processes",
    ],
    ourPoints: [
      "Personalized, author-first approach",
      "Customized editing for every manuscript",
      "Detailed notes & revision guidance",
      "100% Transparent processes",
      "Friendly communication throughout",
    ],
  },
];

const faqs = [
  {
    question: "What's the difference between editing and proofreading?",
    answer:
      "Editing fixes mistakes and improves grammar, structure, and consistency. Proofreading fixes typos and punctuation errors after editing is complete.",
  },
  {
    question: "Will you change my writing style?",
    answer:
      "No. Our editors refine your writing while preserving your authentic voice and tone.",
  },
  {
    question: "How long does book editing take?",
    answer:
      "Depending on word count and complexity, editing typically takes 4–6 weeks, plus 1–2 weeks for proofreading.",
  },
  {
    question: "Do you provide feedback notes?",
    answer:
      "Yes! You get marked-up edits, comments, suggestions, and a clean final version.",
  },
];

const testimonials = [
  {
    quote:
      "Thanks to their editing team, my manuscript reads smoothly and professionally. They fixed errors I didn't even realize were there. Worth every penny!",
    author: "Simone W.",
  },
  {
    quote:
      "Their proofreading gave my book the polish it desperately needed. I was amazed at the accuracy and attention to detail.",
    author: "Jonathan Briggs",
  },
  {
    quote:
      "I love how they refined my sentences without changing my voice. My book feels cleaner, more powerful, and completely error-free.",
    author: "Priya K.",
  },
];

const EditingProofreadingPage: FC = () => {
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
              <span className="eyebrow">Professional Book Editing & Proofreading Services</span>

              <H1 size="h1Sm" className="!leading-tight">
                You Know Your Story Is Good… So Why Doesn't It{" "}
                <span className="gradient-text-primary">Read Like It Yet?</span>
              </H1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Get Professional Book Editing & Proofreading Services for Indie Authors Here! We connect you with expect book editors and proofreaders that provide human-first editing. Once your manuscript is polished, all you have to do is hit 'Publish my book'.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/get-free-quote" className="btn btn-primary btn-lg">
                  Start Editing Today
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
                  <H3 size="h4Sm">Get Your Manuscript Polished</H3>
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
                  You've Reread It 100 Times. That's Why You Can't See the Mistakes.
                </H3>
                <p className="text-muted-foreground leading-relaxed">
                  Many authors struggle with overlooked grammar mistakes, awkward phrasing, inconsistent tone, confusing sentences, and small errors that distract readers. This is because you are too close the manuscript.
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
                  We Provide the Second Perspective to You
                </H3>
                <p className="text-muted-foreground leading-relaxed">
                  Go beyond software. Work with our professional editorial team to eliminate blind spots, refine your voice, and guarantee your powerful story is flawless and ready for success.
                </p>
                <div className="mt-6">
                  <Link href="/get-free-quote" className="btn btn-primary">
                    Hire a Book Editor
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
                Top Book Editing & Proofreading Service in the U.S. Trusted by Thousands of Indie Authors
              </H2>
              <p className="text-white/80 text-lg mb-6">
                At The Pulp House Publishing, you receive expert editors, consistent communication, and exceptional results. We transform your manuscript to a polished, professional, reader-ready book.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/get-free-quote" className="btn btn-white btn-lg">
                  Edit my Book
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
                <FileEdit className="w-24 h-24 text-white/80" />
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
              What Our Book Editing Services Include
            </H2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With our editor service for fiction and non-fiction books, you can have a manuscript that is ready for publication.
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
              <H2 size="h2Sm">Who Our Editing & Proofreading Service Is For</H2>
              <p className="text-lg text-muted-foreground">
                We proudly provide expert manuscript editing services for:
              </p>
              <Link href="/get-free-quote" className="btn btn-primary">
                Get a Professional Book Editing
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
              Our Complete Editing and Proofreading Process
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

      {/* Common Problems We Fix */}
      <AnimatedSection className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 text-center">
          <H2 size="h2Sm" align="center" className="mb-4">
            Common Problems We Fix
          </H2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Our editors tackle the issues that hold your manuscript back.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {commonProblems.map((problem, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="flex items-center gap-3 px-6 py-4 glass-card rounded-full hover:border-primary/30 hover:-translate-y-1 transition-all"
              >
                <AlertCircle className="w-5 h-5 text-destructive" />
                <span className="font-medium">{problem}</span>
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
              The Pulp House Publishing Guarantees Flawless Manuscripts
            </H2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Here is how we elevate your manuscript from unpolished writing to a publication-ready book. Authors report improved clarity, stronger flow, and a more professional reading experience.
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
                  <FileEdit className="w-16 h-16 text-white/30 mx-auto mb-4" />
                  <p className="text-white/50 text-sm">Unpolished manuscript with errors, awkward phrasing, and inconsistent flow</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 py-2 px-4 bg-slate-600/80 backdrop-blur-sm rounded-lg text-center text-sm">
                Before Professional Editing
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
                  <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-white/80 text-sm">Polished, error-free manuscript with improved clarity and professional flow</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 py-2 px-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-center text-sm font-medium">
                After Professional Editing
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
              Why Authors Choose Our Book Editing & Proofreading Services
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
              Get Your Free Quote for Book Editing
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Banner 2 */}
      <AnimatedSection className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border-primary/20">
            <H2 size="h3Sm" className="mb-4">
              Editing That Gets Exactly What You Meant to Say
            </H2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We don't just fix grammar. Out team of editors shape every sentence to fit your voice, genre, and audience. Your book won't just be error-free; it'll sound how it is meant to be.
            </p>
            <Link href="/get-free-quote" className="btn btn-primary btn-lg">
              Transform my Draft
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

      {/* CTA Banner 3 - No AI */}
      <AnimatedSection className="py-16 md:py-20 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-background-shine">
        <div className="container px-4 text-center">
          <H2 size="h3Sm" className="text-white mb-4">
            No AI Editing Software! Get 100% Human Editing & Proofreading.
          </H2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Every manuscript gets complete human attention to detail so your book stands out in a saturated market.
          </p>
          <a href="tel:888-909-9431" className="btn btn-white btn-lg">
            Call Us Today!
          </a>
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
              What Authors Say About Our Editing
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
            Our Editing Services Are Trusted by Authors Nationwide
          </H2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hear directly from authors who transformed their manuscripts with our professional editing.
          </p>
          <VideoTestimonialsSection />
        </div>
      </section>

      {/* Sticky CTA - Desktop Only */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-4 glass-card rounded-full px-6 py-3 shadow-2xl border-primary/20"
      >
        <span className="font-medium">Ready for a polished manuscript?</span>
        <Link href="/get-free-quote" className="btn btn-primary btn-sm">
          Start Editing
        </Link>
      </motion.div>
    </>
  );
};

export default EditingProofreadingPage;
