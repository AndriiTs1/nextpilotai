import { getTranslations } from "next-intl/server";

import LanguageSwitcher from "./LanguageSwitcher";

export default async function Header() {
  const t = await getTranslations("header");

  return (
    <header className="site-header">
      <a href="#top" className="site-brand" aria-label={t("homeAriaLabel")}>
        <span className="site-logo">N</span>

        <span className="site-brand-content">
          <span className="site-brand-name">{t("brandName")}</span>
          <span className="site-brand-subtitle">{t("brandSubtitle")}</span>
        </span>
      </a>

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
