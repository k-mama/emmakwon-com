import type { Metadata } from "next";
import emmaestroContent from "@/content/page.emmaestro.en.json";
import siteCore from "@/content/global.site-core.en.json";
import seoKeywords from "@/content/global.seo-keywords.en.json";
import officialLinks from "@/content/global.official-links.registry.json";
import { PageEmmaestroComposer } from "@/components/pages/PageEmmaestroComposer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: emmaestroContent.title,
  description: emmaestroContent.intro,
  path: "/emmaestro",
  keywords: [...seoKeywords.core, ...seoKeywords.emmaestro],
});

const albumLinks: Record<string, { spotifyUrl: string; appleMusicUrl: string | null }> =
  officialLinks.emmaestro.albums;

const emmaestroJsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: emmaestroContent.title,
  url: `${siteCore.domain}/emmaestro`,
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

export default function EmmaestroPage() {
  return (
    <>
      <JsonLd data={emmaestroJsonLd} />
      <PageEmmaestroComposer />
    </>
  );
}
