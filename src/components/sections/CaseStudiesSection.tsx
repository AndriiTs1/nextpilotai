import CaseFlow from "./CaseFlow";

type CaseStudyData = {
  title: string;
  problema: string;
  risultato: string;
  tecnologie: string;
  prima: string[];
  dopo: string[];
};

const caseStudies: CaseStudyData[] = [
  {
    title: "Gestione automatica delle richieste",
    problema:
      "I clienti scrivono da canali diversi — sito, WhatsApp, email, telefono — e le richieste si perdono, si duplicano o restano senza risposta.",
    risultato:
      "Ogni richiesta arriva in un unico posto, riceve uno stato chiaro, e il team sa sempre chi ha già risposto e cosa fare dopo.",
    tecnologie:
      "Next.js · NestJS · PostgreSQL · AI · Integrazione email e messaggistica",
    prima: [
      "Sito, WhatsApp, email, telefono",
      "Copia manuale nei fogli",
      "Richieste perse o duplicate",
    ],
    dopo: [
      "Sito, WhatsApp, email",
      "Raccolta unica delle richieste",
      "Classificazione automatica",
      "CRM e dashboard",
      "Notifica al team e risposta automatica",
    ],
  },
  {
    title: "Elaborazione automatica dei documenti",
    problema:
      "Un documento PDF arriva, e qualcuno deve leggerlo, copiare i dati a mano e riportarli in un altro sistema.",
    risultato:
      "I documenti vengono elaborati più velocemente, i dati diventano strutturati, e una persona verifica il risultato invece di ricopiare tutto a mano.",
    tecnologie: "Next.js · AI/LLM · Estrazione PDF · PostgreSQL · Verifica dati",
    prima: [
      "PDF ricevuto",
      "Lettura manuale",
      "Copia dei dati",
      "Foglio di calcolo o gestionale",
    ],
    dopo: [
      "Caricamento del PDF",
      "Estrazione automatica del testo",
      "Analisi AI",
      "Dati strutturati",
      "Verifica umana ed esportazione",
    ],
  },
  {
    title: "Prenotazione e gestione appuntamenti",
    problema:
      "I clienti chiamano o scrivono per sapere quando c'è disponibilità, e qualcuno deve controllare il calendario a mano, rispondere e ricordare l'appuntamento.",
    risultato:
      "Il cliente prenota senza lunghi scambi di messaggi, il calendario si aggiorna da solo, e gli appuntamenti dimenticati diminuiscono.",
    tecnologie: "Next.js · Calendar API · Email e Telegram · Automazione · Database",
    prima: [
      "Telefonata o messaggio",
      "Controllo manuale del calendario",
      "Conferma via chat",
      "Appuntamenti dimenticati",
    ],
    dopo: [
      "Form o chat online",
      "Verifica disponibilità",
      "Prenotazione registrata",
      "Sincronizzazione calendario",
      "Conferma e promemoria automatico",
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="cases" aria-labelledby="cases-heading">
      <div className="section-intro">
        <p className="section-eyebrow">SCENARI DIMOSTRATIVI</p>

        <h2 className="section-heading section-heading--lg" id="cases-heading">
          Esempi di come un processo disordinato si trasforma in un sistema.
        </h2>

        <p className="section-lead">
          Non sono case study di clienti pubblicati, ma scenari dimostrativi:
          mostrano come un processo disorganizzato può trasformarsi in un
          sistema coordinato, passo dopo passo.
        </p>
      </div>

      <div className="cases-list">
        {caseStudies.map((caseStudy, index) => (
          <CaseFlow key={caseStudy.title} index={index + 1} {...caseStudy} />
        ))}
      </div>

      <div className="cases-cta">
        <h3 className="cases-cta-heading">
          Hai un processo simile nella tua azienda?
        </h3>

        <p className="cases-cta-text">
          Non serve sapere quale tecnologia usare: si parte dal problema, e
          insieme si costruisce la soluzione giusta.
        </p>

        <button type="button" className="hero-cta">
          Scrivimi del tuo progetto
        </button>
      </div>
    </section>
  );
}
