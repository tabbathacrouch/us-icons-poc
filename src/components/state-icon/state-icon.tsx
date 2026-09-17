import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type StateIconProps = {
  icon: IconDefinition;
  /** Accessible name. Omit when a visible label sits next to the icon. */
  title?: string;
  /** Sizing is the caller's job, via CSS on this class (height + width: auto). */
  className?: string;
};

/**
 * The zero-dependency alternative to <FontAwesomeIcon>.
 *
 * An icon definition is just data: icon[0] is the width, icon[1] the height and
 * icon[4] the path. Rendering it takes no Font Awesome runtime and no hooks, so
 * unlike <FontAwesomeIcon> this works inside a Server Component and ships no
 * client JavaScript at all.
 */
export function StateIcon({ icon, title, className }: StateIconProps) {
  const [width, height, , , pathData] = icon.icon;
  // Font Awesome allows an icon to carry two paths (duotone); these never do.
  const d = Array.isArray(pathData) ? pathData.join(" ") : pathData;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d={d} />
    </svg>
  );
}
