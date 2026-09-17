"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MIN_LEGIBLE_PX } from "@/lib/icon-sizes";
import type { StateIconEntry } from "@/lib/icons";
import {
  Card,
  CopyButton,
  IconFrame,
  Label,
  LegibilityNote,
  PostalCode,
  VisuallyHidden,
} from "./icon-card.styles";

type IconCardProps = {
  entry: StateIconEntry;
  /** CSS size for the icon, e.g. "2rem". */
  sizeRem: string;
  /** Same size in px, used against the README's legibility thresholds. */
  sizePx: number;
};

export function IconCard({ entry, sizeRem, sizePx }: IconCardProps) {
  const [copied, setCopied] = useState(false);
  const minLegiblePx = MIN_LEGIBLE_PX[entry.iconName];
  const tooSmall = minLegiblePx !== undefined && sizePx < minLegiblePx;

  // Clear the confirmation, and cancel the timer if the card unmounts first
  // (filtering the gallery unmounts cards mid-timeout).
  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(entry.importLine);
      setCopied(true);
    } catch {
      // Clipboard access can be denied (insecure context, permissions).
      setCopied(false);
    }
  }

  return (
    <Card>
      <IconFrame $size={sizeRem}>
        {/* No title: the visible label below names the icon, so the silhouette
            is decorative here and FA marks it aria-hidden by default. */}
        <FontAwesomeIcon icon={entry.icon} />
      </IconFrame>
      <Label>{entry.label}</Label>
      <PostalCode>{entry.postalCode.toUpperCase()}</PostalCode>
      {tooSmall ? (
        <LegibilityNote>Needs {minLegiblePx}px+</LegibilityNote>
      ) : null}
      <CopyButton
        type="button"
        onClick={handleCopy}
        aria-label={`Copy Import statement for ${entry.label}`}
      >
        {copied ? "Copied" : "Copy Import"}
      </CopyButton>
      <VisuallyHidden role="status">
        {copied ? `${entry.label} import copied` : ""}
      </VisuallyHidden>
    </Card>
  );
}
