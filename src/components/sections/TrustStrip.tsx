import { getTranslations } from "next-intl/server";

export default async function TrustStrip() {
  const t = await getTranslations("trustStrip");
  const signals = t.raw("signals") as string[];

  return (
    <section className="trust-strip" aria-label={t("ariaLabel")}>
      <ul className="trust-strip-list">
        {signals.map((signal) => (
          <li className="trust-strip-item" key={signal}>
            {signal}
          </li>
        ))}
      </ul>
    </section>
  );
}
