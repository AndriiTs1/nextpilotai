import { getTranslations } from "next-intl/server";

import LanguageSwitcher from "./LanguageSwitcher";
import ScrollToTopBrand from "./ScrollToTopBrand";

export default async function Header() {
  const t = await getTranslations("header");

  return (
    <header className="site-header">
      <ScrollToTopBrand
        brandName={t("brandName")}
        brandSubtitle={t("brandSubtitle")}
        ariaLabel={t("homeAriaLabel")}
      />

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
