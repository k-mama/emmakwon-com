import Link from "next/link";
import { getContent, type PublishingContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n/locales";
import { SharedSectionShell } from "@/components/sections/SharedSectionShell";
import { SharedEditorialPanel } from "@/components/sections/SharedEditorialPanel";
import { VisualHighlightMark } from "@/components/visual/VisualHighlightMark";

export function PageAmazingTigerPublishingComposer({ locale }: { locale: Locale }) {
  const publishingContent = getContent<PublishingContent>(
    locale,
    "page.amazing-tiger-publishing",
  );

  return (
    <SharedSectionShell className="min-h-screen">
      <div className="rounded-[2.5rem] bg-cream-white p-10 text-body-text shadow-md sm:p-14">
        <SharedEditorialPanel
          eyebrow={publishingContent.eyebrow}
          title={publishingContent.title}
        >
          <p className="max-w-xl text-body-text">{publishingContent.intro}</p>

          <ul className="mt-10 flex flex-col gap-6">
            {publishingContent.projects.map((project) => {
              const content = (
                <>
                  <h3 className="font-display text-xl text-title-primary">
                    {project.href ? (
                      <VisualHighlightMark>{project.title}</VisualHighlightMark>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-soft-text">
                    {project.role}
                  </p>
                </>
              );

              return (
                <li
                  key={project.title}
                  className="border-b border-divider-line pb-6"
                >
                  {project.href ? (
                    <Link
                      href={`/${locale}${project.href}`}
                      className="block transition-opacity duration-300 hover:opacity-70"
                    >
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>

          <p className="mt-10 max-w-lg text-sm text-soft-text">
            {publishingContent.closing}
          </p>
        </SharedEditorialPanel>
      </div>
    </SharedSectionShell>
  );
}
