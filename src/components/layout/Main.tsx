const capabilities = [
  {
    value: "AI",
    label: "Integration",
  },
  {
    value: "Web",
    label: "Platforms",
  },
  {
    value: "01",
    label: "Vision",
  },
];

export default function Main() {
  return (
    <main className="site-main">
      <div className="site-background" aria-hidden="true">
        <div className="site-glow site-glow-left" />
        <div className="site-glow site-glow-center" />
        <div className="site-glow site-glow-right" />
        <div className="site-grid" />
      </div>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-badge">AI · Web · Automation</p>

          <h1 className="hero-title">
            We build the systems
            <span className="hero-title-accent">behind modern business.</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-description">
              NextPilotAI creates intelligent digital products, custom web
              platforms and automation systems for ambitious businesses.
            </p>

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
