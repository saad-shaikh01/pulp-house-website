"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";

interface VideoTestimonialsSectionProps {
  videos?: string[];
  title?: string;
  subtitle?: string;
}

const DEFAULT_VIDEOS = [
  "https://video.thepulphousepublishing.com/home-video.webm",
  "https://video.thepulphousepublishing.com/testi-01.webm",
  "https://video.thepulphousepublishing.com/testi-02.webm",
  "https://video.thepulphousepublishing.com/WhatsApp%20Video%202025-11-20%20at%206.02.06%20PM.webm",
  "https://video.thepulphousepublishing.com/book-publishing/8.webm",
  "https://video.thepulphousepublishing.com/ghostwriting/8.webm",
];

export const VideoTestimonialsSection: FC<VideoTestimonialsSectionProps> = ({
  videos = DEFAULT_VIDEOS,
  title = "Verified Reviews of Our Publishing Services",
  subtitle = "Don't just take our word for it. Listen to the reviews from authors, just like you, across the country that experienced the quality and commitment of The Pulp House Publishing.",
}) => {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background: 'url("/images/pan-bg.webp") center/cover no-repeat',
      }}
    >
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="bg-primary/10 border-primary/20 text-primary mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-sm">
            <Star className="h-4 w-4 fill-current" />
            Client Testimonials
          </div>
          <h2 className="!from-foreground !to-foreground/60 mb-4 !bg-gradient-to-br !bg-clip-text text-3xl font-bold !text-transparent md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {subtitle}
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((videoSrc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-black shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl max-w-[400px]">
                <video
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  className="h-full w-full object-cover"
                  // style={{ maxHeight: "500px" }}
                />

                {/* Overlay gradient on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Play icon overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <Play className="h-8 w-8 fill-current text-white" />
                  </div>
                </div>

                {/* Border glow effect */}
                <div className="group-hover:border-primary/50 absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300" />
              </div>

              {/* Decorative gradient blob */}
              <div className="from-primary/20 to-secondary/20 absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
