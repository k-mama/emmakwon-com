"use client";

import Link from "next/link";
import { useState } from "react";
import navigation from "@/content/global.primary-navigation.en.json";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-divider-line bg-cream-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="/"
          className="font-display text-lg tracking-wide text-title-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          {navigation.logo}
        </Link>

        <nav className="hidden gap-8 text-sm tracking-wide text-soft-text md:flex">
          {navigation.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-header-hover"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="text-title-primary md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen ? (
        <nav className="flex flex-col gap-1 border-t border-divider-line px-6 pb-6 text-sm text-soft-text md:hidden">
          {navigation.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 transition-colors duration-300 hover:text-header-hover"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
