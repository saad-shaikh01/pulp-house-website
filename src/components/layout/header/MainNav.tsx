"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MainNavProps {
  className?: string;
}

export const MainNav: FC<MainNavProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className={cn("bg-secondary text-secondary-foreground py-1", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    {link.children ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 data-[state=open]:bg-white/10 h-auto py-2 px-6 text-base font-bold">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[600px] gap-1 p-4 md:grid-cols-3 bg-secondary/95 backdrop-blur">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white hover:text-secondary focus:bg-white focus:text-secondary"
                              >
                                <div className="text-sm font-semibold">{child.label}</div>
                              </Link>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10 h-auto py-2 px-6 text-base font-bold")}>
                          {link.label}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <div className="flex-1" /> {/* Spacer */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 hover:bg-white/10 rounded-md transition-colors"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-secondary text-white p-0 overflow-y-auto">
                <div className="py-6 px-4">
                  <div className="space-y-1">
                    {NAV_LINKS.map((link) => (
                      <div key={link.href}>
                        {link.children ? (
                          <div>
                            <button
                              onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                              className="flex items-center justify-between w-full px-4 py-3 text-base font-bold hover:bg-white/10 rounded-md transition-colors"
                            >
                              <span>{link.label}</span>
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform",
                                  openDropdown === link.label && "rotate-180"
                                )}
                              />
                            </button>
                            {openDropdown === link.label && (
                              <div className="ml-4 mt-1 space-y-1">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-2 text-sm font-semibold hover:bg-white/10 rounded-md transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-base font-bold hover:bg-white/10 rounded-md transition-colors"
                          >
                            {link.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
