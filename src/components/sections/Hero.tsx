"use client";
import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";

export function Hero() {
  return (
    <BackgroundBeamsWithCollision className="h-[600px] md:h-[800px]">
      <div className="flex flex-col items-center justify-center p-4 text-center z-20">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 font-sans tracking-tight mb-4">
          Get Your Manuscript <br /> Ready to Sell
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Ghostwriting • Editing • Design • Global Distribution • Marketing — we do the heavy lifting while you create.
        </p>
        <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="rounded-full">
                <Link href="/get-free-quote">Book Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/portfolio">View Our Work</Link>
            </Button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
