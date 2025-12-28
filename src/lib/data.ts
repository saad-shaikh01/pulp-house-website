import { LucideIcon, BookOpen, PenTool, Edit, Rocket, Palette, Globe, Mic, Book, GraduationCap, Layout, Image, FileText, User } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  content: string; // Added content field
};

export const SITE_CONFIG = {
  name: "The Pulp House Publishing",
  description: "The Most Trusted Publishing Partners Of New And Seasoned Authors In USA",
  phone: "888-909-9431",
  email: "info@thepulphousepublishing.com",
  address: "5900 Balcones Drive STE 26981 Austin, TX 78731",
  socials: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
        { href: "/services/ebook-publishing", label: "Ebook Publishing" },
        { href: "/services/book-marketing", label: "Book Marketing" },
        { href: "/services/book-cover-design", label: "Book Cover Design" },
        { href: "/services/book-illustration", label: "Book Illustration" },
        { href: "/services/editing-proofreading", label: "Editing And Proofreading" },
        { href: "/services/book-formatting-service", label: "Book Formatting Service" },
        { href: "/services/audio-book-publishing", label: "Audiobook Publishing" },
        { href: "/services/kindle-direct-publishing", label: "Kindle Direct Publishing" },
        { href: "/services/book-printing", label: "Book Printing" },
        { href: "/services/book-layout-design", label: "Book Layout and Design" },
        { href: "/services/author-branding", label: "Author Branding" },
    ]
  },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact-us", label: "Contact Us" },
  {
    href: "/packages",
    label: "Packages",
    children: [
        { href: "/packages/book-publishing-packages", label: "Book Publishing Packages" },
        { href: "/packages/ghostwriting-packages", label: "Ghostwriting Packages" },
    ]
  },
  { href: "/portfolio", label: "Book Store" },
];

export const SERVICES: Service[] = [
  {
    slug: "ebook-publishing",
    title: "Ebook Publishing",
    description: "We help independent authors publish professionally without the hassle of pursuing a literary agent or enduring years of waiting.",
    icon: "BookOpen",
    content: "We provide comprehensive ebook publishing services...", // Placeholder
  },
  {
    slug: "book-marketing",
    title: "Book Marketing",
    description: "Our book marketing specialists create targeted campaigns to connect your book with the readers who will love it the most.",
    icon: "Rocket",
    content: "Our marketing strategies include...",
  },
  {
    slug: "book-cover-design",
    title: "Book Cover Design",
    description: "We provide elaborate book cover design and layout services that reflect your story and stand out on every bookshelf.",
    icon: "Palette",
    content: "A great cover is essential...",
  },
  {
    slug: "book-illustration",
    title: "Book Illustration",
    description: "Our design team specializes in creative illustrations that make your story visually irresistible.",
    icon: "Image",
    content: "Bring your story to life with...",
  },
  {
    slug: "editing-proofreading",
    title: "Editing & Proofreading",
    description: "We enhance your draft with expert editing, turning rough pages into a polished, professional book.",
    icon: "Edit",
    content: "Professional editing is key...",
  },
  {
    slug: "book-formatting-service",
    title: "Book Formatting",
    description: "Our layout and formatting experts provide your book with a clean, bookstore-quality finish both inside and out.",
    icon: "FileText",
    content: "Formatting ensures a great reading experience...",
  },
  {
    slug: "audio-book-publishing",
    title: "Audiobook Publishing",
    description: "We handle audiobook production, uploading, and distribution to reach listeners worldwide.",
    icon: "Mic",
    content: "Reach a wider audience with audiobooks...",
  },
  {
    slug: "kindle-direct-publishing",
    title: "Kindle Direct Publishing",
    description: "We set up and upload your book across Amazon KDP correctly the first time to maximize your reach.",
    icon: "Book",
    content: "Master the world of KDP...",
  },
  {
    slug: "book-printing",
    title: "Book Printing",
    description: "We manage the entire printing process for high-quality physical copies of your book.",
    icon: "Book",
    content: "High-quality print on demand...",
  },
  {
    slug: "book-layout-design",
    title: "Book Layout & Design",
    description: "Elegant page layouts that ensure your book is as beautiful to read as it is to look at.",
    icon: "Layout",
    content: "Interior design matters...",
  },
  {
    slug: "author-branding",
    title: "Author Branding",
    description: "We help craft your professional author brand, from logo and website to media kit, to build lasting visibility.",
    icon: "User",
    content: "Build your brand as an author...",
  },
  {
    slug: "ghostwriting-services",
    title: "Ghostwriting",
    description: "Our ghostwriters help write your ideas exactly the way you’ve imagined, making them into a compelling manuscript.",
    icon: "PenTool",
    content: "Let us write your story...",
  },
];

export const TESTIMONIALS = [
    {
        name: "Jessica M.",
        role: "Memoir Author, “Finding My Way”",
        content: "I’d been sitting on my memoir for almost two years because I didn’t know where to begin. Working with The Pulp House Publishing made it easy! My writer was patient, the designer captured the emotion of my story perfectly. 10/10."
    },
    {
        name: "Aaron B.",
        role: "Fantasy Author, “The Shadow Gate”",
        content: "The team at The Pulp House Publishing took over and handled it all professionally while keeping me involved creatively. My book cover blew me away, and now my novel is available on Amazon and Apple Books."
    },
    {
        name: "Maya L.",
        role: "Children’s Book Author, “The Little Star Who Could”",
        content: "They paired me with an illustrator who brought my characters to life. Every page looked magical. They also handled the layout, printing, and eBook version so it would reach parents and teachers easily."
    }
]
