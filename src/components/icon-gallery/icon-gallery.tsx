"use client";

import { useId, useMemo, useState } from "react";
import { IconCard } from "@/components/icon-card/icon-card";
import { SizeToggle } from "@/components/size-toggle/size-toggle";
import { DEFAULT_SIZE_ID, findSize, type IconSizeId } from "@/lib/icon-sizes";
import { filterStateIcons, type StateIconEntry } from "@/lib/icons";
import {
  EmptyState,
  Grid,
  ResultCount,
  SearchField,
  SearchInput,
  SearchLabel,
  Toolbar,
} from "./icon-gallery.styles";

type IconGalleryProps = {
  /** Built on the server and passed across the RSC boundary. */
  entries: StateIconEntry[];
};

export function IconGallery({ entries }: IconGalleryProps) {
  const searchId = useId();
  const [query, setQuery] = useState("");
  const [sizeId, setSizeId] = useState<IconSizeId>(DEFAULT_SIZE_ID);

  const visible = useMemo(
    () => filterStateIcons(entries, query),
    [entries, query],
  );
  const size = findSize(sizeId);
  const sizePx = Number(size.id);

  return (
    <section>
      <Toolbar>
        <SearchField>
          <SearchLabel htmlFor={searchId}>
            Search by name or postal code
          </SearchLabel>
          <SearchInput
            id={searchId}
            type="search"
            value={query}
            placeholder="texas, tx, american samoa…"
            onChange={(event) => setQuery(event.target.value)}
          />
        </SearchField>
        <SizeToggle value={sizeId} onChange={setSizeId} />
      </Toolbar>

      {/* Announced on change so filtering isn't a silent update. */}
      <ResultCount role="status">
        {visible.length} of {entries.length} icons
      </ResultCount>

      {visible.length === 0 ? (
        <EmptyState>No icons match “{query}”.</EmptyState>
      ) : (
        <Grid>
          {visible.map((entry) => (
            <IconCard
              key={entry.iconName}
              entry={entry}
              sizeRem={size.rem}
              sizePx={sizePx}
            />
          ))}
        </Grid>
      )}
    </section>
  );
}
