"use client";

import { FC } from "react";
import { PromoTicker } from "./header/PromoTicker";
import { TopBar } from "./header/TopBar";
import { MainNav } from "./header/MainNav";

export function Header() {
  return (
    <>
      <PromoTicker />
      <header className="sticky top-[42px] z-50">
        <TopBar />
        <MainNav />
      </header>
    </>
  );
}
