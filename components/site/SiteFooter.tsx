import Link from "next/link";
import navigation from "@/content/global.primary-navigation.en.json";
import officialLinks from "@/content/global.official-links.registry.json";
import { VisualChampagneLine } from "@/components/visual/VisualChampagneLine";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream-white px-6 pb-10 pt-16 text-soft-text sm:px-10">
      <div className="mx-auto max-w-6xl">
        <VisualChampagneLine className="mb-10" />
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg text-title-primary">
              {navigation.logo}
            </p>
            <a
              href={officialLinks.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm transition-colors duration-300 hover:text-header-hover"
            >
              {officialLinks.instagram.handle}
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
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
        </div>

        <p className="mt-10 text-xs text-soft-text">
          © {year} Emma Kwon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
