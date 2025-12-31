"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";

const videos = [
  {
    src: "https://video.thepulphousepublishing.com/Marketing/7.webm",
    title: "Marketing Success Story"
  },
  {
    src: "https://video.thepulphousepublishing.com/book-publishing/8.webm",
    title: "Book Publishing Experience"
  },
  {
    src: "https://video.thepulphousepublishing.com/ghostwriting/4.webm",
    title: "Ghostwriting Service Review"
  },
  {
    src: "https://video.thepulphousepublishing.com/Marketing/10.webm",
    title: "Marketing Strategy Review"
  },
  {
    src: "https://video.thepulphousepublishing.com/ghostwriting/8.webm",
    title: "Professional Ghostwriting"
  },
  {
    src: "https://video.thepulphousepublishing.com/Marketing/5.webm",
    title: "Marketing Excellence"
  },
];

export const ContactTestimonialsSection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-4">
            <Star className="w-4 h-4 fill-current" />
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !bg-gradient-to-br !from-foreground !to-foreground/60 !bg-clip-text !text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from authors who trusted us with their publishing journey
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ maxHeight: "500px" }}
                  title={video.title}
                />

                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>

                {/* Border glow effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
              </div>

              {/* Decorative gradient blob */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
