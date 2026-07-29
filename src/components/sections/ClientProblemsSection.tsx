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
      <div className="section-intro">
        <p className="section-eyebrow">{t("eyebrow")}</p>

        <h2 className="section-heading" id="problems-heading">
          {t("heading")}
        </h2>

        <p className="section-lead">{t("lead")}</p>
      </div>

      <div className="problems-grid">
        {problems.map((problem) => (
          <article className="problem-card" key={problem.label}>
            <h3 className="problem-label">{problem.label}</h3>
            <p className="problem-text">{problem.text}</p>
          </article>
        ))}
      </div>

      <p className="problems-transition">{t("transition")}</p>
    </section>
  );
}
