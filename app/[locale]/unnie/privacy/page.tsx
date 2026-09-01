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
    title: korean ? "UNNIE 개인정보 안내" : "UNNIE Privacy",
    description: korean
      ? "UNNIE 무료 Android 메모앱의 개인정보 및 로컬 저장 안내입니다."
      : "Privacy and local-storage information for the UNNIE Android memo app.",
    path: "/unnie/privacy",
    keywords: ["UNNIE", "privacy", "Android", "local first", "memo app"],
    locale,
  });
}

export default async function UnniePrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const korean = locale === "ko";

  const sections = korean
    ? [
        ["1. 계정", "UNNIE는 사용을 위해 회원가입이나 로그인을 요구하지 않습니다."],
        [
          "2. 메모 데이터",
          "UNNIE는 메모, 사진, 음성 및 앱 설정을 기기 로컬 저장소에서 관리하도록 설계되어 있습니다. 사용자가 직접 백업, 복원, 내보내기 또는 공유를 선택할 수 있습니다.",
        ],
        [
          "3. 카메라와 마이크",
          "사진 촬영과 음성 기록 기능을 사용할 때 Android 카메라 또는 마이크 권한을 요청할 수 있습니다. 해당 권한은 사용자가 관련 기능을 선택할 때 필요한 범위에서 사용됩니다.",
        ],
        [
          "4. 음성 텍스트 변환",
          "음성 텍스트 변환을 선택하면 Android 기기의 음성 인식 서비스가 사용될 수 있습니다. 기기와 설정에 따라 운영체제 또는 음성 인식 제공자가 음성을 처리할 수 있으며, 이 경우 해당 제공자의 개인정보 정책이 적용될 수 있습니다.",
        ],
        [
          "5. 외부 공유",
          "사용자가 이메일, 메시지 앱 또는 다른 앱으로 메모나 파일을 공유하기로 선택하면 선택한 외부 앱으로 해당 정보가 전달됩니다. UNNIE는 사용자가 선택하지 않은 외부 공유를 대신 수행하지 않습니다.",
        ],
        [
          "6. 공개 배포 검증",
          "공개 다운로드를 활성화하기 전에 정확한 Release APK를 기준으로 권한, 네트워크 동작, 서명 및 배포 파일 무결성을 다시 확인합니다. 최종 공개 빌드의 동작이 이 안내와 달라지는 경우 이 페이지를 먼저 갱신합니다.",
        ],
      ]
    : [
        ["1. Account", "UNNIE does not require account registration or login for normal use."],
        [
          "2. Note data",
          "UNNIE is designed to manage notes, photos, voice recordings and app settings in local device storage. You choose when to back up, restore, export or share your information.",
        ],
        [
          "3. Camera and microphone",
          "Android camera or microphone permission may be requested when you use photo capture or voice recording features. These permissions are used for the feature you choose to operate.",
        ],
        [
          "4. Speech to text",
          "If you choose speech to text, an Android speech-recognition service may be used. Depending on your device and settings, the operating system or speech provider may process audio under that provider's privacy terms.",
        ],
        [
          "5. External sharing",
          "If you choose to share a note or exported file through email, messaging or another app, the selected information is handed to the external app you chose. UNNIE does not initiate an external share that you did not select.",
        ],
        [
          "6. Public release verification",
          "Before the public download is enabled, the exact release APK will be rechecked for permissions, network behavior, signing identity and distribution integrity. If the final public build behaves differently from this notice, this page will be updated before release.",
        ],
      ];

  return (
    <SharedSectionShell className="pb-16 pt-8 sm:pb-24 sm:pt-12">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-divider-line bg-cream-white px-6 py-12 shadow-md sm:px-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-rose-violet">UNNIE</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-title-primary sm:text-6xl">
          {korean ? "개인정보 안내" : "Privacy"}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-soft-text">
          {korean
            ? "UNNIE는 계정 없이 사용하는 Local First 메모앱으로 공개 배포를 준비하고 있습니다. 아래 내용은 현재 확인된 제품 구조와 공개 배포 원칙을 기준으로 합니다."
            : "UNNIE is being prepared for public release as a local-first memo app that does not require an account. This notice reflects the currently verified product structure and release policy."}
        </p>

        <div className="mt-10 space-y-5">
          {sections.map(([title, body]) => (
            <section key={title} className="rounded-[1.75rem] border border-divider-line bg-pearl-white p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-title-primary">{title}</h2>
              <p className="mt-3 text-base leading-8 text-body-text">{body}</p>
            </section>
          ))}
        </div>

        <p className="mt-8 text-sm leading-7 text-soft-text">
          {korean
            ? "최종 공개 APK가 활성화되는 시점에 이 안내의 Release 검증 항목도 함께 확정됩니다."
            : "The release-verification section of this notice will be finalized when the exact public APK is activated."}
        </p>

        <Link
          href={`/${locale}/unnie`}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-deep-rose-violet px-7 py-4 text-sm font-semibold text-cream-white transition-opacity hover:opacity-85"
        >
          {korean ? "UNNIE로 돌아가기" : "Back to UNNIE"}
        </Link>
      </div>
    </SharedSectionShell>
  );
}
