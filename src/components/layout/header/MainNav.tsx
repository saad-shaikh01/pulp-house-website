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
    <nav
      className={cn("bg-secondary text-secondary-foreground py-1", className)}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    {link.children ? (
                      <>
                        <NavigationMenuTrigger className="h-auto bg-transparent px-6 py-2 text-base font-bold text-white hover:bg-white/10 data-[state=open]:bg-white/10">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="bg-secondary/95 grid w-[600px] gap-1 p-4 backdrop-blur md:grid-cols-3">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="hover:text-secondary focus:text-secondary block rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-white focus:bg-white"
                              >
                                <div className="text-sm font-semibold">
                                  {child.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "h-auto bg-transparent px-6 py-2 text-base font-bold text-white hover:bg-white/10",
                          )}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu */}
          <div className="flex w-full items-center justify-between lg:hidden">
            <div className="flex-1" /> {/* Spacer */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="rounded-md p-2 transition-colors hover:bg-white/10"
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-secondary w-[300px] overflow-y-auto p-0 text-white"
              >
                <div className="px-4 py-6">
                  <div className="space-y-1">
                    {NAV_LINKS.map((link) => (
                      <div key={link.href}>
                        {link.children ? (
                          <div>
                            <button
                              onClick={() =>
                                setOpenDropdown(
                                  openDropdown === link.label
                                    ? null
                                    : link.label,
                                )
                              }
                              className="flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-bold transition-colors hover:bg-white/10"
                            >
                              <span>{link.label}</span>
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform",
                                  openDropdown === link.label && "rotate-180",
                                )}
                              />
                            </button>
                            {openDropdown === link.label && (
                              <div className="mt-1 ml-4 space-y-1">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
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
                            className="block rounded-md px-4 py-3 text-base font-bold transition-colors hover:bg-white/10"
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
