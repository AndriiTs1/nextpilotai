import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const SITE_URL = "https://nextpilotai.vercel.app";

// Maps each supported locale to its public URL. The default locale has no
// prefix (localePrefix: "as-needed" in src/i18n/routing.ts); every other
// locale is prefixed with its code. Extend this if pages beyond "/" are
// added later.
function localeHref(locale: string) {
  return locale === routing.defaultLocale ? "/" : `/${locale}`;
}

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "NextPilotAI",
      url: SITE_URL,
      description:
        "Modern websites, web applications and AI-powered business automation.",
      areaServed: [
        {
          "@type": "City",
          name: "Lugano",
        },
        {
          "@type": "Country",
          name: "Switzerland",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "NextPilotAI",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#web-development`,
      name: "Web Development",
      serviceType: "Web Development",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Switzerland",
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#web-applications`,
      name: "Web Applications",
      serviceType: "Web Application Development",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Switzerland",
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#ai-automation`,
      name: "AI Business Automation",
      serviceType: "AI Business Automation",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Switzerland",
      },
    },
  ],
};

const OG_LOCALE: Record<string, string> = {
  it: "it_IT",
  en: "en_US",
  ru: "ru_RU",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata" });

  const languages: Record<string, string> = {};
  for (const supported of routing.locales) {
    languages[supported] = localeHref(supported);
  }
  languages["x-default"] = localeHref(routing.defaultLocale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    alternates: {
      canonical: localeHref(locale),
      languages,
    },
    openGraph: {
      title: t("socialTitle"),
      description: t("description"),
      url: localeHref(locale),
      siteName: "NextPilotAI",
      locale: OG_LOCALE[locale],
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => OG_LOCALE[l]),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("socialTitle"),
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enables static rendering for this request locale.
  setRequestLocale(locale);

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c"),
          }}
        />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
