import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  variant?: "default" | "dark" | "blue";
  reversed?: boolean;
}

export function CtaBanner({ title, subtitle, description, image, variant = "default", reversed = false }: CtaBannerProps) {
  const bgColors = {
    default: "bg-background text-foreground",
    dark: "bg-[#1a0a2e] text-white", // Dark purple theme from PHP site
    blue: "bg-blue-900 text-white",
  };

  return (
    <section className={`py-16 md:py-24 ${bgColors[variant]}`}>
      <div className="container">
        <div className={`flex flex-col gap-12 lg:items-center ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
            {subtitle && <p className="text-xl font-medium opacity-90">{subtitle}</p>}
            {description && <p className="max-w-xl text-lg opacity-80">{description}</p>}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant={variant === "default" ? "default" : "secondary"}>
                <Link href="/get-free-quote">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className={variant !== "default" ? "border-white/20 hover:bg-white/10" : ""}>
                <Link href="tel:888-909-9431">888-909-9431</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1">
             <div className="relative mx-auto max-w-md lg:max-w-none">
                 <img src={image} alt="" className="w-full rounded-2xl shadow-2xl" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
