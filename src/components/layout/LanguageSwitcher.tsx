import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default async function LanguageSwitcher() {
  const locale = await getLocale();
  const t = await getTranslations("languageSwitcher");

  return (
    <nav className="language-switcher" aria-label={t("ariaLabel")}>
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href="/"
          locale={loc}
          className="language-switcher-item"
          aria-current={loc === locale ? "true" : undefined}
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
