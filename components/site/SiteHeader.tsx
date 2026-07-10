"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavigationContent, UiStringsContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n/locales";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";

export function SiteHeader({
  locale,
  navigation,
  uiStrings,
}: {
  locale: Locale;
  navigation: NavigationContent;
  uiStrings: UiStringsContent;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const localizeHref = (href: string) => `/${locale}${href === "/" ? "" : href}`;

  return (
    <header className="sticky top-0 z-50 border-b border-divider-line bg-cream-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <Link
          href={localizeHref("/")}
          className="font-display text-lg tracking-wide text-title-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          {navigation.logo}
        </Link>

        <nav className="hidden items-center gap-8 text-sm tracking-wide text-soft-text md:flex">
          {navigation.items.map((item) => (
            <Link
              key={item.href}
              href={localizeHref(item.href)}
              className="transition-colors duration-300 hover:text-header-hover"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} ariaLabel={uiStrings.languageSwitcherAriaLabel} />
        </nav>

        <button
          type="button"
          className="text-title-primary md:hidden"
          aria-expanded={isMenuOpen}
          aria-label={uiStrings.menuToggleAriaLabel}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? uiStrings.menuCloseLabel : uiStrings.menuOpenLabel}
        </button>
      </div>

      {isMenuOpen ? (
        <nav className="flex flex-col gap-1 border-t border-divider-line px-6 pb-6 text-sm text-soft-text md:hidden">
          {navigation.items.map((item) => (
            <Link
              key={item.href}
              href={localizeHref(item.href)}
              className="py-3 transition-colors duration-300 hover:text-header-hover"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3">
            <LanguageSwitcher locale={locale} ariaLabel={uiStrings.languageSwitcherAriaLabel} />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
