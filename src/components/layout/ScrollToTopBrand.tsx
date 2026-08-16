"use client";

import Image from "next/image";

type ScrollToTopBrandProps = {
  brandName: string;
  brandSubtitle: string;
  ariaLabel: string;
};

export default function ScrollToTopBrand({
  brandName,
  brandSubtitle,
  ariaLabel,
}: ScrollToTopBrandProps) {
  const handleClick = () => {
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className="site-brand"
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      <span className="site-logo" aria-hidden="true">
        <Image
          src="/brand/nextpilotai-logo-3d.png"
          alt=""
          width={44}
          height={44}
          className="site-logo-image"
          priority
        />
      </span>

      <span className="site-brand-content">
        <span className="site-brand-name" aria-label={brandName}>
          <span>NextPilot</span>
          <span className="site-brand-ai-text" aria-hidden="true">AI</span>
        </span>
        <span className="site-brand-subtitle">{brandSubtitle}</span>
      </span>
    </button>
  );
}
