import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">{SITE_CONFIG.name}</h2>
          <p className="text-sm text-muted-foreground">{SITE_CONFIG.description}</p>
          <div className="text-sm text-muted-foreground">
            <p>Phone: {SITE_CONFIG.phone}</p>
            <p>Email: {SITE_CONFIG.email}</p>
            <p>Address: {SITE_CONFIG.address}</p>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-3 text-sm">
                {NAV_LINKS.filter(l => !l.children).map(link => (
                     <li key={link.href}>
                     <Link href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
                       {link.label}
                     </Link>
                   </li>
                ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-3 text-sm">
                {NAV_LINKS.find(l => l.label === 'Services')?.children?.slice(0, 6).map(child => (
                    <li key={child.href}>
                        <Link href={child.href} className="text-muted-foreground transition-colors hover:text-primary">
                            {child.label}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">More Services</h3>
            <ul className="space-y-3 text-sm">
                {NAV_LINKS.find(l => l.label === 'Services')?.children?.slice(6).map(child => (
                    <li key={child.href}>
                        <Link href={child.href} className="text-muted-foreground transition-colors hover:text-primary">
                            {child.label}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
