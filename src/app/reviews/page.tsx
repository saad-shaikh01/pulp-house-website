"use client";

import { FC } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoTestimonialsSection } from "@/components/sections/home/VideoTestimonialsSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

interface Testimonial {
  image: string;
  quote: string;
  author: string;
  book: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    image: "/images/slider-image/the-girl-who-was-part-cat.webp",
    quote: "I had a great time working with these publishers. They made me feel more confident in my book and guided me through every step of the publication process. The publishing team showed great dedication to make it a success.",
    author: "J. J. Anderson",
    book: "The Girl Who Was Part Cat | Part Chameleon"
  },
  {
    image: "/images/slider-image/the-spirit-of-cassious-house.webp",
    quote: "I am thankful to each and every individual who helped me make this paranormal world with chilling encounters a reality. They stood with me throughout and simplified all the publishing challenges. I am eager for you all to read my book.",
    author: "Linda Key",
    book: "The Spirit Of Cassious House"
  },
  {
    image: "/images/slider-image/jupiters-gate.webp",
    quote: "I was working on this story for quite some time. The target audience was small children. I had no idea that Amazon would have so many guidelines for a children’s book. Thankfully, these publishers were there to make my book a success.",
    author: "Dan Whelan",
    book: "Jupiter’s Gate"
  },
  {
    image: "/images/slider-image/mummy-wont-ppen-her-eyes.webp",
    quote: "It turned out to be a great decision to hire these book publishers. They are the most supportive professionals I have ever worked with. Without them, my literary dream would have never been a reality. I owe them some of the credit for my success.",
    author: "Phyllida Anam-Aire",
    book: "Mummy Won’t Open Her Eyes"
  },
  {
    image: "/images/slider-image/our-last-pilgrimage.webp",
    quote: "I am grateful to the whole team of thepulphousepublishing.com for helping me share my personal experiences of spiritual adventure with the world. I hope people can reconnect with Jesus and regain their faith in him. Thank you for your services.",
    author: "Nanny Soares",
    book: "Our Last Pilgrimage: The Journey 2 Freedom"
  },
  {
    image: "/images/slider-image/tales-of-love.webp",
    quote: "You cannot find a better team of publishing experts in the USA. They made my love story of Liza and Dan extra special with their flawless and professional publishing services. I highly recommend them for their excellence. A must-try for every author.",
    author: "KN Kamori",
    book: "Tales Of Love"
  },
  {
    image: "/images/slider-image/villiams-quest.webp",
    quote: "Overall, it was a wonderful experience to work with such a dedicated team of book publishing experts. The exciting journey of Sir Villiam is out there for you all. If we talk about this firm, I would love to hire them again for my future releases.",
    author: "Rohit Kumar Rathi",
    book: "Villiam’s Quest"
  },
  {
    image: "/images/slider-image/hey-nana-where-is-my-baby-sister.webp",
    quote: "This publication agency has some of the most supportive and helpful individuals on board. They are always ready to answer all your concerns and leave no stone unturned to make their customers happy and satisfied with their work.",
    author: "Debbie Abu-El-Jibien",
    book: "Hey Nana, Where Is My Baby Sister?"
  },
  {
    image: "/images/slider-image/survival.webp",
    quote: "I am here with a showdown between the oppressed and the oppressor that was published carefully for the global audience by thepulphousepublishing.com. They did an excellent job and handled the entire process quite well.",
    author: "Michael Leckie",
    book: "Survival"
  },
  {
    image: "/images/slider-image/virginia-the-heart-of-glass.webp",
    quote: "I am so happy that my book has been published online, and the response has been excellent. This would not have been possible without their support and guidance. For me, they are hands down the best publishers in the country.",
    author: "Cynthia Nouhra",
    book: "Virginia & The Heart Of Glass"
  },
  {
    image: "/images/slider-image/emotions-memories-in-poetry.webp",
    quote: "There are so many things to like about this book publication agency. From their affordable packages to timely services and a highly supportive team, they surely tick all the boxes that an author or a poet looks for in a self-publishing website.",
    author: "John Bell",
    book: "Emotions & Memories In Poetry"
  },
  {
    image: "/images/slider-image/swan-club-book-of-heavenly-guided-poems.webp",
    quote: "This poetry collection is pretty close to my heart as it is all about the divine guidance I received from the Heavenly Father. I can’t thank these publishers enough for handling it with so much care and respect. They also helped me format the book.",
    author: "Sabrina Naqvi",
    book: "Swan Club: Book Of Heavenly Guided Poems"
  },
  {
    image: "/images/slider-image/the-darkened-scent.webp",
    quote: "These publishers are immensely talented and know how to cater to every specific genre. The niche of my book was a bit different, and they still aced the publication process. Their knowledge of publishing limitations is pretty impressive.",
    author: "The Hairy Arse Welder",
    book: "The Darkened Scent Of Macabre Love And Passion"
  },
  {
    image: "/images/slider-image/the-young-professional-guide-to-success.webp",
    quote: "I have so much respect and admiration in my heart for these publishers because of the efforts they have put in for my book. Their hard work made it possible for me to release my book online and inspire so many individuals from the retail industry.",
    author: "Zaid Moghrabi",
    book: "Thrive In Retail: The Young Professional’s Guide To Success"
  }
];

const ReviewsPage: FC = () => {
  return (
    <>

        {/* Header Section */}
        <section className="py-20 bg-muted/10 text-center px-4">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto space-y-4"
             >
                 <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                    Showing Off 15K+ Happy Authors
                 </span>
                 <h1 className="text-4xl md:text-5xl font-bold">Authors Unfolding Their Publishing Experiences</h1>
                 <div className="h-1 w-20 bg-primary mx-auto my-6 rounded-full" />
                 <p className="text-lg text-muted-foreground leading-relaxed">
                    Your great experience and satisfaction are important to us. That is why we do everything to deliver you the best services. Hence, our DMs are overflowing with your encouraging words. To understand what your experience will be like, look at our client's words.
                 </p>
             </motion.div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {TESTIMONIALS.map((review, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                        <div className="aspect-[2/3] relative overflow-hidden bg-muted">
                            <Image
                                src={review.image}
                                alt={review.book}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="p-6 flex-1 flex flex-col space-y-4">
                            <Quote className="w-8 h-8 text-primary/20 fill-current" />
                            <p className="text-muted-foreground text-sm italic flex-1">
                                "{review.quote}"
                            </p>
                            <div className="pt-4 border-t border-border">
                                <h4 className="font-bold text-foreground text-sm">{review.author}</h4>
                                <p className="text-xs text-primary font-medium mt-1">{review.book}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Video Reviews */}
        <VideoTestimonialsSection
            title="Video Testimonials"
            subtitle="Hear directly from our authors about their journey."
            videos={[
                "https://video.thepulphousepublishing.com/home-video.webm",
                "https://video.thepulphousepublishing.com/testi-02.webm",
                "https://video.thepulphousepublishing.com/testi-01.webm",
                "https://video.thepulphousepublishing.com/WhatsApp%20Video%202025-11-20%20at%206.02.06%20PM.webm",
                "https://video.thepulphousepublishing.com/book-publishing/8.webm",
                "https://video.thepulphousepublishing.com/Marketing/3.webm",
            ]}
        />
    </>
  );
};

export default ReviewsPage;
