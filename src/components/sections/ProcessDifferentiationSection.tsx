import Image from "next/image";

import { getTranslations } from "next-intl/server";

type Step = {
  index: string;
  title: string;
  description: string;
};

export default async function ProcessDifferentiationSection() {
  const t = await getTranslations("process");
  const steps = t.raw("steps") as Step[];
  const principles = t.raw("principles") as string[];

  return (
    <section className="process-v2" aria-labelledby="process-heading">
      <div className="section-intro">
        <p className="section-eyebrow">{t("eyebrow")}</p>

        <h2
          className="section-heading section-heading--lg"
          id="process-heading"
        >
          {t("heading")}
        </h2>

        <p className="section-lead">{t("lead")}</p>
      </div>

      <div className="process-v2-grid">
        {steps.map((step) => (
          <article className="process-v2-card" key={step.index}>
            <span className="process-v2-number" aria-hidden="true">
              {step.index}
            </span>

            <div className="process-v2-visual" aria-hidden="true">
              {step.index === "01" && (
                <Image
                  src="/images/process/analysis-3d.png"
                  alt=""
                  width={1498}
                  height={1498}
                  className="process-v2-icon"
                />
              )}

              {step.index === "02" && (
                <Image
                  src="/images/process/architecture-3d.png"
                  alt=""
                  width={1254}
                  height={1254}
                  className="process-v2-icon"
                />
              )}

              {step.index === "03" && (
                <Image
                  src="/images/process/development-3d.png"
                  alt=""
                  width={1536}
                  height={1536}
                  className="process-v2-icon"
                />
              )}

              {step.index === "04" && (
                <Image
                  src="/images/process/launch-3d.png"
                  alt=""
                  width={1536}
                  height={1536}
                  className="process-v2-icon"
                />
              )}
            </div>

            <div className="process-v2-content">
              <h3 className="process-v2-title">{step.title}</h3>

              <p className="process-v2-description">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <ul className="process-v2-principles">
        {principles.map((principle, index) => (
          <li key={principle}>
            <span
              className={`process-v2-principle-dot process-v2-principle-dot--${index + 1}`}
              aria-hidden="true"
            />
            {principle}
          </li>
        ))}
      </ul>
    </section>
  );
}
