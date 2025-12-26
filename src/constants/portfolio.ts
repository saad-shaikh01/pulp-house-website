import { Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6 } from "@/assets";
import { StaticImageData } from "next/image";

export type PortfolioItem = {
    title: string;
    description: string;
    href: string;
    imageUrl: StaticImageData;
    imageAlt: string;
};

export const PORTFOLIO: PortfolioItem[] = [
    {
        title: "WEST COAST MOVING",
        description: "Coast Moving website provides packing, moving, and unpacking people’s lives in Marin County and further.",
        href: "https://westcoastmovingcompany.com/",
        imageUrl: Portfolio3,
        imageAlt: "Animated Pin Card"
    },
    {
        title: "LITTLE MADRID TAPAS CAFE",
        description: "Taste the best Spanish cuisine from a certified restaurant.",
        href: "https://littlemadridtapascafe.com/",
        imageUrl: Portfolio2,
        imageAlt: "Animated Pin Card"
    },
    {
        title: "FIT RITE",
        description: "FIT RITE Precision Pipe Fitting System brings speed, quality, and safety to a new level for pipe fabrication.",
        href: "https://fitritefast.com/",
        imageUrl: Portfolio1,
        imageAlt: "Animated Pin Card"
    },
    {
        title: "AI FORKLIFT TRAINING",
        description: "AI Forklift Training provides forklift training courses with the highest safety standards, ensuring compliance and quality.",
        href: "https://aiforklifttraining.ca/",
        imageUrl: Portfolio4,
        imageAlt: "Animated Pin Card"
    },
    {
        title: "ROSS VILLE",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.",
        href: "https://rossvillechristian.com/",
        imageUrl: Portfolio5,
        imageAlt: "Animated Pin Card"
    },
    {
        title: "INKED ELEGANTLY",
        description: "They offer microblading, permanent makeup, and skin care services that bring confidence to everyone.",
        href: "https://inkedelegantly.com/",
        imageUrl: Portfolio6,
        imageAlt: "Animated Pin Card"
    }
];
