import type { ReactNode } from "react";
import type { NavigationContent, UiStringsContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n/locales";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export function SiteShell({
  locale,
  navigation,
  uiStrings,
  children,
}: {
  locale: Locale;
  navigation: NavigationContent;
  uiStrings: UiStringsContent;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col">
      <div
        aria-hidden
        className="fixed inset-0 -z-10 motion-safe:animate-[rare-light-drift_24s_ease-in-out_infinite]"
        style={{
          background:
            "conic-gradient(from 45deg, var(--color-rare-orange), var(--color-candy-pink), var(--color-playful-violet), var(--color-sky-aqua), var(--color-tiger-gold), var(--color-rare-orange))",
        }}
      />
      <SiteHeader locale={locale} navigation={navigation} uiStrings={uiStrings} />
      <main className="relative flex-1">{children}</main>
      <SiteFooter locale={locale} navigation={navigation} uiStrings={uiStrings} />
    </div>
  );
}
