import type { Metadata } from "next";
import officialLinks from "@/content/global.official-links.registry.json";
import {
  getContent,
  type SiteCoreContent,
  type SeoKeywordsContent,
  type EmmaestroContent,
} from "@/lib/content";
import { generateLocaleStaticParams, type Locale } from "@/lib/i18n/locales";
import { buildPageMetadata } from "@/lib/seo";
import { PageEmmaestroComposer } from "@/components/pages/PageEmmaestroComposer";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return generateLocaleStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const emmaestroContent = getContent<EmmaestroContent>(locale, "page.emmaestro");
  const seoKeywords = getContent<SeoKeywordsContent>(locale, "global.seo-keywords");

  return buildPageMetadata({
    title: emmaestroContent.title,
    description: emmaestroContent.intro,
    path: "/emmaestro",
    keywords: [...seoKeywords.core, ...seoKeywords.emmaestro],
    locale,
  });
}

type AlbumLinks = { spotifyUrl: string; appleMusicUrl: string | null };

export default async function EmmaestroPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const emmaestroContent = getContent<EmmaestroContent>(locale, "page.emmaestro");
  const siteCore = getContent<SiteCoreContent>(locale, "global.site-core");
  const albumLinks: Record<string, AlbumLinks> = officialLinks.emmaestro.albums;

  const emmaestroJsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: emmaestroContent.title,
    url: `${siteCore.domain}/${locale}/emmaestro`,
    description: emmaestroContent.intro,
    member: { "@type": "Person", name: siteCore.name },
    album: emmaestroContent.albums.map((album) => {
      const links = albumLinks[album.linkKey];
      return {
        "@type": "MusicAlbum",
        name: album.title,
        url: links.spotifyUrl,
        sameAs: [links.spotifyUrl, links.appleMusicUrl].filter(Boolean),
      };
    }),
  };

  return (
    <>
      <JsonLd data={emmaestroJsonLd} />
      <PageEmmaestroComposer locale={locale} />
    </>
  );
}
