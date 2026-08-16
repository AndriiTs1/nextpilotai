import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt =
  "NextPilotAI — AI, Web Applications and Business Automation";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const brandLogo = await readFile(
    join(process.cwd(), "public/brand/nextpilotai-logo-3d.png")
  );

  const brandLogoDataUrl =
    `data:image/png;base64,${brandLogo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #020712 0%, #061126 48%, #0b071d 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Main content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "82px 92px 92px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              width: "300px",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <img
              src={brandLogoDataUrl}
              width={250}
              height={250}
              alt=""
              style={{
                objectFit: "contain",
              }}
            />
          </div>

          {/* Right content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "50px",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "66px",
                lineHeight: 1,
                fontWeight: 600,
                letterSpacing: "-3px",
              }}
            >
              NextPilotAI
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "22px",
                fontSize: "27px",
                color: "#a8b3c7",
                letterSpacing: "-0.5px",
              }}
            >
              AI · Web · Automation
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "42px",
                maxWidth: "680px",
                fontSize: "37px",
                lineHeight: 1.22,
                fontWeight: 500,
                letterSpacing: "-1px",
              }}
            >
              The digital system behind a business that works.
            </div>

            {/* Services */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "48px",
                fontSize: "20px",
                color: "#d7deeb",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    display: "flex",
                    width: "9px",
                    height: "9px",
                    marginRight: "12px",
                    borderRadius: "999px",
                    background: "#22d3ee",
                    boxShadow: "0 0 16px rgba(34,211,238,.8)",
                  }}
                />
                AI Solutions
              </div>

              <div
                style={{
                  display: "flex",
                  width: "1px",
                  height: "28px",
                  margin: "0 28px",
                  background: "rgba(255,255,255,.22)",
                }}
              />

              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    display: "flex",
                    width: "9px",
                    height: "9px",
                    marginRight: "12px",
                    borderRadius: "999px",
                    background: "#6366f1",
                  }}
                />
                Web Systems
              </div>

              <div
                style={{
                  display: "flex",
                  width: "1px",
                  height: "28px",
                  margin: "0 28px",
                  background: "rgba(255,255,255,.22)",
                }}
              />

              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    display: "flex",
                    width: "9px",
                    height: "9px",
                    marginRight: "12px",
                    borderRadius: "999px",
                    background: "#a855f7",
                  }}
                />
                Process Automation
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div
          style={{
            position: "absolute",
            left: "92px",
            right: "92px",
            bottom: "42px",
            height: "2px",
            background:
              "linear-gradient(90deg, #22d3ee 0%, #3b82f6 48%, #a855f7 100%)",
          }}
        />
      </div>
    ),
    size
  );
}
