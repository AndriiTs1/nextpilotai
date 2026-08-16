import { getTranslations } from "next-intl/server";

type Problem = {
  label: string;
  text: string;
};

export default async function ClientProblemsSection() {
  const t = await getTranslations("problems");
  const problems = t.raw("items") as Problem[];

  return (
    <section className="problems" aria-labelledby="problems-heading">
      <div className="problems-intro">
        <div className="section-intro">
          <p className="section-eyebrow">{t("eyebrow")}</p>

          <h2
            className="section-heading section-heading--lg"
            id="problems-heading"
          >
            {t("heading")}
          </h2>
        </div>

        <p className="section-lead problems-lead">{t("lead")}</p>
      </div>

      <div className="problems-grid">
        {problems.map((problem, index) => (
          <article className="problem-card" key={problem.label}>
            <div className="problem-card-top">
              <span className="problem-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="problem-dot" aria-hidden="true" />
            </div>

            <h3 className="problem-label">{problem.label}</h3>

            <p className="problem-text">{problem.text}</p>
          </article>
        ))}
      </div>

      <div className="problems-transition">
        <span className="problems-transition-line" aria-hidden="true" />
        <p>{t("transition")}</p>
      </div>
    </section>
  );
}
