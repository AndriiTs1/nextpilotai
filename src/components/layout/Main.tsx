import { getTranslations } from "next-intl/server";

type Capability = {
  value: string;
  label: string;
};

export default async function Main() {
  const t = await getTranslations("hero");
  const capabilities = t.raw("capabilities") as Capability[];

  return (
    <main id="top" className="site-main">
      <div className="site-background" aria-hidden="true">
        <div className="site-grid" />
      </div>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-badge">{t("badge")}</p>

          <h1 className="hero-title">
            {t("titleLine1")}{" "}
            <span className="hero-title-accent">{t("titleAccent")}</span>
          </h1>

          <div className="hero-bottom">
            <div className="hero-actions">
              <p className="hero-description">{t("description")}</p>

              <div className="hero-cta-group">
                <a
                  href="mailto:curupa8888@gmail.com?subject=Project%20inquiry%20%E2%80%94%20NextPilotAI"
                  className="hero-cta"
                >
                  {t("cta")}
                </a>

                <p className="hero-trust">{t("trust")}</p>
              </div>
            </div>

            <div className="capabilities">
              {capabilities.map((capability) => (
                <article className="capability-card" key={capability.label}>
                  <strong className="capability-value">
                    {capability.value}
                  </strong>

                  <span className="capability-label">{capability.label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
