import { getTranslations } from "next-intl/server";

type Step = {
  index: string;
  title: string;
  description: string;
  result: string;
};

function ProcessStep({ index, title, description, result }: Step) {
  return (
    <article className="process-step">
      <span className="process-step-index" aria-hidden="true">
        {index}
      </span>
      <h3 className="process-step-title">{title}</h3>
      <p className="process-step-description">{description}</p>
      <p className="process-step-result">{result}</p>
    </article>
  );
}

export default async function ProcessDifferentiationSection() {
  const t = await getTranslations("process");
  const steps = t.raw("steps") as Step[];
  const principles = t.raw("differentiation.principles") as string[];

  return (
    <section className="process" aria-labelledby="process-heading">
      <div className="section-intro">
        <p className="section-eyebrow">{t("eyebrow")}</p>

        <h2 className="section-heading" id="process-heading">
          {t("heading")}
        </h2>

        <p className="section-lead">{t("lead")}</p>
      </div>

      <div className="process-steps">
        {steps.map((step) => (
          <ProcessStep key={step.title} {...step} />
        ))}
      </div>

      <div className="process-differentiation">
        <h3 className="process-differentiation-heading">
          {t("differentiation.heading")}
        </h3>

        <ul className="process-differentiation-list">
          {principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
