import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import LanguageSwitcher from "./LanguageSwitcher";

export default async function Header() {
  const t = await getTranslations("header");

  return (
    <header className="site-header">
      <Link href="/" className="site-brand" aria-label={t("homeAriaLabel")}>
        <span className="site-logo">N</span>

        <span className="site-brand-content">
          <span className="site-brand-name">{t("brandName")}</span>
          <span className="site-brand-subtitle">{t("brandSubtitle")}</span>
        </span>
      </Link>

      <div className="site-header-right">
        <div className="site-status">
          <span className="site-status-dot" aria-hidden="true" />
          <span className="site-status-text">{t("statusText")}</span>
        </div>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
