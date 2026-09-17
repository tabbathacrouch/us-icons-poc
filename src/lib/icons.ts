import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { usat } from "united-states-and-territories-solid-svg-icons";

/** 50 states + DC + 5 territories. */
export const EXPECTED_ICON_COUNT = 56;

export type StateIconEntry = {
  /** The Font Awesome icon definition, safe to pass across the RSC boundary. */
  icon: IconDefinition;
  /** Kebab-case icon name, e.g. "new-mexico". */
  iconName: string;
  /** Display label, e.g. "New Mexico". */
  label: string;
  /** Lowercase postal code, e.g. "nm". */
  postalCode: string;
  /** Per-icon export name, e.g. "faNewMexico". */
  importName: string;
  /** The import line a consumer should copy. */
  importLine: string;
};

const PACKAGE_NAME = "united-states-and-territories-solid-svg-icons";

/**
 * Labels are NOT in the published tarball — metadata/icons.json lives in the
 * repo but isn't packed — so consumers have to derive them from the icon name.
 * Title-casing each word gets 54 of 56 right; these two need help.
 */
const LABEL_OVERRIDES: Record<string, string> = {
  "district-of-columbia": "District of Columbia",
  "us-virgin-islands": "US Virgin Islands",
};

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const toLabel = (iconName: string) =>
  LABEL_OVERRIDES[iconName] ?? iconName.split("-").map(capitalize).join(" ");

/** "new-mexico" -> "faNewMexico", matching the package's export names. */
const toImportName = (iconName: string) =>
  `fa${iconName.split("-").map(capitalize).join("")}`;

/** The postal code alias lives in the definition itself: icon[2] is the alias list. */
const toPostalCode = (definition: IconDefinition) => {
  const [, , aliases] = definition.icon;
  const first = aliases?.[0];
  return typeof first === "string" ? first : "";
};

function toEntry(definition: IconDefinition): StateIconEntry {
  const { iconName } = definition;
  const importName = toImportName(iconName);

  return {
    icon: definition,
    iconName,
    label: toLabel(iconName),
    postalCode: toPostalCode(definition),
    importName,
    importLine: `import { ${importName} } from '${PACKAGE_NAME}/${importName}';`,
  };
}

/**
 * `usat` has 112 keys because every icon is exported twice — once under its full
 * name (faTexas) and once under its postal code (faTx) — with both keys pointing
 * at the same definition object. Deduping by iconName gets back to 56.
 */
export function getStateIcons(): StateIconEntry[] {
  const byIconName = new Map<string, StateIconEntry>();

  for (const definition of Object.values(usat)) {
    if (!byIconName.has(definition.iconName)) {
      byIconName.set(definition.iconName, toEntry(definition));
    }
  }

  const entries = [...byIconName.values()].sort((a, b) =>
    a.label.localeCompare(b.label),
  );

  // Fail loudly rather than silently rendering a short gallery.
  if (entries.length !== EXPECTED_ICON_COUNT) {
    throw new Error(
      `Expected ${EXPECTED_ICON_COUNT} icons from ${PACKAGE_NAME}, got ${entries.length}.`,
    );
  }

  return entries;
}

/** Case-insensitive match on label, icon name, or postal code. */
export function filterStateIcons(
  entries: StateIconEntry[],
  query: string,
): StateIconEntry[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return entries;

  return entries.filter(
    (entry) =>
      entry.label.toLowerCase().includes(needle) ||
      entry.iconName.includes(needle) ||
      entry.postalCode === needle ||
      entry.postalCode.startsWith(needle),
  );
}
