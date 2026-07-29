const problems = [
  {
    label: "Il sito non lavora per te",
    text: "È online, ma non porta a nessuna azione concreta e non riflette il livello reale dell'azienda.",
  },
  {
    label: "Le richieste si perdono",
    text: "Tra WhatsApp, email e telefonate, capita che un contatto interessato semplicemente scompaia.",
  },
  {
    label: "Troppo lavoro fatto a mano",
    text: "Dati copiati da un sistema all'altro, calendari e fogli separati che nessuno tiene davvero sincronizzati.",
  },
  {
    label: "Non è chiaro cosa serve davvero",
    text: "Un sito, un'app, un'automazione: senza una visione d'insieme, si rischia di pagare per la cosa sbagliata.",
  },
];

export default function ClientProblemsSection() {
  return (
    <section className="problems" aria-labelledby="problems-heading">
      <div className="section-intro">
        <p className="section-eyebrow">SITUAZIONI COMUNI</p>

        <h2 className="section-heading" id="problems-heading">
          Le stesse difficoltà si ripetono in molte aziende.
        </h2>

        <p className="section-lead">
          Un sito che non genera contatti, richieste che si perdono tra
          WhatsApp ed email, strumenti che non comunicano tra loro: raramente
          sono problemi isolati, più spesso sono lo stesso problema visto da
          angolazioni diverse.
        </p>
      </div>

      <div className="problems-grid">
        {problems.map((problem) => (
          <article className="problem-card" key={problem.label}>
            <h3 className="problem-label">{problem.label}</h3>
            <p className="problem-text">{problem.text}</p>
          </article>
        ))}
      </div>

      <p className="problems-transition">
        Non è mai un solo strumento a fare la differenza, ma il modo in cui
        l&apos;intero sistema lavora insieme.
      </p>
    </section>
  );
}
