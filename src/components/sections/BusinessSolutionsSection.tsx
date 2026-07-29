import { getTranslations } from "next-intl/server";

type Solution = {
  title: string;
  service: string;
  description: string;
  examples: string[];
  result: string;
};

function SolutionCard({ title, service, description, examples, result }: Solution) {
  return (
    <article className="solution-card">
      <h3 className="solution-title">{title}</h3>
      <p className="solution-service">{service}</p>
      <p className="solution-description">{description}</p>

      <ul className="solution-examples">
        {examples.map((example) => (
          <li key={example}>{example}</li>
        ))}
      </ul>

      <p className="solution-result">{result}</p>
    </article>
  );
}

export default async function BusinessSolutionsSection() {
  const t = await getTranslations("solutions");
  const solutions = t.raw("items") as Solution[];

  return (
    <section className="solutions" aria-labelledby="solutions-heading">
      <div className="section-intro">
        <p className="section-eyebrow">{t("eyebrow")}</p>

        <h2 className="section-heading section-heading--lg" id="solutions-heading">
          {t("heading")}
        </h2>

        <p className="section-lead">{t("lead")}</p>
      </div>

      <div className="solutions-grid">
        {solutions.map((solution) => (
          <SolutionCard key={solution.title} {...solution} />
        ))}
      </div>

      <p className="solutions-transition">{t("transition")}</p>
    </section>
  );
}
