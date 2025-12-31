"use client";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Phone,
  Palette,
  BookOpen,
  Users,
  Map,
  Sparkles,
  Megaphone,
  Star,
  Pen,
  X,
} from "lucide-react";
import { Heading, H1, H2, H3 } from "@/components/ui/heading";
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
    icon: BookOpen,
    title: "Book Cover Illustrations",
    description:
      "Custom artwork for book covers that instantly communicate genre and story tone.",
  },
  {
    icon: Sparkles,
    title: "Inside-the-Book Illustrations",
    description:
      "Scene-by-scene visuals that depict key moments or emotional highlights.",
  },
  {
    icon: Users,
    title: "Character Illustrations",
    description:
      "Detailed artwork showing each character's look, personality, and evolution.",
  },
  {
    icon: Map,
    title: "World Maps & Setting Illustrations",
    description: "Fantasy maps, city layouts, magical realms, and visual guides.",
  },
  {
    icon: Palette,
    title: "Storyline & World-Building Visuals",
    description:
      "Illustrations of creatures, artifacts, symbols, cultures, and environments.",
  },
  {
    icon: Megaphone,
    title: "Promotional Artwork",
    description:
      "Graphics for social media posts, book trailers, posters, and ads.",
  },
];

const audienceItems = [
  "Indie authors needing custom book cover art",
  "Fantasy and sci-fi writers who need maps and world-building visuals",
  "Romance and YA authors wanting stylized character artwork",
  "Children's book authors needing illustrated scenes",
  "Authors building a large universe and visual identity",
  "Writers preparing promotional campaigns for book launches",
];

const processSteps = [
  {
    number: "1",
    title: "Creative Discovery",
    description:
      "We discuss your story, art style, characters, and visual atmosphere.",
  },
  {
    number: "2",
    title: "Concept Sketches",
    description:
      "We create rough drafts, thumbnails, and layout ideas based on your vision.",
  },
  {
    number: "3",
    title: "Detailed Illustration Phase",
    description:
      "Our illustrators produce polished, full-color artwork with textures, lighting, and emotion.",
  },
  {
    number: "4",
    title: "Final Delivery",
    description:
      "You receive high-resolution print-ready and digital files for cover art, interior pages, and marketing use.",
  },
];

const illustrationTypes = [
  { icon: BookOpen, label: "Cover Art" },
  { icon: Sparkles, label: "Interior Scene Illustrations" },
  { icon: Users, label: "Character Profiles" },
  { icon: Map, label: "Maps & World-Building Guides" },
  { icon: Megaphone, label: "Promotional Artwork" },
  { icon: Palette, label: "Story Objects & Artifacts" },
];

const whyChooseUs = [
  {
    icon: Palette,
    title: "Genre-Specific Artists",
    description:
      "Skilled in fantasy, sci-fi, children's books, YA, romance & more.",
  },
  {
    icon: BookOpen,
    title: "Story-Driven Art",
    description: "Every illustration captures your plot, world, and characters.",
  },
  {
    icon: Star,
    title: "Professional Quality",
    description:
      "High-resolution files formatted for print, digital books & marketing.",
  },
  {
    icon: Pen,
    title: "Author-First Collaboration",
    description:
      "We refine the artwork until it aligns with your creative vision.",
  },
];

const comparisons = [
  {
    competitor: "Freelancers",
    competitorPoints: [
      "Skill varies dramatically",
      "Often limited understanding of genre",
      "Inconsistent art style",
      "No structured feedback cycles",
      "May delay revisions",
    ],
    ourPoints: [
      "Genre-specialized illustrators",
      "Cohesive art style for entire books",
      "Market-aware and story-driven artwork",
      "Fast turnaround time",
      "Clear revision process",
    ],
  },
  {
    competitor: "AI Tools",
    competitorPoints: [
      "Cannot understand story emotion",
      "Inconsistent styles and anatomy errors",
      "Copyright uncertainty/considered art theft",
      "Low-res outputs unsuitable for print",
    ],
    ourPoints: [
      "100% human-created illustrations",
      "Consistent style for all characters",
      "Full rights and confidential art files",
      "High-res files suitable for print",
    ],
  },
  {
    competitor: "Agencies",
    competitorPoints: [
      "Often template-based artwork",
      "Slow workflow and limited customization",
      "Little author involvement",
      "High overhead costs and hidden charges",
    ],
    ourPoints: [
      "Fully custom illustrations",
      "Direct collaboration with illustrators",
      "Tailored art direction for your genre",
      "100% transparent pricing",
    ],
  },
];

