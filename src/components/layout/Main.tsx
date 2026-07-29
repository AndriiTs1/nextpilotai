const capabilities = [
  {
    value: "AI",
    label: "Automazione",
  },
  {
    value: "Web",
    label: "Sistemi",
  },
  {
    value: "Architettura",
    label: "Prima del codice",
  },
];

export default function Main() {
  return (
    <main className="site-main">
      <div className="site-background" aria-hidden="true">
        <div className="site-grid" />
      </div>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-badge">SITI · APP · AUTOMAZIONE</p>

          <h1 className="hero-title">
            Il sistema digitale dietro{" "}
            <span className="hero-title-accent">un&apos;azienda che funziona.</span>
          </h1>

          <div className="hero-bottom">
            <div className="hero-actions">
              <p className="hero-description">
                NextPilot AI progetta siti, applicazioni web, automazioni e
                intelligenza artificiale come un unico sistema: la tua azienda
                smette di dipendere da strumenti sparsi e inizia a lavorare in
                modo coordinato.
              </p>

              <div className="hero-cta-group">
                <button type="button" className="hero-cta">
                  Scrivimi del tuo progetto
                </button>

                <p className="hero-trust">
                  Parli direttamente con chi sviluppa, senza passaggi
                  intermedi.
                </p>
              </div>
            </div>

            <div className="capabilities">
              {capabilities.map((capability) => (
                <article className="capability-card" key={capability.label}>
                  <strong className="capability-value">
                    {capability.value}
                  </strong>

                  <span className="capability-label">{capability.label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
