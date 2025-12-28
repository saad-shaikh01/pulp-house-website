import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-white bg-[linear-gradient(135deg,#0a0a0f_0%,#1a0a2e_100%)]">
      {/* Background with video */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/home/hero-video-poster.webp"
        >
          {/* Using paths relative to public/ as per instruction */}
          <source src="/assets/frontend/videos/Book Publishing book fair video v2.webm" type="video/webm" />
          <source src="/assets/frontend/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,58,237,0.15)_0%,rgba(10,10,15,0.8)_50%,rgba(236,72,153,0.15)_100%)] backdrop-blur-[2px]" />

        {/* Shapes */}
        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] animate-float rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 opacity-60 blur-[80px]" />
        <div className="absolute bottom-[15%] right-[-8%] h-[400px] w-[400px] animate-float-delayed rounded-full bg-gradient-to-r from-pink-200 to-pink-500 opacity-60 blur-[80px]" />
        <div className="absolute left-[50%] top-[-10%] h-[350px] w-[350px] animate-float-more-delayed rounded-full bg-gradient-to-b from-purple-500/50 to-transparent opacity-60 blur-[80px]" />
      </div>

      <div className="container relative z-10 flex w-full items-center justify-center px-4 py-24">
        <div className="max-w-[1000px] animate-fade-in-up text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-br from-purple-600/20 to-pink-500/20 px-5 py-2 text-sm font-semibold backdrop-blur-md shadow-[0_4px_20px_rgba(124,58,237,0.3)]">
            <span className="text-base">✨</span> Trusted Full-Service Book Publishing • USA
          </span>

          <h1 className="mb-4 text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[4.5rem]">
            Get Your Manuscript <br />
            <span className="bg-gradient-to-br from-purple-500 via-pink-500 to-amber-500 bg-clip-text text-transparent bg-[200%_200%] animate-gradient-shift">
              Ready
            </span>{" "}
            to Sell
          </h1>

          <p className="mx-auto mb-8 mt-6 max-w-[750px] text-lg leading-relaxed text-white/85 sm:text-xl">
            Ghostwriting • Editing • Design • Global Distribution • Marketing — we do the heavy lifting while you create.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="h-12 bg-primary px-8 text-base font-semibold hover:bg-primary/90">
              <Link href="/get-free-quote">Book Free Consultation</Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="h-12 border-white/20 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
              <Link href="tel:888-909-9431" className="flex items-center gap-2">
                <img src="/images/icons/call-us.svg" width="17" height="17" alt="" className="invert" />
                888-909-9431
              </Link>
            </Button>
          </div>

          <div className="flex justify-center gap-8 sm:gap-16">
             <StatItem target={5000} label="Authors Published" />
             <StatItem target={100} label="Five-Star Reviews" />
             <StatItem target={1000} label="Returning Clients" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ target, label }: { target: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <strong className="text-3xl font-bold sm:text-4xl">{target.toLocaleString()}+</strong>
            <span className="text-sm font-medium text-white/80 sm:text-base">{label}</span>
        </div>
    )
}
