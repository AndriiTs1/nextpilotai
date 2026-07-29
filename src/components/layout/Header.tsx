import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="site-brand" aria-label="NextPilotAI home">
        <span className="site-logo">N</span>

        <span className="site-brand-content">
          <span className="site-brand-name">NextPilotAI</span>
          <span className="site-brand-subtitle">Partner tecnologico</span>
        </span>
      </Link>

      <div className="site-status">
        <span className="site-status-dot" aria-hidden="true" />

        <span className="site-status-text">Disponibile per nuovi progetti</span>
      </div>
    </header>
  );
}
