const trustSignals = [
  "Base a Lugano, Svizzera",
  "Contatto diretto, senza intermediari",
  "Architettura prima del codice",
  "Processo trasparente, passo dopo passo",
];

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Punti di fiducia">
      <ul className="trust-strip-list">
        {trustSignals.map((signal) => (
          <li className="trust-strip-item" key={signal}>
            {signal}
          </li>
        ))}
      </ul>
    </section>
  );
}
