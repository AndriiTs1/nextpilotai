import { getTranslations } from "next-intl/server";

import CasesShowcase from "./CasesShowcase";

type CaseStudyData = {
  title: string;
  problema: string;
  risultato: string;
  tecnologie: string;
  prima: string[];
  dopo: string[];
};

export default async function CaseStudiesSection() {
  const t = await getTranslations("cases");
  const caseStudies = t.raw("items") as CaseStudyData[];
  const toggleLabels = t.raw("toggle") as { prima: string; dopo: string };
  const statusLabels = t.raw("status") as {
    frammentato: string;
    coordinato: string;
  };

  return (
    <section className="cases" aria-labelledby="cases-heading">
      <div className="section-intro">
        <p className="section-eyebrow">{t("eyebrow")}</p>

        <h2 className="section-heading section-heading--lg" id="cases-heading">
          {t("heading")}
        </h2>

        <p className="section-lead">{t("lead")}</p>
      </div>

      <CasesShowcase
        items={caseStudies}
        beforeLabel={toggleLabels.prima}
        afterLabel={toggleLabels.dopo}
        fragmentedLabel={statusLabels.frammentato}
        coordinatedLabel={statusLabels.coordinato}
      />

      <div className="cases-cta">
        <h3 className="cases-cta-heading">{t("cta.heading")}</h3>

        <p className="cases-cta-text">{t("cta.text")}</p>

        <button type="button" className="hero-cta">
          {t("cta.button")}
        </button>
      </div>
    </section>
  );
}
