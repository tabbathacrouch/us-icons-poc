import {
  findIconDefinition,
  library,
  type IconDefinition,
  type IconName,
  type IconPrefix,
} from "@fortawesome/fontawesome-svg-core";
import { usat } from "united-states-and-territories-solid-svg-icons";

/**
 * The string-lookup path, for code that only knows "tx" at runtime.
 *
 * Note the casts. Font Awesome's IconPrefix and IconName are closed union types
 * listing FA's own prefixes and icon names, and TypeScript gives no way for a
 * third-party pack to widen them — so 'usat' and 'texas' aren't assignable
 * without asserting. This is a known Font Awesome limitation, not a defect in
 * the icon package, but any consumer doing dynamic lookups will hit it.
 *
 * Registering the pack this way pulls all 56 icons into the bundle. Prefer the
 * per-icon import (see StateIconEntry.importLine) when the icon is known at
 * build time.
 */
library.add(usat);

export const USAT_PREFIX = "usat" as IconPrefix;

export function findStateIcon(name: string): IconDefinition | undefined {
  return findIconDefinition({
    prefix: USAT_PREFIX,
    iconName: name as IconName,
  });
}
