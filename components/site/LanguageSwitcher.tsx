"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/lib/i18n/locales";
import { VisualGlobeIcon } from "@/components/visual/VisualGlobeIcon";

export function LanguageSwitcher({
  locale,
  ariaLabel,
  className = "",
}: {
  locale: Locale;
  ariaLabel: string;
  className?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const restPath = (pathname ?? `/${locale}`).replace(
    new RegExp(`^/${locale}(?=/|$)`),
    "",
  );

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const goTo = (nextLocale: Locale) => {
    setIsOpen(false);
    const target = restPath === "" ? `/${nextLocale}` : `/${nextLocale}${restPath}`;
    router.push(target);
  };

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-9 w-9 items-center justify-center rounded-full transition-opacity duration-300 hover:opacity-70 focus:outline-none"
      >
        <VisualGlobeIcon className="h-6 w-6" />
      </button>

      {isOpen ? (
        <ul
          role="listbox"
          aria-label={ariaLabel}
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-divider-line bg-cream-white py-1 text-sm shadow-lg"
        >
          {locales.map((loc) => (
            <li key={loc}>
              <button
                type="button"
                role="option"
                aria-selected={loc === locale}
                onClick={() => goTo(loc)}
                className={`block w-full px-4 py-2 text-left transition-colors duration-300 hover:text-header-hover ${
                  loc === locale ? "text-title-primary" : "text-soft-text"
                }`}
              >
                {localeLabels[loc]}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
