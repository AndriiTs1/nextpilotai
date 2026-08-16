"use client";

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
      <span className="site-logo">N</span>

      <span className="site-brand-content">
        <span className="site-brand-name">{brandName}</span>
        <span className="site-brand-subtitle">{brandSubtitle}</span>
      </span>
    </button>
  );
}
