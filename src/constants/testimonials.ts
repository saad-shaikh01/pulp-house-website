import { Testi1, Testi2, Testi3, Testi4, Testi5, Testi6 } from "@/assets";
import { StaticImageData } from "next/image";

type TESTIMONIAL = {
    quote: string,
    name: string,
    designation: string,
    src: StaticImageData
}

export const TESTIMONIALS: TESTIMONIAL[] = [
    {
        quote:
            "Rank1Pro's GBP services completely turned my local business. They helped with profile optimization to make sure that customers could easily find me through Google. Since I connected my local business with Rank1Pro, we have seen a constant and steady 45% increase in foot traffic and online inquiries. Highly recommended for any local business hoping to gain visibility.",
        name: "Mark Tim",
        designation: "Local Business Owner",
        src: Testi1,
    },
    {
        quote:
            "I couldn't be happier with Rank1Pro's GBP management. They went above and beyond to ensure my restaurant's profile was always updated, with accurate hours and stunning photos that draw in new customers. The results have been fantastic, and my reservations have increased a lot.",
        name: "Emily Ross",
        designation: "Restaurant Owner",
        src: Testi2,
    },
    {
        quote:
            "As a real estate agent, having a strong online presence is necessary in today’s market. Their service helped optimize my profile and improve my local search rankings. The impact on my client engagement has been immediate, and I've seen more leads coming through in just 1 month.",
        name: "David Johnson",
        designation: "Real Estate Agent",
        src: Testi3,
    },
    {
        quote:
            "From creating engaging posts to adding key details that helped me stand out, they made sure I had everything covered. Thanks to their service, my online reviews have skyrocketed, and so has my business. I'm incredibly satisfied!",
        name: "Jessica Smith",
        designation: "Boutique Owner",
        src: Testi4,
    },
    {
        quote:
            "They revamped my Google Business Profile, ensuring it's accurate, visually appealing, and informative. This led to more calls and appointments. I highly recommend their services to anyone looking to boost their local SEO and presence.",
        name: "John Peter",
        designation: "Auto Repair Shop Owner",
        src: Testi5,
    },
    {
        quote:
            "Rank1Pro helped me optimize my profile, which led to an almost 100% increase in online traffic and conversions. The team is professional, and the results speak for themselves.",
        name: "Sarah Davis",
        designation: "E-Commerce Owner",
        src: Testi6,
    },
];
