"use client";

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

  const restPath = (pathname ?? `/${locale}`).replace(
    new RegExp(`^/${locale}(?=/|$)`),
    "",
  );

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <VisualGlobeIcon className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-soft-text" />
      <select
        aria-label={ariaLabel}
        value={locale}
        onChange={(event) => {
          const nextLocale = event.target.value;
          const target = restPath === "" ? `/${nextLocale}` : `/${nextLocale}${restPath}`;
          router.push(target);
        }}
        className="cursor-pointer rounded-full border border-divider-line bg-transparent py-1.5 pl-8 pr-3 text-xs uppercase tracking-[0.15em] text-soft-text transition-colors duration-300 hover:text-header-hover focus:outline-none"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc} className="text-body-text">
            {localeLabels[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}
