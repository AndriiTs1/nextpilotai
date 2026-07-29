type Solution = {
  title: string;
  service: string;
  description: string;
  examples: string[];
  result: string;
};

const solutions: Solution[] = [
  {
    title: "Presentare l'azienda online",
    service: "Siti Web",
    description:
      "Se il sito è vecchio, lento o assente, chi arriva sulla pagina non capisce cosa fare né percepisce il livello reale dell'azienda: il risultato sono meno contatti e meno fiducia.",
    examples: ["Sito aziendale", "Landing page", "Area informativa"],
    result:
      "Più chiarezza per chi visita il sito, più richieste che arrivano davvero.",
  },
  {
    title: "Gestire processi interni",
    service: "Applicazioni Web",
    description:
      "Quando fogli Excel, messaggi e strumenti diversi non bastano più a tenere tutto sotto controllo, serve uno strumento pensato sul modo in cui il team lavora davvero, non il contrario.",
    examples: ["Area clienti", "Dashboard operativa", "Gestione richieste"],
    result:
      "Meno passaggi manuali, processi più ordinati e più facili da seguire.",
  },
  {
    title: "Ridurre il lavoro manuale",
    service: "Automazione e Intelligenza Artificiale",
    description:
      "Rispondere sempre alle stesse domande, spostare dati a mano da un sistema all'altro o smistare documenti uno per uno consuma tempo prezioso: l'automazione e l'intelligenza artificiale intervengono solo dove riducono davvero questo carico, senza sostituire le persone.",
    examples: ["Risposte automatiche", "Gestione documenti", "Notifiche e flussi"],
    result:
      "Meno attività ripetitive, più tempo per il lavoro che conta davvero.",
  },
  {
    title: "Vendere e collegare sistemi",
    service: "E-commerce e Integrazioni",
    description:
      "Vendere online richiede molto più di un catalogo: servono pagamenti affidabili, un collegamento reale con gli strumenti già in uso e dati che si aggiornano da soli tra un sistema e l'altro, senza doppio lavoro.",
    examples: ["Catalogo e ordini", "Pagamenti online", "Integrazione CRM"],
    result:
      "Vendite e sistemi collegati, senza dati duplicati da gestire a mano.",
  },
];

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

export default function BusinessSolutionsSection() {
  return (
    <section className="solutions" aria-labelledby="solutions-heading">
      <div className="section-intro">
        <p className="section-eyebrow">ESIGENZE DIGITALI</p>

        <h2 className="section-heading section-heading--lg" id="solutions-heading">
          Ogni azienda ha bisogno di soluzioni diverse, non di una ricetta
          unica.
        </h2>

        <p className="section-lead">
          Le difficoltà descritte sopra raramente si risolvono con
          un&apos;unica mossa: a seconda di cosa sta realmente frenando
          l&apos;azienda, la risposta giusta può essere un sito,
          un&apos;applicazione, un&apos;automazione o un collegamento tra
          sistemi già esistenti.
        </p>
      </div>

      <div className="solutions-grid">
        {solutions.map((solution) => (
          <SolutionCard key={solution.title} {...solution} />
        ))}
      </div>

      <p className="solutions-transition">
        Spesso la risposta giusta combina più di una di queste soluzioni: per
        questo l&apos;architettura viene pensata prima di scegliere lo
        strumento.
      </p>
    </section>
  );
}
