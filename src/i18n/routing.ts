import { defineRouting } from "next-intl/routing";

/**
 * Single source of truth for supported locales.
 * To add a new language later (e.g. "de"): add it here, add
 * messages/de.json, add it to LOCALE_LABELS in the language switcher,
 * and add it to generateStaticParams in the locale layout. Nothing else
 * needs to change — routing, sitemap and hreflang all read from this list.
 */
export const routing = defineRouting({
  locales: ["it", "en", "ru"],
  defaultLocale: "it",
  localePrefix: "as-needed",
});

export type AppLocale = (typeof routing.locales)[number];
