import { getTranslations } from "next-intl/server";

type TrustSignal = {
  title: string;
  text: string;
};

export default async function TrustStrip() {
  const t = await getTranslations("trustStrip");
  const signals = t.raw("signals") as TrustSignal[];

  return (
    <section className="trust-strip" aria-label={t("ariaLabel")}>
      <ul className="trust-strip-list">
        {signals.map((signal) => (
          <li className="trust-strip-item" key={signal.title}>
            <strong className="trust-strip-title">{signal.title}</strong>
            <span className="trust-strip-text">{signal.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
