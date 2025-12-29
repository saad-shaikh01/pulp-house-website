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
  subtitle = "Don't just take our word for it. Listen to the reviews from authors, just like you, across the country that experienced the quality and commitment of The Pulp House Publishing."
}) => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-4">
            <Star className="w-4 h-4 fill-current" />
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !bg-gradient-to-br !from-foreground !to-foreground/60 !bg-clip-text !text-transparent mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((videoSrc, index) => (
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
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ maxHeight: "500px" }}
                />

                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

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
