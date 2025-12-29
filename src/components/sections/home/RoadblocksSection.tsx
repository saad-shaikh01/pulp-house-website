"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const roadblocks = [
  {
    number: "01",
    problem: "I have a story to tell, but I don't know how to bring it to life.",
    solution: "Our ghostwriters and editors help write your ideas exactly the way you've imagined, making them into a compelling, publishable manuscript that sounds authentically like you.",
  },
  {
    number: "02",
    problem: "I keep going back and fixing mistakes in my book, but it's still not perfect.",
    solution: "We enhance your draft with expert editing, turning rough pages into a polished, professional book.",
  },
  {
    number: "03",
    problem: "Print, eBook, and audiobooks; it's all so confusing!",
    solution: "We manage the entire publishing process: print, eBook, and audiobook, allowing you to focus solely on your story while we handle the rest.",
  },
  {
    number: "04",
    problem: "I'm worried about making a mistake that could affect my royalties or rights.",
    solution: "Our team ensures that your copyrights, ISBNs, and royalties are correctly managed to protect your rights and earnings.",
  },
  {
    number: "05",
    problem: "I want a professional cover that is true to my story.",
    solution: "We provide elaborate book cover design and layout services that reflect your story and stand out on every bookshelf and online store.",
  },
  {
    number: "06",
    problem: "My book doesn't look like something from a bookstore. I want it to feel professional inside and out.",
    solution: "Our layout and formatting experts provide your book with a clean, bookstore-quality finish both inside and out.",
  },
  {
    number: "07",
    problem: "I want my book to be adapted into a movie. I just don't know how.",
    solution: "We help you package your book professionally for film and TV consideration, including script writing, adaptation support, pitching guidance, and industry connections.",
  },
  {
    number: "08",
    problem: "There are so many publishing platforms. I don't know where to start or how to upload my book correctly.",
    solution: "We set up and upload your book across all major platforms correctly the first time: Amazon, IngramSpark, and beyond.",
  },
  {
    number: "09",
    problem: "I want to reach readers but don't know how to market my book effectively.",
    solution: "Our book marketing specialists create targeted campaigns to connect your book with the readers who will love it the most.",
  },
  {
    number: "10",
    problem: "I want to present myself as a professional author online, but I don't know how to build my author brand.",
    solution: "We help craft your professional author brand, from logo and website to media kit, to build lasting visibility and trust.",
  },
];

export const RoadblocksSection: FC = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            We Understand the<br />Roadblocks on the Way to
          </h2>
          <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-light">
              SELF{" "}
            </span>
            <span className="text-foreground">PUBLISHING</span>
          </div>
          <p className="text-xl text-muted-foreground">Does this sound like you?</p>
        </motion.div>

        {/* Roadblocks Grid */}
        <div className="max-w-6xl mx-auto space-y-6">
          {roadblocks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Number */}
                <div className="md:col-span-2 flex items-center justify-center md:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-secondary/30 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                      {item.number}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl group-hover:blur-3xl transition-all opacity-0 group-hover:opacity-100" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <div className="relative p-6 md:p-8 rounded-2xl bg-card border border-border group-hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    {/* Problem */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                      </span>
                      {item.problem}
                    </h3>

                    {/* Solution */}
                    <p className="text-muted-foreground leading-relaxed pl-9 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>{item.solution}</span>
                    </p>

                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
