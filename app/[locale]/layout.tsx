import type { Metadata } from "next";
import { Baloo_2, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import {
  locales,
  defaultLocale,
  localeOgLocale,
  isLocale,
  generateLocaleStaticParams,
  type Locale,
} from "@/lib/i18n/locales";
import {
  getContent,
  type SiteCoreContent,
  type SeoKeywordsContent,
  type NavigationContent,
  type UiStringsContent,
} from "@/lib/content";
import { SiteShell } from "@/components/site/SiteShell";
import "../globals.css";

const displayRounded = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bodySans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return generateLocaleStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const siteCore = getContent<SiteCoreContent>(locale, "global.site-core");
  const seoKeywords = getContent<SeoKeywordsContent>(locale, "global.seo-keywords");

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${siteCore.domain}/${l}`;
  }
  languages["x-default"] = `${siteCore.domain}/${defaultLocale}`;

  return {
    metadataBase: new URL(siteCore.domain),
    title: {
      template: siteCore.titleTemplate,
      default: siteCore.defaultTitle,
    },
    description: siteCore.description,
    keywords: seoKeywords.core,
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      title: siteCore.defaultTitle,
      description: siteCore.description,
      siteName: siteCore.name,
      locale: localeOgLocale[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteCore.defaultTitle,
      description: siteCore.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  const navigation = getContent<NavigationContent>(locale, "global.primary-navigation");
  const uiStrings = getContent<UiStringsContent>(locale, "global.ui-strings");

  return (
    <html
      lang={locale}
      className={`${displayRounded.variable} ${bodySans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteShell locale={locale} navigation={navigation} uiStrings={uiStrings}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