const faqs = [
  {
    question: "What styles do you illustrate in?",
    answer:
      "We offer realism, semi-realism, cartoon, fantasy, dark art, watercolor, line art, and more.",
  },
  {
    question: "Do you provide illustrations for both eBooks and print?",
    answer:
      "Yes, all artwork comes in high-resolution formats suitable for KDP, IngramSpark, and traditional printing.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Absolutely. We offer multiple revision rounds to ensure the artwork reflects your vision.",
  },
  {
    question: "Can you illustrate an entire book series?",
    answer:
      "Yes, we can create cohesive art styles for series branding, maps, characters, and promotional visuals.",
  },
];

const BookIllustrationPage: FC = () => {
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
              <span className="eyebrow">Custom Book Illustration Services</span>

              <H1 size="h1Sm" className="!leading-tight">
                Why Settle for Templates When You Can Get{" "}
                <span className="gradient-text-primary">Custom Artwork</span> for
                Your Book?
              </H1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Let Us Bring Your World, Characters, and Storylines to Life
                Through Art! We create custom illustrations tailored to your
                book's genre, mood, and narrative. Get everything from book cover
                art to character scenes, fantasy maps, and promotional graphics.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/get-free-quote" className="btn btn-primary btn-lg">
                  Generate Illustrations for My Book
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
                  <H3 size="h4Sm">Start Your Illustration Project</H3>
                  <p className="text-muted-foreground mt-2">
                    Get a free consultation today
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
            <motion.div
              variants={fadeInLeft}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-destructive/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative glass-card rounded-3xl p-8 md:p-10 border-destructive/20 h-full">
                <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                  <X className="w-8 h-8 text-destructive" />
                </div>
                <H3 size="h4Sm" className="mb-4">
                  You've Got Impactful Words but No Visuals to Support Them?
                </H3>
                <p className="text-muted-foreground leading-relaxed">
                  Many indie authors struggle with generic covers, flat character
                  art, or inconsistent scene illustrations. Without compelling
                  visuals, your story may fail to capture the imagination of your
                  ideal reader.
                </p>
              </div>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              variants={fadeInRight}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative glass-card rounded-3xl p-8 md:p-10 border-primary/20 h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <H3 size="h4Sm" className="mb-4">
                  We Provide Visuals That Match Your Impactful Story!
                </H3>
                <p className="text-muted-foreground leading-relaxed">
                  Our illustration services provide story-driven artwork that
                  enhances your narrative. From maps to characters and
                  promotional art, our illustrators bring your vision to life
                  professionally.
                </p>
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
                Your Trusted Partner for Creating Illustrations That Let Readers
                See, Feel, and Live Your Story.
              </H2>
              <p className="text-white/80 text-lg mb-6">
                Fantasy realms, magical cities, detailed characters and hidden
                corners, fully realized in book artwork.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/get-free-quote" className="btn btn-white btn-lg">
                  Get in Touch
                </Link>
                <a href="tel:888-909-9431" className="btn btn-outline-primary btn-lg !border-white !text-white hover:!bg-white/10">
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

      {/* Service Includes */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container px-4">
          <div className="text-center mb-16">
            <H2 size="h2Sm" align="center" className="mb-4">
              What Our Book Illustration Service Includes
            </H2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book illustration is more than just images. It's a storytelling
              tool. Our professional art for novels and books helps readers
              visualize your world the way you intended.
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
              <H2 size="h2Sm">Who Our Book Illustration Services Are For</H2>
              <p className="text-lg text-muted-foreground">
                We collaborate with authors across genres to build visual
                identities for their stories.
              </p>
              <Link href="/get-free-quote" className="btn btn-primary">
                Connect with an Illustrator
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
              Our Simple Steps to Creating Professional Illustrations
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

      {/* Types of Illustrations */}
      <AnimatedSection className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 text-center">
          <H2 size="h2Sm" align="center" className="mb-4">
            Types of Digital Book Illustrations We Create
          </H2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Our illustration services bring your story to life. We capture every
            character, scene, and world your readers imagine.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-4"
          >
            {illustrationTypes.map((type, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="flex items-center gap-3 px-6 py-4 glass-card rounded-full hover:border-primary/30 hover:-translate-y-1 transition-all"
              >
                <type.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{type.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12">
            <Link href="/get-free-quote" className="btn btn-primary btn-lg">
              Hire a Book Illustrator
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Before / After */}
      <AnimatedSection className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <H2 size="h2Sm" align="center" variant="inverse" className="mb-4">
              The Pulp House Publishing Turns Your Story into a Piece of Art
            </H2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We elevate your book from plain text to a visually immersive
              experience that builds fan engagement and strengthens your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[4/3] rounded-2xl bg-slate-700/50 backdrop-blur-sm border border-white/10 overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <BookOpen className="w-16 h-16 text-white/30 mx-auto mb-4" />
                  <p className="text-white/50">Plain text manuscript</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 py-2 px-4 bg-slate-600/80 backdrop-blur-sm rounded-lg text-center text-sm">
                Before Immersive Illustration
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-sm border border-primary/30 overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-white/80">Stunning visual story</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 py-2 px-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-center text-sm font-medium">
                After Immersive Illustration
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
              Why Authors Choose Our Illustration Services
            </H2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="text-center p-6 glass-card rounded-2xl hover:border-primary/30 transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <a href="tel:888-909-9431" className="btn btn-primary btn-lg">
              Call Us Today!
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section 2 */}
      <AnimatedSection className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-3xl blur-2xl" />
                <div className="relative aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 flex items-center justify-center">
                  <Palette className="w-32 h-32 text-primary/50" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <H2 size="h2Sm">
                Illustrations That Deepen Your Story and Hook Your Readers
              </H2>
              <p className="text-lg text-muted-foreground">
                We design visuals that boost engagement, storytelling quality, and
                overall book appeal. Our artists work to ensure every stroke
                resonates with your narrative.
              </p>
              <Link href="/portfolio" className="btn btn-primary btn-lg">
                See Our Book Artist Portfolio
              </Link>
            </div>
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

      {/* CTA Section 3 */}
      <AnimatedSection className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <H2 size="h2Sm">
                Your Illustrations Should Not Be at the Mercy of a Prompt. Invest
                in 100% Human Book Art.
              </H2>
              <p className="text-lg text-muted-foreground">
                At Pulp House Publishing, we draw every artwork intentionally to
                honor your story. Avoid generic AI outputs and get custom, soulful
                art that truly represents your work.
              </p>
              <Link href="/get-free-quote" className="btn btn-primary btn-lg">
                Visualize Your Book Today
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 flex items-center justify-center">
                <Pen className="w-32 h-32 text-secondary/50" />
              </div>
            </div>
          </div>
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

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 text-center">
          <span className="eye-brow-primary mb-4">
            Clients Sharing Their Experiences
          </span>
          <H2 size="h2Sm" align="center" className="mb-4">
            Our Book Illustrations Are Shining With 5 Star Reviews
          </H2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our dedication is reflected in the words of our clients. Discover what
            the fuss is all about.
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
        <span className="font-medium">Bring your story to life today!</span>
        <Link href="/get-free-quote" className="btn btn-primary btn-sm">
          Get Started
        </Link>
      </motion.div>
    </>
  );
};

export default BookIllustrationPage;
