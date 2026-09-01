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
    title: korean ? "UNNIE 설치 방법" : "How to install UNNIE",
    description: korean
      ? "Google Play 없이 UNNIE Android APK를 직접 설치하는 방법입니다."
      : "How to install the UNNIE Android APK directly without Google Play.",
    path: "/unnie/install",
    keywords: ["UNNIE", "Android APK", "install", "sideload"],
    locale,
  });
}

export default async function UnnieInstallPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const korean = locale === "ko";
  const steps = korean
    ? [
        ["1", "UNNIE 공식 페이지에서 APK를 다운로드합니다."],
        ["2", "Android가 설치 허용을 요청하면, 다운로드에 사용한 브라우저에 한해서 ‘알 수 없는 앱 설치’를 허용합니다."],
        ["3", "다운로드한 UNNIE APK를 열고 설치를 선택합니다."],
        ["4", "설치가 끝나면 필요하지 않은 ‘알 수 없는 앱 설치’ 허용을 다시 꺼도 됩니다."],
      ]
    : [
        ["1", "Download the APK from the official UNNIE page."],
        ["2", "If Android asks for permission, allow ‘Install unknown apps’ only for the browser you used to download UNNIE."],
        ["3", "Open the downloaded UNNIE APK and choose Install."],
        ["4", "After installation, you can turn off the browser’s ‘Install unknown apps’ permission again."],
      ];

  return (
    <SharedSectionShell className="pb-16 pt-8 sm:pb-24 sm:pt-12">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-divider-line bg-cream-white px-6 py-12 shadow-md sm:px-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-rose-violet">UNNIE · ANDROID</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-title-primary sm:text-6xl">
          {korean ? "설치 방법" : "How to install"}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-soft-text">
          {korean
            ? "UNNIE는 Google Play 등록 전에는 공식 홈페이지에서 직접 APK로 배포할 예정입니다. 공개용 Release APK가 검증된 뒤 다운로드 버튼이 활성화됩니다."
            : "Before a Google Play listing exists, UNNIE is planned for direct APK distribution from the official website. The download button will activate only after the release-signed APK is verified."}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {steps.map(([number, body]) => (
            <div key={number} className="rounded-[1.75rem] border border-divider-line bg-pearl-white p-6 sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-title-primary text-sm font-semibold text-cream-white">
                {number}
              </div>
              <p className="mt-5 text-base leading-8 text-body-text">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-divider-line bg-warm-ivory p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-title-primary">
            {korean ? "안전 확인" : "Safety check"}
          </h2>
          <p className="mt-3 text-base leading-8 text-body-text">
            {korean
              ? "파일 이름, 버전, SHA-256 무결성 정보가 공식 UNNIE 페이지에 표시된 값과 일치하는 공개 APK만 설치하세요. Debug 서명 APK는 공개 배포하지 않습니다."
              : "Install only the public APK whose filename, version and SHA-256 integrity information match the official UNNIE page. Debug-signed APKs are not distributed publicly."}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/${locale}/unnie`}
            className="inline-flex items-center justify-center rounded-full bg-deep-rose-violet px-7 py-4 text-sm font-semibold text-cream-white transition-opacity hover:opacity-85"
          >
            {korean ? "UNNIE로 돌아가기" : "Back to UNNIE"}
          </Link>
          <Link
            href={`/${locale}/unnie/privacy`}
            className="inline-flex items-center justify-center rounded-full border border-divider-line px-7 py-4 text-sm font-semibold text-title-primary transition-colors hover:bg-warm-ivory"
          >
            {korean ? "개인정보 안내" : "Privacy"}
          </Link>
        </div>
      </div>
    </SharedSectionShell>
  );
}
