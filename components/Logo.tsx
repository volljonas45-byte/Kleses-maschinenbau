type LogoProps = {
  variant?: "dark" | "light"; // dark = navy auf weiß, light = weiß auf dunkel
  height?: number;
  className?: string;
};

export default function Logo({ variant = "light", height = 40, className = "" }: LogoProps) {
  const navyColor = variant === "dark" ? "#1d2e5e" : "#ffffff";
  const barColor = variant === "dark" ? "#1d2e5e" : "#ffffff";
  const barText = variant === "dark" ? "#ffffff" : "#1d2e5e";

  // Proportionen original: KELES ~breiter Text, MASCHINENBAU-Balken leicht schmaler
  // viewBox angepasst damit beide Zeilen gut skalieren
  return (
    <svg
      viewBox="0 0 220 70"
      height={height}
      aria-label="KELES Maschinenbau"
      role="img"
      className={className}
      style={{ display: "block" }}
    >
      {/* "KELES" – groß, bold, navy */}
      <text
        x="110"
        y="37"
        textAnchor="middle"
        fontFamily="'Arial Black', 'Impact', 'Haettenschweiler', sans-serif"
        fontWeight="900"
        fontSize="42"
        letterSpacing="-1"
        fill={navyColor}
      >
        KELES
      </text>

      {/* "MASCHINENBAU"-Balken */}
      <rect x="8" y="44" width="204" height="22" fill={barColor} />
      <text
        x="110"
        y="60"
        textAnchor="middle"
        fontFamily="'Arial', sans-serif"
        fontWeight="700"
        fontSize="13"
        letterSpacing="1.5"
        fill={barText}
      >
        MASCHINENBAU
      </text>
    </svg>
  );
}
