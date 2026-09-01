import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { generateLocaleStaticParams, type Locale } from "@/lib/i18n/locales";
import { SharedSectionShell } from "@/components/sections/SharedSectionShell";

export function generateStaticParams() {
  return generateLocaleStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const korean = locale === "ko";

  return buildPageMetadata({
    title: korean ? "UNNIE 무료 메모앱" : "UNNIE Free Memo App",
    description: korean
      ? "회원가입 없이 쓰는 로컬 우선 Android 메모앱 UNNIE. 무료 공개 배포 준비 중입니다."
      : "UNNIE is a local-first Android memo app with no account required. Free public release is being prepared.",
    path: "/unnie",
    keywords: ["UNNIE", "Emma Kwon", "memo app", "notes", "Android", "free app", "local first"],
    locale,
  });
}

export default async function UnniePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const korean = locale === "ko";

  const copy = korean
    ? {
        eyebrow: "EMMA KWON · FREE APP",
        title: "UNNIE",
        subtitle: "가볍게 적고, 내 폰에 간직하는 메모앱.",
        promise: "무료 · 회원가입 없음 · 로그인 없음",
        body:
          "UNNIE는 일상 메모, 사진, 음성, 검색, 중요 표시, 백업과 내보내기를 한곳에서 다루는 Android 메모앱입니다.",
        status: "공개 배포 준비 중",
        statusBody:
          "현재 공개용 Release 서명 APK를 준비하고 있습니다. 검증이 끝난 파일만 이 페이지에서 다운로드할 수 있게 열겠습니다.",
        download: "Android 무료 다운로드",
        unavailable: "Release APK 검증 후 활성화",
        privacy: "개인정보 안내",
        install: "설치 방법",
        features: [
          ["빠른 메모", "텍스트와 긴 메모를 부담 없이 기록합니다."],
          ["사진과 음성", "메모에 사진과 음성을 함께 보관할 수 있습니다."],
          ["검색과 중요 표시", "필요한 기록을 다시 찾고 중요한 메모를 표시합니다."],
          ["백업과 내보내기", "사용자가 직접 백업, 복원, 내보내기와 공유를 선택합니다."],
        ],
        privacyLead: "UNNIE의 기본 방향은 Local First입니다.",
        privacyBody:
          "계정이나 필수 클라우드 없이 사용할 수 있도록 설계되어 있습니다. 음성 텍스트 변환이나 외부 공유를 선택하면 Android 또는 선택한 외부 앱의 기능이 사용될 수 있습니다.",
        maker: "Made by Emma Kwon",
        explore: "Emma Kwon의 다른 작업 보기",
      }
    : {
        eyebrow: "EMMA KWON · FREE APP",
        title: "UNNIE",
        subtitle: "A quiet place for notes that stay close.",
        promise: "Free · No account · No login",
        body:
          "UNNIE is an Android memo app for everyday notes, photos, voice, search, favorites, backup and export.",
        status: "Public release in preparation",
        statusBody:
          "A release-signed Android APK is being prepared. The download will open here only after the exact public artifact has passed release verification.",
        download: "Free Android download",
        unavailable: "Available after release verification",
        privacy: "Privacy",
        install: "How to install",
        features: [
          ["Quick notes", "Capture short thoughts or long-form notes without ceremony."],
          ["Photos and voice", "Keep photos and voice recordings alongside your notes."],
          ["Search and favorites", "Find past notes again and mark the ones that matter."],
          ["Backup and export", "You choose when to back up, restore, export or share."],
        ],
        privacyLead: "UNNIE is designed local first.",
        privacyBody:
          "It is intended to work without an account or mandatory cloud storage. If you choose speech-to-text or external sharing, Android or the external app you select may process that action.",
        maker: "Made by Emma Kwon",
        explore: "Explore more from Emma Kwon",
      };

  return (
    <>
      <SharedSectionShell className="overflow-hidden pb-6 pt-6 sm:pb-12 sm:pt-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-divider-line bg-cream-white px-6 py-14 shadow-md sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-aqua via-lavender-highlight to-pearl-pink"
          />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-rose-violet">
              {copy.eyebrow}
            </p>
            <h1 className="mt-6 text-6xl font-semibold tracking-[-0.045em] text-title-primary sm:text-8xl">
              {copy.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-body-text sm:text-2xl">
              {copy.subtitle}
            </p>
            <p className="mt-5 text-sm font-semibold tracking-[0.08em] text-deep-rose-violet sm:text-base">
              {copy.promise}
            </p>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-soft-text sm:text-lg">
              {copy.body}
            </p>

            <div className="mx-auto mt-10 max-w-xl rounded-[1.75rem] border border-divider-line bg-pearl-white px-6 py-6 text-left">
              <p className="text-sm font-semibold text-title-primary">{copy.status}</p>
              <p className="mt-2 text-sm leading-7 text-soft-text">{copy.statusBody}</p>
            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex min-w-56 cursor-not-allowed items-center justify-center rounded-full bg-title-primary/20 px-7 py-4 text-sm font-semibold text-title-primary/55"
              >
                {copy.download}
              </button>
              <Link
                href={`/${locale}/unnie/install`}
                className="inline-flex min-w-44 items-center justify-center rounded-full border border-divider-line px-7 py-4 text-sm font-semibold text-title-primary transition-colors hover:bg-warm-ivory"
              >
                {copy.install}
              </Link>
            </div>
            <p className="mt-3 text-xs text-soft-text">{copy.unavailable}</p>
          </div>
        </div>
      </SharedSectionShell>

      <SharedSectionShell className="pt-0 sm:pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {copy.features.map(([title, body]) => (
            <article
              key={title}
              className="rounded-[2rem] border border-divider-line bg-pearl-white p-7 shadow-sm sm:p-9"
            >
              <h2 className="text-2xl font-semibold text-title-primary">{title}</h2>
              <p className="mt-4 text-base leading-8 text-soft-text">{body}</p>
            </article>
          ))}
        </div>
      </SharedSectionShell>

      <SharedSectionShell className="pt-0 sm:pt-0">
        <div className="rounded-[2.5rem] bg-title-primary px-6 py-14 text-cream-white sm:px-12 sm:py-18">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">LOCAL FIRST</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
              {copy.privacyLead}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-cream-white/80">{copy.privacyBody}</p>
            <Link
              href={`/${locale}/unnie/privacy`}
              className="mt-8 inline-flex items-center justify-center rounded-full border border-cream-white/25 px-6 py-3 text-sm font-semibold text-cream-white transition-colors hover:bg-cream-white/10"
            >
              {copy.privacy}
            </Link>
          </div>
        </div>
      </SharedSectionShell>

      <SharedSectionShell className="pt-0">
        <div className="rounded-[2.5rem] border border-divider-line bg-cream-white px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-eyebrow-label">{copy.maker}</p>
          <Link
            href={`/${locale}`}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-deep-rose-violet px-7 py-4 text-sm font-semibold text-cream-white transition-opacity hover:opacity-85"
          >
            {copy.explore}
          </Link>
        </div>
      </SharedSectionShell>
    </>
  );
}
