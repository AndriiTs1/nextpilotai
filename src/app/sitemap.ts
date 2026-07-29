import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/app/[locale]/layout";

function localeHref(locale: string) {
  return locale === routing.defaultLocale ? "/" : `/${locale}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = `${SITE_URL}${localeHref(locale)}`;
  }
  languages["x-default"] = `${SITE_URL}${localeHref(routing.defaultLocale)}`;

  return routing.locales.map((locale) => ({
    url: `${SITE_URL}${localeHref(locale)}`,
    lastModified: new Date(),
    alternates: { languages },
  }));
}
