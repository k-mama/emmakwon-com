"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/lib/i18n/locales";

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

  const restPath = (pathname ?? `/${locale}`).replace(
    new RegExp(`^/${locale}(?=/|$)`),
    "",
  );

  return (
    <select
      aria-label={ariaLabel}
      value={locale}
      onChange={(event) => {
        const nextLocale = event.target.value;
        const target = restPath === "" ? `/${nextLocale}` : `/${nextLocale}${restPath}`;
        router.push(target);
      }}
      className={`cursor-pointer rounded-full border border-divider-line bg-transparent px-3 py-1.5 text-xs uppercase tracking-[0.15em] text-soft-text transition-colors duration-300 hover:text-header-hover focus:outline-none ${className}`}
    >
      {locales.map((loc) => (
        <option key={loc} value={loc} className="text-body-text">
          {localeLabels[loc]}
        </option>
      ))}
    </select>
  );
}
