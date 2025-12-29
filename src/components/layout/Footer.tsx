"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/data";
import { WaveDivider } from "./footer/WaveDivider";

export function Footer() {
  const servicesNav = NAV_LINKS.find((link) => link.label === "Services");
  const servicesColumn1 = servicesNav?.children?.slice(0, 6) || [];
  const servicesColumn2 = servicesNav?.children?.slice(6) || [];

  const companyLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/reviews", label: "Reviews" },
    { href: "/get-free-quote", label: "Free Quote" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-conditions", label: "Terms & Conditions" },
    { href: "/bookstore", label: "Book Store" },
    { href: "/book-reviews", label: "Book Reviews" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <WaveDivider />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div>
              <Image
                src="/images/logo-white.webp"
                alt={SITE_CONFIG.name}
                width={231}
                height={66}
                className="h-auto w-[200px]"
              />
            </div>

            {/* Contact Card */}
            <div className="space-y-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-start gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-sm group"
              >
                <Phone className="h-5 w-5 mt-0.5 text-secondary group-hover:text-primary-light transition-colors" />
                <div>
                  <div className="text-xs text-gray-400 mb-1">Call Us</div>
                  <div className="font-semibold">{SITE_CONFIG.phone}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary" />
                <div>
                  <div className="text-xs text-gray-400 mb-1">Location</div>
                  <div className="text-sm">{SITE_CONFIG.address}</div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center"
              >
                <Image
                  src="/images/trustpilot.svg"
                  alt="Trustpilot"
                  width={120}
                  height={40}
                  className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center"
              >
                <Image
                  src="/images/bbb.svg"
                  alt="BBB Accredited"
                  width={80}
                  height={40}
                  className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-primary-light rounded-full border border-white/10 hover:border-primary-light transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-primary-light rounded-full border border-white/10 hover:border-primary-light transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {servicesColumn1.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-secondary transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">More Services</h3>
            <ul className="space-y-2">
              {servicesColumn2.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-secondary transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} - {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
