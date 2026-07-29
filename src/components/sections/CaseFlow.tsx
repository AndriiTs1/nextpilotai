"use client";

import { useId, useState } from "react";

import FlowNode from "./FlowNode";

type CaseFlowProps = {
  index: number;
  title: string;
  problema: string;
  risultato: string;
  tecnologie: string;
  prima: string[];
  dopo: string[];
  toggleLabels: { prima: string; dopo: string };
  statusLabels: { frammentato: string; coordinato: string };
  toggleAriaLabel: string;
};

export default function CaseFlow({
  index,
  title,
  problema,
  risultato,
  tecnologie,
  prima,
  dopo,
  toggleLabels,
  statusLabels,
  toggleAriaLabel,
}: CaseFlowProps) {
  const [view, setView] = useState<"prima" | "dopo">("prima");
  const groupId = useId();

  return (
    <article className="case-flow">
      <div className="case-flow-info">
        <span className="case-flow-index" aria-hidden="true">
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="case-flow-title">{title}</h3>
        <p className="case-flow-problema">{problema}</p>
        <p className="case-flow-risultato">{risultato}</p>
        <p className="case-flow-tecnologie">{tecnologie}</p>
      </div>

      <div className="case-flow-diagram">
        <div
          className="case-flow-toggle"
          role="group"
          aria-label={toggleAriaLabel}
          id={groupId}
        >
          <button
            type="button"
            className="case-flow-toggle-button"
            aria-pressed={view === "prima"}
            onClick={() => setView("prima")}
          >
            {toggleLabels.prima}
          </button>
          <button
            type="button"
            className="case-flow-toggle-button"
            aria-pressed={view === "dopo"}
            onClick={() => setView("dopo")}
          >
            {toggleLabels.dopo}
          </button>
        </div>

        <div className="case-flow-panels">
          <div className="case-panel" data-active={view === "prima"}>
            <p className="case-panel-label">{statusLabels.frammentato}</p>
            {prima.map((step) => (
              <FlowNode key={step} label={step} variant="manual" />
            ))}
          </div>

          <div className="case-panel" data-active={view === "dopo"}>
            <p className="case-panel-label case-panel-label--automated">
              {statusLabels.coordinato}
            </p>
            {dopo.map((step) => (
              <FlowNode key={step} label={step} variant="automated" />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
