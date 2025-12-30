"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const TrustedPublishersSection: FC = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container px-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Text Content */}
          <motion.div
            // initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:col-span-7 lg:text-left"
          >
            <h2 className="!from-foreground !to-foreground/60 !bg-gradient-to-br !bg-clip-text text-3xl font-bold !text-transparent md:text-4xl lg:text-5xl">
              Trusted Publishers in the U.S. for Bestselling Authors
            </h2>

            <div className="text-muted-foreground space-y-4 text-base md:text-lg">
              <p>
                Writing comes naturally to some; others take pride in design,
                while many simply want their stories told. Whether you're
                finishing your first novel or are a seasoned writer ready to
                publish your fifth title, you're in the right place.
              </p>

              <p>
                At The Pulp House Publishing, we help independent authors
                publish professionally without the hassle of pursuing a literary
                agent or enduring years of waiting.
              </p>

              <p>
                Our self publishing services for indie authors range from
                ghostwriting and manuscript evaluation to editing and
                proofreading, as well as book cover design, illustration,
                interior layout, and formatting for print and eBook.
              </p>

              <p>
                We also handle audiobook production, uploading, metadata and
                keyword optimization, global distribution setup, and author
                website creation. To help you reach readers, we provide full
                publicity, branding, book marketing services for self-publishing
                authors in USA.
              </p>

              <p className="text-foreground font-semibold">
                This makes us the only partner you'll ever need to publish
                seamlessly and professionally.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/get-free-quote"
                className="bg-primary hover:bg-primary/90 hover:shadow-primary/50 inline-flex items-center rounded-full px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105"
              >
                Need Publishing Support?
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <Image
                src="/images/home/ctaImage.webp"
                alt="Best Book Publishers In USA"
                width={413}
                height={500}
                className="h-auto w-full rounded-2xl shadow-2xl"
              />
              {/* Decorative gradient blob */}
              <div className="bg-primary/20 absolute -top-4 -right-4 -z-10 h-72 w-72 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
