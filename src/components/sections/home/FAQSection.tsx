"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a finished manuscript before contacting you?",
    answer:
      "Not at all. Many of our authors come to us while they're still writing or even just developing their concept. We can help at any stage, whether you need ghostwriting services, writing coaching, or editorial development to turn your idea into a complete manuscript.",
  },
  {
    question: "What's the difference between self-publishing and traditional publishing?",
    answer:
      "In traditional publishing, you find an agent who submits your manuscript to a publisher, and they decide whether to accept it. They control design, pricing, and royalties. In self-publishing, you retain full ownership of your rights, your profits, and your creative direction. We simply provide the professional expertise to make your self-published book look, read, and perform like those published traditionally.",
  },
  {
    question: "Will I keep the rights to my book?",
    answer:
      "Yes! 100% of your rights remain yours. Always. We believe your work belongs to you. Our role is to provide print and digital book distribution platforms for authors. We help you publish and launch it professionally while you maintain full creative and legal ownership.",
  },
  {
    question: "What if my manuscript needs a lot of work?",
    answer:
      "That's completely fine and extremely common! We offer developmental editing, manuscript evaluations, and even ghostwriting support to help strengthen your story, structure, and language. Our editors are here to help you make your book the best version of itself.",
  },
  {
    question: "How much does publishing a book cost?",
    answer:
      "It depends on your goals and the services you choose. We are the most affordable self publishing company in USA. After a short consultation, we'll provide a custom quote that fits your project and budget (with no hidden fees).",
  },
  {
    question: "Can you design both the cover and the interior of my book?",
    answer:
      "Absolutely. Our design team handles everything from book cover art and typography to page layout and formatting for print and eBook. We'll make sure your book looks beautiful inside and out, across all platforms and devices.",
  },
  {
    question: "Where will my book be available once it's published?",
    answer:
      "Your book can be distributed worldwide through major online retailers and platforms such as Amazon, Apple Books, Barnes & Noble, Kobo, Google Play, and IngramSpark. You can also avail our print on demand options for indie authors.",
  },
  {
    question: "Can you help me market my book once it's published?",
    answer:
      "Yes! That's one of our specialties. We offer launch campaigns, social media strategies, press releases, and book advertising support to help you reach readers. We also assist with author branding, websites, and SEO so your audience can find you easily.",
  },
  {
    question: "How long does the publishing process take?",
    answer:
      "It varies depending on your project's scope. A simple edit-and-publish might take a few weeks, while full production with design, editing, and marketing could take a few months. We'll create a personalized timeline so you always know what to expect.",
  },
  {
    question: "What makes your publishing services different from doing it all myself?",
    answer:
      "DIY platforms give you the tools but not the expertise. We bring together experienced editors, designers, marketers, and publishing specialists to handle every detail, ensuring your book meets professional book publishing standards, stands out visually, and reaches readers effectively.",
  },
];

export const FAQSection: FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !bg-gradient-to-br !from-foreground !to-foreground/60 !bg-clip-text !text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything You Wanted to Know About Us.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card hover:bg-card/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
