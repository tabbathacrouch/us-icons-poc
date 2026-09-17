/**
 * The sizes the gallery can render at. The package README documents legibility
 * thresholds in px (islands need 20-48px), so each entry keeps the px label for
 * the UI and the rem value actually used in CSS.
 */
export const ICON_SIZES = [
  { id: "24", label: "24px", rem: "1.5rem" },
  { id: "32", label: "32px", rem: "2rem" },
  { id: "48", label: "48px", rem: "3rem" },
  { id: "64", label: "64px", rem: "4rem" },
] as const;

export type IconSize = (typeof ICON_SIZES)[number];
export type IconSizeId = IconSize["id"];

export const DEFAULT_SIZE_ID: IconSizeId = "48";

export function findSize(id: IconSizeId): IconSize {
  return ICON_SIZES.find((size) => size.id === id) ?? ICON_SIZES[0];
}

/**
 * From the README: island silhouettes are mostly empty space, so they thin out
 * as the icon shrinks. Surfacing this in the UI is half the point of the POC.
 */
export const MIN_LEGIBLE_PX: Record<string, number> = {
  "northern-mariana-islands": 48,
  "us-virgin-islands": 48,
  "puerto-rico": 24,
  hawaii: 20,
};
