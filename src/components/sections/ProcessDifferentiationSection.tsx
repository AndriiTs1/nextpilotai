type Step = {
  index: string;
  title: string;
  description: string;
  result: string;
};

const steps: Step[] = [
  {
    index: "01",
    title: "Ascolto e analisi",
    description:
      "Si parte da una conversazione sul processo reale dell'azienda, non da un modulo da compilare: obiettivi, vincoli e priorità vengono messi a fuoco insieme.",
    result: "Una visione chiara di cosa serve davvero, prima di parlare di soluzioni.",
  },
  {
    index: "02",
    title: "Architettura della soluzione",
    description:
      "Prima di scrivere una riga di codice, si definisce come le diverse parti del sistema devono comunicare tra loro e con gli strumenti già in uso.",
    result: "Un piano tecnico chiaro, condiviso prima dell'inizio dello sviluppo.",
  },
  {
    index: "03",
    title: "Sviluppo per fasi",
    description:
      "Il progetto avanza in fasi controllate, ognuna con un risultato concreto da verificare, invece di un unico blocco consegnato solo alla fine.",
    result: "Progressi visibili passo dopo passo, senza sorprese finali.",
  },
  {
    index: "04",
    title: "Verifica e consegna",
    description:
      "Prima della consegna, la soluzione viene controllata nel funzionamento reale, non solo sulla carta, così eventuali correzioni si fanno prima del lancio.",
    result: "Una soluzione verificata, pronta per essere usata davvero.",
  },
];

const principles = [
  "Contatto diretto con chi sviluppa",
  "Architettura prima del codice",
  "Sviluppo trasparente, verificato passo dopo passo",
];

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

export default function ProcessDifferentiationSection() {
  return (
    <section className="process" aria-labelledby="process-heading">
      <div className="section-intro">
        <p className="section-eyebrow">IL METODO</p>

        <h2 className="section-heading" id="process-heading">
          Prima l&apos;architettura, poi lo sviluppo — un passo alla volta.
        </h2>

        <p className="section-lead">
          Che si tratti di un sito, di un&apos;applicazione o di
          un&apos;automazione, il modo di lavorare resta lo stesso: prima si
          capisce il problema, poi si progetta la soluzione, e solo alla fine
          si scrive il codice.
        </p>
      </div>

      <div className="process-steps">
        {steps.map((step) => (
          <ProcessStep key={step.title} {...step} />
        ))}
      </div>

      <div className="process-differentiation">
        <h3 className="process-differentiation-heading">
          Cosa lo rende diverso
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
