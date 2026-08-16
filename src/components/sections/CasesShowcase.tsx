"use client";

import { useState } from "react";

type CaseStudy = {
  title: string;
  problema: string;
  risultato: string;
  tecnologie: string;
  prima: string[];
  dopo: string[];
};

type Props = {
  items: CaseStudy[];
  beforeLabel: string;
  afterLabel: string;
  fragmentedLabel: string;
  coordinatedLabel: string;
};

export default function CasesShowcase({
  items,
  beforeLabel,
  afterLabel,
  fragmentedLabel,
  coordinatedLabel,
}: Props) {
  const [activeCase, setActiveCase] = useState(0);
  const [view, setView] = useState<"before" | "after">("after");

  const item = items[activeCase];
  const steps = view === "before" ? item.prima : item.dopo;

  return (
    <div className="cases-v2">
      <div className="cases-v2-tabs" role="tablist">
        {items.map((caseItem, index) => (
          <button
            key={caseItem.title}
            type="button"
            role="tab"
            aria-selected={activeCase === index}
            className="cases-v2-tab"
            onClick={() => setActiveCase(index)}
          >
            <span className="cases-v2-tab-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="cases-v2-tab-title">
              {caseItem.title}
            </span>
          </button>
        ))}
      </div>

      <div className="cases-v2-showcase">
        <div className="cases-v2-info">
          <span className="cases-v2-index">
            {String(activeCase + 1).padStart(2, "0")}
          </span>

          <h3 className="cases-v2-title">
            {item.title}
          </h3>

          <p className="cases-v2-problem">
            {item.problema}
          </p>

          <div className="cases-v2-result">
            <span className="cases-v2-result-label">
              RESULT
            </span>

            <p>{item.risultato}</p>
          </div>

          <p className="cases-v2-tech">
            {item.tecnologie}
          </p>
        </div>

        <div className="cases-v2-system">
          <div className="cases-v2-system-head">
            <div className="cases-v2-switch">
              <button
                type="button"
                data-active={view === "before"}
                onClick={() => setView("before")}
              >
                {beforeLabel}
              </button>

              <span aria-hidden="true">→</span>

              <button
                type="button"
                data-active={view === "after"}
                onClick={() => setView("after")}
              >
                {afterLabel}
              </button>
            </div>

            <span
              className="cases-v2-status"
              data-mode={view}
            >
              <i aria-hidden="true" />
              {view === "before"
                ? fragmentedLabel
                : coordinatedLabel}
            </span>
          </div>

          <div
            className="cases-v2-flow"
            data-mode={view}
          >
            {steps.map((step, index) => (
              <div
                className="cases-v2-node"
                key={`${view}-${step}`}
              >
                <span className="cases-v2-node-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="cases-v2-node-text">
                  {step}
                </span>

                {index < steps.length - 1 && (
                  <span
                    className="cases-v2-node-line"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
