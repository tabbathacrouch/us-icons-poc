export const theme = {
  colors: {
    background: "#fbfaf7",
    surface: "#ffffff",
    surfaceMuted: "#f2efe9",
    border: "#ddd8cd",
    text: "#1b1917",
    textMuted: "#5f584e",
    icon: "#143766",
    accent: "#143766",
    accentText: "#ffffff",
    /**
     * Two jobs: the global focus ring and the legibility-warning text in an
     * icon card. So it needs 4.5:1 against `surface`, not just the 3:1 a
     * non-text ring would need.
     */
    focus: "#be123c",
  },
  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2.5rem",
  },
  radii: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "2rem",
  },
  fontFamily: {
    body: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, monospace",
  },
  breakpoint: {
    sm: "30rem",
    md: "48rem",
    lg: "64rem",
  },
} as const;

export type AppTheme = typeof theme;
