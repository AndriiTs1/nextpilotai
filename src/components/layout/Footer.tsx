import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="site-footer">
      <span>{t("brandName")}</span>

      <span>{t("location")}</span>

      <span>{t("copyright")}</span>
    </footer>
  );
}
